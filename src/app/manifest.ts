import { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
    return {
        name: 'AnyBody Luxury Plus-Size Fashion in Dubai, Abu Dhabi & UAE',
        short_name: 'AnyBody',
        description: 'AnyBody offers luxury, size-inclusive fashion designed from scratch for plus-size bodies. Premium fabrics, effortless fits, and flattering cuts available across Dubai, Abu Dhabi and the UAE via the AnyBody app',
        start_url: '/',
        id: '/',
        scope: '/',
        lang: 'en',
        orientation: 'portrait',
        display: 'standalone',
        background_color: '#ffffff',
        theme_color: '#ffffff',
        categories: ['shopping', 'lifestyle', 'fashion'],
        icons: [
            {
                src: '/favicon.png',
                sizes: 'any',
                type: 'image/png',
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
