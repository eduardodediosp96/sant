interface Collection {
  id: string;
  name: string;
  description: string;
  slug: string;
  featuredAsset: {
    source: string;
    preview: string;
  };
}

export interface CollectionsData {
  collections: { items: Collection[] };
}
