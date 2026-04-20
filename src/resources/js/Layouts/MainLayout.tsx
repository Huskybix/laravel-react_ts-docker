import { PropsWithChildren, ReactNode } from 'react';
import { Link, usePage } from '@inertiajs/react';
import NavBar from '@/Components/NavBar';
import Breadcrumbs from '@/Components/Breadcrumbs';
import { useCartStore } from '@/Stores/useCartStore';
export default function Main({
    header,
    children,
}: PropsWithChildren<{ header?: ReactNode }>) {
    const user = usePage().props.auth.user;
    const { isCartOpen } = useCartStore();
    
    return (
        <div id="mainWrapper" className={`min-h-screen bg-gray-100 flex flex-col pt-30 w-full ${isCartOpen ? '' : 'items-center'} px-4 md:px-8 lg:px-12 pb-16 gap-8`}>
                
            <NavBar active={false}></NavBar>
            
            <div id="heading" className="w-full lg:max-w-2/3 xl:max-w-3/4 flex justify-start flex-col gap-1">
                {header && (
                    <header>
                        {header}
                    </header>
                )}
                <Breadcrumbs />
            </div>

            <main id="mainInner" className="flex flex-col gap-4 w-full lg:max-w-2/3 xl:max-w-3/4 text-white">
                    {children}
            </main>

        </div>
    );
}