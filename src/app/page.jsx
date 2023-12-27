import './globals.css';
// import bgPicture from '../../public/emma2-new.jpeg';
import bgPicture from '../../public/Emma-Jump-copy.png';
import cardPic from '../../public/emma1 copy.jpeg';
import cardPic2 from '../../public/emma4 copy.jpeg';
import Image from 'next/image';
import Link from 'next/link';

export const metadata = {
    title: "Emma's Gymnastics",
};

export default function Home() {
    return (
        <section>
            <div style={{ position: 'relative' }}>
                <nav
                    style={{
                        position: 'absolute',
                        left: 0,
                        top: 0,
                        width: '100%',
                        backgroundColor: 'transparent',
                    }}
                >
                    <div className="flex flex-col">
                        <ul className="flex flex-row justify-start">
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
                                    Results
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
                <img
                    src={bgPicture.src}
                    alt="Picture of Emma doing a jump split"
                    width="100%"
                    height="auto"
                />
                <div className="absolute top-16 md:top-24 left-16">
                    <h1 className="text-black text-2xl md:text-6xl lg:text-8xl">
                        Emma
                    </h1>
                    <h1 className="text-black text-2xl md:text-6xl lg:text-8xl">
                        Turinsky
                    </h1>
                    <p className="md:px-8">Class of 2032</p>
                </div>
            </div>
            <div className="p-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                    <div className="text-center p-2">
                        <div className="shadow-lg rounded-md bg-secondary-purple text-secondary-app-bar mb-2">
                            <img
                                src={cardPic.src}
                                alt="Picture of Emma throwing powder in the air"
                                className="w-full rounded-t-md grayscale hover:grayscale-0"
                            />
                            <h6 className="mb-3 font-bold text-xl">
                                Personal Information
                            </h6>
                            <dl className="mb-2">
                                <dt className="font-bold">Current Level:</dt>
                                <dd>4</dd>
                            </dl>
                            <dl className="mb-2">
                                <dt className="font-bold">Gym:</dt>
                                <dd>Integrity Athletics</dd>
                            </dl>
                            <dl className="mb-2">
                                <dt className="font-bold">Graduation Year:</dt>
                                <dd>2032</dd>
                            </dl>
                            <dl className="mb-2">
                                <dt className="font-bold">Hometown:</dt>
                                <dd>Delaware, OH</dd>
                            </dl>
                        </div>
                    </div>
                    <div className="text-center p-2">
                        <div className="shadow-lg rounded-md bg-secondary-purple text-secondary-app-bar mb-2 text-center">
                            <img
                                src={cardPic2.src}
                                alt="Picture of Emma posing with arms in the air"
                                className="w-full rounded-t-md grayscale hover:grayscale-0"
                            />
                            <h6 className="mb-3 font-bold text-xl">
                                Achievements
                            </h6>
                            <dl className="mb-2">
                                <dt className="font-bold">
                                    2023 Level 3 Derby Classic:
                                </dt>
                                <dd>1st - Vault, Bars, Floor, AA</dd>
                            </dl>
                            <dl className="mb-2">
                                <dt className="font-bold">
                                    2023 Level 3 Blaine Wilson Sportsfest:
                                </dt>
                                <dd>1st - Vault, Bars, Floor, AA</dd>
                            </dl>
                            <dl className="mb-2">
                                <dt className="font-bold">
                                    2023 Level 3 Buckeye Classic:
                                </dt>
                                <dd>1st - Vault, 2nd - Bars</dd>
                            </dl>
                            <dl className="mb-2">
                                <dt className="font-bold">
                                    2023 Level 3 Battle of Champions:
                                </dt>
                                <dd>1st - Vault, 2nd - Bars, Floor</dd>
                            </dl>
                            <dl className="mb-2">
                                <dt className="font-bold">
                                    2023 Level 3 Cowtown Classic:
                                </dt>
                                <dd>1st - Bars</dd>
                            </dl>
                            <Link
                                href="/scores"
                                className="underline text-lg hover:decoration-4"
                            >
                                View All Results
                            </Link>
                        </div>
                    </div>
                    {/* <div className="p-2">
                        <Image
                            src="/emma4-new.jpeg"
                            alt="Picture of Emma"
                            width="0"
                            height="0"
                            sizes="50vw"
                            className="w-full h-auto"
                        />
                    </div> */}
                </div>
            </div>
        </section>
    );
}
