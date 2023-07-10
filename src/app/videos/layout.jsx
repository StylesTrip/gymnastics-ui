export const metadata = {
    title: 'Videos',
};

export default function VideosLayout({
    children, // will be a page or nested layout
}) {
    return (
        <section className="w-screen h-screen bg-white p-4">{children}</section>
    );
}
