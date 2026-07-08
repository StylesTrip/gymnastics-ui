import './globals.css';
import cardPic from '../../public/emma1 copy.jpeg';
import cardPic2 from '../../public/emma4 copy.jpeg';
import instagramIcon from '../../public/Instagram_Glyph_Black.svg';
import Link from 'next/link';
import Image from 'next/image';
import { HighlightCard } from '@/components/highlight-card/HighlightCard';
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
                    <div className="md:col-span-1 flex flex-col gap-2 items-start">
                        <h1 className="text-2xl font-semibold">
                            Emma Turinsky
                        </h1>
                        <p className="text-gray-600">Level 8 Gymnast</p>
                        <a
                            href="http://gymx-treme.com/"
                            target="_blank"
                            rel="noopener"
                            className="text-gray-600 underline hover:decoration-2 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black"
                        >
                            Gym X-Treme
                        </a>
                        <p className="text-gray-600">Class of 2032</p>
                        <p className="text-gray-600">Delaware, OH</p>
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
                                Parent Email:{' '}
                                <a
                                    href="mailto:ryan.turinsky@gmail.com"
                                    className="underline hover:decoration-2 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black"
                                >
                                    ryan.turinsky@gmail.com
                                </a>
                            </p>
                        </div>
                        <a
                            href="https://www.instagram.com/backflipemma14/"
                            target="_blank"
                            rel="noopener"
                            className="self-start focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black"
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
                <div className="flex gap-8 justify-center flex-wrap">
                    <HighlightCard
                        imageUrl="/emma-res.jpeg"
                        altText="Picture of Emma posing with back facing camera"
                        pageUrl="/results"
                        pageText="View All Results"
                    />
                    <HighlightCard
                        imageUrl="/emma-beam.webp"
                        altText="Picture of Emma performing on beam with a back hand spring"
                        pageUrl="/videos"
                        pageText="Videos"
                    />
                </div>
            </section>
        </main>
    );
}
