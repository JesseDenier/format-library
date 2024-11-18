// Import necessary modules and load environment variables
import { GraphQLError } from "graphql";
import jwt from "jsonwebtoken";
import { jwtDecode } from "jwt-decode";
import dotenv from "dotenv";

// Retrieve secret key and set token expiration time
dotenv.config();
const secret = process.env.SECRET;
const expiration = "2h";

// Error for authentication failure
export const AuthenticationError = new GraphQLError(
  "Could not authenticate user.",
  {
    extensions: {
      code: "UNAUTHENTICATED",
    },
  }
);

// Method to get user profile from the token
export function getProfile(req) {
  const token = req.cookies?.token || getTokenFromHeaders(req);
  if (!token) return null;

  try {
    return jwtDecode(token);
  } catch (error) {
    console.error("Error decoding token:", error);
    return null;
  }
}

// Method to check if a user is logged in
export function loggedIn(req) {
  const token = req.cookies?.token || getTokenFromHeaders(req);
  return token && !isTokenExpired(token) ? true : false;
}

// Helper function to extract token from headers if needed
function getTokenFromHeaders(req) {
  let token = req.body.token || req.query.token || req.headers.authorization;
  if (req.headers.authorization) {
    token = token.split(" ").pop().trim();
  }
  return token;
}

// Middleware function for authentication
export function authMiddleware({ req }) {
  // Check for the token in cookies, body, query, or headers
  let token = req.cookies?.token || getTokenFromHeaders(req);

  // If no token is found, return the request object unmodified
  if (!token) {
    console.log("No token for user");
    return req;
  }

  try {
    // Verify the token and extract the data payload
    const { data } = jwt.verify(token, secret, { maxAge: expiration });
    // Attach user data to the request object
    req.user = data;
  } catch (error) {
    console.log("Invalid token:", error);
  }

  // Return the modified request object
  return req;
}

// Method to sign a token with user data
export function signToken({
  firstName,
  lastName,
  email,
  organization,
  role,
  howHear,
  _id,
}) {
  const payload = {
    firstName,
    lastName,
    email,
    organization,
    role,
    howHear,
    _id,
  };
  // Sign and return the token with the secret key and expiration time
  return jwt.sign({ data: payload }, secret, { expiresIn: expiration });
}

// Helper method to check if a token is expired
function isTokenExpired(token) {
  try {
    const { exp } = jwtDecode(token);
    return Date.now() >= exp * 1000;
  } catch (error) {
    console.error("Error checking token expiration:", error);
    return true;
  }
}
