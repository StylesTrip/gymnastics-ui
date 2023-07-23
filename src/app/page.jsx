import './globals.css';
import bgPicture from '../../public/emma2-new.jpeg';
import Image from 'next/image';
import Link from 'next/link';

export const metadata = {
    title: "Emma's Gymnastics",
};

export default function Home() {
    return (
        <section className="h-screen">
            <div
                className="relative overflow-hidden bg-no-repeat bg-auto md:bg-cover"
                style={{
                    backgroundPosition: '70%',
                    backgroundImage: `url(${bgPicture.src})`,
                    height: '650px',
                }}
            >
                <h1 className="mt-14 text-center text-primary-app-bar text-5xl md:text-6xl xl:text-7xl font-bold tracking-tight">
                    Emma Turinsky
                </h1>
            </div>
            <div className="bg-primary-purple p-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                    <div className="text-center p-2">
                        <div className="shadow-lg rounded-md bg-secondary-purple text-secondary-app-bar mb-2 py-1">
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
                        <div className="shadow-lg rounded-md bg-secondary-purple text-secondary-app-bar mb-2 py-1">
                            <h6 className="mb-3 font-bold text-xl">
                                Achievements
                            </h6>
                            <dl className="mb-2">
                                <dt className="font-bold">Derby Classic:</dt>
                                <dd>1st - Vault, Bars, Floor, AA</dd>
                            </dl>
                            <dl className="mb-2">
                                <dt className="font-bold">
                                    Blaine Wilson Sportsfest:
                                </dt>
                                <dd>1st - Vault, Bars, Floor, AA</dd>
                            </dl>
                            <dl className="mb-2">
                                <dt className="font-bold">Buckeye Classic:</dt>
                                <dd>1st - Vault, 2nd - Bars</dd>
                            </dl>
                            <dl className="mb-2">
                                <dt className="font-bold">
                                    Battle of Champions:
                                </dt>
                                <dd>1st - Vault, 2nd - Bars, Floor</dd>
                            </dl>
                            <dl className="mb-2">
                                <dt className="font-bold">Cowtown Classic:</dt>
                                <dd>1st - Bars</dd>
                            </dl>
                            <Link
                                href="/scores"
                                className="underline text-lg hover:decoration-4"
                            >
                                View All Scores
                            </Link>
                        </div>
                    </div>
                    <div className="p-2">
                        <Image
                            src="/emma4-new.jpeg"
                            alt="Picture of Emma"
                            width="0"
                            height="0"
                            sizes="50vw"
                            className="w-full h-auto"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}
