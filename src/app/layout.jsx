import './globals.css';

export const metadata = {
    title: 'Emma Turinsky - Gymnast Profile',
    description:
        "Emma Turinsky's gymnastics profile, including results, videos, and more.",
    keywords: [
        'Emma Turinsky',
        'gymnastics',
        'gymnast profile',
        'gymnast results',
        'gymnast videos',
    ],
    openGraph: {
        url: 'https://emmaturinsky.com',
        type: 'website',
        title: "Emma Turinsky's Gymnastics Profile",
        description:
            "Explore Emma Turinsky's gymnastics profile, featuring her results, videos, and more.",
    },
    twitter: {
        card: 'summary_large_image',
        title: "Emma Turinsky's Gymnastics Profile",
        description:
            "Explore Emma Turinsky's gymnastics profile, featuring her results, videos, and more.",
    },
    robots: {
        index: true,
        follow: true,
        googleBot: 'index, follow',
    },
    alternates: {
        canonical: 'https://emmaturinsky.com',
    },
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
            <body className="bg-primary-app-background">
                {/* <AppBar /> */}
                {children}
            </body>
        </html>
    );
}
