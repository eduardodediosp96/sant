import { gql } from "@apollo/client";
import { DETAILED_PRODUCT } from "./fragments";

export const FETCH_PRODUCTS = gql`
  ${DETAILED_PRODUCT}
  query FETCH_PRODUCTS($skip: Int, $take: Int) {
    products(options: { skip: $skip, take: $take }) {
      items {
        ...DetailedProduct
      }
    }
  }
`;
