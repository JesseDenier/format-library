// Load environment variables from a .env file into process.env
import dotenv from "dotenv";
dotenv.config();
// Import mongoose for database interaction
import mongoose from "mongoose";
// Import bcrypt for hashing passwords
import bcrypt from "bcrypt";
// Import the User model from the specified path
import User from "../models/User.js";

// Get the database URL from environment variables
const formatpaywallDB = process.env.FORMATPAYWALL_DB;

// Function to seed the database with initial data
const seedData = async () => {
  try {
    // Connect to the MongoDB database
    await mongoose.connect(formatpaywallDB, {});

    // Sample user data to seed
    const users = [
      {
        firstName: "Jane",
        lastName: "Smith",
        email: "paid@gmail.com",
        password: "Password1",
        role: "School Counselor",
        school: "Global School",
        modelAccess: true,
        progressionAccess: true,
        confirmNumber: 567890,
        confirmStatus: true,
      },
      {
        firstName: "John",
        lastName: "Smith",
        email: "free@gmail.com",
        password: "Password1",
        role: "Other",
        school: "Local School",
        modelAccess: false,
        progressionAccess: false,
        confirmNumber: 123456,
        confirmStatus: true,
      },
    ];

    // Hash passwords before inserting users into the database
    const saltRounds = 10;
    for (let user of users) {
      user.password = await bcrypt.hash(user.password, saltRounds);

      // Upsert (update if exists, insert if not)
      await User.findOneAndUpdate(
        { email: user.email }, // Find a user by their email
        user, // If found, update with the new data
        { upsert: true, new: true } // If not found, insert as a new user
      );
    }

    // Log success message and close the database connection
    console.log("Data seeded successfully");
    mongoose.connection.close();
  } catch (error) {
    // Log any errors and close the database connection
    console.error("Error seeding data", error);
    mongoose.connection.close();
  }
};

seedData();
