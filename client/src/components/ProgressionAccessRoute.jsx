// Imports React library
import React from "react";
import { Outlet } from "react-router-dom";

// Imports the authentication utility
import Auth from "../utils/auth";

// Imports the query utility
import { useQuery } from "@apollo/client";
import { QUERY_USER } from "../utils/queries";

const ProgressionAccessRoute = () => {
  // If user is NOT logged in display the page they are attempting to view
  if (!Auth.loggedIn()) {
    return <Outlet />;
  }

  // Get the logged-in user's ID
  const userId = Auth.getProfile().data._id;

  // Use the user's ID to fetch all user data
  const { loading, data, error } = useQuery(QUERY_USER, {
    variables: { userId: userId },
  });

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    console.error("Error fetching user data:", error);
    return <div>Error loading user data.</div>;
  }

  const user = data?.user || {};

  // If user does NOT have access to the Learning Progression inform the user they must pay to access them
  if (!user.progressionAccess) {
    return (
      <div className="flex flex-col items-center justify-center h-screen">
        <div className="w-full max-w-md">
          <div className="shadow-md rounded-lg p-8">
            <div className="card-body text-center">
              <p className="text-center mb-4">
                You do not have access to the Learning Progression. Use the link
                below to purchase the Learning Progression.
              </p>
              <a
                // Link updated 10/16/24.
                href="https://isca18.wildapricot.org/event-5899708"
                className="w-full font-bold py-2 px-4 rounded shadow-md bg-[#bfd9d9] hover:bg-[#006666] hover:text-white"
                target="_blank"
              >
                Purchase the Learning Progression
              </a>
              <p className="text-center mt-6 mb-4">
                If you have previously purchased the digital edition of the
                Learning Progression use the link below to contact ISCA.
              </p>

              <a
                href={`mailto:adminsupport@iscainfo.com?subject=ISCA%20Model%20Access%20Issue&body=I%20purchased%20the%20digital%20version%20of%20the%20ISCA%20Student%20Standards%20Learning%20Progression,%20but%20I%20do%20not%20have%20access%20to%20the%20Learning%20Progression%20on%20the%20ISCA%20publications%20site.%0A%0AMy%20name%20is%20${user.firstName}%20${user.lastName},%20and%20the%20email%20I%20purchased%20it%20with%20is%20${user.email}.%0A%0AThank%20you.`}
                className="w-full font-bold py-2 px-4 rounded shadow-md bg-[#bfd9d9] hover:bg-[#006666] hover:text-white"
              >
                Contact ISCA
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Else display the page they are attempting to view
  return <Outlet />;
};

export default ProgressionAccessRoute;
