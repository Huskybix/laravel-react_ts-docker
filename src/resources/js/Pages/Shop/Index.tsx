import { Head } from '@inertiajs/react'
import MainLayout from '@/Layouts/MainLayout'
import Cart from '@/Components/Cart'
import { useCartStore } from '@/Stores/useCartStore'
import { PageProps } from '@/types'
import { useEffect } from 'react'

interface Product {
    id: number
    name: string
    price: number
    image?: string
    stock: number
}

interface Props extends PageProps {
    products: Product[]
}

export default function ShopIndex({ auth, products }: Props) {
    const { addItem, items } = useCartStore()

    const getQuantityInCart = (id: number) =>
        items.find(i => i.id === id)?.quantity ?? 0

    return (
        <MainLayout header={
                <h1 className="text-xl font-semibold leading-tight">
                    Shop Example
                </h1>
            }>
            <Head title="Shop" />

            <div id="cartContainer" className="hidden fixed p-4 top-[5.75rem] right-0 w-84 bg-navBackground h-screen">
                <h2 className="text-2xl font-bold text-primaryOrange mb-6">Your Cart</h2>
                <div className="sticky top-6">
                    <Cart />
                </div>
            </div>

            <div className="flex flex-col gap-8">
                <span>
                    <p>This little shop uses Zustand's state management in order to implement a persistent cart.</p>
                    <p>Products are generated via a seeder during setup, and the cart is validated on every page load plus whenever the cart is updated. This ensures that all products in the cart are still valid (exist, enabled, and in stock).</p>
                </span>

                <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-8">
                    {products.map(product => {
                        const qty = getQuantityInCart(product.id)
                        return (
                            <div key={product.id} className="flex flex-col rounded-lg bg-white overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                                {product.image && (
                                    <img src={product.image} alt={product.name} className="w-full h-60 object-cover" />
                                )}
                                
                                <h3 className="font-semibold text-gray-800 m-4">{product.name}</h3>

                                <div className="mt-auto">
                                    <div className="flex flex-row justify-between px-4 items-center">
                                        <span className="text-indigo-600 font-bold mt-1 text-xl">${product.price.toFixed(2)}</span>
                                        <span className="text-gray-500 text-sm">{product.stock - qty} in stock</span>
                                    </div>

                                    <button onClick={() => addItem(product)} className="mt-3 w-full bg-primaryOrange hover:bg-primaryOrangeDarker cursor-pointer text-gray-800 text-sm font-medium py-2 px-4 transition-colors ">
                                        {qty > 0 ? `Add another (${qty} in cart)` : 'Add to Cart'}
                                    </button>
                                </div>

                                
                            </div>
                        )
                    })}
                </div>
            </div>
            
        </MainLayout>
    )
}