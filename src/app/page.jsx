import './globals.css';
import cardPic from '../../public/emma1 copy.jpeg';
import cardPic2 from '../../public/emma4 copy.jpeg';
import instagramIcon from '../../public/Instagram_Glyph_Black.svg';
import Link from 'next/link';
import Image from 'next/image';
import AppBar from '@/components/appbar/AppBar';

export default function Home() {
    return (
        <main className="w-full h-full">
            <div className="relative w-full aspect-video max-h-[70vh] overflow-hidden">
                <Image
                    src="/emma-hero2.webp"
                    priority
                    sizes="100vw"
                    fill
                    alt="Picture of Emma posing with arms in the air next to a signature of her name"
                    className="object-cover object-top md:object-[50%_10%]"
                />
            </div>
            <section className="w-full sm:px-6 sm:-mt-5 relative z-10">
                <div className="max-w-5xl mx-auto bg-white sm:rounded-2xl shadow-lg border p-6 md:p-8 grid gap-6 md:grid-cols-3">
                    <div className="md:col-span-1 flex flex-col gap-2">
                        <h2 className="text-2xl font-semibold">
                            Emma Turinsky
                        </h2>
                        <p className="text-gray-600">Level 8 Gymnast</p>
                        <a
                            href="http://gymx-treme.com/"
                            target="_blank"
                            rel="noopener"
                            className="text-gray-600 underline hover:decoration-2"
                        >
                            Gym X-Treme
                        </a>
                        <p className="text-gray-600">Class of 2032</p>
                    </div>

                    {/* Middle: Highlights */}
                    <div className="md:col-span-1">
                        <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wide">
                            Highlights
                        </h3>
                        <dl className="mt-2">
                            <dt className="font-bold text-sm">
                                2026 Region 5 Level Regionals:
                            </dt>
                            <dd className="text-sm">2nd Bars, 1st Floor</dd>

                            <dt className="font-bold text-sm">
                                2026 Ohio State Championships:
                            </dt>
                            <dd className="text-sm">
                                3rd Vault, 3rd Bars, 3rd Beam
                            </dd>

                            <dt className="font-bold text-sm">
                                2026 Queen City Classic:
                            </dt>
                            <dd className="text-sm">3rd Vault, 2nd Bars</dd>
                            <dt className="font-bold text-sm">
                                2026 Perfection's Swing into Spring:
                            </dt>
                            <dd className="text-sm">1st Beam</dd>
                        </dl>
                    </div>

                    {/* Right: Contact / CTA */}
                    <div className="md:col-span-1 flex flex-col justify-between gap-4">
                        <div>
                            <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wide">
                                Contact
                            </h3>

                            <p className="mt-2 text-sm text-gray-700">
                                Parent Email: example@email.com
                            </p>
                        </div>
                        <a
                            href="https://www.instagram.com/backflipemma14/"
                            target="_blank"
                            rel="noopener"
                        >
                            <img
                                src={instagramIcon.src}
                                alt="Instagram icon"
                                width="32px"
                                height="32px"
                            />
                        </a>
                    </div>
                </div>
            </section>
            <section className="w-full p-4">
                <div className="grid md:grid-cols-2 gap-8">
                    <div className="group overflow-hidden rounded-2xl bg-white max-w-[400px]">
                        <div className="relative w-[400px] h-[400px] aspect-[4/3]">
                            <Image
                                src="/emma-res.jpeg"
                                fill
                                alt="Results"
                                className="grayscale hover:grayscale-0"
                            />
                        </div>

                        <div className="p-6">
                            <h2>Results</h2>
                            <p>Meet scores and highlights</p>
                        </div>
                    </div>
                </div>
            </section>
        </main>
        // <section>
        //     <div style={{ position: 'relative' }}>
        //         <div className="absolute left-0 top-0 w-full">
        //             <AppBar />
        //         </div>
        //         <img
        //             src={bgPicture.src}
        //             alt="Picture of Emma doing a jump split"
        //             width="100%"
        //             height="auto"
        //         />
        //         <div className="absolute top-16 md:top-24 left-16">
        //             <h1 className="text-black text-2xl md:text-6xl lg:text-8xl">
        //                 Emma
        //             </h1>
        //             <h1 className="text-black text-2xl md:text-6xl lg:text-8xl">
        //                 Turinsky
        //             </h1>
        //             <p className="md:px-8">Class of 2032</p>
        //         </div>
        //     </div>
        //     <div className="p-4">
        //         <div className="grid grid-cols-[1_minmax(0,0.9fr)] md:grid-cols-[repeat(2,minmax(0,500px))] justify-evenly gap-2">
        //             <div className="text-center p-2">
        //                 <div className="shadow-lg rounded-md bg-primary-app-background border-2 border-secondary-purple text-white mb-2 text-center">
        //                     <img
        //                         src={cardPic.src}
        //                         alt="Picture of Emma throwing powder in the air"
        //                         className="w-full rounded-t-md grayscale hover:grayscale-0"
        //                     />
        //                     <h6 className="mb-3 font-bold text-xl">
        //                         Personal Information
        //                     </h6>
        //                     <dl className="mb-2">
        //                         <dt className="font-bold">Current Level:</dt>
        //                         <dd>7</dd>
        //                     </dl>
        //                     <dl className="mb-2">
        //                         <dt className="font-bold">Gym:</dt>
        //                         <dd>Integrity Athletics</dd>
        //                     </dl>
        //                     <dl className="mb-2">
        //                         <dt className="font-bold">Graduation Year:</dt>
        //                         <dd>2032</dd>
        //                     </dl>
        //                     <dl className="mb-2">
        //                         <dt className="font-bold">Hometown:</dt>
        //                         <dd>Delaware, OH</dd>
        //                     </dl>
        //                 </div>
        //             </div>
        //             <div className="text-center p-2">
        //                 <div className="shadow-lg rounded-md bg-primary-app-background border-2 border-secondary-purple text-white mb-2 text-center">
        //                     <img
        //                         src={cardPic2.src}
        //                         alt="Picture of Emma posing with arms in the air"
        //                         className="w-full rounded-t-md grayscale hover:grayscale-0"
        //                     />
        //                     <h6 className="mb-3 font-bold text-xl">
        //                         Achievements
        //                     </h6>
        //                     <dl className="mb-2">
        //                         <dt className="font-bold">
        //                             2026 Level 7 Blaine Wilson Sportsfest:
        //                         </dt>
        //                         <dd>2nd - Vault, Bars</dd>
        //                         <dt className="font-bold">
        //                             2025 Level 6 X-Treme Challenge:
        //                         </dt>
        //                         <dd>1st - Vault, Beam, AA 2nd - Bars</dd>
        //                     </dl>
        //                     <Link
        //                         href="/results"
        //                         className="underline text-lg hover:decoration-4"
        //                     >
        //                         View All Results
        //                     </Link>
        //                 </div>
        //             </div>
        //         </div>
        //     </div>
        // </section>
    );
}
