import { PropsWithChildren, ReactNode } from 'react';
import { Link, usePage } from '@inertiajs/react';
import NavBar from '@/Components/NavBar';
import Breadcrumbs from '@/Components/Breadcrumbs';
import { useCartValidator } from '@/Hooks/useCartValidator';
export default function Main({
    header,
    children,
}: PropsWithChildren<{ header?: ReactNode }>) {
    const user = usePage().props.auth.user;
    useCartValidator();
    
    return (
        <div id="mainWrapper" className="min-h-screen bg-gray-100 flex flex-col pt-30 w-full items-center px-4 md:px-8 lg:px-12 pb-8 gap-8">
                
            <NavBar active={false}></NavBar>

            <div id="heading" className="w-full lg:w-max lg:min-w-[42rem] flex justify-start flex-col gap-1">
                {header && (
                    <header>
                        {header}
                    </header>
                )}
                <Breadcrumbs />
            </div>

            <div id="mainInner" className="flex flex-col gap-4 bg-navBackground rounded-xl p-4 md:p-8 shadow w-full lg:w-max lg:min-w-[38rem] text-white w-full">
                
                
                
                {children}
            </div>

        </div>
    );
}