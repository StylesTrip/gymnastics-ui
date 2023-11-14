import AppBar from '@/components/appbar/AppBar';

export const metadata = {
    title: 'Videos',
};

export default function VideosLayout({
    children, // will be a page or nested layout
}) {
    return (
        <>
            <AppBar />
            <section className="w-screen h-full bg-white p-4">
                {children}
            </section>
        </>
    );
}