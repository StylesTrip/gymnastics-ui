import './globals.css';
import Image from 'next/image';
import AppBar from '@/components/appbar/AppBar';

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            {/*
        <head /> will contain the components returned by the nearest parent
        head.jsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
            <head />
            <body>
                <AppBar />
                {children}
            </body>
        </html>
    );
}
