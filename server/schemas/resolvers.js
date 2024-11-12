// Importing the User model to interact with the user database
import User from "../models/User.js";

// Importing utility functions: signToken for creating JWT tokens and AuthenticationError for handling authentication errors
import { signToken, AuthenticationError } from "../utils/auth.js";

// Importing nodemailer to handle sending emails
import nodemailer from "nodemailer";

// Importing and loading dotenv for environment variables from a .env file into process.env
import dotenv from "dotenv";
dotenv.config();

// Assign the environment variables to constants
const gmailUser = process.env.GMAIL_USER;
const gmailPass = process.env.GMAIL_PASS;

let transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 587,
  secure: false,
  auth: {
    user: gmailUser,
    pass: gmailPass,
  },
});

const resolvers = {
  Query: {
    // Query to get a user by their ID
    user: async (parent, { userId }, context) => {
      console.log(userId); // Log userId for debugging purposes
      return User.findOne({ _id: userId }); // Find and return the user by ID
    },
    // Query to get a user by their email
    checkUserEmail: async (_, { email }) => {
      const user = await User.findOne({ email });
      if (!user) {
        return null;
      }
      return user;
    },
  },
  Mutation: {
    // Mutation to add a new user
    addUser: async (
      parent,
      {
        firstName,
        lastName,
        email,
        password,
        organization,
        role,
        confirmNumber,
        confirmStatus,
      },
      { res }
    ) => {
      try {
        // Convert inputs to lowercase for case-insensitive comparison
        const lowerFirstName = firstName.toLowerCase();
        const lowerLastName = lastName.toLowerCase();
        const lowerEmail = email.toLowerCase();
        const lowerOrganization = organization.toLowerCase();

        const existingUser = await User.findOne({ email: lowerEmail });

        // Custom validations
        if (existingUser) {
          throw new Error("Sign Up Failure: Your email is already in use.");
        }
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
          throw new Error("Sign Up Failure: Your email is invalid.");
        }
        if (password.length < 8) {
          throw new Error("Sign Up Failure: Your password is not long enough.");
        }
        if (!/[a-z]/.test(password)) {
          throw new Error(
            "Sign Up Failure: Your password must contain at least one lowercase letter."
          );
        }
        if (!/[A-Z]/.test(password)) {
          throw new Error(
            "Sign Up Failure: Your password must contain at least one uppercase letter."
          );
        }
        if (!/\d/.test(password)) {
          throw new Error(
            "Sign Up Failure: Your password must contain at least one numerical digit."
          );
        }
        if (password.toLowerCase().includes(lowerFirstName)) {
          throw new Error(
            "Sign Up Failure: Your password cannot contain your first name."
          );
        }
        if (password.toLowerCase().includes(lowerLastName)) {
          throw new Error(
            "Sign Up Failure: Your password cannot contain your last name."
          );
        }
        if (password.toLowerCase().includes(lowerEmail)) {
          throw new Error(
            "Sign Up Failure: Your password cannot contain your email."
          );
        }
        if (password.toLowerCase().includes(lowerOrganization)) {
          throw new Error(
            "Sign Up Failure: Your password cannot contain your organization."
          );
        }
        if (firstName.length > 35) {
          throw new Error(
            "Sign Up Failure: Your first name must be less than 35 characters."
          );
        }
        if (lastName.length > 35) {
          throw new Error(
            "Sign Up Failure: Your last name must be less than 35 characters."
          );
        }
        if (organization.length > 60) {
          throw new Error(
            "Sign Up Failure: Your organization must be less than 60 characters."
          );
        }

        // Create the new user if all validations pass
        const user = await User.create({
          firstName,
          lastName,
          email: lowerEmail,
          password,
          organization,
          role,
          confirmNumber,
          confirmStatus,
        });

        // Generate a token for the newly created user
        const token = signToken(user);

        // Set the token as a secure, HTTP-only cookie
        res.cookie("token", token, {
          httpOnly: true,
          secure: process.env.NODE_ENV === "production",
          sameSite: "strict",
          maxAge: 2 * 60 * 60 * 1000, // 2 hours expiration
        });

        // Return the token and user information
        return { token, user };
      } catch (error) {
        // Log any errors encountered during user creation
        console.error("Error creating user:", error);
        throw new Error(error.message);
      }
    },

    // Mutation to log in a user
    login: async (parent, { email, password }, { res }) => {
      try {
        // Find the user by email
        const user = await User.findOne({ email });
        if (!user) throw new AuthenticationError("Invalid credentials");
        // Check if the password is correct
        const isPasswordCorrect = await user.isCorrectPassword(password);
        if (!isPasswordCorrect)
          throw new AuthenticationError("Invalid credentials");
        // Generate a token for the user
        const token = signToken(user);
        // Set the token as a secure, HTTP-only cookie
        res.cookie("token", token, {
          httpOnly: true,
          secure: process.env.NODE_ENV === "production",
          sameSite: "strict",
          maxAge: 2 * 60 * 60 * 1000, // 2 hours expiration
        });
        // Return the token and user information
        return { token, user };
      } catch (error) {
        console.error("Login error:", error);
        throw new Error("An error occurred during login.");
      }
    },

    // Mutation to log out a user
    logout: async (parent, args, { res, user }) => {
      // Check if the user is logged in
      if (!user) {
        throw new AuthenticationError("Not logged in");
      }

      // Clear the token cookie
      res.clearCookie("token", {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        sameSite: "strict",
      });

      console.log("User logged out and cookie cleared.");

      // Return a success message
      return { success: true };
    },

    // Mutation to confirm a user
    confirmUser: async (parent, { email, confirmNumber }) => {
      try {
        console.log("Received confirmUser mutation request:");
        console.log("Email:", email);
        console.log("Confirmation Number:", confirmNumber);

        const user = await User.findOne({ email });

        if (!user) {
          console.error("User not found with email:", email);
          throw new AuthenticationError("User not found");
        }

        if (user.confirmNumber !== confirmNumber) {
          console.error("Incorrect confirmation number for user:", email);
          throw new AuthenticationError("Incorrect confirmation number");
        }

        user.confirmStatus = true;
        await user.save();

        const token = signToken(user);

        console.log("User confirmed successfully. Token generated.");

        return { token, user, confirmStatus: user.confirmStatus };
      } catch (error) {
        console.error("Error in confirmUser resolver:", error);
        throw new Error("Error in confirmUser resolver");
      }
    },

    // Mutation to update a users confirm number
    updateConfirmNumber: async (parent, { userId, confirmNumber }) => {
      try {
        const user = await User.findById(userId);

        if (!user) {
          throw new Error("User not found");
        }

        user.confirmNumber = confirmNumber;
        await user.save();

        return user; // Return the updated user
      } catch (error) {
        console.error("Error updating confirm number:", error);
        throw new Error("Error updating confirm number");
      }
    },

    updatePassword: async (parent, { email, password }) => {
      try {
        const user = await User.findOne({ email });

        if (!user) {
          throw new AuthenticationError("User not found");
        }

        // Assuming the password must meet the same criteria as in the `addUser` mutation
        if (password.length < 8) {
          throw new Error("Password is not long enough.");
        }
        if (!/[a-z]/.test(password)) {
          throw new Error(
            "Password must contain at least one lowercase letter."
          );
        }
        if (!/[A-Z]/.test(password)) {
          throw new Error(
            "Password must contain at least one uppercase letter."
          );
        }
        if (!/\d/.test(password)) {
          throw new Error(
            "Password must contain at least one numerical digit."
          );
        }

        user.password = password;
        await user.save();

        return user; // Return the updated user
      } catch (error) {
        console.error("Error updating password:", error);
        throw new Error("Error updating password.");
      }
    },

    // Mutation to send a user their confirmNumber
    sendConfirmEmail: async (_, { email, confirmNumber }) => {
      try {
        const info = await transporter.sendMail({
          from: '"ISCA No Reply" <theformatgrouptech@gmail.com>',
          to: email,
          subject: "Email Confirmation",
          text: `Email Confirmation Number = ${confirmNumber}\nInput this number at iscapublications.com/confirm while logged in to confirm your email address.`,
          html: `<p>Email Confirmation Number = <b>${confirmNumber}</b><br>Input this number at iscapublications.com/confirm while logged in to confirm your email address.</p>`,
        });

        console.log("Message sent: %s", info.messageId);
        return { success: true, message: "Email sent successfully!" };
      } catch (error) {
        console.error("Error sending email:", error);
        return { success: false, message: "Failed to send email." };
      }
    },

    // Mutation to send a user their confirmNumber
    sendPasswordEmail: async (_, { email, confirmNumber }) => {
      try {
        const info = await transporter.sendMail({
          from: '"ISCA No Reply" <theformatgrouptech@gmail.com>',
          to: email,
          subject: "Password Reset Confirmation",
          text: `Password Reset Confirmation Number = ${confirmNumber}`,
          html: `<p>Password Reset Confirmation Number = <b>${confirmNumber}</b></p>`,
        });

        console.log("Message sent: %s", info.messageId);
        return { success: true, message: "Email sent successfully!" };
      } catch (error) {
        console.error("Error sending email:", error);
        return { success: false, message: "Failed to send email." };
      }
    },

    // Mutation to send users data to ISCA
    sendUserDataEmail: async (_, { email, confirmNumber }) => {
      try {
        const user = await User.findOne({ email });
        if (!user) {
          throw new Error("User not found");
        }

        // Destructure the user's data from the found user object
        const { firstName, lastName, organization, role } = user;

        // Send the email using nodemailer
        const info = await transporter.sendMail({
          from: '"ISCA No Reply" <theformatgrouptech@gmail.com>',
          to: "adminsupport@iscainfo.com",
          subject: "ISCA Publications New Confirmed User",
          text: `New User\nFirst Name: ${firstName}\nLast Name: ${lastName}\nEmail: ${email}\nOrganization: ${organization}\nRole: ${role}`,
          html: `
        <p>New User</p>
        <p><b>First Name:</b> ${firstName}</p>
        <p><b>Last Name:</b> ${lastName}</p>
        <p><b>Email:</b> ${email}</p>
        <p><b>Organization:</b> ${organization}</p>
        <p><b>Role:</b> ${role}</p>
      `,
        });

        console.log("Message sent: %s", info.messageId);
        return { success: true, message: "Email sent successfully!" };
      } catch (error) {
        console.error("Error sending email:", error);
        return { success: false, message: "Failed to send email." };
      }
    },
  },
};

export default resolvers;
