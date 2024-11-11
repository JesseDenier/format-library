// Import necessary modules
import express from "express";
import cors from "cors";
import { ApolloServer } from "@apollo/server";
import { expressMiddleware } from "@apollo/server/express4";
import path from "path";
import { fileURLToPath } from "url";
import { authMiddleware } from "./utils/auth.js";
import { typeDefs, resolvers } from "./schemas/index.js";
import db from "./config/connection.js";
import cookieParser from "cookie-parser";

// Set __dirname for ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Define the server port, defaulting to 3001 if not set in environment variables
const PORT = process.env.PORT || 3001;

// Initialize an Express application
const app = express();

// CORS Configuration
const corsOptions = {
  origin: "https://www.iscapublications.com", // Ensure this matches your frontend URL exactly
  methods: "GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS",
  credentials: true, // If you need to allow credentials like cookies
  optionsSuccessStatus: 200, // Response status for successful OPTIONS requests
};

app.use(cors(corsOptions)); // Apply CORS middleware

app.use(express.json()); // Middleware to parse JSON request body
app.use(express.urlencoded({ extended: false })); // Middleware to parse URL-encoded request body
app.use(cookieParser()); // Middleware to parse cookies

// Create a new instance of ApolloServer with the provided type definitions and resolvers
const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: ({ req, res }) => ({ req, res, user: req.user }),
});

// Async function to start the Apollo server
const startApolloServer = async () => {
  // Start the Apollo server
  await server.start();

  // Middleware to handle GraphQL requests, applying the authentication middleware
  app.use(
    "/graphql",
    expressMiddleware(server, {
      context: authMiddleware, // Ensure that context is properly set up for authentication
    })
  );

  // Serve static files from the dist directory
  app.use(express.static(path.join(__dirname, "../client/dist")));

  // Serve private files only to authenticated users
  app.use("/private", (req, res, next) => {
    // Use the authMiddleware function to check if the user is authenticated
    authMiddleware({ req });

    // If the user is authenticated, allow access to the private files
    if (req.user) {
      return express.static(path.join(__dirname, "private"))(req, res, next);
    } else {
      // Redirect to a relative path
      // This is where users are sent when they try to bypass client side security and reach a file directly.
      //! This could likely be made more dynamic in the future
      return res.redirect("/login");
    }
  });

  // Wildcard route to serve the index.html file for SPA routing
  app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "../client/dist/index.html"));
  });

  // Start the server once the database connection is open
  db.once("open", () => {
    app.listen(PORT, () => {
      console.log(`API server running on port ${PORT}!`);
      console.log(`Use GraphQL at http://localhost:${PORT}/graphql`);
    });
  });
};

// Call the async function to start the server
startApolloServer();
