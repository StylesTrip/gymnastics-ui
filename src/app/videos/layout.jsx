import AppBar from '@/components/appbar/AppBar';

export const metadata = {
    title: 'Videos - Emma Turinsky',
    description:
        "Watch videos of Emma Turinsky's gymnastics performances, showcasing her skills and routines.",
    openGraph: {
        url: 'https://emmaturinsky.com/videos',
        type: 'website',
        title: "Emma Turinsky's Gymnastics Videos",
        description:
            "Watch videos of Emma Turinsky's gymnastics performances, showcasing her skills and routines.",
    },
    twitter: {
        card: 'summary_large_image',
        title: "Emma Turinsky's Gymnastics Videos",
        description:
            "Watch videos of Emma Turinsky's gymnastics performances, showcasing her skills and routines.",
    },
    alternates: {
        canonical: 'https://emmaturinsky.com/videos',
    },
};

export default function VideosLayout({
    children, // will be a page or nested layout
}) {
    return (
        <>
            <AppBar variant="filled" />
            <section className="w-screen h-full p-4 text-white">
                {children}
            </section>
        </>
    );
}
