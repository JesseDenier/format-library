// Imports React library
import React from "react";
import { Outlet } from "react-router-dom";

// Imports the Tailwind created CSS file for styling
import "./output.css";

// Imports custom header component
import Header from "./components/Header";

// Imports ScrollToTop component
import ScrollToTop from "./utils/scrollToTop"; // Make sure to adjust the path based on your directory structure

// Functional component App
const App = () => {
  return (
    <>
      {/* Header renders the custom component */}
      <Header />

      {/* ScrollToTop ensures that every route change scrolls to the top */}
      <ScrollToTop />

      {/* Outlet renders matched child routes */}
      <Outlet />
    </>
  );
};

// Exports the App component as the default export
export default App;
