// Import necessary module from graphql-tag
import { gql } from "graphql-tag";

// Notes for everything below:
//   User = Defines the User type with fields _id, firstName, lastName, email, password, organization, and role
//   Query = Defines the Query type with queries to fetch all users and a single user by ID
//   Mutation = Defines the Mutation type with operations for adding a user, login, and logout
//      addUser = Mutation to add a new user, returns an AuthPayload containing a token and user
//      AuthPayload = Defines the AuthPayload type which contains a token and a User object
//      login = Mutation to login a user, returns an AuthPayload containing a token and user
//      logout = Mutation to logout a user, returns a LogoutResponse indicating success status
//      confirmUser = Mutation to confirm a user
//      updateConfirmNumber = Mutation to change a users confirmNumber
//      sendConfirmEmail = Mutation to send users an email with their confirmNumber for email confirmation
//      sendPasswordEmail = Mutation to send users an email with their confirmNumber for password reset
//  LogoutResponse = Defines the LogoutResponse type which indicates the success of the logout operation
//  EmailResponse = Defines the EmailResponse type which indicates the success of the logout operation and it's message

const typeDefs = gql`
  type User {
    _id: ID
    firstName: String!
    lastName: String!
    email: String!
    password: String!
    organization: String!
    role: String!
    howHear: String!
    confirmNumber: Int!
    confirmStatus: Boolean!
  }

  type Query {
    users: [User]
    user(userId: ID!): User
    checkUserEmail(email: String!): User
  }

  type AuthPayload {
    token: String
    user: User
    confirmStatus: Boolean
  }

  type Mutation {
    addUser(
      firstName: String!
      lastName: String!
      email: String!
      password: String!
      organization: String!
      role: String!
      howHear: String!
      confirmNumber: Int!
      confirmStatus: Boolean
    ): AuthPayload
    login(email: String!, password: String!): AuthPayload
    logout: LogoutResponse
    confirmUser(email: String!, confirmNumber: Int!): AuthPayload
    updateConfirmNumber(userId: ID!, confirmNumber: Int!): User
    updatePassword(email: String!, password: String!): User
    sendConfirmEmail(email: String!, confirmNumber: String!): EmailResponse!
    sendPasswordEmail(email: String!, confirmNumber: String!): EmailResponse!
    sendUserDataEmail(email: String!, confirmNumber: String!): EmailResponse!
  }

  type LogoutResponse {
    success: Boolean
  }

  type EmailResponse {
    success: Boolean!
    message: String!
  }
`;

export default typeDefs;
