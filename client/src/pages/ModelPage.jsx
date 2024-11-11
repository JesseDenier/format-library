// Imports React library
import React from "react";

// Imports the authentication utility
import Auth from "../utils/auth";

// Imports the query utility
import { useQuery } from "@apollo/client";
import { QUERY_USER } from "../utils/queries";

// Imports the WebAppViewer component for displaying Web Apps within an iframe
import WebAppViewer from "../components/WebAppViewer";

const ModelPage = () => {
  const userId = Auth.getProfile().data._id;
  const { loading, data } = useQuery(QUERY_USER, {
    variables: { userId: userId },
  });

  if (loading) {
    return <div>Loading...</div>;
  }

  const user = data?.user || {};

  return (
    <main className="flex flex-col h-screen px-4 mx-auto pt-20">
      <div className="flex-grow mb-4 border border-gray-300 relative">
        <WebAppViewer src={"/private/isca_model/index.html"} />
        {/* User Specific Watermark */}
        <div className="absolute top-10 right-0 p-4 text-right pointer-events-none select-none text-gray-400">
          <p className="text-sm font-semibold">
            {user.firstName} {user.lastName} ({user.email})
          </p>
        </div>
      </div>
    </main>
  );
};

export default ModelPage;
