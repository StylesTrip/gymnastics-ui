'use client';

import clsx from 'clsx';
import '../../app/globals.css';
import { usePathname } from 'next/navigation';

export default function AppBar({ variant = 'transparent' }) {
    const pathname = usePathname();

    const MenuItem = ({ href, children }) => {
        return (
            <li
                className={clsx({
                    ['underline font-bold']: pathname === href,
                    ['bg-primary-app-background']:
                        pathname === href && variant === 'filled',
                })}
                href="/"
            >
                <a
                    className={clsx(
                        'block py-2 pl-3 pr-4 text-base rounded hover:underline hover:font-normal focus:outline-none focus-visible:outline-3 focus-visible:outline-black focus-visible:-outline-offset-4',
                        variant === 'filled' && 'text-white'
                    )}
                    href={href}
                >
                    {children}
                </a>
            </li>
        );
    };

    return (
        <nav
            className={clsx(
                '',
                variant === 'filled' && 'bg-secondary-purple',
                variant === 'transparent' && 'bg-transparent'
            )}
        >
            <div className="flex flex-col">
                <ul className="flex flex-row justify-start">
                    <MenuItem href="/">Home</MenuItem>
                    <MenuItem href="/results">Results</MenuItem>
                    <MenuItem href="/videos">Videos</MenuItem>
                </ul>
            </div>
        </nav>
    );
}
