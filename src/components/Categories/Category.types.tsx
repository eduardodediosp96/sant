export type Category = {
    id: string;
    name: string;
    description: string;
    slug: string;
    featuredAsset: {
        source: string;
        preview: string;
    }
}