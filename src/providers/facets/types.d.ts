export interface FacetInventory {
  id: string;
  code: string;
  name: string;
  facet: { name: string };
}

export interface FacetInventoryData {
  facetInventory: FacetInventory[];
}

export interface FacetInventoryVars {
  skip?: number;
  take?: number;
  name?: string;
}
