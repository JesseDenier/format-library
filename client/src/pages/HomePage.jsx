// Imports React library
import React from "react";
import { Link } from "react-router-dom";

// Imports the authentication utility
import Auth from "../utils/auth";

// Imports the query utility
import { useQuery } from "@apollo/client";
import { QUERY_USER } from "../utils/queries";

// Utility function to get ownership status and corresponding CSS class
const getOwnershipStatus = (hasAccess) => ({
  label: hasAccess ? "Paid" : "Purchase", // Display "Paid" if access is granted, otherwise "Purchase"
  labelStyle: hasAccess ? "bg-[#006666] text-white" : "bg-[#FF6633] text-white", // Green background if access is granted, otherwise orange
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

  // Default ownership status (not logged in or access not granted)
  let modelOwnership = getOwnershipStatus(false);
  let progressionOwnership = getOwnershipStatus(false);

  if (loggedIn) {
    const userId = Auth.getProfile().data._id; // Get logged-in user's ID
    const { loading, data } = useQuery(QUERY_USER, { variables: { userId } });

    if (!loading && data) {
      const user = data.user || {}; // Fetch user data
      modelOwnership = getOwnershipStatus(user.modelAccess); // Get ownership status for model access
      progressionOwnership = getOwnershipStatus(user.progressionAccess); // Get ownership status for domain access
    } else if (loading) {
      // Return null or a loading spinner to prevent rendering
      return <div>Loading...</div>;
    }
  }

  // Configuration for all the cards on the homepage
  const cards = [
    {
      // link: "model",
      //! The above link will be reinstituted on 10/24/24 after database update.
      link: "comingsoon",
      title: "The ISCA International Model for School Counseling Programs",
      photo: "cover_model.jpg",
      description:
        "The ISCA International Model provides a framework for encouraging and promoting best practices among international school counselors. Overall, the Model is our profession's manual on what, why, and how to implement a school counseling program.",
      // label: modelOwnership.label,
      // labelStyle: modelOwnership.labelStyle,
      //! The above label will be reinstituted on 10/24/24 after database update.
      label: "Available Soon!",
      labelStyle: "bg-[#1776A1] text-white",
    },
    {
      link: "/private/isca_student_standards.pdf",
      title: "ISCA Student Standards",
      photo: "cover_student_standards.jpg",
      description:
        "Internationally recognized content standards for students that guide school counseling programs by outlining the specific knowledge, attitudes, and skills that students should be able to demonstrate as a result of an effective school counseling program.",
      label: "Free",
      labelStyle: "bg-[#006666] text-white",
      isExternal: true,
    },
    {
      link: "modelsupporttools",
      title: "Model Support Tools",
      photo: "cover_model_support_tools.jpg",
      description:
        "A collection of smaller resources that perfectly complement the ISCA model.",
      label: "Free",
      labelStyle: "bg-[#006666] text-white",
    },
    {
      link: "progression",
      title: "The ISCA Student Standards Learning Progression",
      photo: "cover_progression.jpg",
      description:
        "The ISCA Student Standards Learning Progression (2024) provides clear learning outcomes in social-emotional learning, global perspective, identity development, academic skills, and career readiness.",
      label: progressionOwnership.label,
      labelStyle: progressionOwnership.labelStyle,
    },
    {
      link: "academicdomainfree",
      title: "Focus: Academic Domain",
      photo: "cover_book_focus_academic.jpg",
      description:
        "A deeper dive into self-awareness, effective learning, self-directed learning, agency, planning, goal setting, and school-to-life experiences.",
      label: "Free",
      labelStyle: "bg-[#006666] text-white",
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
