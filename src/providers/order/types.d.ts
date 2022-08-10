export interface Lines {
  quantity: string;
  unitPriceWithTax: number;
  featuredAsset: {
    preview: string;
  };
  productVariant: {
    name: string;
    id: string;
  };
}
export interface ActiveOrder {
  id: string;
  lines: [Lines];
}

export interface ActiveOrderData {
  activeOrder: activeOrder;
}
