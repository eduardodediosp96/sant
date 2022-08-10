import { gql } from "@apollo/client";

export const DETAILED_PRODUCT = gql`
  fragment DetailedProduct on Product {
    id
    name
    description
    collections {
      id
      slug
      name
      breadcrumbs {
        id
        name
        slug
      }
    }
    facetValues {
      facet {
        id
        code
        name
      }
      id
      code
      name
    }
    featuredAsset {
      id
      preview
    }
    assets {
      id
      preview
    }
    variants {
      id
      name
      priceWithTax
      currencyCode
      sku
      stockLevel
      featuredAsset {
        id
        preview
      }
    }
  }
`;
export const DETAILED_PRODUCT_SEARCHED = gql`
  fragment DetailedProductSearched on SearchResult {
    productId
    sku
    slug
    productName
    price {
      ... on SinglePrice {
        value
      }
    }
    productAsset {
      id
      preview
    }
  }
`;
