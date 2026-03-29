import { ButtonHTMLAttributes } from 'react';

export default function PrimaryButton({
    className = '',
    disabled,
    children,
    ...props
}: ButtonHTMLAttributes<HTMLButtonElement>) {
    return (
        <button
            {...props}
            className={
                `cursor-pointer inline-flex items-center rounded-md border border-transparent bg-primaryOrange px-4 py-2 text-xs font-semibold uppercase tracking-widest text-gray-800 transition duration-150 ease-in-out hover:text-white hover:bg-primaryOrangeDarker focus:bg-primaryOrangeDarker focus:outline-none focus:ring-2 focus:ring-primaryOrange focus:ring-offset-2 active:bg-gray-900 w-max ${
                    disabled && 'opacity-25'
                } ` + className
            }
            disabled={disabled}
        >
            {children}
        </button>
    );
}
