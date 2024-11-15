// Imports React library
import React from "react";
import { Link } from "react-router-dom";

// Imports the authentication utility
import Auth from "../utils/auth";

// Imports the query utility
import { useQuery } from "@apollo/client";
import { QUERY_USER } from "../utils/queries";

// Reusable Card component
function Card({
  title,
  photo,
  description,
  link,
  label,
  labelStyle,
  isExternal,
  loggedIn,
}) {
  // Conditional Container: <a> for external links, <Link> for internal navigation
  const Container = isExternal ? "a" : Link;

  // Set appropriate props for link type (external vs internal)
  const linkProps = isExternal
    ? {
        href: link,
        ...(loggedIn
          ? {
              target: "_blank", // If logged in, open in a new tab
              rel: "noopener noreferrer",
              type: "application/pdf",
            }
          : {}), // If not logged in, open in the same tab
      }
    : { to: `/${link}` }; // Internal route link

  return (
    <Container
      {...linkProps}
      className="relative max-w-sm rounded overflow-hidden shadow-lg m-4 p-4"
    >
      {/* Ownership label positioned at the top-right corner */}
      <div
        className={`absolute top-0 right-0 p-2 ${labelStyle} rounded-bl-lg border border-gray`}
      >
        {label}
      </div>
      <img className="w-full border border-gray" src={photo} alt={title} />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{title}</div>
        <p className="text-gray-700 text-base">{description}</p>
      </div>
    </Container>
  );
}

const HomePage = () => {
  const loggedIn = Auth.loggedIn(); // Check if the user is logged in

  if (loggedIn) {
    const userId = Auth.getProfile().data._id; // Get logged-in user's ID
    const { loading, data } = useQuery(QUERY_USER, { variables: { userId } });

    if (!loading && data) {
      const user = data.user || {}; // Fetch user data
    } else if (loading) {
      // Return null or a loading spinner to prevent rendering
      return <div>Loading...</div>;
    }
  }

  // Configuration for all the cards on the homepage
  const cards = [
    {
      link: "cewdsampler",
      title: "CEWD Course",
      photo: "cover_model.jpg",
      description: "Placeholder",
      label: "Open to All",
      labelStyle: "bg-[#c4e7e8]",
    },
    {
      link: "modelsupporttools",
      title: "International Course",
      photo: "cover_model_support_tools.jpg",
      description: "Placeholder",
      label: "Newsletter Only",
      labelStyle: "bg-[#F26A6A]",
    },
    {
      link: "/private/isca_student_standards.pdf",
      title: "2022 CEWD PDF",
      photo: "cover_student_standards.jpg",
      description: "Placeholder",
      label: "Newsletter Only",
      labelStyle: "bg-[#F26A6A]",
      isExternal: true,
    },
    {
      link: "modelsupporttools",
      title: "Union Skills PDF",
      photo: "cover_model_support_tools.jpg",
      description: "Placeholder",
      label: "Newsletter Only",
      labelStyle: "bg-[#F26A6A]",
    },
    {
      link: "modelsupporttools",
      title: "UBC High School PDF",
      photo: "cover_model_support_tools.jpg",
      description: "Placeholder",
      label: "Newsletter Only",
      labelStyle: "bg-[#F26A6A]",
    },
  ];

  return (
    <main className="px-4 mx-auto pt-20 py-8">
      {/* Tagline centered above the cards */}
      <div className="text-center mb-4 w-3/4 mx-auto">
        <h2 className="text-xl font-semibold">
          Welcome to The Format Group's Sample Library! Explore our diverse
          educational materials and see firsthand the type of asynchronous
          learning management systems we can build. Create an account, log in,
          and discover all we have to offer!
        </h2>
      </div>
      {/* Container for the home page content */}
      <div className="flex flex-wrap justify-center">
        {cards.map((card, index) => (
          <Card
            key={index} // Unique key for each card in the map
            title={card.title}
            photo={card.photo}
            description={card.description}
            link={card.link}
            label={card.label}
            labelStyle={card.labelStyle}
            isExternal={card.isExternal}
            loggedIn={loggedIn} // Pass loggedIn status to each card
          />
        ))}
      </div>
    </main>
  );
};

export default HomePage;
