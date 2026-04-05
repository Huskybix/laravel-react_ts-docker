import { useCartStore } from '@/Stores/useCartStore'
import SecondaryButton from './SecondaryButton'
import PrimaryButton from './PrimaryButton'

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
        <div className="rounded-lg overflow-hidden">
            <div className="bg-primaryOrange px-4 py-3 flex justify-between items-center">
                <h2 className="font-semibold text-gray-800">
                    Cart ({totalItems()} {totalItems() === 1 ? 'item' : 'items'})
                </h2>
                <SecondaryButton onClick={clearCart} className="text-xs max-w-max !p-2">
                    Clear
                </SecondaryButton>
            </div>
                {items.map(item => (
                    <div key={item.id} className="flex flex-row bg-white p-4 items-center">

                        <div className="flex flex-row gap-2 items-center max-w-1/2">
                            {item.image && (
                                <img src={item.image} alt={item.name} className="w-12 h-12 rounded object-cover" />
                            )}

                            <div className="flex-1 min-w-0">
                                <p className="text-sm font-medium text-gray-800 truncate">{item.name}</p>
                                <p className="text-xs text-gray-500">${(item.price * item.quantity).toFixed(2)}</p>
                            </div>
                        </div>

                        <div className="ml-auto flex flex-row gap-2 items-center min-w-max">
                            <div className="flex items-center gap-1 text-gray-800">
                                <button onClick={() => updateQuantity(item.id, item.quantity - 1)} className="w-6 h-6 rounded border text-gray-600 hover:bg-gray-100 text-sm cursor-pointer">
                                    −
                                </button>
                                <span className="w-6 text-center text-sm">{item.quantity}</span>
                                <button onClick={() => updateQuantity(item.id, item.quantity + 1)} className="w-6 h-6 rounded border text-gray-600 hover:bg-gray-100 text-sm cursor-pointer">
                                    +
                                </button>
                            </div>

                            <button onClick={() => removeItem(item.id)} className="w-6 h-6 rounded border text-gray-600 hover:bg-gray-100 text-sm cursor-pointer">X</button>
                        </div>

                    </div>
                ))}

            <div className="bg-primaryOrange px-4 py-3 flex justify-between items-center">
                <span className="font-bold text-gray-800">Total</span>
                <span className="font-bold text-lg">${totalPrice().toFixed(2)}</span>
            </div>
            
            <PrimaryButton className="!w-full mt-4" onClick={() => { window.location.href = '/shop/checkout'; }}>
                Proceed to Checkout
            </PrimaryButton>

            <SecondaryButton className="w-full mt-4" onClick={() => { window.location.href = '/shop/cart'; }}>
                Go to Cart
            </SecondaryButton>
        </div>
    )
}