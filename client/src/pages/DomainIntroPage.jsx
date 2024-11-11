// Imports React library
import React from "react";

// Imports the authentication utility
import Auth from "../utils/auth";

// Imports the query utility
import { useQuery } from "@apollo/client";
import { QUERY_USER } from "../utils/queries";

// Imports PDF handling
import { handlePDFWatermarkAndDownload } from "../utils/pdfUtils";

// Imports the WebAppViewer component for displaying Web Apps within an iframe
import WebAppViewer from "../components/WebAppViewer";

const DomainIntroPage = () => {
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
      <div className="text-center pb-4 space-y-2 sm:space-y-0">
        <button
          onClick={() =>
            handlePDFWatermarkAndDownload(
              "/private/domain_intro.pdf",
              user,
              "ISCA Progression Intro"
            )
          }
          className="bg-[#026666] hover:bg-[#9acdc0] text-white font-bold py-2 px-4 mx-2 rounded"
        >
          Digital PDF Download
        </button>
        <button
          onClick={() =>
            handlePDFWatermarkAndDownload(
              "/private/domain_intro_p.pdf",
              user,
              "ISCA Progression Intro Print"
            )
          }
          className="bg-[#026666] hover:bg-[#9acdc0] text-white font-bold py-2 px-4 mx-2 rounded"
        >
          Print PDF Download
        </button>
      </div>
      <div className="flex-grow mb-4 border border-gray-300 relative">
        <WebAppViewer src={"/private/isca_progression_intro/index.html"} />

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

export default DomainIntroPage;
