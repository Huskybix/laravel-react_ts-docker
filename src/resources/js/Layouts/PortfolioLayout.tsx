import NavBar from '@/Components/NavBar';
import { PropsWithChildren, ReactNode, useState } from 'react';
export default function Authenticated({
    header,
    children,
}: PropsWithChildren<{ header?: ReactNode }>) {

    return (
        <>
        <div className="overlay" aria-hidden="true">

        </div>

            <NavBar active={false}></NavBar>
        
        {children}
        </>
    );
}
