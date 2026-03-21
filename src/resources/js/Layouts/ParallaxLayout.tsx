import NavBar from '@/Components/NavBar';
import { PropsWithChildren, ReactNode, useState } from 'react';
export default function Authenticated({
    header,
    children,
}: PropsWithChildren<{ header?: ReactNode }>) {

    return (
        <div className="min-h-screen bg-gray-100">
            <div className="flex flex-col w-full">
                {header && (
                    <NavBar active={false}></NavBar>
                )}
                <main className="w-full">
                    {children}
                </main>
            </div>
        </div>
    );
}
