// Imports React library
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

// Imports the authentication utility
import Auth from "../utils/auth";

// Imports a specific mutation utility
import { useMutation } from "@apollo/client";
import { LOGIN } from "../utils/mutations";

// Login Component: Handles user login functionality
function LogInPage(props) {
  // State to manage form input values
  const [formState, setFormState] = useState({ email: "", password: "" });
  // State to manage form error messages
  const [formError, setFormError] = useState("");
  // useMutation hook for the LOGIN mutation
  const [login] = useMutation(LOGIN);

  // useNavigate hook to programmatically navigate
  const navigate = useNavigate();

  // Handles form submission
  const handleFormSubmit = async (event) => {
    event.preventDefault();

    // Clear any previous form error
    setFormError("");

    try {
      const mutationResponse = await login({
        variables: { email: formState.email, password: formState.password },
      });
      const token = mutationResponse.data.login.token;

      Auth.login(token);

      // Get the last attempted route from local storage
      const lastAttemptedRoute =
        localStorage.getItem("lastAttemptedRoute") || "/";
      console.log("Redirecting to:", lastAttemptedRoute);

      // Clear the last attempted route from local storage
      localStorage.removeItem("lastAttemptedRoute");

      // Redirect to the last attempted route, or the home page if none was stored
      navigate(lastAttemptedRoute);
    } catch (e) {
      // Set a generic error message instead of displaying the server error
      //! This should be improved in the future so if there are server issues it informs the user rather than staying generic.
      setFormError("Incorrect email or password.");
    }
  };

  // Handles changes to form inputs
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormState({
      ...formState,
      [name]: value,
    });
  };

  return (
    <main className="flex items-center justify-center min-h-screen">
      <div className="w-full max-w-md">
        <div className="shadow-md rounded-lg p-6">
          <h4 className="text-3xl font-semibold mb-6 text-center">Login</h4>
          <div className="card-body">
            <form onSubmit={handleFormSubmit}>
              <div className="mb-4">
                <input
                  className="w-full px-3 py-2 border border-gray-300 rounded-md"
                  placeholder="Email"
                  name="email"
                  type="email"
                  id="email"
                  onChange={handleChange}
                  autoComplete="email"
                />
              </div>
              <div className="mb-6">
                <input
                  className="w-full px-3 py-2 border border-gray-300 rounded-md"
                  placeholder="Password"
                  name="password"
                  type="password"
                  id="pwd"
                  onChange={handleChange}
                  autoComplete="current-password"
                />
              </div>

              <div className="flex items-center justify-between">
                <Link
                  to="/forgotpassword"
                  className="w-1/2 text-center font-bold py-2 px-4 rounded shadow-md bg-[#bfd9d9] hover:bg-[#006666] hover:text-white"
                >
                  Forgot Password
                </Link>
                <button
                  type="submit"
                  className="w-2/5 font-bold py-2 px-4 rounded shadow-md bg-[#bfd9d9] hover:bg-[#006666] hover:text-white"
                >
                  Submit
                </button>
              </div>
              {/* Display form error */}
              {formError && (
                <div className="mt-6 text-red-600 text-center">{formError}</div>
              )}
            </form>
          </div>
        </div>
      </div>
    </main>
  );
}

export default LogInPage;
