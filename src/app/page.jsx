import './globals.css';
import bgPicture from '../../public/Emma-Jump-copy.png';
import cardPic from '../../public/emma1 copy.jpeg';
import cardPic2 from '../../public/emma4 copy.jpeg';
import Link from 'next/link';
import AppBar from '@/components/appbar/AppBar';

export const metadata = {
    title: 'Emma Turinsky - Gymnast Web Page',
};

export default function Home() {
    return (
        <section>
            <div style={{ position: 'relative' }}>
                <div className="absolute left-0 top-0 w-full">
                    <AppBar />
                </div>
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
                <div className="grid grid-cols-[1_minmax(0,0.9fr)] md:grid-cols-[repeat(2,minmax(0,500px))] justify-evenly gap-2">
                    <div className="text-center p-2">
                        <div className="shadow-lg rounded-md bg-primary-app-background border-2 border-secondary-purple text-white mb-2 text-center">
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
                                <dd>6</dd>
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
                        <div className="shadow-lg rounded-md bg-primary-app-background border-2 border-secondary-purple text-white mb-2 text-center">
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
                                    2024 Level 4 Winter Extravaganza:
                                </dt>
                                <dd>1st - Beam, 2nd - Bars, Floor, AA</dd>
                            </dl>
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
                            <Link
                                href="/results"
                                className="underline text-lg hover:decoration-4"
                            >
                                View All Results
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
