import { gql } from "@apollo/client";

export const ADD_ITEM_TO_ORDER = gql`
  mutation ADD_ITEM_TO_ORDER($productId: ID!, $qty: Int!) {
    addItemToOrder(productVariantId: $productId, quantity: $qty) {
      ... on Order {
        id
        code
        state
        subTotal
        subTotalWithTax
      }
      ... on OrderLimitError {
        errorCode
        message
        maxItems
      }
    }
  }
`;
