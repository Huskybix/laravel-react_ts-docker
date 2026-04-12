import { create } from 'zustand'
import { persist } from 'zustand/middleware'

export interface CartItem {
    id: number
    name: string
    price: number
    quantity: number
    image?: string
}

interface CartStore 
{
    items: CartItem[]
    addItem: (product: Omit<CartItem, 'quantity'>) => void
    removeItem: (id: number) => void
    updateQuantity: (id: number, quantity: number) => void
    clearCart: () => void
    totalItems: () => number
    totalPrice: () => number
    isCartOpen: boolean
    setCartOpen: (open: boolean) => void
    toggleCart: () => void
}

export const useCartStore = create<CartStore>()
(
    persist(
        (set, get) => ({
            items: [],

            addItem: (product) => set((state) => {
                const existing = state.items.find(i => i.id === product.id)
                if (existing) {
                    return {
                        items: state.items.map(i =>
                            i.id === product.id
                                ? { ...i, quantity: i.quantity + 1 }
                                : i
                        ),
                    }
                }
                return { items: [...state.items, { ...product, quantity: 1 }] }
            }),

            removeItem: (id) => set((state) => ({
                items: state.items.filter(i => i.id !== id),
            })),

            updateQuantity: (id, quantity) => set((state) => ({
                items: quantity <= 0
                    ? state.items.filter(i => i.id !== id)
                    : state.items.map(i => i.id === id ? { ...i, quantity } : i),
            })),

            clearCart: () => set({ items: [] }),

            validateCart: (validIds: Set<number>) => set((state) => ({
                items: state.items.filter(i => validIds.has(i.id)),
            })),

            totalItems: () => get().items.reduce((sum, i) => sum + i.quantity, 0),

            totalPrice: () => get().items.reduce((sum, i) => sum + i.price * i.quantity, 0),

            isCartOpen: false,

            setCartOpen: (open) => set({ isCartOpen: open }),

            toggleCart: () => set({ isCartOpen: !get().isCartOpen }),
        }),
        { 
            name: 'cart-storage',
            partialize: (state) => ({ items: state.items }), 
        }
    )
)