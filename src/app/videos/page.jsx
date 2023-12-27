'use client';
import YouTube from 'react-youtube';

export default function Page() {
    return (
        <>
            <section className="h-full flex flex-col gap-4 items-center mt-4">
                <h1 className="text-3xl font-bold text-center">
                    Level 3 Videos
                </h1>
                <YouTube videoId="jrfjylVxZGc" />
                <YouTube videoId="6AxvvHqAQpk" />
                <YouTube videoId="8hYMKJgFWS4" />
                <YouTube videoId="xmVCA--gT30" />
                <YouTube videoId="RgnQ5lIc5pI" />
            </section>
            <section className="h-full flex flex-col gap-4 items-center mt-4">
                <h1 className="text-3xl font-bold text-center">
                    Level 4 Videos
                </h1>
                <YouTube videoId="8PLjZlAkYek" />
                <YouTube videoId="3Q4XzHVa1yY" />
            </section>
        </>
    );
}
