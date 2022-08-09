import { gql } from "@apollo/client";
import { DETAILED_PRODUCT } from "./fragments";

export const FETCH_PRODUCTS = gql`
  ${DETAILED_PRODUCT}
  query FETCH_PRODUCTS($skip: Int, $take: Int, $name: String!) {
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
    }
  }
`;
