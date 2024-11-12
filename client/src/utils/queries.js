import { gql } from "@apollo/client";

// GraphQL query to fetch all of users info by their ID
export const QUERY_USER = gql`
  query user($userId: ID!) {
    user(userId: $userId) {
      _id
      firstName
      lastName
      email
      organization
      role
      confirmNumber
      confirmStatus
    }
  }
`;

export const CHECK_USER_EMAIL = gql`
  query checkUserEmail($email: String!) {
    checkUserEmail(email: $email) {
      _id
      firstName
      lastName
      email
      organization
      role
      confirmNumber
      confirmStatus
    }
  }
`;
