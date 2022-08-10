import { gql } from "@apollo/client";
import { DETAILED_PRODUCT, DETAILED_PRODUCT_SEARCHED } from "./fragments";

export const FETCH_PRODUCTS = gql`
  ${DETAILED_PRODUCT}
  query FETCH_PRODUCTS($skip: Int, $take: Int, $name: String) {
    products(
      options: {
        skip: $skip
        take: $take
        filter: { name: { contains: $name } }
      }
    ) {
      items {
        ...DetailedProduct
      }
      totalItems
    }
  }
`;

export const GET_PRODUCT_BY_SLUG = gql`
  ${DETAILED_PRODUCT}
  query GET_PRODUCT($slug: String!) {
    product(slug: $slug) {
      ...DetailedProduct
    }
  }
`;

export const FETCH_PRODUCTS_BY_COLLECTION = gql`
  ${DETAILED_PRODUCT_SEARCHED}
  query FETCH_PRODUCTS_SEARCHED($collectionSlug: String!) {
    search(input: { groupByProduct: true, collectionSlug: $collectionSlug }) {
      items {
        ...DetailedProductSearched
      }
    }
  }
`;
