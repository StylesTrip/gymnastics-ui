import './globals.css';
import AppBar from '@/components/appbar/AppBar';

export const metadata = {
    icons: {
        icon: '/gymicon.png',
    },
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            {/*
        <head /> will contain the components returned by the nearest parent
        head.jsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
            <head />
            <body className="bg-black">
                {/* <AppBar /> */}
                {children}
            </body>
        </html>
    );
}
