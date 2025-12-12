import { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
    return {
        name: 'AnyBody | Luxury, Body-Inclusive Fashion in the UAE',
        short_name: 'AnyBody',
        description: 'Timeless, body-inclusive fashion designed with empathy, precision, and confidence.',
        start_url: '/',
        display: 'standalone',
        background_color: '#ffffff',
        theme_color: '#ffffff',
        icons: [
            {
                src: '/favicon.svg',
                sizes: 'any',
                type: 'image/svg+xml',
            },
            {
                src: '/favicon.png',
                sizes: '192x192',
                type: 'image/png',
            },
            {
                src: '/apple-touch-icon.png',
                sizes: '180x180',
                type: 'image/png',
            },
        ],
    };
}
