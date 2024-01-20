import clsx from 'clsx';
import '../../app/globals.css';

const MenuItem = ({ href, children }) => {
    return (
        <li>
            <a
                className="block py-2 pl-3 pr-4 text-secondary-app-bar text-base rounded hover:underline focus:outline-none focus-visible:outline-3 focus-visible:outline-black focus-visible:-outline-offset-4"
                href={href}
            >
                {children}
            </a>
        </li>
    );
};

export default function AppBar({ variant = 'transparent' }) {
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
