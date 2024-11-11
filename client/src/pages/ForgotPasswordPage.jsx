// Imports React library and hooks
import React, { useState } from "react";

// Imports the query and mutation utilities from Apollo Client
import { useLazyQuery, useMutation } from "@apollo/client";
import { CHECK_USER_EMAIL } from "../utils/queries";
import {
  SEND_PASSWORD_EMAIL,
  UPDATE_CONFIRM_NUMBER,
  UPDATE_PASSWORD,
} from "../utils/mutations";
import { useNavigate } from "react-router-dom"; // For navigation

const ForgotPasswordPage = () => {
  const navigate = useNavigate();

  // Tracks multiple user inputs
  const [email, setEmail] = useState("");
  const [confirmationNumber, setConfirmationNumber] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  // Flags to track if email has been sent, if identity has been confirmed, and if the page is "loading"
  const [emailSent, setEmailSent] = useState(false);
  const [identityConfirmed, setIdentityConfirmed] = useState(false);
  const [loading, setLoading] = useState(false);

  // Stores actual confirmNumber from server, and any error messages
  const [confirmNumber, setConfirmNumber] = useState(null);
  const [error, setError] = useState(null);

  // State for password validation
  const [passwordValidation, setPasswordValidation] = useState({
    length: false,
    upper: false,
    lower: false,
    digit: false,
    match: true,
  });

  // Lazy query to check if the email exists in the system
  const [checkUserEmail] = useLazyQuery(CHECK_USER_EMAIL, {
    onCompleted: async (data) => {
      if (data?.checkUserEmail) {
        const userId = data.checkUserEmail._id; // Fetch the user's ID
        const generatedConfirmNumber = Math.floor(
          100000 + Math.random() * 900000
        ); // Generate a random confirmation number

        try {
          // Update the confirmNumber in the database before sending the email
          const { data: updateData } = await updateConfirmNumber({
            variables: { userId, confirmNumber: generatedConfirmNumber },
          });

          // Trigger the password reset email with the updated confirmNumber
          await sendPasswordEmail({
            variables: {
              email,
              confirmNumber: generatedConfirmNumber.toString(),
            },
          });

          setConfirmNumber(generatedConfirmNumber.toString()); // Store the confirmation number
          setEmailSent(true); // Set emailSent to true after successful email sending
          setError(null);
        } catch (updateError) {
          setError("Failed to update confirmation number and send email.");
          console.error("Error in updateConfirmNumber:", updateError);
        }
      } else {
        // If no user is found, show an error message
        setError("This email is not associated with any users.");
      }
      setLoading(false); // Set loading to false after completion
    },
    onError: (err) => {
      console.error("Error checking user email:", err);
      setError("An error occurred while checking the email.");
      setLoading(false); // Set loading to false after error
    },
  });

  const [sendPasswordEmail] = useMutation(SEND_PASSWORD_EMAIL, {
    onCompleted: () => {
      setEmailSent(true); // Set emailSent to true after successful email sending
    },
    onError: (err) => {
      console.error("Error sending password email:", err);
      setError("Failed to send password reset email.");
    },
  });

  const [updateConfirmNumber] = useMutation(UPDATE_CONFIRM_NUMBER);

  const [updatePassword] = useMutation(UPDATE_PASSWORD, {
    onCompleted: () => {
      setError("Password has been successfully reset!");
      navigate("/login");
    },
    onError: (err) => {
      console.error("Error updating password:", err);
      const detailedErrorMessage =
        err?.graphQLErrors?.[0]?.message || "Failed to update the password.";
      setError(detailedErrorMessage);
    },
  });

  // Handles the email submission for password reset
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (loading) return; // Prevent multiple submissions
    setLoading(true); // Set loading to true when the request is initiated
    setError(null);
    checkUserEmail({ variables: { email } });
  };

  const handleConfirmationSubmit = (e) => {
    e.preventDefault();
    if (confirmationNumber === confirmNumber) {
      setIdentityConfirmed(true); // If the confirmation number matches, the identity is confirmed
      setError(null);
    } else {
      setError("Incorrect confirmation number!");
    }
  };

  // Validate password and update the state on every password input change
  const handlePasswordChange = (e) => {
    const newPassword = e.target.value;
    setPassword(newPassword);

    // Validate password criteria dynamically
    const length = newPassword.length >= 8;
    const upper = /[A-Z]/.test(newPassword);
    const lower = /[a-z]/.test(newPassword);
    const digit = /\d/.test(newPassword);
    const match = newPassword === confirmPassword;

    setPasswordValidation({
      length,
      upper,
      lower,
      digit,
      match,
    });
  };

  const handleConfirmPasswordChange = (e) => {
    const newConfirmPassword = e.target.value;
    setConfirmPassword(newConfirmPassword);

    // Validate if the password and confirm password match
    setPasswordValidation((prevValidation) => ({
      ...prevValidation,
      match: password === newConfirmPassword,
    }));
  };

  // Handles the new password submission
  const handlePasswordSubmit = (e) => {
    e.preventDefault();
    setError(null);
    if (
      passwordValidation.length &&
      passwordValidation.upper &&
      passwordValidation.lower &&
      passwordValidation.digit &&
      passwordValidation.match
    ) {
      // Proceed with updating the password
      updatePassword({ variables: { email, newPassword: password } });
    } else {
      setError("Please ensure your password meets all the requirements.");
    }
  };

  return (
    <main className="flex items-center justify-center min-h-screen">
      <div className="w-full max-w-md">
        <div className="shadow-md rounded-lg p-6">
          {/* Show different sections based on the user's progress */}
          {!emailSent ? (
            <>
              <h4 className="text-3xl font-semibold mb-6 text-center">
                Forgot your password?
              </h4>
              <p className="text-center mb-4">
                Enter your email below and we will send you a secret code to
                confirm your identity.
              </p>
            </>
          ) : !identityConfirmed ? (
            <>
              <h4 className="text-3xl font-semibold mb-6 text-center">
                Password reset email sent successfully!
              </h4>
              <p className="text-center mb-4">
                Enter the code we just sent you below to confirm your identity.
              </p>
            </>
          ) : (
            <>
              <h4 className="text-3xl font-semibold mb-6 text-center">
                Identity Confirmed
              </h4>
              <p className="text-center mb-4">
                Enter a new password below for the account of {email}.
              </p>
            </>
          )}

          {/* Initial email form */}
          {!emailSent ? (
            <div className="card-body">
              <form onSubmit={handleSubmit}>
                <div className="mb-6">
                  <input
                    className="w-full px-3 py-2 border border-gray-300 rounded-md"
                    placeholder="Email"
                    name="email"
                    type="email"
                    id="email"
                    autoComplete="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <button
                  type="submit"
                  disabled={loading}
                  className={`w-full font-bold py-2 px-4 rounded shadow-md ${
                    loading
                      ? "bg-gray-300"
                      : "bg-[#bfd9d9] hover:bg-[#006666] hover:text-white"
                  }`}
                >
                  {loading ? "Processing..." : "Request Confirmation Code"}
                </button>
              </form>
              {error && (
                <div className="mt-6 text-red-600 text-center">{error}</div>
              )}
            </div>
          ) : !identityConfirmed ? (
            // Confirmation code form
            <div className="card-body">
              <form onSubmit={handleConfirmationSubmit}>
                <div className="mb-6">
                  <input
                    className="w-full px-3 py-2 border border-gray-300 rounded-md"
                    placeholder="Confirmation Number"
                    name="confirmationNumber"
                    type="text"
                    id="confirmationNumber"
                    value={confirmationNumber}
                    onChange={(e) => setConfirmationNumber(e.target.value)}
                  />
                </div>
                <button
                  type="submit"
                  className="w-full font-bold py-2 px-4 rounded shadow-md bg-[#bfd9d9] hover:bg-[#006666] hover:text-white"
                >
                  Confirm Identity
                </button>
              </form>
              {error && (
                <div className="mt-6 text-red-600 text-center">{error}</div>
              )}
            </div>
          ) : (
            // New password form
            <div className="card-body">
              <form onSubmit={handlePasswordSubmit}>
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
                    className="w-full px-3 py-2 border border-gray-300 rounded-md"
                    placeholder="New Password"
                    name="password"
                    type="password"
                    id="password"
                    autoComplete="new-password"
                    value={password}
                    onChange={handlePasswordChange}
                  />
                </div>
                <div className="mb-6">
                  <input
                    className="w-full px-3 py-2 border border-gray-300 rounded-md"
                    placeholder="Confirm New Password"
                    name="confirmPassword"
                    type="password"
                    id="confirmPassword"
                    autoComplete="new-password"
                    value={confirmPassword}
                    onChange={handleConfirmPasswordChange}
                  />
                </div>
                <button
                  type="submit"
                  className="w-full font-bold py-2 px-4 rounded shadow-md bg-[#bfd9d9] hover:bg-[#006666] hover:text-white"
                >
                  Set New Password
                </button>
              </form>
              {error && (
                <div className="mt-6 text-red-600 text-center">{error}</div>
              )}
            </div>
          )}
        </div>
      </div>
    </main>
  );
};

export default ForgotPasswordPage;
