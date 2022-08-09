import { gql } from "@apollo/client";

export const REGISTER_CUSTOMER_ACCOUNT = gql`
  mutation REGISTER_CUSTOMER_ACCOUNT($customer: RegisterCustomerInput!) {
    registerCustomerAccount(input: $customer) {
      ... on Success {
        success
      }
      ... on MissingPasswordError {
        errorCode
        message
      }
      ... on PasswordValidationError {
        errorCode
        message
      }
      ... on NativeAuthStrategyError {
        errorCode
        message
      }
      ... on ErrorResult {
        errorCode
        message
      }
    }
  }
`;

export const CUSTOMER_LOGIN = gql`
  mutation CUSTOMER_LOGIN($username: String!, $password: String!) {
    login(username: $username, password: $password) {
      ... on CurrentUser {
        id
        identifier
      }
      ... on InvalidCredentialsError {
        errorCode
        message
      }
      ... on NotVerifiedError {
        errorCode
        message
      }
      ... on NativeAuthStrategyError {
        errorCode
        message
      }
      ... on ErrorResult {
        errorCode
        message
      }
    }
  }
`;

export const CUSTOMER_TOKEN_VERIFICATION = gql`
  mutation CUSTOMER_TOKEN_VERIFICATION($token: String!) {
    verifyCustomerAccount(token: $token) {
      ... on CurrentUser {
        id
        identifier
      }
      ... on VerificationTokenInvalidError {
        errorCode
        message
      }
      ... on VerificationTokenExpiredError {
        errorCode
        message
      }
      ... on ErrorResult {
        errorCode
        message
      }
    }
  }
`;
