
import heroImg from '@/Assets/Images/rohirrim.webp';
import { PropsWithChildren } from 'react';

export default function Guest({ children }: PropsWithChildren) {
    return (
        <main id="guestWrapper" className="w-full flex flex-col gap-16 items-center h-screen bg-primaryWhite py-12 px-8">
            <img src={heroImg} alt="Hero Image" className="max-w-[20rem] w-full" />
            {children}
        </main>
    );
}
