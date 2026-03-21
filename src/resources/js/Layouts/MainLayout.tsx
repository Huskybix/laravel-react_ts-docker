import { PropsWithChildren, ReactNode } from 'react';
import NavBar from '@/Components/NavBar';
export default function Main({
    header,
    children,
}: PropsWithChildren<{ header?: ReactNode }>) {
    
    return (
        <div className="min-h-screen bg-gray-100 flex flex-col pt-36 w-full items-center px-12">
                
            <NavBar active={false}></NavBar>

            <div className="flex flex-col gap-4 bg-white rounded-lg p-8 shadow max-w-6xl w-full">
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