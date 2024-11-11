// Import necessary mongoose and bcrypt assets
import { Schema, model } from "mongoose";
import bcrypt from "bcrypt";

// Define the User schema with necessary fields and validation
const userSchema = new Schema({
  firstName: {
    type: String,
    required: true,
    trim: true,
  },
  lastName: {
    type: String,
    required: true,
    trim: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    match: /^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/, // Email regex for validation
    lowercase: true,
  },
  password: {
    type: String,
    required: true,
    validate: {
      validator: function (value) {
        // Check password length
        if (value.length < 8) {
          return false;
        }
        // Check for at least one uppercase letter
        if (!/[A-Z]/.test(value)) {
          return false;
        }
        // Check for at least one lowercase letter
        if (!/[a-z]/.test(value)) {
          return false;
        }
        // Check for at least one digit
        if (!/\d/.test(value)) {
          return false;
        }
        // Check if password matches firstName lastName or email
        if (
          value === this.firstName ||
          value === this.lastName ||
          value === this.email
        ) {
          return false;
        }
        return true;
      },
      message:
        "Your password must be at least 8 characters long, contain at least one uppercase letter, one lowercase letter, and one numerical digit, and cannot match your name or email.",
    },
  },
  role: {
    type: String,
    required: true,
  },
  school: {
    type: String,
    required: true,
    trim: true,
  },
  modelAccess: {
    type: Boolean,
    default: false,
  },
  progressionAccess: {
    type: Boolean,
    default: false,
  },
  confirmNumber: {
    type: Number,
    required: true,
    trim: true,
  },
  confirmStatus: {
    type: Boolean,
    default: false,
  },
});

// Pre-save middleware to hash the password before saving
userSchema.pre("save", async function (next) {
  if (this.isNew || this.isModified("password")) {
    try {
      const saltRounds = 10;
      this.password = await bcrypt.hash(this.password, saltRounds); // Hash the password
    } catch (err) {
      return next(err);
    }
  }
  next(); // Proceed to the next middleware or save the document
});

// Compare incoming password with the hashed password
userSchema.methods.isCorrectPassword = async function (password) {
  return await bcrypt.compare(password, this.password); // Return the result of password comparison
};

// Initialize and export the user model
const User = model("User", userSchema);
export default User;
