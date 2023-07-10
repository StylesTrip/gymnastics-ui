import '../../app/globals.css';
import Image from 'next/image';

//TODO: Attribute image to: <a href="https://www.flaticon.com/free-icons/handspring" title="handspring icons">Handspring icons created by Leremy - Flaticon</a>
export default function AppBar() {
    return (
        <>
            <nav className="bg-primary-purple p-2">
                <div className="flex flex-row items-center gap-x-5">
                    <Image
                        src="/gymnast.png"
                        alt="image of figure doing gymnastics on floor"
                        width={90}
                        height={90}
                    />
                    <div className="text-primary-app-bar text-3xl min-w-0 md:min-w-fit">
                        Emma's Gymnastics
                    </div>
                </div>
            </nav>
            <nav>
                <div className="flex flex-col justify-start bg-secondary-purple">
                    <ul className="flex flex-row">
                        <li>
                            <a
                                className="block py-2 pl-3 pr-4 text-secondary-app-bar text-base rounded hover:underline"
                                href="/"
                            >
                                Home
                            </a>
                        </li>
                        <li>
                            <a
                                className="block py-2 pl-3 pr-4 text-secondary-app-bar text-base rounded hover:underline"
                                href="/scores"
                            >
                                Scores
                            </a>
                        </li>
                        <li>
                            <a
                                className="block py-2 pl-3 pr-4 text-secondary-app-bar text-base rounded hover:underline"
                                href="/videos"
                            >
                                Videos
                            </a>
                        </li>
                    </ul>
                </div>
            </nav>
        </>
    );
}
