import { PropsWithChildren, ReactNode } from 'react';
import { Link, usePage } from '@inertiajs/react';
import NavBar from '@/Components/NavBar';
import Dropdown from '@/Components/Dropdown';
import { useCartValidator } from '@/Hooks/useCartValidator';
export default function Main({
    header,
    children,
}: PropsWithChildren<{ header?: ReactNode }>) {
    const user = usePage().props.auth.user;
    useCartValidator();
    
    return (
        <div id="mainWrapper" className="min-h-screen bg-gray-100 flex flex-col pt-32 w-full items-center px-4 md:px-8 lg:px-12 pb-16">
                
            <NavBar active={false}></NavBar>

            <div id="mainInner" className="flex flex-col gap-4 bg-navBackground rounded-xl p-4 md:p-8 shadow w-full lg:max-w-2/3 xl:max-w-3/4 text-white">
                
                {header && (
                    <header>{header}</header>
                )}
                <main className="w-full">
                    {children}
                </main>
            </div>

        </div>
    );
}