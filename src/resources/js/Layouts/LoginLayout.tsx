
import heroImg from '@/Assets/Images/husky-logo.webp';
import NavBar from '@/Components/NavBar';
import { PropsWithChildren, ReactNode, useState } from 'react';
export default function LoginLayout({
    header,
    children,
}: PropsWithChildren<{ header?: ReactNode }>) {

    return (
        <div className="min-h-screen bg-gray-100">
            <div className="flex flex-col w-full">
                <NavBar active={false}></NavBar>
                <main id="guestWrapper" className="w-full flex flex-col gap-16 items-center justify-center h-screen bg-primaryWhite p-8">
                    <img src={heroImg} alt="Hero Image" className="lg:max-w-[20rem] w-full" />
                    {children}
                </main>
            </div>
        </div>
    );
}
