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

const ProgressionVideoPage = () => {
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
      link: "globalvideo",
      title:
        "Video Spotlight: Global Perspective & Identity Development (GP:D1:1)",
      photo: "cover_video_global.svg",
      description:
        "Uncover how learners build skills to manage transitions at different stages of their growth.",
      label: progressionOwnership.label,
      labelStyle: progressionOwnership.labelStyle,
    },
    {
      link: "careervideo",
      title: "Video Spotlight: Career (C:A2:2)",
      photo: "cover_video_career.svg",
      description:
        "Identify how learners pinpoint essential skills for the future workforce at various stages of development.",
      label: progressionOwnership.label,
      labelStyle: progressionOwnership.labelStyle,
    },
    {
      link: "academicvideo",
      title: "Video Spotlight: Academic (A:B1:1)",
      photo: "cover_video_academic.svg",
      description:
        "Discover how learners develop personal approaches to learning and essential study skills across developmental levels.",
      label: progressionOwnership.label,
      labelStyle: progressionOwnership.labelStyle,
    },
    {
      link: "socialvideo",
      title: "Video Spotlight: Social-Emotional (SE:A2:5)",
      photo: "cover_video_social.svg",
      description:
        "Explore the ways learners demonstrate effective conflict resolution skills throughout their development.",
      label: progressionOwnership.label,
      labelStyle: progressionOwnership.labelStyle,
    },
  ];

  return (
    <main className="px-4 mx-auto pt-20 py-8">
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

export default ProgressionVideoPage;
