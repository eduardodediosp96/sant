import { gql } from "@apollo/client";

export const FETCH_FACETS = gql`
  query FETCH_FACETS {
    facets {
      totalItems
      items {
        id
        name
        code
        values {
          id
          name
        }
      }
    }
  }
`;
