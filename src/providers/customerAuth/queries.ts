import { gql } from "@apollo/client";

export const GET_ACTIVE_CUSTOMER = gql`
  query GET_ACTIVE_CUSTOMER {
    activeCustomer {
      id
      firstName
      lastName
      phoneNumber
      emailAddress
    }
  }
`;
