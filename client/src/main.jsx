// Imports React library
import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

// Imports Apollo libraries for GraphQL integration
import { ApolloProvider, ApolloClient, InMemoryCache } from "@apollo/client";

// Imports the Tailwind created CSS file for styling
import "./output.css";

// Imports the main App component which works with the router
import App from "./App";

// Imports the authentication components which check user status before displaying pages
import AuthRoute from "./components/AuthRoute";
import ModelAccessRoute from "./components/ModelAccessRoute";
import ProgressionAccessRoute from "./components/ProgressionAccessRoute";

// Imports the pages the router will use to conditionally show the appropriate views
import ErrorPage from "./pages/ErrorPage";
import HomePage from "./pages/HomePage";
import LogInPage from "./pages/LogInPage";
import SignUpPage from "./pages/SignUpPage";
import ConfirmPage from "./pages/ConfirmPage";
import ForgotPasswordPage from "./pages/ForgotPasswordPage";
import ComingSoonPage from "./pages/ComingSoonPage";
import ModelPage from "./pages/ModelPage";
import ModelSupportToolsPage from "./pages/ModelSupportToolsPage";
import ProgressionPage from "./pages/ProgressionPage";
import DomainSocialPage from "./pages/DomainSocialPage";
import DomainGlobalPage from "./pages/DomainGlobalPage";
import DomainCareerPage from "./pages/DomainCareerPage";
import DomainAcademicFreePage from "./pages/DomainAcademicFreePage";
import DomainAcademicPage from "./pages/DomainAcademicPage";
import DomainAllPage from "./pages/DomainAllPage";
import DomainIntroPage from "./pages/DomainIntroPage";
import ProgressionVideoPage from "./pages/ProgressionVideoPage";
import VideoGlobalPage from "./pages/VideoGlobalPage";
import VideoCareerPage from "./pages/VideoCareerPage";
import VideoAcademicPage from "./pages/VideoAcademicPage";
import VideoSocialPage from "./pages/VideoSocialPage";

// Imports the Welcome Pop Up
import WelcomePopUp from "./components/WelcomePopUp";

// Defines the accessible routes and the components to render for each path
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "/login",
        element: <LogInPage />,
      },
      {
        path: "/signup",
        element: <SignUpPage />,
      },
      {
        path: "/confirm",
        element: <ConfirmPage />,
      },
      {
        path: "/forgotpassword",
        element: <ForgotPasswordPage />,
      },
      {
        path: "/comingsoon",
        element: <ComingSoonPage />,
      },
      {
        element: <AuthRoute />, // Requires the user to be logged in and have confirmStatus true to view child pages
        children: [
          {
            path: "/modelsupporttools",
            element: <ModelSupportToolsPage />,
          },
          {
            path: "/progressionintro",
            element: <DomainIntroPage />,
          },
          {
            path: "/academicdomainfree",
            element: <DomainAcademicFreePage />,
          },
          {
            element: <ModelAccessRoute />, // Requires the user to have ModelAccess to view child pages
            children: [
              {
                path: "/model",
                element: <ModelPage />,
              },
            ],
          },
          {
            element: <ProgressionAccessRoute />, // Requires the user to have ProgressionAccess to view child pages
            children: [
              {
                path: "/progression",
                element: <ProgressionPage />,
              },
              {
                path: "/socialdomain",
                element: <DomainSocialPage />,
              },
              {
                path: "/globaldomain",
                element: <DomainGlobalPage />,
              },
              {
                path: "/careerdomain",
                element: <DomainCareerPage />,
              },
              {
                path: "/academicdomain",
                element: <DomainAcademicPage />,
              },
              {
                path: "/completeprogression",
                element: <DomainAllPage />,
              },
              {
                path: "/progressionvideos",
                element: <ProgressionVideoPage />,
              },
              {
                path: "/globalvideo",
                element: <VideoGlobalPage />,
              },
              {
                path: "/careervideo",
                element: <VideoCareerPage />,
              },
              {
                path: "/academicvideo",
                element: <VideoAcademicPage />,
              },
              {
                path: "/socialvideo",
                element: <VideoSocialPage />,
              },
            ],
          },
        ],
      },
    ],
  },
]);

// Initialize Apollo Client for GraphQL queries and mutations
const client = new ApolloClient({
  uri: "/graphql",
  cache: new InMemoryCache(),
});

// Renders the RouterProvider component wrapped in an ApolloProvider to the HTML
ReactDOM.createRoot(document.getElementById("root")).render(
  <ApolloProvider client={client}>
    <RouterProvider router={router} />
    <WelcomePopUp />
  </ApolloProvider>
);
