import { Head, Link } from '@inertiajs/react'
import MainLayout from '@/Layouts/MainLayout'

export default function CheckoutSuccess() {
    return (
        <MainLayout header={<h1 className="text-xl font-semibold leading-tight">Order Confirmed</h1>}>
            <Head title="Order Confirmed" />
            <div className="flex flex-col items-center gap-4 py-16 text-center">
                <p className="text-4xl">✅</p>
                <h2 className="text-2xl font-bold text-primaryOrange">Thank you for your order!</h2>
                <p className="text-gray-400">Your order has been placed and stock has been updated.</p>
                <Link href={route('shop.index')} className="text-primaryOrange underline hover:text-primaryOrangeBrighter">
                    Continue Shopping
                </Link>
            </div>
        </MainLayout>
    )
}