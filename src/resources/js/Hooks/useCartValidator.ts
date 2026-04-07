import { useEffect, useRef } from 'react'
import { usePage } from '@inertiajs/react'
import { useCartStore } from '@/Stores/useCartStore'

async function fetchValidIds(ids: number[]): Promise<Set<number>> {
    const res = await fetch('/api/products/validate', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'X-CSRF-TOKEN': (document.querySelector('meta[name="csrf-token"]') as HTMLMetaElement)?.content ?? '',
        },
        body: JSON.stringify({ ids }),
    })

    if (!res.ok) {
        console.error('Cart validation request failed:', res.status)
        return new Set(ids) // fail open — don't remove items if the request fails
    }

    const data = await res.json()
    return new Set<number>(data.validIds)
}

export function useCartValidator() {
    const { url } = usePage()
    const { items, removeItem } = useCartStore()
    const lastValidatedUrl = useRef<string | null>(null)

    useEffect(() => {
        if (items.length === 0) return
        if (lastValidatedUrl.current === url) return

        lastValidatedUrl.current = url

        const ids = items.map(i => i.id)

        fetchValidIds(ids).then((validIds) => {
            items.forEach(item => {
                if (!validIds.has(item.id)) {
                    removeItem(item.id)
                }
            })
        })
    }, [url])
}