import { InertiaLinkProps, Link } from '@inertiajs/react';

export default function NavLink({
    active = false,
    className = '',
    children,
    ...props
}: InertiaLinkProps & { active: boolean }) {
    return (
        <Link
            {...props}
            className={
                'inline-flex border border-transparent text-center leading-6 items-center justify-center px-3 py-2 text-base font-medium transition duration-150 ease-in-out focus:outline-none text-gray-300 rounded-lg hover:bg-primaryOrangeTransparent focus-visible:border-white ' +
                (active
                    ? 'bg-primaryOrangeTransparent '
                    : 'bg-transparent ') +
                className
            }
        >
            {children}
        </Link>
    );
}
