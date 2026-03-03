import clsx from 'clsx';
import '../../app/globals.css';

export default function AppBar({
    variant = 'transparent',
    userSignedIn = false,
}) {
    const MenuItem = ({ href, children }) => {
        return (
            <li>
                <a
                    className={clsx(
                        'block text-base rounded hover:underline focus:outline-none focus-visible:outline-3 focus-visible:outline-black focus-visible:-outline-offset-4',
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
                'flex justify-between items-center px-4 py-2',
                variant === 'filled' && 'bg-secondary-purple',
                variant === 'transparent' && 'bg-transparent'
            )}
        >
            <ul className="flex flex-row justify-start gap-4">
                <MenuItem href="/">Home</MenuItem>
                <MenuItem href="/results">Results</MenuItem>
                <MenuItem href="/videos">Videos</MenuItem>
            </ul>
            {userSignedIn && (
                <form action="/auth/signout" method="POST">
                    <button type="submit">Sign out</button>
                </form>
            )}
        </nav>
    );
}
