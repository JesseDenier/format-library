// Imports React library
import React, { useState, useEffect } from "react";

// Imports PropTypes for type checking of props
import PropTypes from "prop-types";

// Functional component to display web application content
const WebAppViewer = ({ src }) => {
  // State to track if there's an error and what type of error occurred
  const [error, setError] = useState(null);

  // useEffect to check the validity of the src when it changes
  useEffect(() => {
    // Function to check if the src URL is valid
    const checkSrc = async () => {
      try {
        // Attempt to fetch the src URL
        const response = await fetch(src);
        // If the response is not ok, throw an error with a custom message
        if (!response.ok) {
          throw new Error(`Error: ${response.status} ${response.statusText}`);
        }
      } catch (err) {
        // Set the error state with the error message
        setError(err.message || "An unknown error occurred");
      }
    };

    // Call the checkSrc function
    checkSrc();
  }, [src]); // Dependency array ensures this effect runs when src changes

  // Render the component
  return (
    <div className="w-full h-full" style={{ marginBottom: "1rem" }}>
      {/* Add margin to the bottom of the container */}
      {error ? (
        // Display an error message if the content failed to load, along with the error details
        <div className="w-full h-full flex items-center justify-center text-red-500">
          {`Error loading content: ${error}`}
        </div>
      ) : (
        // Otherwise, render an iframe to display the content
        <iframe
          src={src}
          className="w-full h-full"
          style={{ border: "none" }} // Removes the default border from the iframe
          title="Web Application Content" // Adds a title to the iframe
        />
      )}
    </div>
  );
};

// PropTypes for type checking, ensuring 'src' is provided as a string
WebAppViewer.propTypes = {
  src: PropTypes.string.isRequired,
};

// Export the component for use in other parts of the application
export default WebAppViewer;
