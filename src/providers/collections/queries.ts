import { gql } from "@apollo/client";

export const GET_COLLECTIONS = gql`
  query GET_COLLECTIONS {
    collections {
      items {
        id
        name
        description
        slug
        featuredAsset {
          source
          preview
        }
      }
    }
  }
`;
