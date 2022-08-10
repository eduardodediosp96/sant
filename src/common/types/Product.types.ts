export interface Product {
  __typename: string;
  id: string;
  name: string;
  description: string;
  featuredAsset: {
    __typename: string;
    id: string;
    preview: string;
  }
  variants: Array<Variant>;
}

export type Variant = {
  __typename: string,
  id: string,
  name: string,
  priceWithTax: number,
  currencyCode: string,
  sku: string,
  stockLevel: string,
  featuredAsset: null
}