// Imports React library
import React from "react";
import { Navigate, Outlet, Link, useLocation } from "react-router-dom";

// Imports the authentication utility
import Auth from "../utils/auth";

// Imports the query utility
import { useQuery } from "@apollo/client";
import { QUERY_USER } from "../utils/queries";

const AuthRoute = () => {
  const location = useLocation();

  // If the user is not logged in, show the login/signup options
  if (!Auth.loggedIn()) {
    // Store the last attempted route in local storage
    localStorage.setItem("lastAttemptedRoute", location.pathname);

    return (
      <div className="flex flex-col items-center justify-center h-screen">
        <div className="w-full max-w-md">
          <div className="shadow-md rounded-lg p-8">
            <div className="card-body text-center">
              <p className="text-center">
                You must be logged in to view this material.
              </p>
              <br />
              <Link
                to="/login"
                className="w-full font-bold py-2 px-4 rounded shadow-md bg-[#bfd9d9] hover:bg-[#006666] hover:text-white"
              >
                Log In
              </Link>
              <br />
              <br />
              <Link
                to="/signup"
                className="w-full font-bold py-2 px-4 rounded shadow-md bg-[#bfd9d9] hover:bg-[#006666] hover:text-white"
              >
                Sign Up
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // If the user is logged in, fetch their profile
  const userId = Auth.getProfile().data._id;
  const { loading, data, error } = useQuery(QUERY_USER, {
    variables: { userId: userId },
  });

  // Show a loading message while the user data is being fetched
  if (loading) {
    return <div>Loading...</div>;
  }

  // Handle errors if any occur during data fetching
  if (error) {
    console.error("Error fetching user data:", error);
    return <div>Error loading user data.</div>;
  }

  const user = data?.user || {};

  // If the user hasn't confirmed their email, redirect to the confirmation page
  if (!user.confirmStatus) {
    return <Navigate to="/confirm" replace />;
  }

  // If the user is logged in and has confirmed their email, show the requested page
  return <Outlet />;
};

export default AuthRoute;
