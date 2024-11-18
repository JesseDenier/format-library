// Imports React library
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

// Imports the authentication utility
import Auth from "../utils/auth";

// Imports a mutation utilities
import { useMutation } from "@apollo/client";
import { ADD_USER, SEND_CONFIRM_EMAIL } from "../utils/mutations";

// Signup Component: Handles user registration functionality
const SignUpPage = () => {
  // Instigate the navigate hook
  const navigate = useNavigate();

  // State for form inputs
  const [formState, setFormState] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
    organization: "",
    role: "",
    howHear: "",
  });

  // State for password validation
  const [passwordValidation, setPasswordValidation] = useState({
    length: false,
    upper: false,
    lower: false,
    digit: false,
    match: true,
  });

  // State to handle password mismatch error
  const [formError, setFormError] = useState(""); // Single state for all errors

  // GraphQL mutation hook for adding a new user
  const [addUser, { error, data }] = useMutation(ADD_USER);

  // Existing state and mutations...
  const [sendConfirmEmail] = useMutation(SEND_CONFIRM_EMAIL);

  // Handle form submission
  const handleFormSubmit = async (event) => {
    event.preventDefault();

    // Check if passwords match before submitting
    if (formState.password !== formState.confirmPassword) {
      setFormError("Sign Up Failure: Your passwords do not match.");
      return;
    }

    // Clear any previous form error
    setFormError("");

    // Sets confirmNumber to a random 6 digit number
    let confirmNumber = Math.floor(100000 + Math.random() * 900000);

    try {
      const { data } = await addUser({
        variables: { ...formState, confirmNumber },
      });

      // Log the user in after successful registration and return to Home
      Auth.login(data.addUser.token);
      navigate("/confirm");

      // Send email using the GraphQL mutation
      const emailResponse = await sendConfirmEmail({
        variables: {
          email: formState.email,
          confirmNumber: confirmNumber.toString(),
        },
      });

      if (!emailResponse.data.sendConfirmEmail.success) {
        console.error(
          "Failed to send email:",
          emailResponse.data.sendConfirmEmail.message
        );
      }
    } catch (e) {
      // Set the error message from the server or mutation
      setFormError(e.message);
    }
  };

  // Handle input changes and validate the password
  const handleChange = (event) => {
    const { name, value } = event.target;

    // Update form state
    setFormState((prevState) => ({
      ...prevState,
      [name]: value,
    }));

    // Validate the password on each change
    if (name === "password") {
      validatePassword(value);
    }
  };

  // Validate the password based on multiple criteria
  const validatePassword = (password) => {
    const length = password.length >= 8;
    const upper = /[A-Z]/.test(password);
    const lower = /[a-z]/.test(password);
    const digit = /\d/.test(password);
    const match =
      password !== formState.firstName &&
      password !== formState.lastName &&
      password !== formState.email &&
      password !== formState.organization;

    setPasswordValidation({
      length,
      upper,
      lower,
      digit,
      match,
    });
  };

  return (
    <main className="flex items-center justify-center min-h-screen">
      <div className="w-full max-w-md">
        <div className="shadow-md rounded-lg p-6">
          <h4 className="text-3xl font-semibold mb-6 text-center">Sign Up</h4>
          <div className="card-body">
            {/* Sign Up form */}
            <form onSubmit={handleFormSubmit}>
              <div className="mb-4 flex space-x-4">
                <input
                  className="w-full px-3 py-2 border rounded-md"
                  placeholder="First Name"
                  name="firstName"
                  type="text"
                  value={formState.firstName}
                  onChange={handleChange}
                  autoComplete="given-name"
                />
                <input
                  className="w-full px-3 py-2 border rounded-md"
                  placeholder="Last Name"
                  name="lastName"
                  type="text"
                  value={formState.lastName}
                  onChange={handleChange}
                  autoComplete="family-name"
                />
              </div>
              <div className="mb-4">
                <input
                  className="w-full px-3 py-2 border rounded-md"
                  placeholder="Email"
                  name="email"
                  type="email"
                  value={formState.email}
                  onChange={handleChange}
                  autoComplete="email"
                />
              </div>
              <div className="mb-4">
                <input
                  className="w-full px-3 py-2 border rounded-md"
                  placeholder="Organization"
                  name="organization"
                  type="text"
                  value={formState.organization}
                  onChange={handleChange}
                  autoComplete="organization"
                />
              </div>
              <div className="mb-4">
                <input
                  className="w-full px-3 py-2 border rounded-md"
                  placeholder="Role"
                  name="role"
                  type="text"
                  value={formState.role}
                  onChange={handleChange}
                  autoComplete="organization-title"
                />
              </div>
              {/* How Did You Hear About Us selection */}
              <div className="mb-4">
                <select
                  name="howHear"
                  value={formState.howHear}
                  onChange={handleChange}
                  className={`w-full px-3 py-2 border rounded-md ${
                    formState.howHear ? "text-black" : "text-gray-500"
                  }`}
                >
                  <option className="text-gray-500" value="" disabled>
                    How Did You Hear About Us?
                  </option>
                  <option value="CEWD">CEWD Summit</option>
                  <option value="ATD">ATD Conference</option>
                  <option value="ASCA">ASCA Conference</option>
                  <option value="DevLearn">DevLearn Expo</option>
                  <option value="TCEA">TCEA Convention</option>
                  <option value="Other">Other</option>
                </select>
              </div>
              <div className="mb-6">
                <ul className="text-sm grid grid-cols-2 gap-2 list-disc pl-4 ml-2 mb-4">
                  <li
                    className={
                      passwordValidation.length
                        ? "text-green-600 pl-2"
                        : "text-slate-400 pl-2"
                    }
                  >
                    8+ Characters
                  </li>
                  <li
                    className={
                      passwordValidation.upper
                        ? "text-green-600 pl-2"
                        : "text-slate-400 pl-2"
                    }
                  >
                    Uppercase Letter
                  </li>
                  <li
                    className={
                      passwordValidation.lower
                        ? "text-green-600 pl-2"
                        : "text-slate-400 pl-2"
                    }
                  >
                    Lowercase Letter
                  </li>
                  <li
                    className={
                      passwordValidation.digit
                        ? "text-green-600 pl-2"
                        : "text-slate-400 pl-2"
                    }
                  >
                    Numerical Digit
                  </li>
                </ul>
                <input
                  className="w-full px-3 py-2 border rounded-md"
                  placeholder="Password"
                  name="password"
                  type="password"
                  value={formState.password}
                  onChange={handleChange}
                  autoComplete="current-password"
                />
                <input
                  className="w-full px-3 py-2 border rounded-md mt-4"
                  placeholder="Confirm Password"
                  name="confirmPassword"
                  type="password"
                  value={formState.confirmPassword}
                  onChange={handleChange}
                  autoComplete="current-password"
                />
              </div>
              <button
                className="w-full font-bold py-2 px-4 rounded shadow-md bg-[#bfd9d9] hover:bg-[#006666] hover:text-white"
                type="submit"
              >
                Submit
              </button>
            </form>
            {/* Display form error */}
            {formError && (
              <div className="mt-6 text-red-600 text-center">{formError}</div>
            )}
          </div>
        </div>
      </div>
    </main>
  );
};

export default SignUpPage;
