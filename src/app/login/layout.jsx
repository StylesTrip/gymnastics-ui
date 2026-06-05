import AppBar from '@/components/appbar/AppBar';

export const metadata = {
    title: 'Login - Emma Turinsky',
};

export default function LoginLayout({ children }) {
    return (
        <>
            <AppBar variant="filled" />
            {children}
        </>
    );
}
