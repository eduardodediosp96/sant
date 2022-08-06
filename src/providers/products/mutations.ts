import { gql } from "@apollo/client";
import { DETAILED_PRODUCT } from "./fragments";

export const FETCH_PRODUCTS = gql`
  ${DETAILED_PRODUCT}
  query FETCH_PRODUCTS {
    products {
      items {
        ...DetailedProduct
      }
    }
  }
`;
