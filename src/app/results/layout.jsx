import AppBar from '@/components/appbar/AppBar';
export const metadata = {
    title: 'Results',
};

export default function ResultsLayout({
    children, // will be a page or nested layout
}) {
    return (
        <>
            <AppBar variant="filled" />
            {children}
        </>
    );
}
