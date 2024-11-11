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
}) {
  // Conditional Container: <a> for external links, <Link> for internal navigation
  const Container = isExternal ? "a" : Link;

  // Set appropriate props for link type (external vs internal)
  const linkProps = isExternal
    ? { href: link, target: "_blank", rel: "noopener noreferrer" } // External link settings
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

const ProgressionPage = () => {
  const { loading, data } = useQuery(QUERY_USER, {
    variables: { userId: Auth.getProfile().data._id },
  });

  if (loading) {
    return <div>Loading...</div>; // Show loading state
  }

  if (!data || !data.user) {
    return <div>Error: User data not found.</div>; // Handle case where user data is missing
  }

  const user = data.user;
  const progressionOwnership = getOwnershipStatus(user.progressionAccess);

  // Configuration for all the cards on the progression page
  const cards = [
    {
      link: "completeprogression",
      title: "Complete Learning Progression",
      photo: "cover_progression.jpg",
      description:
        "The ISCA Student Standards Learning Progression (2024) provides clear learning outcomes in social-emotional learning, global perspective, identity development, academic skills, and career readiness.",
      label: progressionOwnership.label, // Dynamic label based on user ownership
      labelStyle: progressionOwnership.labelStyle, // Dynamic style based on user ownership
    },
    {
      link: "progressionintro",
      title: "Learning Progression Introduction and Resources",
      photo: "cover_intro.jpg",
      description:
        "Access the introductory guide and resource materials used in the Progression.",
      label: "Free",
      labelStyle: "bg-[#006666] text-white",
    },
    {
      link: "socialdomain",
      title: "Focus: Social-Emotional Domain",
      photo: "cover_focus_social.svg",
      description:
        "An in-depth analysis of social awareness, self-awareness, relationships, decision-making, and personal safety.",
      label: progressionOwnership.label, // Dynamic label based on user ownership
      labelStyle: progressionOwnership.labelStyle, // Dynamic style based on user ownership
    },
    {
      link: "globaldomain",
      title: "Focus: Global Perspective & Identity Development Domain",
      photo: "cover_focus_global.svg",
      description:
        "An exploration of cultural knowledge, cultural awareness, cultural competency, identity development, advocacy, equity, transitions, and adaptability.",
      label: progressionOwnership.label, // Dynamic label based on user ownership
      labelStyle: progressionOwnership.labelStyle, // Dynamic style based on user ownership
    },
    {
      link: "academicdomain",
      title: "Focus: Academic Domain",
      photo: "cover_focus_academic.svg",
      description:
        "A deeper dive into self-awareness, effective learning, self-directed learning, agency, planning, goal setting, and school-to-life experiences.",
      label: "Free",
      labelStyle: "bg-[#006666] text-white",
    },
    {
      link: "careerdomain",
      title: "Focus: Career Domain",
      photo: "cover_focus_career.svg",
      description:
        "A detailed look into self-exploration, career research, and postsecondary career planning.",
      label: progressionOwnership.label, // Dynamic label based on user ownership
      labelStyle: progressionOwnership.labelStyle, // Dynamic style based on user ownership
    },
    {
      link: "progressionvideos",
      title: "Instructional Videos",
      photo: "cover_videos.jpg",
      description:
        "Watch helpful videos that offer guidance on effectively implementing the Progression in your program.",
      label: progressionOwnership.label, // Dynamic label based on user ownership
      labelStyle: progressionOwnership.labelStyle, // Dynamic style based on user ownership
    },
  ];

  return (
    <main className="px-4 mx-auto pt-20 py-8">
      {/* Tagline centered above the cards */}
      <div className="text-center mb-4 w-3/4 mx-auto">
        <h2 className="text-xl font-semibold mb-2">
          Welcome to your access to the ISCA Student Standards Learning
          Progression!
          <br />
          Explore the Progression in a variety of formats to best meet your
          needs:
        </h2>
        <h3 className="text-l">
          <span className="font-semibold">1. </span>Complete Learning
          Progression: View all four domains in one comprehensive document.
          <br />
          <span className="font-semibold">2. </span>Introduction and Resources:
          Access the introductory guide and resource materials used in the
          Progression.
          <br />
          <span className="font-semibold">3. </span>Individual Domains: Explore
          each domain independently for a focused review.
          <br />
          <span className="font-semibold">4. </span>Instructional Videos: Watch
          helpful videos that offer guidance on effectively implementing the
          Progression in your program.
        </h3>
      </div>
      {/* Container for the progression page content */}
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
            isExternal={card.isExternal} // Pass the flag for external links
          />
        ))}
      </div>
    </main>
  );
};

export default ProgressionPage;
