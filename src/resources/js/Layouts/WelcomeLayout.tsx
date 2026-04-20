import NavBar from '@/Components/NavBar';
import PyramidBackground from '@/Components/PyramidBackground';
import { PropsWithChildren, ReactNode, useState } from 'react';
export default function Authenticated({
    header,
    children,
}: PropsWithChildren<{ header?: ReactNode }>) {

    return (
        <>
        <PyramidBackground />
        <div className="overlay" aria-hidden="true">

        </div>

            <NavBar active={false}></NavBar>
        
        {children}
        </>
    );
    
}
