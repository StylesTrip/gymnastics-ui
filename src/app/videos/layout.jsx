import AppBar from '@/components/appbar/AppBar';

export const metadata = {
    title: 'Videos',
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
