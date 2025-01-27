// Imports React library
import React from "react";
import { Link } from "react-router-dom";

// Imports the authentication utility
import Auth from "../utils/auth";

// Imports the query utility
import { useQuery } from "@apollo/client";
import { QUERY_USER } from "../utils/queries";

// Utility function to get label and style based on login status
const getLabelStatus = (loggedIn) => ({
  label: loggedIn
    ? "Open to Newsletter Members"
    : "Must Sign Up for Newsletter",
  labelStyle: loggedIn ? "bg-[#c4e7e8]" : "bg-[#F26A6A]",
});

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
    const { loading } = useQuery(QUERY_USER, { variables: { userId } });

    if (loading) {
      // Return a loading spinner or placeholder while data is being fetched
      return <div>Loading...</div>;
    }
  }

  // Configuration for all the cards on the homepage
  const cards = [
    {
      link: "cewdsampler",
      title: "CEWD Course",
      photo: "cover_cewd.jpg",
      description: "",
      label: "Open to All",
      labelStyle: "bg-[#c4e7e8]",
    },
    {
      link: "internationalcourse",
      title: "International Course",
      photo: "cover_international.jpg",
      description: "",
      ...getLabelStatus(loggedIn),
    },
    // {
    //   link: "universitycourse",
    //   title: "University Course",
    //   photo: "cover_international.jpg",
    //   description: "",
    //   ...getLabelStatus(loggedIn),
    // },
    {
      link: "/private/2022_CEWD.pdf",
      title: "2022 CEWD PDF",
      photo: "cover_2022_cewd.jpg",
      description: "",
      ...getLabelStatus(loggedIn),
      isExternal: true,
    },
    {
      link: "/private/Union_Skills.pdf",
      title: "Union Skills PDF",
      photo: "cover_union_skills.jpg",
      description: "",
      ...getLabelStatus(loggedIn),
      isExternal: true,
    },
    {
      link: "/private/UBC_High_School.pdf",
      title: "UBC High School PDF",
      photo: "cover_ubc_high_school.jpg",
      description: "",
      ...getLabelStatus(loggedIn),
      isExternal: true,
    },
  ];

  return (
    <main className="pt-20 pb-16">
      {/* Tagline centered above the cards */}
      <div className="text-center mb-4 w-3/4 mx-auto px-4">
        <h2 className="text-xl font-semibold">
          Welcome to The Format Group's Sample Library! Explore our educational
          materials and see firsthand the type of content library systems we can
          build!
        </h2>
      </div>
      {/* Container for the home page content */}
      <div className="flex flex-wrap justify-center px-4">
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
      {/* Fixed Footer */}
      <footer className="bg-[#9ad7d9] fixed bottom-0 w-full py-4">
        <div className="text-center">
          <a href="mailto:admin@formatllc.com" className="hover:underline">
            Have questions? Contact Us
          </a>
        </div>
      </footer>
    </main>
  );
};

export default HomePage;
