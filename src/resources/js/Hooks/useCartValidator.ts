import { useEffect, useState } from 'react'
import { useCartStore } from '@/Stores/useCartStore'

interface ValidProduct {
    id: number
    name: string
    stock: number
}

async function fetchValidProducts(ids: number[]): Promise<{ validProducts: ValidProduct[]; removedNames: string[] }> {
    const csrf = (document.querySelector('meta[name="csrf-token"]') as HTMLMetaElement)?.content ?? ''

    const res = await fetch('/products/validate', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'X-CSRF-TOKEN': csrf,
        },
        body: JSON.stringify({ ids }),
    })

    if (!res.ok) {
        console.error('Cart validation request failed:', res.status)
        return { validProducts: [], removedNames: [] }
    }

    const data = await res.json()

    return {
        validProducts: data.validProducts ?? [],
        removedNames: data.removedNames ?? [],
    }
}

export function useCartValidator() {
    const { items, removeItem, updateQuantity } = useCartStore()
    const [removedNames, setRemovedNames] = useState<string[]>([])
    const [adjustedNames, setAdjustedNames] = useState<string[]>([])

    useEffect(() => {
        if (items.length === 0) return

        const ids = items.map(i => i.id)

        fetchValidProducts(ids).then(({ validProducts, removedNames }) => {
            const adjusted: string[] = []

            items.forEach(item => {
                const validProduct = validProducts.find(p => p.id === item.id)

                if (!validProduct) {
                    removeItem(item.id)
                } else if (item.quantity > validProduct.stock) {
                    updateQuantity(item.id, validProduct.stock)
                    adjusted.push(item.name)
                }
            })

            setRemovedNames(removedNames)
            setAdjustedNames(adjusted)
        })
    }, [items.length])

    return { removedNames, adjustedNames }
}