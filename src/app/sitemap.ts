import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = 'https://anybody.ae'; // Replace with actual domain if different

    return [
        {
            url: baseUrl,
            lastModified: new Date(),
            changeFrequency: 'yearly',
            priority: 1,
        },
        // Add other static routes here if they exist, e.g.:
        // {
        //   url: `${baseUrl}/about`,
        //   lastModified: new Date(),
        //   changeFrequency: 'monthly',
        //   priority: 0.8,
        // },
        // {
        //   url: `${baseUrl}/collections`,
        //   lastModified: new Date(),
        //   changeFrequency: 'weekly',
        //   priority: 0.8,
        // },
    ];
}
