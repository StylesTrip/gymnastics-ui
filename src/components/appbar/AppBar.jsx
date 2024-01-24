import clsx from 'clsx';
import '../../app/globals.css';

export default function AppBar({ variant = 'transparent' }) {
    const MenuItem = ({ href, children }) => {
        return (
            <li>
                <a
                    className={clsx(
                        'block py-2 pl-3 pr-4 text-base rounded hover:underline focus:outline-none focus-visible:outline-3 focus-visible:outline-black focus-visible:-outline-offset-4',
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
                    <MenuItem href="/scores">Results</MenuItem>
                    <MenuItem href="/videos">Videos</MenuItem>
                </ul>
            </div>
        </nav>
    );
}
