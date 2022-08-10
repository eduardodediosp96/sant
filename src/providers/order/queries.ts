import { gql } from "@apollo/client";

export const FETCH_ACTIVE_ORDER = gql`
  query {
    activeOrder {
      id
      lines {
        quantity
        unitPriceWithTax
        featuredAsset {
          preview
        }
        productVariant {
          name
          id
        }
      }
    }
  }
`;
