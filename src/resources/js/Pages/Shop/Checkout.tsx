import { Head, router } from '@inertiajs/react'
import { useForm } from '@inertiajs/react'
import { usePage } from '@inertiajs/react'
import MainLayout from '@/Layouts/MainLayout'
import { useCartStore } from '@/Stores/useCartStore'
import PrimaryButton from '@/Components/PrimaryButton'
import { PageProps } from '@/types'
import TextInput from '@/Components/TextInput'
import InputLabel from '@/Components/InputLabel'
import InputError from '@/Components/InputError'
import { useEffect } from 'react'
import { useCartValidator } from '@/Hooks/useCartValidator'

export default function Cart() {
    const { items, totalPrice, clearCart } = useCartStore()
    const { auth } = usePage<PageProps>().props
    const { removedNames, adjustedNames } = useCartValidator()

    const { data, setData, post, processing, errors, reset } = useForm({
        email: auth.user?.email ?? '',
        name: auth.user?.name ?? '',
        address: '',
        city: '',
        postcode: '',
        items: items.map(item => ({ id: item.id, quantity: item.quantity })),
    })

    const submit = (e: React.FormEvent) => {
        e.preventDefault()
        post(route('checkout.store'), {
            onSuccess: () => clearCart(),
        })
    }

    if (items.length === 0) 
    {
        router.visit(route('shop.cart'))
    }

    return (
        <MainLayout header={
                <h1 className="text-xl font-semibold leading-tight">
                    Shop Example
                </h1>
            }>
            <Head title="Shop" />

        {removedNames.length > 0 && (
            <div className="bg-red-500 text-white rounded p-3">
                The following items were removed as they are no longer available: {removedNames.join(', ')}
            </div>
        )}

        {adjustedNames.length > 0 && (
            <div className="bg-yellow-500 text-white rounded p-3">
                The quantity of the following items was reduced due to limited stock: {adjustedNames.join(', ')}
            </div>
        )}

        <form className="flex flex-col gap-8" onSubmit={submit}>
            <div className="flex flex-col md:flex-row gap-8 md:gap-32">
                <div className="flex flex-col gap-4 flex-grow-1 md:max-w-1/2 order-2 md:order-1">
                <h2 className="text-primaryOrange">Address</h2>
                    <div>
                        <InputLabel htmlFor="email" value="Email" className="text-primaryOrange" />
    
                        <TextInput
                            id="email"
                            type="email"
                            name="email"
                            value={data.email}
                            className="mt-1 block w-full h-10"
                            autoComplete="username"
                            hasError={!!errors.email}
                            isFocused={true}
                            onChange={(e) => setData('email', e.target.value)}
                        />
    
                        <InputError message={errors.email} className="mt-2" />
                    </div>
                    
                    <div>
                        <InputLabel htmlFor="name" value="Name" className="text-primaryOrange" />
    
                        <TextInput
                            id="name"
                            type="text"
                            name="name"
                            value={data.name}
                            className="mt-1 block w-full h-10"
                            autoComplete="current-password"
                            hasError={!!errors.name}
                            onChange={(e) => setData('name', e.target.value)}
                        />
    
                        <InputError message={errors.name} className="mt-2" />
                    </div>

                    <div>
                        <InputLabel htmlFor="address" value="Address" className="text-primaryOrange" />
    
                        <TextInput
                            id="address"
                            type="text"
                            name="address"
                            value={data.address}
                            className="mt-1 block w-full h-10"
                            autoComplete="current-password"
                            hasError={!!errors.address}
                            onChange={(e) => setData('address', e.target.value)}
                        />
    
                        <InputError message={errors.address} className="mt-2" />
                    </div>

                    <div>
                        <InputLabel htmlFor="city" value="City" className="text-primaryOrange" />
    
                        <TextInput
                            id="city"
                            type="text"
                            name="city"
                            value={data.city}
                            className="mt-1 block w-full h-10"
                            autoComplete="current-password"
                            hasError={!!errors.city}
                            onChange={(e) => setData('city', e.target.value)}
                        />
    
                        <InputError message={errors.city} className="mt-2" />
                    </div>

                    <div>
                        <InputLabel htmlFor="postcode" value="Postcode" className="text-primaryOrange" />
    
                        <TextInput
                            id="postcode"
                            type="text"
                            name="postcode"
                            value={data.postcode}
                            className="mt-1 block w-full h-10"
                            autoComplete="current-password"
                            hasError={!!errors.postcode}
                            onChange={(e) => setData('postcode', e.target.value)}
                        />
    
                        <InputError message={errors.postcode} className="mt-2" />
                    </div>
                    <hr className="border-gray-200 my-4" />
                    <h2 className="text-primaryOrange">Payment Details</h2>
                    <span>Ideally we'd take payment details here, or incorporate a webhook to Stripe, Paypal etc. For the sake of this demonstration, we'll just show the order summary and subtract the item quantities from product stock levels on submission.</span>
                </div>
                <div className="flex flex-col gap-4 flex-grow-1 md:max-w-1/2 order-1 md:order-2">
                    <h2>Items</h2>
                    {items.map(item => (
                        <div className="flex flex-row w-full gap-4">
                            {item.image && (
                                <img src={item.image} alt={item.name} className="w-18 h-18 rounded object-cover" />
                            )}

                            <div key={item.id} className="flex flex-col w-max text-gray-200">
                                <p className="font-bold text-primaryOrange">{item.name}</p>
                                <p className="text-base">Quantity: {item.quantity}</p>
                                <p className="text-base">${(item.price * item.quantity).toFixed(2)}</p>
                            </div>
                        </div>
                    ))}
                    <div className="font-semibold text-gray-100 text-xl">Total: <span className="text-primaryOrange">${totalPrice().toFixed(2)}</span></div>
                    <hr className="border-gray-200 md:hidden" />
                </div>
                
            </div>

            <div className="flex justify-start">
                <PrimaryButton type="submit" disabled={processing} className="w-max p-4 mt-4 !text-base">
                    Finalize
                </PrimaryButton>
            </div>
        </form>
        </MainLayout>
    )
}