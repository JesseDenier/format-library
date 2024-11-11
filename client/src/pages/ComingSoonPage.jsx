// Imports React library
import React from "react";
import { Link } from "react-router-dom";

// Displays an error message and a link to navigate back to the home page
const ComingSoonPage = ({ data }) => {
  return (
    <main className="flex items-center justify-center min-h-screen">
      {/* Container for the error message */}
      <div className="w-full max-w-md">
        <div className="shadow-md rounded-lg p-6">
          <h4 className="text-2xl font-semibold mb-6 text-center">
            Coming Soon!
          </h4>
          <div className="card-body">
            <div className="mb-6">
              <p className="text-center">
                This content is not currently available.
              </p>
            </div>
            {/* Link to navigate back to the home page */}
            <div className="flex justify-center">
              <Link
                to="/"
                className="text-center w-1/2 font-bold py-2 px-4 rounded shadow-md bg-[#bfd9d9] hover:bg-[#006666] hover:text-white"
              >
                Go Back to Home
              </Link>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default ComingSoonPage;
