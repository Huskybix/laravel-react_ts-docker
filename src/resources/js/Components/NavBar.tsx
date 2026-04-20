import NavLink from '@/Components/NavLink';
import { InertiaLinkProps, Link, usePage } from '@inertiajs/react';
import { PropsWithChildren, ReactNode, useState } from 'react';
import { PageProps, NavLink as NavLinkType } from '@/types';
import Dropdown from './Dropdown';
import PrimaryButton from './PrimaryButton';
import SecondaryButton from './SecondaryButton';
import { useActiveSection } from '@/Hooks/useActiveSection';

import burger from '@/Assets/Images/menu-burger.png';
import { useCartStore } from '@/Stores/useCartStore';
import React from 'react';

export default function NavBar({
    active = false,
    className = '',
    children,
    ...props
}: InertiaLinkProps & { active: boolean }) {

    const { navigation } = usePage<PageProps>().props;
    const [menuOpen, setMenuOpen] = useState(false);
    const { toggleCart } = useCartStore()
    const user = usePage().props.auth.user;

    const activeSection = useActiveSection([
        'intro-section',
        'about-section',
        'contact-section',
    ]);

    const isOnWelcome = route().current('welcome');

    const handleNavClick = (e: React.MouseEvent, link: NavLinkType) => {
        setMenuOpen(false);
        
        if (link.fragment && route().current(link.route)) {
            e.preventDefault();
            document.getElementById(link.fragment)?.scrollIntoView({
                behavior: 'smooth',
                block: 'start',
            });
        }
    };

    return (
        <nav className="fixed top-0 left-0 right-0 z-40 bg-navBackgroundMobile lg:bg-navBackground backdrop-blur-sm p-6 h-auto flex items-center justify-between">
            <div className="flex flex-col lg:flex-row gap-4 items-start lg:items-center justify-between w-full">
                <button className="lg:hidden text-gray-300 border border-transparent hover:text-white focus-visible:outline-none focus-visible:border-white rounded-sm h-8 w-8 cursor-pointer" onClick={() => setMenuOpen(prev => !prev)} aria-label="Toggle menu">
                    {menuOpen ? (
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 32 32" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 24L24 8M8 8l16 16" />
                        </svg>
                    ) : (
                        <img src={burger} alt="Menu" className="h-8 w-8" />
                    )}
                </button>

                <div className={`lg:flex flex-col lg:flex-row gap-4 w-full ${menuOpen ? 'flex' : 'hidden'} `}>
                    {navigation.links.map((link: NavLinkType) => {
                        let isActive = route().current(link.route) && !link.fragment;

                        if (isOnWelcome && link.fragment) {
                            isActive = activeSection === link.fragment;
                        }

                        if (isOnWelcome && link.route === 'welcome' && !link.fragment) {
                            isActive = activeSection === 'intro-section' || activeSection === null;
                        }

                        return (
                            <React.Fragment key={link.route + (link.fragment ?? '')}>
                            <NavLink
                                href={route(link.route) + (link.fragment ? `#${link.fragment}` : '')}
                                active={isActive}
                                onClick={(e) => handleNavClick(e, link)}
                            >
                                {link.name}
                            </NavLink>
                            <hr className="border-gray-200 lg:hidden" />
                            </React.Fragment>
                        );
                    })}

                    {user != null && (
                        <>
                        <NavLink key="Profile" href={route('profile.edit')} active={route().current('profile.edit')} onClick={() => setMenuOpen(false)} className="block lg:hidden">
                            Edit Profile
                        </NavLink>

                        <hr className="border-gray-200 lg:hidden" />
                        
                        <NavLink key="Logout" href={route('logout')} active={route().current('logout')} onClick={() => setMenuOpen(false)} className="block lg:hidden">
                            Logout
                        </NavLink>
                        </>
                    )}
                </div>
            </div>

            {user != null ? (
                <>
                    {route().current('shop.index') && (
                        <SecondaryButton
                            id="cartToggle"
                            className={`${menuOpen ? '!hidden' : '!flex'} bg-gray-100 text-black p-2 rounded-md min-w-max cursor-pointer hover:bg-gray-200`}
                            onClick={() => {
                                if (window.innerWidth >= 1024) 
                                {
                                    toggleCart()
                                } else {
                                    window.location.href = '/shop/cart';
                                }
                            }}
                        >
                            View Cart
                        </SecondaryButton>
                    )}

                    <div className="hidden sm:ms-6 lg:flex sm:items-center">
                        <div className="relative ms-3">
                            <Dropdown>
                                <Dropdown.Trigger>
                                    <span className="inline-flex rounded-md">
                                        <button type="button" className="h-8 cursor-pointer inline-flex items-center rounded-md border border-transparent bg-primaryOrange px-4 py-2 text-xs font-semibold uppercase tracking-widest text-gray-800 transition duration-150 ease-in-out hover:text-white hover:bg-primaryOrangeDarker focus:bg-primaryOrangeDarker focus:outline-none focus:ring-2 focus:ring-primaryOrange focus:ring-offset-2 active:bg-gray-900 w-max">
                                            Account
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
                </>
                ) : (
                    <>
                    {route().current('shop.index') && (
                        <SecondaryButton
                            id="cartToggle"
                            className={`${menuOpen ? '!hidden' : '!flex'} bg-gray-100 text-black p-2 rounded-md min-w-max cursor-pointer hover:bg-gray-200`}
                            onClick={() => {
                                if (window.innerWidth >= 1024) {
                                    toggleCart()
                                } else {
                                    window.location.href = '/shop/cart';
                                }
                            }}
                        >
                            View Cart
                        </SecondaryButton>
                    )}
                    </>
                )}
        </nav>
    );
}


