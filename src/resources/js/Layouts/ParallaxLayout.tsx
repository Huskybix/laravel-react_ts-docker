import NavBar from '@/Components/NavBar';
import { PropsWithChildren, ReactNode, useState } from 'react';
export default function Authenticated({
    header,
    children,
}: PropsWithChildren<{ header?: ReactNode }>) {

    return (
        <>
        <div className="overlay" aria-hidden="true"></div>
        <div className="fixed -z-1 h-screen w-full flex flex-col justify-center items-center opacity-100">
            <div className="relative w-full h-full overflow-hidden pointer-events-none">
                <div className="h-full w-full">
                    <canvas className="bg-gradient-to-b from-blue-800 to-purple-500 block w-full h-full"></canvas>
                </div>
            </div>
        </div>
        <div className="min-h-screen">
            <div className="flex flex-col w-full">
                {header && (
                    <NavBar active={false}></NavBar>
                )}
                <main className="w-full overflow-x-hidden">
                    {children}
                </main>
            </div>
        </div>
        </>
    );
    
}
