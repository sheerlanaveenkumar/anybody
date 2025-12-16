export default function JsonLd() {
    const organizationLd = {
        '@context': 'https://schema.org',
        '@type': 'Organization',
        name: 'AnyBody',
        url: 'https://anybody.ae',
        logo: 'https://anybody.ae/favicon.png',
        sameAs: [
            'https://instagram.com/anybody',
            'https://facebook.com/anybody',
            'https://pinterest.com/anybody'
        ],
        description: 'AnyBody offers luxury, size-inclusive fashion designed from scratch for plus-size bodies. Premium fabrics, effortless fits, and flattering cuts available across Dubai, Abu Dhabi and the UAE via the AnyBody app',
        address: {
            '@type': 'PostalAddress',
            addressLocality: 'Dubai',
            addressCountry: 'UAE'
        },
        contactPoint: {
            '@type': 'ContactPoint',
            contactType: 'customer service',
            email: 'hello@anybody.ae'
        }
    };

    const mobileAppLd = {
        '@context': 'https://schema.org',
        '@type': 'MobileApplication',
        name: 'AnyBody',
        operatingSystem: 'iOS, Android',
        applicationCategory: 'ShoppingApplication',
        downloadUrl: [
            'https://apps.apple.com',
            'https://play.google.com'
        ]
    };

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationLd) }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(mobileAppLd) }}
            />
        </>
    );
}
