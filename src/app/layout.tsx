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
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={`${inter.variable} ${playfair.variable} font-sans antialiased`}>
                <Providers>{children}</Providers>
            </body>
        </html>
    );
}
