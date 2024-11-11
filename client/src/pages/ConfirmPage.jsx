// Imports React library
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

// Imports the authentication utility
import Auth from "../utils/auth";

// Imports the query and mutation utilities
import { useMutation, useQuery } from "@apollo/client";
import {
  CONFIRM_USER,
  UPDATE_CONFIRM_NUMBER,
  SEND_CONFIRM_EMAIL,
  SEND_USER_DATA_EMAIL,
} from "../utils/mutations";
import { QUERY_USER } from "../utils/queries";

const ConfirmPage = (props) => {
  const navigate = useNavigate();

  // If user is NOT logged in, inform them they must login to view the page
  // This is necessary because ConfirmPage is not within the scope of AuthRoute and it displays a slightly different message
  if (!Auth.loggedIn()) {
    return (
      <div className="flex flex-col items-center justify-center h-screen">
        <div className="w-full max-w-md">
          <div className="shadow-md rounded-lg p-8">
            <div className="card-body text-center">
              <p className="text-center">
                You must login before you can confirm your email.
              </p>
              <br />
              <Link to="/login" className="w-full font-bold py-2 px-4 rounded">
                Go to Login
              </Link>
              <br />
              <br />
              <Link to="/signup" className="w-full font-bold py-2 px-4 rounded">
                Go to Signup
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Get the logged-in user's ID
  const userId = Auth.getProfile().data._id;

  // Use the user's ID to fetch all user data
  const {
    loading: queryLoading,
    data: userData,
    refetch,
  } = useQuery(QUERY_USER, {
    variables: { userId: userId },
  });

  const [formState, setFormState] = useState({
    confirmNumber: "",
  });

  const [confirmUser, { error, data }] = useMutation(CONFIRM_USER);
  const [updateConfirmNumber] = useMutation(UPDATE_CONFIRM_NUMBER);
  const [sendConfirmEmail] = useMutation(SEND_CONFIRM_EMAIL);
  const [sendUserDataEmail] = useMutation(SEND_USER_DATA_EMAIL);

  const [message, setMessage] = useState(null); // Unified state to handle all form messages
  const [messageType, setMessageType] = useState(null); // To distinguish between error and success messages
  const [isButtonVisible, setIsButtonVisible] = useState(true); // Controls the visibility of the resend button
  const [isSubmitting, setIsSubmitting] = useState(false); // Tracks if the form is being submitted

  // Function to handle the form submission
  const handleFormSubmit = async (event) => {
    event.preventDefault();

    if (isSubmitting) return; // Prevents multiple clicks

    setIsSubmitting(true); // Disable button

    try {
      if (!userData || !userData.user) {
        throw new Error("User data not available");
      }

      const { data } = await confirmUser({
        variables: {
          email: userData.user.email,
          confirmNumber: parseInt(formState.confirmNumber, 10),
        },
      });

      if (data.confirmUser.confirmStatus) {
        Auth.login(data.confirmUser.token);
        await refetch(); // Refetch user data after success
        navigate("/");

        await sendUserDataEmail({
          variables: {
            email: userData.user.email,
            confirmNumber: formState.confirmNumber,
          },
        });
      } else {
        setMessage("Incorrect Confirmation Number");
        setMessageType("error");
        setFormState({ confirmNumber: "" });
      }
    } catch (e) {
      console.error("Error caught in handleFormSubmit:", e);
      setMessage("Incorrect Confirmation Number");
      setMessageType("error");
      setFormState({ confirmNumber: "" });
    } finally {
      setIsSubmitting(false); // Enable button after submission
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormState({
      ...formState,
      [name]: value,
    });
  };

  // Function to handle the resend confirmation
  const handleResendConfirmation = async () => {
    setIsButtonVisible(false); // Hide the button after it's clicked

    // Set confirmNumber to a randomly generated 6 digit number
    const confirmNumber = Math.floor(100000 + Math.random() * 900000);

    try {
      // Update the user's confirmNumber in the database
      const { data } = await updateConfirmNumber({
        variables: {
          userId: userId,
          confirmNumber: confirmNumber,
        },
      });

      // Send the new confirmation number via email using the GraphQL mutation
      const emailResponse = await sendConfirmEmail({
        variables: {
          email: data.updateConfirmNumber.email,
          confirmNumber: confirmNumber.toString(),
        },
      });

      if (emailResponse.data.sendConfirmEmail.success) {
        setMessage("Confirmation number resent successfully!");
        setMessageType("success");
      } else {
        throw new Error(emailResponse.data.sendConfirmEmail.message);
      }
      setFormState({ confirmNumber: "" });
    } catch (error) {
      console.error("Failed to resend confirmation number:", error);
      setMessage("Failed to resend confirmation number.");
      setMessageType("error");
      setIsButtonVisible(true);
      setFormState({ confirmNumber: "" });
    }
  };

  if (queryLoading) {
    return <div>Loading...</div>;
  }

  return (
    <main className="flex items-center justify-center min-h-screen">
      <div className="w-full max-w-md">
        <div className="shadow-md rounded-lg p-6">
          <h4 className="text-3xl font-semibold mb-6 text-center">
            Confirm Account
          </h4>
          <p className="text-center mb-4">
            Thanks for signing up, we've sent a confirmation email to{" "}
            {userData.user.email}. Please enter the confirmation number below to
            verify your email.
          </p>
          <div className="card-body">
            {data ? (
              <p className="text-center">
                Success! You may now head{" "}
                <Link to="/" className="">
                  back to the homepage.
                </Link>
              </p>
            ) : (
              <form onSubmit={handleFormSubmit}>
                <div className="mb-6">
                  <input
                    className="w-full px-3 py-2 border rounded-md"
                    placeholder="Confirmation Number"
                    name="confirmNumber"
                    type="text"
                    value={formState.confirmNumber}
                    onChange={handleChange}
                    autoComplete="off"
                  />
                </div>
                <button
                  className={`w-full font-bold py-2 px-4 rounded shadow-md bg-[#bfd9d9] hover:bg-[#006666] hover:text-white ${
                    isSubmitting ? "opacity-50 cursor-not-allowed" : ""
                  }`}
                  type="submit"
                  disabled={isSubmitting} // Disable button while submitting
                >
                  {isSubmitting ? "Submitting..." : "Submit"}
                </button>
              </form>
            )}
            {isButtonVisible && (
              <button
                className="w-full font-bold py-2 px-4 mt-4 rounded shadow-md bg-[#bfd9d9] hover:bg-[#006666] hover:text-white"
                onClick={handleResendConfirmation}
              >
                Resend Confirmation Number
              </button>
            )}
            {message && (
              <div
                className={`mt-4 p-3 text-center rounded ${
                  messageType === "error" ? "text-red-600" : "text-green-600"
                }`}
              >
                {message}
              </div>
            )}
          </div>
        </div>
      </div>
    </main>
  );
};

export default ConfirmPage;
