interface Variant {
  id: string;
  name: string;
  priceWithTax: string;
  currencyCode: string;
  sku: string;
  stockLevel: string;
  price: number;
  featuredAsset: {
    id: string;
    preview: string;
  };
}

interface ProductInventory {
  id: string;
  name: string;
  description: string;
  collections: {
    id: string;
    slug: string;
    name: string;
    breadcrumbs: {
      id: string;
      name: string;
      slug: string;
    };
  };
  facetValues: {
    facet: {
      id: string;
      code: string;
      name: string;
    };
    id: string;
    code: string;
    name: string;
  };
  featuredAsset: {
    id: string;
    preview: string;
  };
  assets: {
    id: string;
    preview: string;
  };
  variants: [Variant];
}
interface ProductInventorySearched {
  productId: string;
  sku: string;
  slug: string;
  productName: string;
  SinglePrice: {
    value: string;
  };
  productAsset: {
    id: string;
    preview: string;
  };
}

export interface ProductInventoryData {
  products: { items: ProductInventory[] };
}

export interface ProductInventorySearchedData {
  search: { items: ProductInventorySearched[] };
}
export interface ProductSearchedBySlugData {
  product: ProductInventory;
}

export interface ProductInventoryVars {
  skip?: number;
  take?: number;
  name?: string;
}
export interface ProductInventorySearchedVars {
  collectionSlug?: string;
}
export interface ProductSearchedBySlugVars {
  slug?: string;
}
