import { Head } from '@inertiajs/react'
import MainLayout from '@/Layouts/MainLayout'
import { useCartStore } from '@/Stores/useCartStore'
import PrimaryButton from '@/Components/PrimaryButton'
import SecondaryButton from '@/Components/SecondaryButton'
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


export default function Cart() {
    const { items, removeItem, updateQuantity, clearCart, totalItems, totalPrice } = useCartStore()

    if (items.length === 0) {
        return (
            <div className="p-4 border rounded-lg text-center text-gray-500">
                <p className="text-2xl mb-1">🛒</p>
                <p className="text-sm">Your cart is empty</p>
            </div>
        )
    }

    return (
        <MainLayout header={
                <h1 className="text-xl font-semibold leading-tight">
                    Shop Example
                </h1>
            }>
            <Head title="Shop" />
        <div className="mt-4">
            <div className="bg-primaryOrange px-4 py-3 flex justify-between items-center rounded-t-lg">
                <h2 className="font-semibold text-gray-800">
                    Cart ({totalItems()} {totalItems() === 1 ? 'item' : 'items'})
                </h2>
                <SecondaryButton onClick={clearCart} className="text-xs max-w-max !p-2">
                    Clear Cart
                </SecondaryButton>
            </div>
            <div>
                {items.map(item => (
                    <div key={item.id} className="flex flex-col lg:flex-row bg-gray-100 p-4 lg:items-center last:rounded-b-lg">

                        <div className="flex flex-row lg:items-center w-full gap-4">
                            {item.image && (
                                <img src={item.image} alt={item.name} className="w-36 h-36 rounded object-cover" />
                            )}

                            <div className="flex flex-col lg:flex-row lg:justify-between w-full">
                                <div className="flex-1 min-w-0">
                                    <p className="text-lg font-medium text-gray-800">{item.name}</p>
                                    <p className="text-lg text-gray-500">${(item.price * item.quantity).toFixed(2)}</p>
                                </div>
                            

                                <div className="flex flex-col gap-2 items-center w-max mt-auto">
                                    <div className="flex items-center gap-1 text-gray-800">
                                        <button onClick={() => updateQuantity(item.id, item.quantity - 1)} className="px-2 py-0.5 rounded-md border text-gray-600 hover:bg-gray-100 cursor-pointer">
                                            −
                                        </button>
                                        <span className="w-12 text-center">{item.quantity}</span>
                                        <button onClick={() => updateQuantity(item.id, item.quantity + 1)} className="px-2 py-0.5 rounded-md border text-gray-600 hover:bg-gray-100 cursor-pointer">
                                            +
                                        </button>
                                    </div>

                                    <button onClick={() => removeItem(item.id)} className="w-full px-2 py-1 rounded-md border text-gray-600 hover:bg-gray-100 text-sm cursor-pointer">Remove</button>
                                </div>
                            </div>
                        </div>

                    </div>
                ))}
            </div>
            <div className="bg-transparent px-4 py-3 flex justify-between items-center">
                <span className="font-semibold text-gray-100 text-xl">Total</span>
                <span className="font-bold text-gray-100 text-xl">${totalPrice().toFixed(2)}</span>
            </div>

            <div className="flex justify-end">
                <PrimaryButton className="w-max p-4 mt-4 !text-base" onClick={() => { window.location.href = '/shop/checkout'; }}>
                    Proceed to Checkout
                </PrimaryButton>
            </div>
        </div>
        </MainLayout>
    )
    
}