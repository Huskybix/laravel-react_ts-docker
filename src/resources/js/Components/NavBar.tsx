import NavLink from '@/Components/NavLink';
import { InertiaLinkProps, Link, usePage } from '@inertiajs/react';
import { PropsWithChildren, ReactNode, useState } from 'react';
import { PageProps, NavLink as NavLinkType } from '@/types';

export default function NavBar({
    active = false,
    className = '',
    children,
    ...props
}: InertiaLinkProps & { active: boolean }) {

    const { navigation } = usePage<PageProps>().props;
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <nav className="fixed top-0 left-0 right-0 z-40 border-b border-black bg-navBackground backdrop-blur-sm p-6">
            <div className="flex flex-col gap-4 md:flex-row items-center">
                <button className="py-1.25 md:hidden ml-auto text-gray-300 border border-transparent hover:text-white focus-visible:outline-none focus-visible:border-white rounded-sm" onClick={() => setMenuOpen(prev => !prev)} aria-label="Toggle menu">
                    {menuOpen ? (
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    ) : (
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                        </svg>
                    )}
                </button>

                <div className={`md:flex flex-col md:flex-row gap-4 w-full ${menuOpen ? 'flex' : 'hidden'} `}>
                    {navigation.links.map((link: NavLinkType) => (
                        <NavLink
                            key={link.route}
                            href={route(link.route)}
                            active={route().current(link.route)}
                            onClick={() => setMenuOpen(false)}
                        >
                            {link.name}
                        </NavLink>
                    ))}
                </div>
            </div>
        </nav>
    );
}


