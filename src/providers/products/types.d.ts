interface ProductInventory {
  id: any;
  name: any;
  description: any;
  collections: {
    id: any;
    slug: any;
    name: any;
    breadcrumbs: {
      id: any;
      name: any;
      slug: any;
    };
  };
  facetValues: {
    facet: {
      id: any;
      code: any;
      name: any;
    };
    id: any;
    code: any;
    name: any;
  };
  featuredAsset: {
    id: any;
    preview: any;
  };
  assets: {
    id: any;
    preview: any;
  };
  variants: {
    id: any;
    name: any;
    priceWithTax: any;
    currencyCode: any;
    sku: any;
    stockLevel: any;
    featuredAsset: {
      id: any;
      preview: any;
    };
  };
}

export interface ProductInventoryData {
  productInventory: ProductInventory[];
}

export interface ProductInventoryVars {
  skip?: number;
  take?: number;
  name?: string;
}
