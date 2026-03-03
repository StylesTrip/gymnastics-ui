import AppBar from '@/components/appbar/AppBar';
export const metadata = {
    title: 'Admin - Emma Turinsky',
};

export default function AdminLayout({
    children, // will be a page or nested layout
}) {
    return (
        <>
            <AppBar variant="filled" userSignedIn />
            {children}
        </>
    );
}
