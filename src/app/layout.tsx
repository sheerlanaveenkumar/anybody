import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "../index.css";
import { Providers } from "./providers";

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
    title: "AnyBody | Luxury, Body-Inclusive Fashion in the UAE",
    description: "Discover AnyBody - a premium, body-inclusive fashion brand redefining luxury for every body. Download the app for timeless design and effortless confidence.",
    authors: [{ name: "AnyBody" }],
    openGraph: {
        title: "AnyBody | Luxury, Body-Inclusive Fashion in the UAE",
        description: "Timeless, body-inclusive fashion designed with empathy, precision, and confidence.",
        type: "website",
        images: ["https://lovable.dev/opengraph-image-p98pqg.png"],
    },
    twitter: {
        card: "summary_large_image",
        title: "AnyBody | Luxury, Body-Inclusive Fashion",
        description: "Timeless, body-inclusive fashion designed with empathy, precision, and confidence.",
        images: ["https://lovable.dev/opengraph-image-p98pqg.png"],
    },
    icons: {
        icon: "/favicon.svg",
        shortcut: "/favicon.svg",
        apple: "/apple-touch-icon.png",
        other: [
            { rel: "icon", url: "/favicon-32x32.png", sizes: "32x32" },
            { rel: "mask-icon", url: "/safari-pinned-tab.svg", color: "#000000" }
        ],
    },
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <head>
                <link rel="manifest" href="/site.webmanifest" />
                <link rel="icon" href="/favicon.svg" />
                <link rel="icon" type="image/png" sizes="32x32" href="/favicon.svg" />
                <link rel="icon" type="image/png" sizes="16x16" href="/favicon.svg" />
                <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
                <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#000000" />
            </head>
            <body className={`${inter.variable} ${playfair.variable} font-sans antialiased`}>
                <Providers>{children}</Providers>
            </body>
        </html>
    );
}
