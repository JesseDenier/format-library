// Imports React library
import React from "react";
import { useLocation, Link, useNavigate } from "react-router-dom";
// Imports a specific mutation utility
import { useMutation } from "@apollo/client";
import { LOGOUT } from "../utils/mutations";

// Imports the authentication utility
import Auth from "../utils/auth";

// Imports the logo
import Logo from "/format_logo.svg";

// Functional component for the Header
const Header = () => {
  const location = useLocation();
  const currentPath = location.pathname;
  const navigate = useNavigate();

  // Define the logout mutation
  const [logout] = useMutation(LOGOUT);

  // Function to handle logout and then redirect to home
  const handleLogout = async () => {
    try {
      await logout(); // Call the logout mutation
      Auth.logout(); // Clear client-side authentication state
      navigate("/"); // Redirect to home page
    } catch (error) {
      console.error("Logout error:", error);
    }
  };

  return (
    <header className="bg-[#9ad7d9] text-white p-2 fixed top-0 w-full z-10 max-h-20">
      <div className="flex items-center justify-between h-full">
        <div className="flex items-center h-full">
          {/* Display the Format logo in the top left */}
          <Link to="/" className="flex items-center h-full">
            <img src={Logo} alt="Logo" className="h-12 max-h-16 mr-2" />
          </Link>
        </div>
        {/* Display a dynamic list of links in the top right */}
        <nav className="ml-auto">
          <ul className="flex space-x-4">
            {/* If user is NOT currently on the home page provide a link to the "Home" page */}
            {currentPath !== "/" && (
              <li>
                <Link to="/" className="text-black">
                  Home
                </Link>
              </li>
            )}
            {/* If user is NOT currently logged in and NOT on the log in page provide a link to the log in page */}
            {!Auth.loggedIn() && currentPath !== "/login" && (
              <li>
                <Link to="/login" className="text-black">
                  Log In
                </Link>
              </li>
            )}
            {/* If user is NOT logged in and NOT on the sign up page provide a link to the sign up page */}
            {!Auth.loggedIn() && currentPath !== "/signup" && (
              <li>
                <Link to="/signup" className="text-black">
                  Sign Up for Newsletter
                </Link>
              </li>
            )}
            {/* If user is logged in provide a link to log out */}
            {Auth.loggedIn() && (
              <li>
                <button
                  onClick={handleLogout}
                  className="text-black bg-transparent border-none cursor-pointer"
                >
                  Log Out
                </button>
              </li>
            )}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
