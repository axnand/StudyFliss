import { Metadata } from 'next';
import Footer from '@/components/ui/Footer';
import Navbar from '@/components/ui/Navbar';
import { Toaster } from '@/components/ui/Toasts/toaster';
import { PropsWithChildren, Suspense } from 'react';
import { getURL } from '@/utils/helpers';
import 'styles/main.css';
import { Jost, Space_Grotesk } from 'next/font/google';
import { cn } from '@/utils/cn';
import { Providers } from './providers';
import ScrollToTopButton from '@/components/ui/scroll-to-top';
import Spinner from '@/components/ui/spinner';

const jost = Jost({
    subsets: ['latin', 'latin-ext'],
    variable: '--font-heading',
    weight: 'variable',
    display: 'swap'
});

const space_grotesk = Space_Grotesk({
    subsets: ['latin', 'latin-ext'],
    weight: 'variable',
    variable: '--font-sans',
    display: 'swap'
});

const meta = {
    title: 'StudyFliss',
    description: 'StudyFliss is a platform consisting of all the resources a student might need in order to live their college years to the fullest.',
    cardImage: '/logos/circle/svgexport-27.png',
    robots: 'follow, index',
    favicon: '/favicon.ico',
    url: getURL()
};

export async function generateMetadata(): Promise<Metadata> {
    return {
        title: meta.title,
        description: meta.description,
        referrer: 'origin-when-cross-origin',
        keywords: [
            'StudyFiss',
            'StudyFliss website',
            'IPU Notes',
            'IPU',
            'Notes'
        ],
        authors: [{ name: 'Harjot Singh', url: 'https://harjot.pro/' }],
        creator: 'Harjot Singh',
        publisher: 'Harjot Singh',
        robots: meta.robots,
        icons: { icon: meta.favicon },
        metadataBase: new URL(meta.url),
        openGraph: {
            url: meta.url,
            title: meta.title,
            description: meta.description,
            images: [meta.cardImage],
            type: 'website',
            siteName: meta.title
        },
        twitter: {
            card: 'summary_large_image',
            site: '@HarjjotSinghh',
            creator: '@HarjjotSinghh',
            title: meta.title,
            description: meta.description,
            images: [meta.cardImage]
        }
    };
}

export default async function RootLayout({ children }: PropsWithChildren) {
    return (
        <html
            lang="en"
            className={cn(
                ' loading dark ',
                jost.variable,
                space_grotesk.variable
            )}
        >
            <head>
                <script defer src="https://analytics.eu.umami.is/script.js" data-website-id="58e69750-f2fd-4bb9-a6ca-7dd3481c999a"></script>
            </head>
            <body className="font-sans transition-all duration-300 ease-in-out-sine bg-background text-foreground">
                <Providers>
                    <main
                        id="skip"
                        className="min-h-[calc(100dvh-4rem)] md:min-h-[calc(100dvh-5rem)] mt-32"
                    >
                        <Navbar />

                        {children}
                        <Footer />
                        <ScrollToTopButton />
                    </main>
                    <Suspense fallback={<Spinner/>}>
                        <Toaster />
                    </Suspense>
                </Providers>
            </body>
        </html>
    );
}
