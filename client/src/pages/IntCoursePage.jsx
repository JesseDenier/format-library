// Imports React library
import React from "react";

// Imports the WebAppViewer component for displaying Web Apps within an iframe
import WebAppViewer from "../components/WebAppViewer";

const CEWDSamplerPage = () => {
  return (
    <main className="flex flex-col h-screen px-4 mx-auto pt-20">
      <div className="flex-grow mb-4 border border-gray-300 relative">
        <WebAppViewer src={"private/int_course/index.html"} />
      </div>
    </main>
  );
};

export default CEWDSamplerPage;
