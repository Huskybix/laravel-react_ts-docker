import NavLink from '@/Components/NavLink';
import { InertiaLinkProps, Link, usePage } from '@inertiajs/react';
import { PropsWithChildren, ReactNode, useState } from 'react';
import { PageProps, NavLink as NavLinkType } from '@/types';
import Dropdown from './Dropdown';
import PrimaryButton from './PrimaryButton';
import SecondaryButton from './SecondaryButton';

export default function NavBar({
    active = false,
    className = '',
    children,
    ...props
}: InertiaLinkProps & { active: boolean }) {

    const { navigation } = usePage<PageProps>().props;
    const [menuOpen, setMenuOpen] = useState(false);
    const user = usePage().props.auth.user;

    return (
        <nav className="fixed top-0 left-0 right-0 z-40 bg-navBackground backdrop-blur-sm p-6 h-[5.75rem]">
            <div className="flex flex-row gap-4 md:flex-row items-center justify-between">
                <button className="py-1.25 md:hidden text-gray-300 border border-transparent hover:text-white focus-visible:outline-none focus-visible:border-white rounded-sm" onClick={() => setMenuOpen(prev => !prev)} aria-label="Toggle menu">
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
                
                {user != null ? (
                    <div className="hidden sm:ms-6 sm:flex sm:items-center">
                        <div className="relative ms-3">
                            <Dropdown>
                                <Dropdown.Trigger>
                                    <span className="inline-flex rounded-md">
                                        <button type="button" className="inline-flex items-center rounded-md border border-transparent bg-white px-3 py-2 text-sm font-medium leading-4 text-gray-500 transition duration-150 ease-in-out hover:text-gray-700 focus:outline-none w-max">
                                            {user.name}
                                            <svg className="-me-0.5 ms-2 h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                                <path
                                                    fillRule="evenodd"
                                                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                                    clipRule="evenodd"
                                                />
                                            </svg>
                                        </button>
                                    </span>
                                </Dropdown.Trigger>
                                <Dropdown.Content>
                                    <Dropdown.Link href={route('profile.edit')}>Profile</Dropdown.Link>
                                    <Dropdown.Link href={route('logout')} method="post" as="button">
                                        Log Out
                                    </Dropdown.Link>
                                </Dropdown.Content>
                            </Dropdown>
                        </div>
                    </div>
                ) : (
                    <>
                    {route().current('shop.index') && (
                        <SecondaryButton
                            id="cartToggle"
                            className="bg-gray-100 text-black p-2 rounded-md min-w-max cursor-pointer hover:bg-gray-200"
                            onClick={() => {
                                if (window.innerWidth >= 1024) {
                                    document.getElementById('cartContainer')?.classList.toggle('lg:!block');
                                    document.getElementById('mainWrapper')?.classList.toggle('items-center');
                                } else {
                                    window.location.href = '/cart';
                                }
                            }}
                        >
                            View Cart
                        </SecondaryButton>
                    )}
                    <PrimaryButton className="ms-4 min-w-max" onClick={() => window.location.href = '/register'}>
                        Register Account
                    </PrimaryButton>
                    </>
                )}
            </div>
        </nav>
    );
}


