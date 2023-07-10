'use client';
import YouTube from 'react-youtube';

export default function Page() {
    return (
        <>
            <h1 className="text-3xl font-bold text-center">Level 3 Videos</h1>
            <section className="flex flex-col items-center mt-4">
                <YouTube videoId="RgnQ5lIc5pI" />
            </section>
        </>
    );
}
