// Imports React library
import React from "react";

// Imports the authentication utility
import Auth from "../utils/auth";

// Imports the query utility
import { useQuery } from "@apollo/client";
import { QUERY_USER } from "../utils/queries";

// Imports PDF handling
import { handlePDFWatermarkAndDownload } from "../utils/pdfUtils";

const DomainGlobalPage = () => {
  // Get the logged-in user's ID
  const userId = Auth.getProfile().data._id;
  // Use the user's ID to fetch all user data
  const { loading, data, error } = useQuery(QUERY_USER, {
    variables: { userId: userId },
  });

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    console.error("Error fetching user data:", error);
    return <div>Error loading user data.</div>;
  }

  const user = data?.user || {};

  return (
    <main className="flex flex-col min-h-screen px-4 mx-auto pt-20">
      {/* Security measure containing floating user information over content */}
      <div className="fixed top-52 right-8 p-4 text-right pointer-events-none select-none text-gray-400">
        <p className="text-sm font-semibold">
          {user.firstName} {user.lastName} ({user.email})
        </p>
      </div>
      <div className="flex-none">
        <div className="text-center pb-4 space-y-2 sm:space-y-0">
          {/* Intro Page Open Button */}
          <button
            onClick={() => (window.location.href = "/progressionintro")}
            className="bg-[#026666] hover:bg-[#9acdc0] text-white font-bold py-2 px-4 mx-4 rounded"
          >
            Introduction and Resources
          </button>
          {/* PDF Download Button */}
          <button
            onClick={() =>
              handlePDFWatermarkAndDownload(
                "/private/domain_global.pdf",
                user,
                "ISCA Global Domain"
              )
            }
            className="bg-[#026666] hover:bg-[#9acdc0] text-white font-bold py-2 px-4 rounded"
          >
            PDF Download
          </button>
        </div>
      </div>
      {/* Full width table with all domain content */}
      <div className="flex-grow pb-4">
        <div
          id="Global_Domain"
          className="px-4 pointer-events-none select-none"
        >
          <div>
            <table className="min-w-full">
              <colgroup>
                <col />
                <col />
                <col />
                <col />
                <col />
                <col />
              </colgroup>
              <tbody>
                <tr className="bg-[#9acdc0] text-black text-center">
                  <td
                    className="bg-[#f26539] text-white font-bold text-center border border-[#6d6e71]"
                    colSpan="6"
                  >
                    {" "}
                    <p className="font-bold p-1">
                      Global Perspective & Identity Development
                    </p>
                  </td>
                </tr>
                <tr className="bg-[#026666] text-white">
                  <td className="border border-[#6d6e71] align-top">
                    <p className="font-bold p-1">Standard A: </p>
                  </td>
                  <td className="border border-[#6d6e71]" colSpan="5">
                    <p className="font-bold p-1">
                      Students will demonstrate the dispositions, knowledge, and
                      skills needed to be culturally competent global citizens
                    </p>
                  </td>
                </tr>
                <tr className="bg-[#9acdc0] text-black text-center">
                  <td className="border border-[#6d6e71]" colSpan="6">
                    <p className="font-bold p-1">
                      Competency A1 Cultural Knowledge and Awareness
                    </p>
                  </td>
                </tr>
                <tr>
                  <td className="border border-[#6d6e71] align-top"></td>
                  <td className="bg-[#5f95ba] text-center border border-[#6d6e71]">
                    <p className="font-bold p-1">By the end of PK</p>
                  </td>
                  <td className="bg-[#d6744e] text-center border border-[#6d6e71]">
                    <p className="font-bold p-1">Grades K-2</p>
                  </td>
                  <td className="bg-[#fcb442] text-center border border-[#6d6e71]">
                    <p className="font-bold p-1">Grades 3-5</p>
                  </td>
                  <td className="bg-[#eca57d] text-center border border-[#6d6e71]">
                    <p className="font-bold p-1">Grades 6-8</p>
                  </td>
                  <td className="bg-[#ddd0bc] text-center border border-[#6d6e71]">
                    <p className="font-bold p-1">Grades 9-12</p>
                  </td>
                </tr>
                <tr>
                  <td className="border border-[#6d6e71] align-top">
                    <p className="font-bold p-1">
                      GP:A1:1 Explain the various definitions of “home,” which
                      can include countries, cultures, or places
                    </p>
                  </td>
                  <td className="border border-[#6d6e71] align-top">
                    <p className="p-1">
                      Recognize familiar spaces and objects as they begin to
                      form a personal understanding of what “home” means to
                      them.
                    </p>
                  </td>
                  <td className="border border-[#6d6e71] align-top">
                    <p className="p-1">
                      Demonstrate a personal understanding of “home” through
                      artistic expression, pretend play, literature and media,
                      and/or personal experiences.
                    </p>
                  </td>
                  <td className="border border-[#6d6e71] align-top">
                    <p className="p-1">
                      Compare various definitions of “home,” encompassing
                      countries, cultures, and/or places through age-appropriate
                      discussions and activities.
                    </p>
                  </td>
                  <td className="border border-[#6d6e71] align-top">
                    <p className="p-1">
                      Explain how the concept of “home” is subjective and varies
                      greatly from person to person based on personal
                      experiences and individual circumstances.
                    </p>
                  </td>
                  <td className="border border-[#6d6e71] align-top">
                    <p className="p-1">
                      Analyze the concept of “home” by breaking down the various
                      dimensions, which encompass physical, emotional, social,
                      cultural, and psychological aspects.
                    </p>
                  </td>
                </tr>
                <tr>
                  <td className="border border-[#6d6e71] align-top">
                    <p className="font-bold p-1">
                      GP:A1:2 Differentiate between surface culture and deep
                      culture
                    </p>
                  </td>
                  <td className="border border-[#6d6e71] align-top">
                    <p className="p-1">
                      Express curiosity, empathy, and understanding for the
                      people around them.
                    </p>
                  </td>
                  <td className="border border-[#6d6e71] align-top">
                    <p className="p-1">
                      Identify different aspects of cultures, such as
                      traditional clothing, foods, and holidays (i.e., surface
                      culture), and explain how people in different cultures may
                      have different ways of thinking and feeling (i.e., deep
                      culture).
                    </p>
                  </td>
                  <td className="border border-[#6d6e71] align-top">
                    <p className="p-1">
                      Make comparisons between their own experiences and those
                      of people from different cultures and backgrounds using
                      examples of both surface and deep culture.
                    </p>
                  </td>
                  <td className="border border-[#6d6e71] align-top">
                    <p className="p-1">
                      Define the two levels of cultural understanding and
                      explore real-world examples of surface culture elements
                      (e.g., clothing, food, greetings) and deep culture
                      elements (e.g., values, beliefs, communication styles).
                    </p>
                  </td>
                  <td className="border border-[#6d6e71] align-top">
                    <p className="p-1">
                      Describe real-world examples to differentiate between
                      surface culture and deep culture, demonstrating a more
                      nuanced understanding of how these aspects shape the
                      behaviors, values, and interactions of people from
                      different cultures.
                    </p>
                  </td>
                </tr>
                <tr>
                  <td className="border border-[#6d6e71] align-top">
                    <p className="font-bold p-1">
                      GP:A1:3 Explore how cultural traditions impact one's
                      identity
                    </p>
                  </td>
                  <td className="border border-[#6d6e71] align-top">
                    <p className="p-1">
                      Explore various cultures and traditions (e.g., arts and
                      crafts, foods, music, literature and media, celebrations,
                      etc.).
                    </p>
                  </td>
                  <td className="border border-[#6d6e71] align-top">
                    <p className="p-1">
                      Describe their own cultural traditions.
                    </p>
                  </td>
                  <td className="border border-[#6d6e71] align-top">
                    <p className="p-1">
                      Explain how cultural traditions help people understand who
                      they are and what makes them unique.
                    </p>
                  </td>
                  <td className="border border-[#6d6e71] align-top">
                    <p className="p-1">
                      Define the concept of cultural identity, including
                      elements like beliefs, values, customs, traditions, and
                      experiences that are unique to each person's cultural
                      background.
                    </p>
                  </td>
                  <td className="border border-[#6d6e71] align-top">
                    <p className="p-1">
                      Explain how cultural traditions shape their own identities
                      and the identities of others.
                    </p>
                  </td>
                </tr>
                <tr>
                  <td className="border border-[#6d6e71] align-top">
                    <p className="font-bold p-1">
                      GP:A1:4 Examine the various conceptual constructs of
                      culture
                    </p>
                  </td>
                  <td className="border border-[#6d6e71] align-top">
                    <p className="p-1">
                      Begin to recognize basic symbols and artifacts that
                      represent their own culture.
                    </p>
                  </td>
                  <td className="border border-[#6d6e71] align-top">
                    <p className="p-1">
                      Identify examples of cultural constructs such as symbols,
                      language, and/or practices and rituals.
                    </p>
                  </td>
                  <td className="border border-[#6d6e71] align-top">
                    <p className="p-1">
                      List examples of cultural constructs and compare potential
                      similarities and differences between cultures.
                    </p>
                  </td>
                  <td className="border border-[#6d6e71] align-top">
                    <p className="p-1">
                      Define the concept of cultural constructs and demonstrate
                      an understanding of its importance as it relates to
                      cultural awareness.
                    </p>
                  </td>
                  <td className="border border-[#6d6e71] align-top">
                    <p className="p-1">
                      Examine various cultural constructs and explain how they
                      influence behaviors, feelings, and interactions.
                    </p>
                  </td>
                </tr>
                <tr>
                  <td className="border border-[#6d6e71] align-top">
                    <p className="font-bold p-1">
                      GP:A1:5 Examine the ways in which cultural values and
                      beliefs may conflict
                    </p>
                  </td>
                  <td className="border border-[#6d6e71] align-top">
                    <p className="p-1">
                      Demonstrate interest, compassion, and appreciation for
                      others.
                    </p>
                  </td>
                  <td className="border border-[#6d6e71] align-top">
                    <p className="p-1">
                      Provide examples of how people hold diverse beliefs,
                      values, and lifestyles.
                    </p>
                  </td>
                  <td className="border border-[#6d6e71] align-top">
                    <p className="p-1">
                      Define the concept of cultural diversity and explain how
                      conflicts might arise from cultural differences.
                    </p>
                  </td>
                  <td className="border border-[#6d6e71] align-top">
                    <p className="p-1">
                      Explain how cultural values and beliefs influence people's
                      interactions and how conflicts may stem from cultural
                      differences.
                    </p>
                  </td>
                  <td className="border border-[#6d6e71] align-top">
                    <p className="p-1">
                      Analyze case studies and real-life examples of disputes
                      arising from cultural differences, evaluating the extent
                      to which cultural values and beliefs may have been in
                      conflict.
                    </p>
                  </td>
                </tr>
                <tr>
                  <td className="border border-[#6d6e71] align-top">
                    <p className="font-bold p-1">
                      GP:A1:6 Explain the ways in which values and beliefs may
                      motivate behavior
                    </p>
                  </td>
                  <td className="border border-[#6d6e71] align-top">
                    <p className="p-1">
                      Begin to recognize and express what matters to them.
                    </p>
                  </td>
                  <td className="border border-[#6d6e71] align-top">
                    <p className="p-1">
                      Provide examples of values and beliefs they encounter in
                      their daily lives.
                    </p>
                  </td>
                  <td className="border border-[#6d6e71] align-top">
                    <p className="p-1">
                      Explain how values influence one's actions.
                    </p>
                  </td>
                  <td className="border border-[#6d6e71] align-top">
                    <p className="p-1">
                      Differentiate between values and beliefs and explain the
                      ways in which these may motivate behavior.
                    </p>
                  </td>
                  <td className="border border-[#6d6e71] align-top">
                    <p className="p-1">
                      Evaluate real-world examples of common principles that
                      guide people's choices (i.e., values), as well as some
                      common beliefs people hold related to what they think is
                      true about the world (i.e., beliefs).
                    </p>
                  </td>
                </tr>
                <tr>
                  <td className="border border-[#6d6e71] align-top">
                    <p className="font-bold p-1">
                      GP:A1:7 Examine the impact that cultural values may have
                      on the privilege or marginalization of groups
                    </p>
                  </td>
                  <td className="border border-[#6d6e71] align-top">
                    <p className="p-1">
                      Recognize that people are different and that everyone
                      should be treated with kindness and fairness.
                    </p>
                  </td>
                  <td className="border border-[#6d6e71] align-top">
                    <p className="p-1">
                      Describe how people from different backgrounds might be
                      treated differently and discuss why it is important to be
                      fair and inclusive to everyone.
                    </p>
                  </td>
                  <td className="border border-[#6d6e71] align-top">
                    <p className="p-1">
                      Explain how cultural values can influence how people are
                      treated differently and why it is essential to practice
                      fairness and inclusivity.
                    </p>
                  </td>
                  <td className="border border-[#6d6e71] align-top">
                    <p className="p-1">
                      Analyze how cultural values can influence the ways in
                      which people are treated in society, focusing on unearned
                      advantages (i.e., privilege) and systematic exclusion
                      (i.e., marginalization).
                    </p>
                  </td>
                  <td className="border border-[#6d6e71] align-top">
                    <p className="p-1">
                      Evaluate how cultural values impact social fairness and
                      inclusion.
                    </p>
                  </td>
                </tr>
                <tr>
                  <td className="border border-[#6d6e71] align-top">
                    <p className="font-bold p-1">
                      GP:A1:8 Examine prejudices and biases
                    </p>
                  </td>
                  <td className="border border-[#6d6e71] align-top">
                    <p className="p-1">
                      Begin to recognize when people are being treated unfairly.
                    </p>
                  </td>
                  <td className="border border-[#6d6e71] align-top">
                    <p className="p-1">
                      Identify examples of fair and unfair treatment in stories
                      or real-life situations and begin to understand how
                      prejudices and biases can lead to unfair behavior.
                    </p>
                  </td>
                  <td className="border border-[#6d6e71] align-top">
                    <p className="p-1">
                      Give examples of prejudices and biases they encounter in
                      their surroundings, media, or stories, and explain how
                      these attitudes can impact behavior and the treatment of
                      others.
                    </p>
                  </td>
                  <td className="border border-[#6d6e71] align-top">
                    <p className="p-1">
                      Apply critical thinking skills to examine how prejudices
                      and biases develop and discuss the impact these attitudes
                      can have on the group or society as a whole.
                    </p>
                  </td>
                  <td className="border border-[#6d6e71] align-top">
                    <p className="p-1">
                      Critically evaluate their own prejudices and biases and
                      examine ways to challenge and reduce these attitudes in
                      themselves and their communities.
                    </p>
                  </td>
                </tr>
                <tr>
                  <td className="border border-[#6d6e71] align-top">
                    <p className="font-bold p-1">
                      GP:A1:9 Engage in local cultures and languages where one
                      lives
                    </p>
                  </td>
                  <td className="border border-[#6d6e71] align-top">
                    <p className="p-1">
                      Name where they live and express curiosity about local
                      cultures and languages.
                    </p>
                  </td>
                  <td className="border border-[#6d6e71] align-top">
                    <p className="p-1">
                      Show an understanding of the local cultures and languages
                      in their community.
                    </p>
                  </td>
                  <td className="border border-[#6d6e71] align-top">
                    <p className="p-1">
                      Use accurate and respectful language to describe local
                      cultures and languages where they live.
                    </p>
                  </td>
                  <td className="border border-[#6d6e71] align-top">
                    <p className="p-1">
                      Gather and interpret information from people that
                      represent the local cultures and languages where they
                      live.
                    </p>
                  </td>
                  <td className="border border-[#6d6e71] align-top">
                    <p className="p-1">
                      Demonstrate an expanded worldview and perspective after
                      being immersed in and engaging with diverse cultures.
                    </p>
                  </td>
                </tr>
                <tr className="bg-[#9acdc0] text-black text-center">
                  <td className="border border-[#6d6e71]" colSpan="6">
                    <p className="font-bold p-1">
                      Competency A2 Cultural Competency
                    </p>
                  </td>
                </tr>
                <tr>
                  <td className="border border-[#6d6e71] align-top"></td>
                  <td className="bg-[#5f95ba] text-center border border-[#6d6e71]">
                    <p className="font-bold p-1">By the end of PK</p>
                  </td>
                  <td className="bg-[#d6744e] text-center border border-[#6d6e71]">
                    <p className="font-bold p-1">Grades K-2</p>
                  </td>
                  <td className="bg-[#fcb442] text-center border border-[#6d6e71]">
                    <p className="font-bold p-1">Grades 3-5</p>
                  </td>
                  <td className="bg-[#eca57d] text-center border border-[#6d6e71]">
                    <p className="font-bold p-1">Grades 6-8</p>
                  </td>
                  <td className="bg-[#ddd0bc] text-center border border-[#6d6e71]">
                    <p className="font-bold p-1">Grades 9-12</p>
                  </td>
                </tr>
                <tr>
                  <td className="border border-[#6d6e71] align-top">
                    <p className="font-bold p-1">
                      GP:A2:1 Describe personal values and beliefs
                    </p>
                  </td>
                  <td className="border border-[#6d6e71] align-top">
                    <p className="p-1">
                      Begin to express their personal interpretation of key
                      values such as kindness, honesty, and respect.
                    </p>
                  </td>
                  <td className="border border-[#6d6e71] align-top">
                    <p className="p-1">
                      Express what matters most to them related to values and
                      beliefs.
                    </p>
                  </td>
                  <td className="border border-[#6d6e71] align-top">
                    <p className="p-1">
                      Compile a list of personal values that are significant to
                      them, explain why each value is important, and provide
                      examples of situations in which they have demonstrated
                      these values.
                    </p>
                  </td>
                  <td className="border border-[#6d6e71] align-top">
                    <p className="p-1">
                      Identify the principles that guide their personal choices
                      (i.e., values), as well as some common beliefs they hold
                      related to what they think is true about the world (i.e.,
                      beliefs).
                    </p>
                  </td>
                  <td className="border border-[#6d6e71] align-top">
                    <p className="p-1">
                      Differentiate between their personal values and their
                      personal beliefs and explain the impact that these have on
                      their daily life.
                    </p>
                  </td>
                </tr>
                <tr>
                  <td className="border border-[#6d6e71] align-top">
                    <p className="font-bold p-1">
                      GP:A2:2 Identify shared values between self and others
                    </p>
                  </td>
                  <td className="border border-[#6d6e71] align-top">
                    <p className="p-1">
                      Begin to recognize when people demonstrate important
                      values (e.g., kindness, honesty, respect, etc.) in
                      literature, media, songs, pretend play, discussions,
                      and/or social interactions.
                    </p>
                  </td>
                  <td className="border border-[#6d6e71] align-top">
                    <p className="p-1">
                      Recognize how their values might be similar to or
                      different from the values of others.
                    </p>
                  </td>
                  <td className="border border-[#6d6e71] align-top">
                    <p className="p-1">
                      Recognize values that are common to themselves and others.
                    </p>
                  </td>
                  <td className="border border-[#6d6e71] align-top">
                    <p className="p-1">
                      Explain how shared values impact their relationships.
                    </p>
                  </td>
                  <td className="border border-[#6d6e71] align-top">
                    <p className="p-1">
                      Identify shared values between self and others to build
                      connections, even if there are differences in other areas.
                    </p>
                  </td>
                </tr>
                <tr>
                  <td className="border border-[#6d6e71] align-top">
                    <p className="font-bold p-1">
                      GP:A2:3 Articulate their positionality within the given
                      context to better understand a situation
                    </p>
                  </td>
                  <td className="border border-[#6d6e71] align-top">
                    <p className="p-1">
                      Begin to express their preferences through verbal and
                      nonverbal communication cues.
                    </p>
                  </td>
                  <td className="border border-[#6d6e71] align-top">
                    <p className="p-1">
                      State their opinion by expressing how they feel about
                      topics that are important to them.
                    </p>
                  </td>
                  <td className="border border-[#6d6e71] align-top">
                    <p className="p-1">
                      Use age-appropriate examples from current events, history,
                      or literature to explain how different people might
                      interpret the same situation differently based on their
                      experiences.
                    </p>
                  </td>
                  <td className="border border-[#6d6e71] align-top">
                    <p className="p-1">
                      Explain how their own background influences their
                      understanding of the world around them.
                    </p>
                  </td>
                  <td className="border border-[#6d6e71] align-top">
                    <p className="p-1">
                      Engage with diverse viewpoints on topics where others have
                      differing opinions due to their unique backgrounds, while
                      articulating their own positionality and analyzing how it
                      has shaped their perspective.
                    </p>
                  </td>
                </tr>
                <tr>
                  <td className="border border-[#6d6e71] align-top">
                    <p className="font-bold p-1">
                      GP:A2:4 Engage in perspective-taking to consider multiple
                      interpretations of situations
                    </p>
                  </td>
                  <td className="border border-[#6d6e71] align-top">
                    <p className="p-1">
                      Begin to identify the feelings and thoughts of others.
                    </p>
                  </td>
                  <td className="border border-[#6d6e71] align-top">
                    <p className="p-1">
                      Interpret how others might be feeling and why they behave
                      the way they do in various real, imagined, or hypothetical
                      situations.
                    </p>
                  </td>
                  <td className="border border-[#6d6e71] align-top">
                    <p className="p-1">
                      Inquire into the perspectives of others by asking
                      questions respectfully and listening actively.
                    </p>
                  </td>
                  <td className="border border-[#6d6e71] align-top">
                    <p className="p-1">
                      Engage in perspective-taking activities to explain and
                      understand diverse viewpoints and multiple interpretations
                      of situations.
                    </p>
                  </td>
                  <td className="border border-[#6d6e71] align-top">
                    <p className="p-1">
                      Explain the importance of perspective-taking to build
                      empathy and understanding among different people and
                      cultures in a community.
                    </p>
                  </td>
                </tr>
                <tr>
                  <td className="border border-[#6d6e71] align-top">
                    <p className="font-bold p-1">
                      GP:A2:5 Distinguish between intent and impact with
                      relation to behaviors and communication
                    </p>
                  </td>
                  <td className="border border-[#6d6e71] align-top">
                    <p className="p-1">
                      Express their intentions through simple verbal and
                      nonverbal communication and recognize the impact of their
                      actions on others.
                    </p>
                  </td>
                  <td className="border border-[#6d6e71] align-top">
                    <p className="p-1">
                      Identify the unintended consequences of their actions
                      and/or communication and explain what was intended.
                    </p>
                  </td>
                  <td className="border border-[#6d6e71] align-top">
                    <p className="p-1">
                      Demonstrate an awareness of how cultural differences may
                      influence the interpretation of intent and impact.
                    </p>
                  </td>
                  <td className="border border-[#6d6e71] align-top">
                    <p className="p-1">
                      Evaluate situations where the intent and impact may differ
                      and explain that what may be well-intentioned in one
                      cultural context can have a different impact in another.
                    </p>
                  </td>
                  <td className="border border-[#6d6e71] align-top">
                    <p className="p-1">
                      Analyze the intentions behind behaviors and/or
                      communication and the resulting impact on individuals and
                      communities involving intricate social dynamics, ethical
                      considerations, or cultural contexts.
                    </p>
                  </td>
                </tr>
                <tr>
                  <td className="border border-[#6d6e71] align-top">
                    <p className="font-bold p-1">
                      GP:A2:6 Accept feedback as a means to personal growth with
                      regards to understanding other perspectives
                    </p>
                  </td>
                  <td className="border border-[#6d6e71] align-top">
                    <p className="p-1">
                      Acknowledge feedback on their daily actions and
                      interactions.
                    </p>
                  </td>
                  <td className="border border-[#6d6e71] align-top">
                    <p className="p-1">
                      Recognize and respond appropriately to feedback about
                      their actions or work.
                    </p>
                  </td>
                  <td className="border border-[#6d6e71] align-top">
                    <p className="p-1">
                      Demonstrate a receptive attitude when receiving feedback
                      from others and explain how feedback provides insights
                      into different perspectives.
                    </p>
                  </td>
                  <td className="border border-[#6d6e71] align-top">
                    <p className="p-1">
                      Actively seek feedback from teachers, peers, and other
                      sources to gain diverse perspectives.
                    </p>
                  </td>
                  <td className="border border-[#6d6e71] align-top">
                    <p className="p-1">
                      Analyze feedback critically, considering different
                      perspectives and potential areas for growth and applying
                      constructive feedback to enhance personal skills and
                      understanding of various viewpoints.
                    </p>
                  </td>
                </tr>
                <tr className="bg-[#026666] text-white">
                  <td className="border border-[#6d6e71] align-top">
                    <p className="font-bold p-1">Standard B: </p>
                  </td>
                  <td className="border border-[#6d6e71]" colSpan="5">
                    <p className="font-bold p-1">
                      Students will examine the complexity of identity
                      development and the impact identity has on relationships
                      with others.
                    </p>
                  </td>
                </tr>
                <tr className="bg-[#9acdc0] text-black text-center">
                  <td className="border border-[#6d6e71]" colSpan="6">
                    <p className="font-bold p-1">
                      Competency B1 Identity Development
                    </p>
                  </td>
                </tr>
                <tr>
                  <td className="border border-[#6d6e71] align-top"></td>
                  <td className="bg-[#5f95ba] text-center border border-[#6d6e71]">
                    <p className="font-bold p-1">By the end of PK</p>
                  </td>
                  <td className="bg-[#d6744e] text-center border border-[#6d6e71]">
                    <p className="font-bold p-1">Grades K-2</p>
                  </td>
                  <td className="bg-[#fcb442] text-center border border-[#6d6e71]">
                    <p className="font-bold p-1">Grades 3-5</p>
                  </td>
                  <td className="bg-[#eca57d] text-center border border-[#6d6e71]">
                    <p className="font-bold p-1">Grades 6-8</p>
                  </td>
                  <td className="bg-[#ddd0bc] text-center border border-[#6d6e71]">
                    <p className="font-bold p-1">Grades 9-12</p>
                  </td>
                </tr>
                <tr>
                  <td className="border border-[#6d6e71] align-top">
                    <p className="font-bold p-1">
                      GP:B1:1 Explain how identities develop
                    </p>
                  </td>
                  <td className="border border-[#6d6e71] align-top">
                    <p className="p-1">
                      Recognize the unique qualities and interests of self and
                      others.
                    </p>
                  </td>
                  <td className="border border-[#6d6e71] align-top">
                    <p className="p-1">
                      Discuss different aspects of identity, such as personal
                      interests, roles within the family, and what makes people
                      unique.
                    </p>
                  </td>
                  <td className="border border-[#6d6e71] align-top">
                    <p className="p-1">
                      Define “identity” and list various aspects of one's
                      identity.
                    </p>
                  </td>
                  <td className="border border-[#6d6e71] align-top">
                    <p className="p-1">
                      Recognize that an individual's identity is multifaceted
                      and explain how identities are dynamic and can change over
                      time.
                    </p>
                  </td>
                  <td className="border border-[#6d6e71] align-top">
                    <p className="p-1">
                      Explore historical challenges concerning identity and
                      explain their contemporary effects on individuals holding
                      those identities.
                    </p>
                  </td>
                </tr>
                <tr>
                  <td className="border border-[#6d6e71] align-top">
                    <p className="font-bold p-1">
                      GP:B1:2 Examine the multiple elements that make up
                      identity and how these are influenced by cultural contexts
                    </p>
                  </td>
                  <td className="border border-[#6d6e71] align-top">
                    <p className="p-1">
                      Identify personal characteristics such as name, age, and
                      family members.
                    </p>
                  </td>
                  <td className="border border-[#6d6e71] align-top">
                    <p className="p-1">
                      Identify and recognize the cultural factors that
                      contribute to their sense of self.
                    </p>
                  </td>
                  <td className="border border-[#6d6e71] align-top">
                    <p className="p-1">
                      Articulate how their own beliefs, values, and traditions
                      are influenced by their cultural background.
                    </p>
                  </td>
                  <td className="border border-[#6d6e71] align-top">
                    <p className="p-1">
                      Recognize how cultural factors contribute to the identity
                      development of individuals from diverse backgrounds.
                    </p>
                  </td>
                  <td className="border border-[#6d6e71] align-top">
                    <p className="p-1">
                      Analyze how cultural contexts shape different aspects of
                      identity, including beliefs, values, and traditions, and
                      recognize the interconnectedness of cultural influences on
                      identity.
                    </p>
                  </td>
                </tr>
                <tr>
                  <td className="border border-[#6d6e71] align-top">
                    <p className="font-bold p-1">
                      GP:B1:3 Analyze the complexity of a person's identity in
                      relation to the concept of intersectionality
                    </p>
                  </td>
                  <td className="border border-[#6d6e71] align-top">
                    <p className="p-1">
                      Share aspects of their identity through age-appropriate
                      activities.
                    </p>
                  </td>
                  <td className="border border-[#6d6e71] align-top">
                    <p className="p-1">
                      Explore and understand how different aspects of one's
                      identity, such as family, culture, and interests, combine
                      to make each person unique and special.
                    </p>
                  </td>
                  <td className="border border-[#6d6e71] align-top">
                    <p className="p-1">
                      Explain how people are multidimensional and cannot be
                      defined solely by one aspect of their identity.
                    </p>
                  </td>
                  <td className="border border-[#6d6e71] align-top">
                    <p className="p-1">
                      Describe the ways that the different parts of our identity
                      coalesce to make us who we are and recognize that
                      individuals may experience unique challenges based on the
                      intersection of various identity factors.
                    </p>
                  </td>
                  <td className="border border-[#6d6e71] align-top">
                    <p className="p-1">
                      Analyze how our multifaceted identities can lead to
                      different aspects being emphasized or de-emphasized
                      depending on the context.
                    </p>
                  </td>
                </tr>
                <tr>
                  <td className="border border-[#6d6e71] align-top">
                    <p className="font-bold p-1">
                      GP:B1:4 Articulate one's own unique history and
                      experiences
                    </p>
                  </td>
                  <td className="border border-[#6d6e71] align-top">
                    <p className="p-1">
                      Identify and name elements of their identity, such as
                      family, culture, and personal interests.
                    </p>
                  </td>
                  <td className="border border-[#6d6e71] align-top">
                    <p className="p-1">
                      Recognize the various elements that make up their
                      identity, including cultural influences and personal
                      experiences.
                    </p>
                  </td>
                  <td className="border border-[#6d6e71] align-top">
                    <p className="p-1">
                      Provide examples of events and moments that have shaped
                      their identity.
                    </p>
                  </td>
                  <td className="border border-[#6d6e71] align-top">
                    <p className="p-1">
                      Explain how significant events, influences, and moments
                      have shaped their identity.
                    </p>
                  </td>
                  <td className="border border-[#6d6e71] align-top">
                    <p className="p-1">
                      Construct a personal narrative that contributes to a
                      deeper understanding of self and meaningful connections
                      with others.
                    </p>
                  </td>
                </tr>
                <tr>
                  <td className="border border-[#6d6e71] align-top">
                    <p className="font-bold p-1">
                      GP:B1:5 Identify one's own positionality with regards to
                      various identity markers
                    </p>
                  </td>
                  <td className="border border-[#6d6e71] align-top">
                    <p className="p-1">
                      Express an appreciation for the unique aspects of their
                      identity.
                    </p>
                  </td>
                  <td className="border border-[#6d6e71] align-top">
                    <p className="p-1">
                      Identify and name different identity markers, such as age,
                      gender, culture, and personal interests.
                    </p>
                  </td>
                  <td className="border border-[#6d6e71] align-top">
                    <p className="p-1">
                      Share their thoughts on how they view themselves,
                      recognizing how external factors like gender, race, family
                      structure, and interests shape their identity.
                    </p>
                  </td>
                  <td className="border border-[#6d6e71] align-top">
                    <p className="p-1">
                      Articulate their self-perceptions, recognizing biases,
                      discrimination, privilege, and power.
                    </p>
                  </td>
                  <td className="border border-[#6d6e71] align-top">
                    <p className="p-1">
                      Define “positionality” and explain how the
                      intersectionality of their identity contributes to a
                      complex understanding of their social position.
                    </p>
                  </td>
                </tr>
                <tr>
                  <td className="border border-[#6d6e71] align-top">
                    <p className="font-bold p-1">
                      GP:B1:6 Reflect on one's own experiences with privilege
                      and marginalization
                    </p>
                  </td>
                  <td className="border border-[#6d6e71] align-top">
                    <p className="p-1">
                      Express curiosity about the experiences of others.
                    </p>
                  </td>
                  <td className="border border-[#6d6e71] align-top">
                    <p className="p-1">
                      Recognize how certain aspects of their identity, like
                      their race, gender, family background, or abilities, can
                      influence their experiences.
                    </p>
                  </td>
                  <td className="border border-[#6d6e71] align-top">
                    <p className="p-1">
                      Define the concepts of privilege and marginalization by
                      sharing experiences of advantages, challenges, and unfair
                      treatment that people face because of who they are.
                    </p>
                  </td>
                  <td className="border border-[#6d6e71] align-top">
                    <p className="p-1">
                      Discuss the advantages, challenges, and viewpoints that
                      come from their specific mix of identity markers.
                    </p>
                  </td>
                  <td className="border border-[#6d6e71] align-top">
                    <p className="p-1">
                      Identify instances of privilege, describe the effects of
                      historical and systemic advantages, and share personal
                      experiences of marginalization, exclusion, or
                      discrimination.
                    </p>
                  </td>
                </tr>
                <tr>
                  <td className="border border-[#6d6e71] align-top">
                    <p className="font-bold p-1">
                      GP:B1:7 Reflect on how one's own identity interacts with
                      others to impact personal relationships and life
                      experiences
                    </p>
                  </td>
                  <td className="border border-[#6d6e71] align-top">
                    <p className="p-1">
                      Begin to express aspects of who they are with others.
                    </p>
                  </td>
                  <td className="border border-[#6d6e71] align-top">
                    <p className="p-1">
                      Explain how understanding their own identity helps them
                      build relationships with others.
                    </p>
                  </td>
                  <td className="border border-[#6d6e71] align-top">
                    <p className="p-1">
                      Describe how understanding their own identity can improve
                      empathy and communication with others.
                    </p>
                  </td>
                  <td className="border border-[#6d6e71] align-top">
                    <p className="p-1">
                      Articulate personal insights gained from reflecting on
                      their identity and explain how this self-awareness
                      influences their interactions with others.
                    </p>
                  </td>
                  <td className="border border-[#6d6e71] align-top">
                    <p className="p-1">
                      Analyze how their personal identity interacts with the
                      identities of others and explain the ways in which these
                      interactions shape their personal relationships and
                      contribute to their life experiences.
                    </p>
                  </td>
                </tr>
                <tr className="bg-[#9acdc0] text-black text-center">
                  <td className="border border-[#6d6e71]" colSpan="6">
                    <p className="font-bold p-1">
                      Competency B2 Cultural Identity
                    </p>
                  </td>
                </tr>
                <tr>
                  <td className="border border-[#6d6e71] align-top"></td>
                  <td className="bg-[#5f95ba] text-center border border-[#6d6e71]">
                    <p className="font-bold p-1">By the end of PK</p>
                  </td>
                  <td className="bg-[#d6744e] text-center border border-[#6d6e71]">
                    <p className="font-bold p-1">Grades K-2</p>
                  </td>
                  <td className="bg-[#fcb442] text-center border border-[#6d6e71]">
                    <p className="font-bold p-1">Grades 3-5</p>
                  </td>
                  <td className="bg-[#eca57d] text-center border border-[#6d6e71]">
                    <p className="font-bold p-1">Grades 6-8</p>
                  </td>
                  <td className="bg-[#ddd0bc] text-center border border-[#6d6e71]">
                    <p className="font-bold p-1">Grades 9-12</p>
                  </td>
                </tr>
                <tr>
                  <td className="border border-[#6d6e71] align-top">
                    <p className="font-bold p-1">
                      GP:B2:1 Examine family as a social construct
                    </p>
                  </td>
                  <td className="border border-[#6d6e71] align-top">
                    <p className="p-1">
                      Recognize that families can vary in size, composition, and
                      cultural practices.
                    </p>
                  </td>
                  <td className="border border-[#6d6e71] align-top">
                    <p className="p-1">
                      Discuss dynamics, roles, and relationships within
                      families.
                    </p>
                  </td>
                  <td className="border border-[#6d6e71] align-top">
                    <p className="p-1">
                      Identify various components that contribute to the
                      construction of family, including cultural influences,
                      societal expectations, and individual perspective.
                    </p>
                  </td>
                  <td className="border border-[#6d6e71] align-top">
                    <p className="p-1">
                      Assess how societal expectations and norms shape people's
                      perspectives on family roles, responsibilities, and
                      expectations.
                    </p>
                  </td>
                  <td className="border border-[#6d6e71] align-top">
                    <p className="p-1">
                      Analyze how cultural influences, societal expectations,
                      and individual perspectives shape their understanding of
                      family as a social construct.
                    </p>
                  </td>
                </tr>
                <tr>
                  <td className="border border-[#6d6e71] align-top">
                    <p className="font-bold p-1">
                      GP:B2:2 Analyze the impact of family on cultural identity
                    </p>
                  </td>
                  <td className="border border-[#6d6e71] align-top">
                    <p className="p-1">
                      Identify some traditions and/or values that make families
                      special.
                    </p>
                  </td>
                  <td className="border border-[#6d6e71] align-top">
                    <p className="p-1">
                      Provide examples of how families can have a big impact on
                      who we are and how we see the world.
                    </p>
                  </td>
                  <td className="border border-[#6d6e71] align-top">
                    <p className="p-1">
                      Explain the ways in which cultural values, language,
                      practices, and traditions are transmitted within families.
                    </p>
                  </td>
                  <td className="border border-[#6d6e71] align-top">
                    <p className="p-1">
                      Define “cultural identity” and explain how family impacts
                      an individual's sense of self within a cultural context.
                    </p>
                  </td>
                  <td className="border border-[#6d6e71] align-top">
                    <p className="p-1">
                      Synthesize information to identify patterns and draw
                      overarching conclusions about the impact of family on
                      cultural identity.
                    </p>
                  </td>
                </tr>
                <tr>
                  <td className="border border-[#6d6e71] align-top">
                    <p className="font-bold p-1">
                      GP:B2:3 Examine cultural identity of own family and the
                      impact this has on identity development
                    </p>
                  </td>
                  <td className="border border-[#6d6e71] align-top">
                    <p className="p-1">
                      Name one or more of their own cultural traditions.
                    </p>
                  </td>
                  <td className="border border-[#6d6e71] align-top">
                    <p className="p-1">
                      Identify the cultural practices of their family and
                      describe how these practices affect the way they feel
                      about themselves.
                    </p>
                  </td>
                  <td className="border border-[#6d6e71] align-top">
                    <p className="p-1">
                      Share examples of specific values, practices, and
                      traditions that their family has passed down and explain
                      the impact these have on their own identity.
                    </p>
                  </td>
                  <td className="border border-[#6d6e71] align-top">
                    <p className="p-1">
                      Analyze their cultural identity and the role family has
                      had in transmitting values, practices, and traditions.
                    </p>
                  </td>
                  <td className="border border-[#6d6e71] align-top">
                    <p className="p-1">
                      Determine the extent to which the cultural identity of
                      their own family has influenced their cultural values,
                      language, practices, traditions, beliefs, and
                      self-perception.
                    </p>
                  </td>
                </tr>
                <tr>
                  <td className="border border-[#6d6e71] align-top">
                    <p className="font-bold p-1">
                      GP:B2:4 Define what it means to belong
                    </p>
                  </td>
                  <td className="border border-[#6d6e71] align-top">
                    <p className="p-1">
                      Interact with their peers by collaborating, sharing, and
                      demonstrating inclusivity.
                    </p>
                  </td>
                  <td className="border border-[#6d6e71] align-top">
                    <p className="p-1">
                      Define what it means to belong and describe feelings of
                      inclusion and connection.
                    </p>
                  </td>
                  <td className="border border-[#6d6e71] align-top">
                    <p className="p-1">
                      Identify the factors that contribute to a sense of
                      belonging, including cultural, social, and personal
                      identities.
                    </p>
                  </td>
                  <td className="border border-[#6d6e71] align-top">
                    <p className="p-1">
                      Evaluate their involvement in groups by explaining how
                      cultural, social, and personal identities influence their
                      sense of belonging, and identify exclusionary practices
                      and stereotypes that hinder this sense of belonging.
                    </p>
                  </td>
                  <td className="border border-[#6d6e71] align-top">
                    <p className="p-1">
                      Define the concept of belonging beyond immediate social
                      circles to include larger communities, such as school,
                      neighborhood, or society, and challenge exclusionary
                      practices and stereotypes that hinder belonging.
                    </p>
                  </td>
                </tr>
                <tr>
                  <td className="border border-[#6d6e71] align-top">
                    <p className="font-bold p-1">
                      GP:B2:5 Define “cross-cultural kid,” “third culture kid,”
                      and “global nomad”
                    </p>
                  </td>
                  <td className="border border-[#6d6e71] align-top">
                    <p className="p-1">
                      Recognize that their learning environment may include
                      people from various countries and diverse backgrounds.
                    </p>
                  </td>
                  <td className="border border-[#6d6e71] align-top">
                    <p className="p-1">
                      Describe how living in a multicultural environment, be it
                      at home, at school, or both, influences lived experiences.
                    </p>
                  </td>
                  <td className="border border-[#6d6e71] align-top">
                    <p className="p-1">
                      Define “cross-cultural kid,” “third culture kid,” and
                      “global nomad.”
                    </p>
                  </td>
                  <td className="border border-[#6d6e71] align-top">
                    <p className="p-1">
                      Compare and contrast the definitions of “cross-cultural
                      kid,” “third culture kid,” and “global nomad.”
                    </p>
                  </td>
                  <td className="border border-[#6d6e71] align-top">
                    <p className="p-1">
                      Describe personal experiences with being a “cross-cultural
                      kid,” “third culture kid,” or “global nomad,” and explain
                      how understanding these identities and their similarities
                      helps them better appreciate diversity in their
                      communities and around the world.
                    </p>
                  </td>
                </tr>
                <tr>
                  <td className="border border-[#6d6e71] align-top">
                    <p className="font-bold p-1">
                      GP:B2:6 Compare and contrast one's own cultural identity
                      to the cultural identity of others
                    </p>
                  </td>
                  <td className="border border-[#6d6e71] align-top">
                    <p className="p-1">
                      Express pride in and/or enthusiasm about one's own
                      cultural heritage.
                    </p>
                  </td>
                  <td className="border border-[#6d6e71] align-top">
                    <p className="p-1">
                      Identify elements of their own cultural identity, such as
                      traditions, languages, foods, and customs, and recognize
                      cultural differences among classmates and peers.
                    </p>
                  </td>
                  <td className="border border-[#6d6e71] align-top">
                    <p className="p-1">
                      Compare and contrast their own cultural identity and those
                      of their peers to identify commonalities and differences.
                    </p>
                  </td>
                  <td className="border border-[#6d6e71] align-top">
                    <p className="p-1">
                      Describe their own cultural identity in comparison to
                      those of their peers, acknowledging any personal biases or
                      stereotypes.
                    </p>
                  </td>
                  <td className="border border-[#6d6e71] align-top">
                    <p className="p-1">
                      Evaluate their own cultural identity in relation to those
                      of peers, classmates, and community members, considering
                      personal biases, assumptions, and stereotypes.
                    </p>
                  </td>
                </tr>
                <tr>
                  <td className="border border-[#6d6e71] align-top">
                    <p className="font-bold p-1">
                      GP:B2:7 Use awareness of self to effectively navigate
                      settings with diverse individuals and groups
                    </p>
                  </td>
                  <td className="border border-[#6d6e71] align-top">
                    <p className="p-1">
                      Demonstrate the ability to talk, work, and play with
                      others in settings with diverse individuals and groups.
                    </p>
                  </td>
                  <td className="border border-[#6d6e71] align-top">
                    <p className="p-1">
                      Reflect on their own actions and behaviors to identify
                      ways to promote inclusivity and mutual respect in settings
                      with diverse individuals and groups.
                    </p>
                  </td>
                  <td className="border border-[#6d6e71] align-top">
                    <p className="p-1">
                      Recognize instances where their thoughts, feelings, or
                      behaviors may be influenced by biases, assumptions, or
                      stereotypes in settings with diverse individuals and
                      groups.
                    </p>
                  </td>
                  <td className="border border-[#6d6e71] align-top">
                    <p className="p-1">
                      Challenge personal biases, assumptions, and stereotypes
                      that may hinder understanding and inclusivity in settings
                      with diverse individuals and groups.
                    </p>
                  </td>
                  <td className="border border-[#6d6e71] align-top">
                    <p className="p-1">
                      Apply their understanding of their own cultural background
                      to effectively navigate settings with diverse individuals
                      and groups and demonstrate awareness of how they portray
                      their identity in these settings.
                    </p>
                  </td>
                </tr>
                <tr className="bg-[#026666] text-white">
                  <td className="border border-[#6d6e71] align-top">
                    <p className="font-bold p-1">Standard C: </p>
                  </td>
                  <td className="border border-[#6d6e71]" colSpan="5">
                    <p className="font-bold p-1">
                      Students will advocate for a world where all identities
                      are affirmed and validated
                    </p>
                  </td>
                </tr>
                <tr className="bg-[#9acdc0] text-black text-center">
                  <td className="border border-[#6d6e71]" colSpan="6">
                    <p className="font-bold p-1">
                      Competency C1 Advocacy and Equity
                    </p>
                  </td>
                </tr>
                <tr>
                  <td className="border border-[#6d6e71] align-top"></td>
                  <td className="bg-[#5f95ba] text-center border border-[#6d6e71]">
                    <p className="font-bold p-1">By the end of PK</p>
                  </td>
                  <td className="bg-[#d6744e] text-center border border-[#6d6e71]">
                    <p className="font-bold p-1">Grades K-2</p>
                  </td>
                  <td className="bg-[#fcb442] text-center border border-[#6d6e71]">
                    <p className="font-bold p-1">Grades 3-5</p>
                  </td>
                  <td className="bg-[#eca57d] text-center border border-[#6d6e71]">
                    <p className="font-bold p-1">Grades 6-8</p>
                  </td>
                  <td className="bg-[#ddd0bc] text-center border border-[#6d6e71]">
                    <p className="font-bold p-1">Grades 9-12</p>
                  </td>
                </tr>
                <tr>
                  <td className="border border-[#6d6e71] align-top">
                    <p className="font-bold p-1">
                      GP:C1:1 Explore perspectives of others, particularly those
                      of historically unrepresented groups
                    </p>
                  </td>
                  <td className="border border-[#6d6e71] align-top">
                    <p className="p-1">
                      Begin to recognize that people have different backgrounds
                      and experiences.
                    </p>
                  </td>
                  <td className="border border-[#6d6e71] align-top">
                    <p className="p-1">
                      Identify and listen to stories and perspectives from
                      people of different backgrounds, including those who are
                      historically unrepresented.
                    </p>
                  </td>
                  <td className="border border-[#6d6e71] align-top">
                    <p className="p-1">
                      Explore and discuss the perspectives of historically
                      unrepresented groups, including their contributions to
                      society and perspectives on social, cultural, and
                      historical issues.
                    </p>
                  </td>
                  <td className="border border-[#6d6e71] align-top">
                    <p className="p-1">
                      Conduct research on historically unrepresented groups,
                      exploring their contributions and perspectives while
                      analyzing their significance in shaping societies.
                    </p>
                  </td>
                  <td className="border border-[#6d6e71] align-top">
                    <p className="p-1">
                      Analyze perspectives from historically unrepresented
                      groups and engage in critical discussions and debates on
                      social justice and equity.
                    </p>
                  </td>
                </tr>
                <tr>
                  <td className="border border-[#6d6e71] align-top">
                    <p className="font-bold p-1">
                      GP:C1:2 Advocate for the rights of others
                    </p>
                  </td>
                  <td className="border border-[#6d6e71] align-top">
                    <p className="p-1">
                      Recognize when someone is being treated unfairly and
                      express their feelings about fairness.
                    </p>
                  </td>
                  <td className="border border-[#6d6e71] align-top">
                    <p className="p-1">
                      Identify situations in which others might be treated
                      unfairly and express ideas for how to promote fairness and
                      show respect for everyone.
                    </p>
                  </td>
                  <td className="border border-[#6d6e71] align-top">
                    <p className="p-1">
                      Discuss examples of advocating for the rights of others
                      and explain why it is important to promote fairness and
                      equality.
                    </p>
                  </td>
                  <td className="border border-[#6d6e71] align-top">
                    <p className="p-1">
                      Articulate their beliefs, values, and perspectives on
                      issues of injustice and equality through different forms
                      of advocacy.
                    </p>
                  </td>
                  <td className="border border-[#6d6e71] align-top">
                    <p className="p-1">
                      Take action to support and advocate for the rights of
                      individuals and groups within their community.
                    </p>
                  </td>
                </tr>
                <tr>
                  <td className="border border-[#6d6e71] align-top">
                    <p className="font-bold p-1">
                      GP:C1:3 Take responsibility to learn about inequity in
                      your community
                    </p>
                  </td>
                  <td className="border border-[#6d6e71] align-top">
                    <p className="p-1">Recognize examples of unfairness.</p>
                  </td>
                  <td className="border border-[#6d6e71] align-top">
                    <p className="p-1">
                      Share ideas and observations about potential inequities in
                      their community.
                    </p>
                  </td>
                  <td className="border border-[#6d6e71] align-top">
                    <p className="p-1">
                      Identify inequities in their community and discuss
                      potential solutions.
                    </p>
                  </td>
                  <td className="border border-[#6d6e71] align-top">
                    <p className="p-1">
                      Analyze the causes and effects of inequities they have
                      identified in their community.
                    </p>
                  </td>
                  <td className="border border-[#6d6e71] align-top">
                    <p className="p-1">
                      Research and discuss findings about the root causes of
                      inequity in their community, considering historical
                      factors, systemic barriers, and social policies that
                      contribute to these inequities.
                    </p>
                  </td>
                </tr>
                <tr>
                  <td className="border border-[#6d6e71] align-top">
                    <p className="font-bold p-1">
                      GP:C1:4 Advocate for greater equity in your community
                    </p>
                  </td>
                  <td className="border border-[#6d6e71] align-top">
                    <p className="p-1">
                      Speak up for self and others when inequity or unfairness
                      is observed.
                    </p>
                  </td>
                  <td className="border border-[#6d6e71] align-top">
                    <p className="p-1">
                      List ideas for addressing inequities and advocate for
                      making positive changes in the classroom and/or community.
                    </p>
                  </td>
                  <td className="border border-[#6d6e71] align-top">
                    <p className="p-1">
                      Identify key community assets and discuss types of action
                      and/or advocacy that will be impactful.
                    </p>
                  </td>
                  <td className="border border-[#6d6e71] align-top">
                    <p className="p-1">
                      Outline specific steps they can take to address the
                      inequities and advocate for positive changes.
                    </p>
                  </td>
                  <td className="border border-[#6d6e71] align-top">
                    <p className="p-1">
                      Express a sense of efficacy related to their advocacy
                      efforts at the local, regional, or global scale,
                      considering the impacts of their advocacy on all community
                      stakeholders.
                    </p>
                  </td>
                </tr>
                <tr className="bg-[#026666] text-white">
                  <td className="border border-[#6d6e71] align-top">
                    <p className="font-bold p-1">Standard D: </p>
                  </td>
                  <td className="border border-[#6d6e71]" colSpan="5">
                    <p className="font-bold p-1">
                      Students will demonstrate the dispositions, knowledge, and
                      skills to manage transition effectively
                    </p>
                  </td>
                </tr>
                <tr className="bg-[#9acdc0] text-black text-center">
                  <td className="border border-[#6d6e71]" colSpan="6">
                    <p className="font-bold p-1">Competency D1 Transitions</p>
                  </td>
                </tr>
                <tr>
                  <td className="border border-[#6d6e71] align-top"></td>
                  <td className="bg-[#5f95ba] text-center border border-[#6d6e71]">
                    <p className="font-bold p-1">By the end of PK</p>
                  </td>
                  <td className="bg-[#d6744e] text-center border border-[#6d6e71]">
                    <p className="font-bold p-1">Grades K-2</p>
                  </td>
                  <td className="bg-[#fcb442] text-center border border-[#6d6e71]">
                    <p className="font-bold p-1">Grades 3-5</p>
                  </td>
                  <td className="bg-[#eca57d] text-center border border-[#6d6e71]">
                    <p className="font-bold p-1">Grades 6-8</p>
                  </td>
                  <td className="bg-[#ddd0bc] text-center border border-[#6d6e71]">
                    <p className="font-bold p-1">Grades 9-12</p>
                  </td>
                </tr>
                <tr>
                  <td className="border border-[#6d6e71] align-top">
                    <p className="font-bold p-1">
                      GP:D1:1 Identify various types of transitions that occur
                      throughout a lifespan
                    </p>
                  </td>
                  <td className="border border-[#6d6e71] align-top">
                    <p className="p-1">
                      Notice when things change during their day, such as
                      transitioning from one activity to another.
                    </p>
                  </td>
                  <td className="border border-[#6d6e71] align-top">
                    <p className="p-1">
                      Express their feelings about transitions and make simple
                      adjustments to their behavior and activities accordingly.
                    </p>
                  </td>
                  <td className="border border-[#6d6e71] align-top">
                    <p className="p-1">
                      Recognize and differentiate between different types of
                      transitions, such as changes in routines, seasons, or
                      family structures.
                    </p>
                  </td>
                  <td className="border border-[#6d6e71] align-top">
                    <p className="p-1">
                      Identify a broad range of life transitions, including
                      personal, familial, and societal changes.
                    </p>
                  </td>
                  <td className="border border-[#6d6e71] align-top">
                    <p className="p-1">
                      Explain how understanding different types of transitions
                      can help them manage their own changes and support others
                      during times of change.
                    </p>
                  </td>
                </tr>
                <tr>
                  <td className="border border-[#6d6e71] align-top">
                    <p className="font-bold p-1">
                      GP:D1:2 Recognize the personal nature of the transition
                      experience
                    </p>
                  </td>
                  <td className="border border-[#6d6e71] align-top">
                    <p className="p-1">
                      Begin to express how transitions make them and others
                      feel.
                    </p>
                  </td>
                  <td className="border border-[#6d6e71] align-top">
                    <p className="p-1">
                      Describe how transitions can affect people differently.
                    </p>
                  </td>
                  <td className="border border-[#6d6e71] align-top">
                    <p className="p-1">
                      Explain how people may react differently to transitions
                      based on their unique personalities and experiences.
                    </p>
                  </td>
                  <td className="border border-[#6d6e71] align-top">
                    <p className="p-1">
                      Recognize and demonstrate respect for the diverse
                      reactions of others to transitions.
                    </p>
                  </td>
                  <td className="border border-[#6d6e71] align-top">
                    <p className="p-1">
                      Analyze the ways in which personal values, beliefs, and
                      cultural background influence how individuals experience
                      transitions and articulate how their own experiences of
                      transitions may differ from those of others.
                    </p>
                  </td>
                </tr>
                <tr>
                  <td className="border border-[#6d6e71] align-top">
                    <p className="font-bold p-1">
                      GP:D1:3 Demonstrate awareness of cultural adjustment
                    </p>
                  </td>
                  <td className="border border-[#6d6e71] align-top">
                    <p className="p-1">
                      Express acceptance and welcome to peers from different
                      cultural backgrounds, creating an inclusive classroom
                      environment.
                    </p>
                  </td>
                  <td className="border border-[#6d6e71] align-top">
                    <p className="p-1">
                      Describe their own experiences of cultural adjustment,
                      demonstrating self-awareness and appreciation for diverse
                      perspectives.
                    </p>
                  </td>
                  <td className="border border-[#6d6e71] align-top">
                    <p className="p-1">
                      Identify common experiences associated with cultural
                      adjustment.
                    </p>
                  </td>
                  <td className="border border-[#6d6e71] align-top">
                    <p className="p-1">
                      Analyze the factors that contribute to cultural
                      adjustment, including language, traditions, and social
                      norms.
                    </p>
                  </td>
                  <td className="border border-[#6d6e71] align-top">
                    <p className="p-1">
                      Apply their understanding of cultural adjustment to
                      promote inclusivity, empathy, and respect in diverse
                      social and cultural contexts.
                    </p>
                  </td>
                </tr>
                <tr>
                  <td className="border border-[#6d6e71] align-top">
                    <p className="font-bold p-1">
                      GP:D1:4 Articulate a model of transition and apply it to
                      one's own experience
                    </p>
                  </td>
                  <td className="border border-[#6d6e71] align-top">
                    <p className="p-1">
                      Acknowledge changes, endings, or new beginnings in their
                      own lives, such as transitioning from one activity to
                      another, saying goodbye to a friend or caregiver, or
                      starting a new activity.
                    </p>
                  </td>
                  <td className="border border-[#6d6e71] align-top">
                    <p className="p-1">
                      Use simple language to describe a basic model of
                      transition, such as “beginning, middle, and end.”
                    </p>
                  </td>
                  <td className="border border-[#6d6e71] align-top">
                    <p className="p-1">
                      Explain a simple model of transition and discuss how they
                      might apply it to their own experience.
                    </p>
                  </td>
                  <td className="border border-[#6d6e71] align-top">
                    <p className="p-1">
                      Analyze a model of transition and apply it to various
                      personal and academic experiences.
                    </p>
                  </td>
                  <td className="border border-[#6d6e71] align-top">
                    <p className="p-1">
                      Develop a personalized model of transition to apply to
                      their own experiences, including complex life events such
                      as preparing for graduation and entering adulthood.
                    </p>
                  </td>
                </tr>
                <tr>
                  <td className="border border-[#6d6e71] align-top">
                    <p className="font-bold p-1">
                      GP:D1:5 Develop strategies to care for self and others
                      during times of transition
                    </p>
                  </td>
                  <td className="border border-[#6d6e71] align-top">
                    <p className="p-1">
                      Take part in simple activities to practice self-care and
                      manage emotions during transitions.
                    </p>
                  </td>
                  <td className="border border-[#6d6e71] align-top">
                    <p className="p-1">
                      Engage in simple activities to practice self-care and
                      manage emotions during transitions, and start to notice
                      when a peer is upset or needs support, offering simple
                      gestures of kindness or comfort.
                    </p>
                  </td>
                  <td className="border border-[#6d6e71] align-top">
                    <p className="p-1">
                      Recognize challenges and opportunities during transitions
                      and use strategies for self-care and managing emotions.
                    </p>
                  </td>
                  <td className="border border-[#6d6e71] align-top">
                    <p className="p-1">
                      Identify their own emotional challenges during
                      transitions, use strategies to manage emotions, and
                      support peers who may also be struggling with transitions.
                    </p>
                  </td>
                  <td className="border border-[#6d6e71] align-top">
                    <p className="p-1">
                      Develop and use personalized self-care plans with various
                      coping strategies to support their well-being during
                      transitions and offer support to others by sharing
                      experiences and learning from each other's strategies.
                    </p>
                  </td>
                </tr>
                <tr className="bg-[#9acdc0] text-black text-center">
                  <td className="border border-[#6d6e71]" colSpan="6">
                    <p className="font-bold p-1">Competency D2 Adaptability</p>
                  </td>
                </tr>
                <tr>
                  <td className="border border-[#6d6e71] align-top"></td>
                  <td className="bg-[#5f95ba] text-center border border-[#6d6e71]">
                    <p className="font-bold p-1">By the end of PK</p>
                  </td>
                  <td className="bg-[#d6744e] text-center border border-[#6d6e71]">
                    <p className="font-bold p-1">Grades K-2</p>
                  </td>
                  <td className="bg-[#fcb442] text-center border border-[#6d6e71]">
                    <p className="font-bold p-1">Grades 3-5</p>
                  </td>
                  <td className="bg-[#eca57d] text-center border border-[#6d6e71]">
                    <p className="font-bold p-1">Grades 6-8</p>
                  </td>
                  <td className="bg-[#ddd0bc] text-center border border-[#6d6e71]">
                    <p className="font-bold p-1">Grades 9-12</p>
                  </td>
                </tr>
                <tr>
                  <td className="border border-[#6d6e71] align-top">
                    <p className="font-bold p-1">
                      GP:D2:1 Use knowledge of the transition process to enhance
                      communication, inform decisions, and build relationships
                      with others
                    </p>
                  </td>
                  <td className="border border-[#6d6e71] align-top">
                    <p className="p-1">
                      Begin to pay attention to self and others during
                      transitions to recognize and communicate feelings.
                    </p>
                  </td>
                  <td className="border border-[#6d6e71] align-top">
                    <p className="p-1">
                      Express feelings, ask for help, and listen to others to
                      facilitate the transition process.
                    </p>
                  </td>
                  <td className="border border-[#6d6e71] align-top">
                    <p className="p-1">
                      Build peer relationships, apply social skills, and
                      recognize choices available to them to facilitate the
                      transition process.
                    </p>
                  </td>
                  <td className="border border-[#6d6e71] align-top">
                    <p className="p-1">
                      Apply social skills and build peer relationships to
                      navigate transitions effectively, while recognizing
                      available choices and making informed decisions to
                      facilitate the transition process.
                    </p>
                  </td>
                  <td className="border border-[#6d6e71] align-top">
                    <p className="p-1">
                      Use advanced social skills to build relationships, handle
                      transitions confidently, and make informed decisions to
                      facilitate the transition process.
                    </p>
                  </td>
                </tr>
                <tr>
                  <td className="border border-[#6d6e71] align-top">
                    <p className="font-bold p-1">
                      GP:D2:2 Establish positive routines and structures to
                      support healthy transitions
                    </p>
                  </td>
                  <td className="border border-[#6d6e71] align-top">
                    <p className="p-1">
                      Follow daily routines and structures to support healthy
                      transitions.
                    </p>
                  </td>
                  <td className="border border-[#6d6e71] align-top">
                    <p className="p-1">
                      Make simple choices within daily routines and structures
                      to support healthy transitions.
                    </p>
                  </td>
                  <td className="border border-[#6d6e71] align-top">
                    <p className="p-1">
                      Establish their own positive routines and structures to
                      support healthy transitions.
                    </p>
                  </td>
                  <td className="border border-[#6d6e71] align-top">
                    <p className="p-1">
                      Maintain positive routines and structures, and modify
                      their routines as needed to support healthy transitions.
                    </p>
                  </td>
                  <td className="border border-[#6d6e71] align-top">
                    <p className="p-1">
                      Evaluate the impact of maintaining positive routines and
                      structures on personal productivity, health, and overall
                      well-being during transitions.
                    </p>
                  </td>
                </tr>
                <tr>
                  <td className="border border-[#6d6e71] align-top">
                    <p className="font-bold p-1">
                      GP:D2:3 Explore the complex feelings and emotions
                      associated with transition
                    </p>
                  </td>
                  <td className="border border-[#6d6e71] align-top">
                    <p className="p-1">
                      Recognize some emotions they experience during transition,
                      such as happiness, sadness, excitement, or nervousness.
                    </p>
                  </td>
                  <td className="border border-[#6d6e71] align-top">
                    <p className="p-1">
                      Identify and name some emotions related to transitions,
                      and explain how it is possible to feel multiple, sometimes
                      conflicting emotions at the same time.
                    </p>
                  </td>
                  <td className="border border-[#6d6e71] align-top">
                    <p className="p-1">
                      Identify and label a range of emotions related to
                      transition, recognizing the diversity of experiences and
                      emotional responses to transition.
                    </p>
                  </td>
                  <td className="border border-[#6d6e71] align-top">
                    <p className="p-1">
                      Compare and contrast the different emotional responses to
                      transition, considering the variety of experiences and
                      perspectives.
                    </p>
                  </td>
                  <td className="border border-[#6d6e71] align-top">
                    <p className="p-1">
                      Evaluate how individual factors such as cultural
                      background, personal circumstances, and coping strategies
                      influence emotional reactions to transitions.
                    </p>
                  </td>
                </tr>
                <tr>
                  <td className="border border-[#6d6e71] align-top">
                    <p className="font-bold p-1">
                      GP:D2:4 Explain the importance of time needed to adapt to
                      major transitions
                    </p>
                  </td>
                  <td className="border border-[#6d6e71] align-top">
                    <p className="p-1">
                      With support, begin to adapt to changes and unexpected
                      events during transitions, such as routine changes or
                      disruptions.
                    </p>
                  </td>
                  <td className="border border-[#6d6e71] align-top">
                    <p className="p-1">
                      Demonstrate flexibility in adapting to changes and
                      unexpected events during transitions.
                    </p>
                  </td>
                  <td className="border border-[#6d6e71] align-top">
                    <p className="p-1">
                      Demonstrate patience with self and others, recognizing
                      that adaptation is a gradual process and that everyone
                      adapts at their own pace.
                    </p>
                  </td>
                  <td className="border border-[#6d6e71] align-top">
                    <p className="p-1">
                      Analyze challenges and benefits of adapting to major
                      changes and discuss strategies for managing change
                      effectively.
                    </p>
                  </td>
                  <td className="border border-[#6d6e71] align-top">
                    <p className="p-1">
                      Articulate the importance of time needed to adapt to major
                      transitions and analyze how different factors such as
                      culture and personal circumstances can impact the time
                      needed to adapt.
                    </p>
                  </td>
                </tr>
                <tr>
                  <td className="border border-[#6d6e71] align-top">
                    <p className="font-bold p-1">
                      GP:D2:5 Develop strategies to care for self and others
                      during times of transition
                    </p>
                  </td>
                  <td className="border border-[#6d6e71] align-top">
                    <p className="p-1">
                      Take part in simple activities to practice self-care and
                      manage emotions during transitions.
                    </p>
                  </td>
                  <td className="border border-[#6d6e71] align-top">
                    <p className="p-1">
                      Engage in simple activities to practice self-care and
                      manage emotions during transitions and start to notice
                      when a peer is upset or needs support, offering simple
                      gestures of kindness or comfort.
                    </p>
                  </td>
                  <td className="border border-[#6d6e71] align-top">
                    <p className="p-1">
                      Recognize challenges and opportunities during transitions
                      and use strategies for self-care and managing emotions.
                    </p>
                  </td>
                  <td className="border border-[#6d6e71] align-top">
                    <p className="p-1">
                      Identify their own emotional challenges during
                      transitions, use strategies to manage emotions, and
                      support peers who may also be struggling with transitions.
                    </p>
                  </td>
                  <td className="border border-[#6d6e71] align-top">
                    <p className="p-1">
                      Develop and use personalized self-care plans with various
                      coping strategies to support their well-being during
                      transitions and offer support to others by sharing
                      experiences and learning from each other's strategies.
                    </p>
                  </td>
                </tr>
                <tr>
                  <td className="border border-[#6d6e71] align-top">
                    <p className="font-bold p-1">
                      GP:D2:6 Manage the potential stress and loss associated
                      with transition events
                    </p>
                  </td>
                  <td className="border border-[#6d6e71] align-top">
                    <p className="p-1">
                      Practice calming exercises, such as taking deep breaths,
                      to help with changes in their day.
                    </p>
                  </td>
                  <td className="border border-[#6d6e71] align-top">
                    <p className="p-1">
                      Practice self-regulation techniques to manage stress and
                      emotions during transition events, such as deep breathing
                      exercises or mindfulness.
                    </p>
                  </td>
                  <td className="border border-[#6d6e71] align-top">
                    <p className="p-1">
                      Explain how transitions can cause stress and feelings of
                      loss from changes in routines, relationships, or
                      environments, and identify effective coping strategies
                      (e.g., seeking support, practicing self-care, using
                      relaxation techniques, and staying positive).
                    </p>
                  </td>
                  <td className="border border-[#6d6e71] align-top">
                    <p className="p-1">
                      Notice signs of stress and loss in yourself and others
                      during transitions, such as mood swings or withdrawal, and
                      use coping strategies such as seeking support and
                      practicing self-care.
                    </p>
                  </td>
                  <td className="border border-[#6d6e71] align-top">
                    <p className="p-1">
                      Describe the stress and loss effects during transitions,
                      prioritize self-care for overall well-being, and select
                      coping strategies such as self-advocacy and seeking
                      support.
                    </p>
                  </td>
                </tr>
                <tr>
                  <td className="border border-[#6d6e71] align-top">
                    <p className="font-bold p-1">
                      GP:D2:7 Establish strategies to stay connected with others
                      during and after transition
                    </p>
                  </td>
                  <td className="border border-[#6d6e71] align-top">
                    <p className="p-1">
                      Engage in cooperative play activities to practice sharing,
                      turn-taking, and communicating with peers during
                      transitions.
                    </p>
                  </td>
                  <td className="border border-[#6d6e71] align-top">
                    <p className="p-1">
                      Identify simple ways to stay connected with others during
                      transitions.
                    </p>
                  </td>
                  <td className="border border-[#6d6e71] align-top">
                    <p className="p-1">
                      Establish and describe practical strategies to maintain
                      connections with friends and family during and after
                      transitions.
                    </p>
                  </td>
                  <td className="border border-[#6d6e71] align-top">
                    <p className="p-1">
                      Explain how social support, friendship, and a sense of
                      belonging help navigate changes successfully, and share
                      experiences, concerns, and strategies for staying
                      connected with others during transitions.
                    </p>
                  </td>
                  <td className="border border-[#6d6e71] align-top">
                    <p className="p-1">
                      Evaluate the effectiveness of various strategies for
                      staying connected during transitions, reflecting on how
                      social support, friendship, and a sense of belonging aid
                      in navigating changes successfully, and refine these
                      strategies to maintain meaningful connections throughout
                      and after transitions.
                    </p>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </main>
  );
};

export default DomainGlobalPage;
