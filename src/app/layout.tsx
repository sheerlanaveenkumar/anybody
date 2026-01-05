import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "../index.css";
import { Providers } from "./providers";
import JsonLd from "./json-ld";

const inter = Inter({
    subsets: ["latin"],
    variable: "--font-inter",
    display: "swap",
});

const playfair = Playfair_Display({
    subsets: ["latin"],
    variable: "--font-playfair",
    display: "swap",
});

export const metadata: Metadata = {
    metadataBase: new URL('https://anybody.ae'),
    title: "AnyBody Luxury Plus-Size Fashion in Dubai, Abu Dhabi & UAE",
    description: "AnyBody offers luxury, size-inclusive fashion designed from scratch for plus-size bodies. Premium fabrics, effortless fits, and flattering cuts available across Dubai, Abu Dhabi and the UAE via the AnyBody app",
    keywords: ["luxury plus-size fashion", "size-inclusive fashion app", "plus-size clothing designed from scratch", "plus-size", "plus size clothing", "plus size clothes", "Plus size uae", "plus size dubai", "plus size abu dhabi"],
    authors: [{ name: "AnyBody" }],
    openGraph: {
        title: "AnyBody Luxury Plus-Size Fashion in Dubai, Abu Dhabi & UAE",
        description: "AnyBody offers luxury, size-inclusive fashion designed from scratch for plus-size bodies. Premium fabrics, effortless fits, and flattering cuts available across Dubai, Abu Dhabi and the UAE via the AnyBody app",
        url: 'https://anybody.ae',
        siteName: 'AnyBody',
        locale: 'en_AE',
        type: "website",
        images: ["/opengraph-image.png"],
    },
    twitter: {
        card: "summary_large_image",
        title: "AnyBody | Luxury Plus-Size Fashion",
        description: "AnyBody offers luxury, size-inclusive fashion designed from scratch for plus-size bodies. Premium fabrics, effortless fits, and flattering cuts available across Dubai, Abu Dhabi and the UAE via the AnyBody app",
        images: ["/opengraph-image.png"],
    },
    icons: {
        icon: [
            { url: '/favicon.svg', media: '(prefers-color-scheme: light)' },
            { url: '/favicon.png', media: '(prefers-color-scheme: dark)' },
        ],
        shortcut: "/favicon.png",
        apple: "/apple-touch-icon.png",
        other: [
            { rel: "icon", url: "/favicon.png", sizes: "32x32" },
            { rel: "mask-icon", url: "/safari-pinned-tab.svg", color: "#000000" }
        ],
    },
    manifest: '/manifest.webmanifest',
    alternates: {
        canonical: '/',
    },
};

import MobileAppBanner from "@/components/MobileAppBanner";

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={`${inter.variable} ${playfair.variable} font-sans antialiased`}>
                <JsonLd />
                <MobileAppBanner />
                <Providers>{children}</Providers>
            </body>
        </html>
    );
}
