import { Head } from '@inertiajs/react'
import MainLayout from '@/Layouts/MainLayout'
import Cart from '@/Components/Cart'
import { useCartStore } from '@/Stores/useCartStore'
import { PageProps } from '@/types'

interface Product {
    id: number
    name: string
    price: number
    image?: string
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

            <div className="flex flex-col gap-4">
                <span>This little shop uses Zustand's state management in order to implement a persistent cart.</span>

                <div className="grid grid-cols-3 gap-8">

                    <div className="lg:col-span-2">
                        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4">
                            {products.map(product => {
                                const qty = getQuantityInCart(product.id)
                                return (
                                    <div key={product.id} className="flex flex-col rounded-lg bg-white overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                                        {product.image && (
                                            <img src={product.image} alt={product.name} className="w-full h-40 object-cover" />
                                        )}
                                        
                                        <h3 className="font-semibold text-gray-800 m-4">{product.name}</h3>

                                        <div className="mt-auto">
                                            <p className="text-indigo-600 font-bold mt-1 px-4">${product.price.toFixed(2)}</p>

                                            <button onClick={() => addItem(product)} className="mt-3 w-full bg-primaryOrange hover:bg-primaryOrangeDarker cursor-pointer text-gray-800 text-sm font-medium py-2 px-4 transition-colors ">
                                                {qty > 0 ? `Add another (${qty} in cart)` : 'Add to Cart'}
                                            </button>
                                        </div>

                                        
                                    </div>
                                )
                            })}
                        </div>
                    </div>

                    <div className="lg:col-span-1">
                        <h2 className="text-2xl font-bold text-primaryOrange mb-6">Your Cart</h2>
                        <div className="sticky top-6">
                            <Cart />
                        </div>
                    </div>
                    
                </div>
            </div>
        </MainLayout>
    )
}