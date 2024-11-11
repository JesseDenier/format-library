// Imports mongoose for database usage
import mongoose from "mongoose";

// Imports and configures dotenv for sensitive information protection
import dotenv from "dotenv";
dotenv.config();

// Connect to MongoDB Atlas using the connection string from environment variables
mongoose.connect(process.env.FORMATPAYWALL_DB, {});

// Export the connection object using ES module syntax
const db = mongoose.connection;
export default db;
