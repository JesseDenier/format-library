import { gql } from "@apollo/client";

// GraphQL mutation for adding a new user
export const ADD_USER = gql`
  mutation addUser(
    $firstName: String!
    $lastName: String!
    $email: String!
    $password: String!
    $organization: String!
    $role: String!
    $confirmNumber: Int!
    $confirmStatus: Boolean
  ) {
    addUser(
      firstName: $firstName
      lastName: $lastName
      email: $email
      password: $password
      organization: $organization
      role: $role
      confirmNumber: $confirmNumber
      confirmStatus: $confirmStatus
    ) {
      token
      user {
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
  }
`;

// GraphQL mutation for logging in a user
export const LOGIN = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
      }
    }
  }
`;

// GraphQL mutation for logging out a user
export const LOGOUT = gql`
  mutation logout {
    logout {
      success
    }
  }
`;

// GraphQL mutation for confirming a user using email and confirmNumber
export const CONFIRM_USER = gql`
  mutation confirmUser($email: String!, $confirmNumber: Int!) {
    confirmUser(email: $email, confirmNumber: $confirmNumber) {
      token
      confirmStatus
    }
  }
`;

// GraphQL mutation for changing a users confirmNumber
export const UPDATE_CONFIRM_NUMBER = gql`
  mutation updateConfirmNumber($userId: ID!, $confirmNumber: Int!) {
    updateConfirmNumber(userId: $userId, confirmNumber: $confirmNumber) {
      _id
      email
      confirmNumber
    }
  }
`;

// GraphQL mutation for changing a users password
export const UPDATE_PASSWORD = gql`
  mutation updatePassword($email: String!, $newPassword: String!) {
    updatePassword(email: $email, password: $newPassword) {
      _id
      email
      password
    }
  }
`;

// GraphQL mutation for sending users a confirmNumber for confirming email
export const SEND_CONFIRM_EMAIL = gql`
  mutation sendConfirmEmail($email: String!, $confirmNumber: String!) {
    sendConfirmEmail(email: $email, confirmNumber: $confirmNumber) {
      success
      message
    }
  }
`;

// GraphQL mutation for sending users a confirmNumber for resetting password
export const SEND_PASSWORD_EMAIL = gql`
  mutation sendPasswordEmail($email: String!, $confirmNumber: String!) {
    sendPasswordEmail(email: $email, confirmNumber: $confirmNumber) {
      success
      message
    }
  }
`;

// GraphQL mutation for sending user data to Kristy
export const SEND_USER_DATA_EMAIL = gql`
  mutation sendUserDataEmail($email: String!, $confirmNumber: String!) {
    sendUserDataEmail(email: $email, confirmNumber: $confirmNumber) {
      success
      message
    }
  }
`;
