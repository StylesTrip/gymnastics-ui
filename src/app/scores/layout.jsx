import AppBar from '@/components/appbar/AppBar';
export const metadata = {
    title: 'Results',
};

export default function ScoresLayout({
    children, // will be a page or nested layout
}) {
    return (
        <>
            <AppBar />
            {children}
        </>
    );
}
