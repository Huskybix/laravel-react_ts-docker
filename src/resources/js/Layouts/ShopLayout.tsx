import { PropsWithChildren, ReactNode } from 'react';
import { Link, usePage } from '@inertiajs/react';
import NavBar from '@/Components/NavBar';
import Dropdown from '@/Components/Dropdown';
export default function Main({
    header,
    children,
}: PropsWithChildren<{ header?: ReactNode }>) {
    const user = usePage().props.auth.user;

    return (
        <div id="mainWrapper" className="min-h-screen bg-gray-100 flex flex-col pt-36 w-full items-center px-12">
                
            <NavBar active={false}></NavBar> 
                {header && (
                    <header>{header}</header>
                )}
            <div className="flex flex-col gap-4 bg-navBackground rounded-xl p-8 shadow max-w-6xl w-full text-white">
                <main className="w-full relative">
                    {children}
                </main>
                </div>
        </div>
    );
}