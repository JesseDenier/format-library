// Imports React library
import React from "react";

// Imports the authentication utility
import Auth from "../utils/auth";

// Imports the query utility
import { useQuery } from "@apollo/client";
import { QUERY_USER } from "../utils/queries";

// Imports PDF handling
import { handlePDFWatermarkAndDownload } from "../utils/pdfUtils";

const DomainAcademicPage = () => {
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
                "/private/domain_academic.pdf",
                user,
                "ISCA Academic Domain"
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
          id="Academic_Domain"
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
                <tr>
                  <td
                    className="bg-[#f26539] text-white font-bold text-center border border-[#6d6e71]"
                    colSpan="6"
                  >
                    <p className="p-1">Academic</p>
                  </td>
                </tr>
                <tr className="bg-[#026666] text-white">
                  <td className="border border-[#6d6e71] align-top">
                    <p className="font-bold p-1">Standard A:</p>
                  </td>
                  <td className="border border-[#6d6e71]" colSpan="5">
                    <p className="font-bold p-1">
                      Students will demonstrate the dispositions, knowledge, and
                      skills that contribute to effective learning in school and
                      throughout life
                    </p>
                  </td>
                </tr>
                <tr className="bg-[#9acdc0] text-black text-center">
                  <td className="border border-[#6d6e71]" colSpan="6">
                    <p className="font-bold p-1">
                      Competency A1 Self-Awareness as a Learner
                    </p>
                  </td>
                </tr>

                <tr>
                  <td className="border border-[#6d6e71]" />
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
                      A:A1:1 Display a positive disposition towards learning and
                      willingness to embrace new ideas, challenges, and/or
                      learning opportunities
                    </p>
                  </td>
                  <td className="border border-[#6d6e71] align-top">
                    <p className="p-1">
                      Express curiosity and joy when trying new activities.
                    </p>
                  </td>
                  <td className="border border-[#6d6e71] align-top">
                    <p className="p-1">
                      Demonstrate a positive attitude when facing challenges and
                      exploring new ideas and/or activities.
                    </p>
                  </td>
                  <td className="border border-[#6d6e71] align-top">
                    <p className="p-1">
                      Engage in new learning experiences and academic challenges
                      with a positive and curious mindset.
                    </p>
                  </td>
                  <td className="border border-[#6d6e71] align-top">
                    <p className="p-1">
                      Express a willingness to learn unfamiliar and/or
                      challenging topics.
                    </p>
                  </td>
                  <td className="border border-[#6d6e71] align-top">
                    <p className="p-1">
                      Take initiative to learn new and/or challenging topics and
                      explain the benefits of embracing new ideas, challenges,
                      and/or learning opportunities.
                    </p>
                  </td>
                </tr>
                <tr>
                  <td className="border border-[#6d6e71] align-top">
                    <p className="font-bold p-1">
                      A:A1:2 Identify and apply attitudes, behaviors and
                      strategies which lead to successful learning
                    </p>
                  </td>
                  <td className="border border-[#6d6e71] align-top">
                    <p className="p-1">
                      Follow basic classroom routines that build a foundation
                      for self-regulation, organization, and time management.
                    </p>
                  </td>
                  <td className="border border-[#6d6e71] align-top">
                    <p className="p-1">
                      Practice basic strategies and develop habits for
                      self-regulation, organization, and time management.
                    </p>
                  </td>
                  <td className="border border-[#6d6e71] align-top">
                    <p className="p-1">
                      Apply some strategies for self-regulation, organization,
                      and time management, recognizing how these lead to
                      successful learning outcomes.
                    </p>
                  </td>
                  <td className="border border-[#6d6e71] align-top">
                    <p className="p-1">
                      Apply several strategies for self-regulation,
                      organization, and time management, identifying which
                      practices lead to successful learning outcomes.
                    </p>
                  </td>
                  <td className="border border-[#6d6e71] align-top">
                    <p className="p-1">
                      Consistently adapt and refine self-regulation,
                      organization, and time-management strategies, explaining
                      how these lead to successful learning outcomes.
                    </p>
                  </td>
                </tr>
                <tr>
                  <td className="border border-[#6d6e71] align-top">
                    <p className="font-bold p-1">
                      A:A1:3 Articulate self-efficacy as a learner
                    </p>
                  </td>
                  <td className="border border-[#6d6e71] align-top">
                    <p className="p-1">
                      Demonstrate a growing sense of confidence and
                      accomplishment when trying new learning tasks.
                    </p>
                  </td>
                  <td className="border border-[#6d6e71] align-top">
                    <p className="p-1">
                      Use positive self-talk to express confidence in their
                      ability to learn and succeed.
                    </p>
                  </td>
                  <td className="border border-[#6d6e71] align-top">
                    <p className="p-1">
                      Acknowledge and celebrate achievements and progress and
                      demonstrate a sense of confidence as a learner.
                    </p>
                  </td>
                  <td className="border border-[#6d6e71] align-top">
                    <p className="p-1">
                      Connect past successes to personal efforts and strategies,
                      expressing confidence in their capability and competence
                      as a learner.
                    </p>
                  </td>
                  <td className="border border-[#6d6e71] align-top">
                    <p className="p-1">
                      Recognize the correlation between academic achievements
                      and ongoing effort and dedication, expressing belief in
                      their capabilities to achieve goals or desired outcomes.
                    </p>
                  </td>
                </tr>
                <tr>
                  <td className="border border-[#6d6e71] align-top">
                    <p className="font-bold p-1">
                      A:A1:4 Use mistakes as opportunities for growth in the
                      learning process
                    </p>
                  </td>
                  <td className="border border-[#6d6e71] align-top">
                    <p className="p-1">
                      Demonstrate perseverance when mistakes are made or
                      setbacks occur.
                    </p>
                  </td>
                  <td className="border border-[#6d6e71] align-top">
                    <p className="p-1">
                      Demonstrate resilience by trying again after making
                      mistakes.
                    </p>
                  </td>
                  <td className="border border-[#6d6e71] align-top">
                    <p className="p-1">
                      Distinguish between a growth mindset and a fixed mindset
                      and explain how mistakes can lead to new discoveries in
                      learning.
                    </p>
                  </td>
                  <td className="border border-[#6d6e71] align-top">
                    <p className="p-1">
                      Demonstrate a growth mindset by viewing mistakes as
                      opportunities to learn and analyzing weaknesses to
                      identify ways to improve.
                    </p>
                  </td>
                  <td className="border border-[#6d6e71] align-top">
                    <p className="p-1">
                      Leverage mistakes to grow and evaluate the importance of
                      mindsets in learning.
                    </p>
                  </td>
                </tr>
                <tr>
                  <td className="border border-[#6d6e71] align-top">
                    <p className="font-bold p-1">
                      A:A1:5 Take pride in work and achievement
                    </p>
                  </td>
                  <td className="border border-[#6d6e71] align-top">
                    <p className="p-1">
                      Show signs of positive self-recognition during simple
                      accomplishments.
                    </p>
                  </td>
                  <td className="border border-[#6d6e71] align-top">
                    <p className="p-1">
                      Acknowledge and celebrate academic achievements.
                    </p>
                  </td>
                  <td className="border border-[#6d6e71] align-top">
                    <p className="p-1">
                      Engage in positive self-reflection about their work and
                      academic achievements.
                    </p>
                  </td>
                  <td className="border border-[#6d6e71] align-top">
                    <p className="p-1">
                      Take ownership of their work and demonstrate a sense of
                      pride in academic achievements.
                    </p>
                  </td>
                  <td className="border border-[#6d6e71] align-top">
                    <p className="p-1">
                      Articulate academic achievements with confidence.
                    </p>
                  </td>
                </tr>
                <tr>
                  <td className="border border-[#6d6e71] align-top">
                    <p className="font-bold p-1">
                      A:A1:6 Use self-awareness to build on personal strengths
                      and take steps to meet challenges
                    </p>
                  </td>
                  <td className="border border-[#6d6e71] align-top">
                    <p className="p-1">
                      Begin to express preferences for certain activities based
                      on emerging strengths.
                    </p>
                  </td>
                  <td className="border border-[#6d6e71] align-top">
                    <p className="p-1">
                      With support, recognize their emerging strengths and areas
                      of challenge.
                    </p>
                  </td>
                  <td className="border border-[#6d6e71] align-top">
                    <p className="p-1">
                      Recognize their strengths and areas of challenge and apply
                      strategies and resources to support learning.
                    </p>
                  </td>
                  <td className="border border-[#6d6e71] align-top">
                    <p className="p-1">
                      Explain their strengths and areas of challenge and apply
                      strategies and resources to support learning.
                    </p>
                  </td>
                  <td className="border border-[#6d6e71] align-top">
                    <p className="p-1">
                      Analyze their strengths and areas of challenge to
                      proactively seek and apply a range of strategies and
                      resources to support learning.
                    </p>
                  </td>
                </tr>
                <tr className="bg-[#9acdc0] text-black text-center border border-[#6d6e71]">
                  <td colSpan="6">
                    <p className="font-bold p-1">
                      Competency A2 Effective Learning
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
                      A:A2:1 Apply critical-thinking skills
                    </p>
                  </td>
                  <td className="border border-[#6d6e71] align-top">
                    <p className="p-1">
                      Begin to ask simple questions, show curiosity about the
                      world, and engage in activities (e.g., puzzles and sorting
                      games to practice basic problem-solving skills).
                    </p>
                  </td>
                  <td className="border border-[#6d6e71] align-top">
                    <p className="p-1">
                      Look closely at information, draw out important details,
                      and make connections between ideas or events.
                    </p>
                  </td>
                  <td className="border border-[#6d6e71] align-top">
                    <p className="p-1">
                      Analyze simple data or information and derive conclusions
                      from given data or information.
                    </p>
                  </td>
                  <td className="border border-[#6d6e71] align-top">
                    <p className="p-1">
                      Solve multistep problems, considering various factors and
                      potential solutions.
                    </p>
                  </td>
                  <td className="border border-[#6d6e71] align-top">
                    <p className="p-1">
                      Construct well-reasoned arguments and evaluate the
                      arguments of others, incorporating evidence and addressing
                      counterarguments.
                    </p>
                  </td>
                </tr>
                <tr>
                  <td className="border border-[#6d6e71] align-top">
                    <p className="font-bold p-1 ">
                      A:A2:2 Apply time-management skills to use time
                      productively and accomplish tasks by deadlines
                    </p>
                  </td>
                  <td className="border border-[#6d6e71] align-top">
                    <p className="p-1">
                      Begin to develop a sense of time through experiencing
                      basic concepts, such as sequences and routines (e.g.,
                      “First…then…,” visual timelines, transition songs).
                    </p>
                  </td>
                  <td className="border border-[#6d6e71] align-top">
                    <p className="p-1">
                      Recall the order of activities and assignments for the day
                      or week and begin to demonstrate an understanding of the
                      passage of time as it relates to their school day (e.g.,
                      checking tasks off when they are completed, engaging in
                      countdown activities).
                    </p>
                  </td>
                  <td className="border border-[#6d6e71] align-top">
                    <p className="p-1">
                      Use assignment planners or digital calendars to record
                      homework assignments, projects, and due dates.
                    </p>
                  </td>
                  <td className="border border-[#6d6e71] align-top">
                    <p className="p-1">
                      Estimate how long an assignment will take by carefully
                      reading the instructions to find key requirements and
                      goals, break big tasks into smaller, manageable ones to
                      finish on time, and prioritize and organize tasks from
                      most to least important.
                    </p>
                  </td>
                  <td className="border border-[#6d6e71] align-top">
                    <p className="p-1">
                      Make choices about how to allocate time by prioritizing
                      tasks according to importance and urgency, and integrate
                      assignment deadlines into their schedule by allocating
                      time for assignments, extracurricular activities, and
                      personal time.
                    </p>
                  </td>
                </tr>
                <tr>
                  <td className="border border-[#6d6e71] align-top">
                    <p className="font-bold p-1">
                      A:A2:3 Demonstrate the ability to persist with tasks when
                      faced with challenges and adapt approach in order to
                      achieve objectives/goals
                    </p>
                  </td>
                  <td className="border border-[#6d6e71] align-top">
                    <p className="p-1">
                      With support, show a readiness to attempt challenging
                      activities.
                    </p>
                  </td>
                  <td className="border border-[#6d6e71] align-top">
                    <p className="p-1">
                      Recognize learning challenges, adopt a flexible,
                      growth-oriented mindset, and seek assistance from teachers
                      or peers when challenged with difficult tasks.
                    </p>
                  </td>
                  <td className="border border-[#6d6e71] align-top">
                    <p className="p-1">
                      Recognize aspects of their learning that are challenging
                      and seek appropriate support to persist with difficult
                      tasks.
                    </p>
                  </td>
                  <td className="border border-[#6d6e71] align-top">
                    <p className="p-1">
                      Express what was learned from setbacks and adjust
                      strategies to overcome challenges and achieve goals.
                    </p>
                  </td>
                  <td className="border border-[#6d6e71] align-top">
                    <p className="p-1">
                      Initiate action to overcome learning challenges, deepen
                      understanding of the learning process, reflect on
                      experiences, and build resilience to achieve goals.
                    </p>
                  </td>
                </tr>
                <tr>
                  <td className="border border-[#6d6e71] align-top">
                    <p className="font-bold p-1">
                      A:A2:4 Fulfill individual role and responsibilities when
                      working within a group through cooperation and compromise
                    </p>
                  </td>
                  <td className="border border-[#6d6e71] align-top">
                    <p className="p-1">
                      Play alongside and/or with others and begin to take turns
                      and share items.
                    </p>
                  </td>
                  <td className="border border-[#6d6e71] align-top">
                    <p className="p-1">
                      Share, take turns, cooperate, and compromise with others
                      when working in a group.
                    </p>
                  </td>
                  <td className="border border-[#6d6e71] align-top">
                    <p className="p-1">
                      Express a shared responsibility for the group's goals and
                      support the learning of self and others (e.g.,
                      collaborating, listening, compromising, sharing tasks and
                      roles).
                    </p>
                  </td>
                  <td className="border border-[#6d6e71] align-top">
                    <p className="p-1">
                      Apply collaborative skills such as active listening,
                      respectful disagreement, acknowledgment of the opinions of
                      others, and compromise.
                    </p>
                  </td>
                  <td className="border border-[#6d6e71] align-top">
                    <p className="p-1">
                      Establish and maintain close, interpersonal working
                      relationships by applying collaborative skills (e.g.,
                      active listening, respectful disagreement, acknowledgment
                      of the opinions of others, compromise).
                    </p>
                  </td>
                </tr>
                <tr>
                  <td className="border border-[#6d6e71] align-top">
                    <p className="font-bold p-1">
                      A:A2:5 Produce original work and exercise academic honesty
                    </p>
                  </td>
                  <td className="border border-[#6d6e71] align-top">
                    <p className="p-1">
                      Treat the work of others with kindness.
                    </p>
                  </td>
                  <td className="border border-[#6d6e71] align-top">
                    <p className="p-1">
                      Identify examples of honesty and draw connections between
                      personal and academic honesty.
                    </p>
                  </td>
                  <td className="border border-[#6d6e71] align-top">
                    <p className="p-1">
                      Complete own work and acknowledge others' ideas by citing
                      sources.
                    </p>
                  </td>
                  <td className="border border-[#6d6e71] align-top">
                    <p className="p-1">
                      Recognize academic dishonesty and complete assignments
                      independently, and acknowledge sources when using others'
                      ideas or information.
                    </p>
                  </td>
                  <td className="border border-[#6d6e71] align-top">
                    <p className="p-1">
                      Produce original work and exercise academic honesty, and
                      explain the potential consequences of academic dishonesty
                      both within the school setting and in terms of long-term
                      educational goals.
                    </p>
                  </td>
                </tr>
                <tr className="bg-[#026666] text-white">
                  <td className="border border-[#6d6e71] align-top">
                    <p className="font-bold p-1">Standard B:</p>
                  </td>
                  <td className="border border-[#6d6e71]" colSpan="5">
                    <p className="font-bold p-1">
                      Students will apply future-ready skills in preparation for
                      a variety of post-secondary paths including college and
                      career
                    </p>
                  </td>
                </tr>
                <tr className="bg-[#9acdc0] text-black text-center border border-[#6d6e71]">
                  <td colSpan="6">
                    <p className="font-bold p-1">
                      Competency B1 Self-Directed Learning and Student Agency
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
                      A:B1:1 Develop own personal approach to learning,
                      including application of organizational and study skills
                    </p>
                  </td>
                  <td className="border border-[#6d6e71] align-top">
                    <p className="p-1">
                      Follow simple classroom routines for cleaning up and
                      putting materials in their designated places.
                    </p>
                  </td>
                  <td className="border border-[#6d6e71] align-top">
                    <p className="p-1">
                      Take responsibility for tidying up and maintain an
                      organized learning environment.
                    </p>
                  </td>
                  <td className="border border-[#6d6e71] align-top">
                    <p className="p-1">
                      Utilize basic study techniques, such as note-taking and/or
                      reviewing lessons, and apply simple organizational systems
                      to locate their personal learning materials and
                      assignments.
                    </p>
                  </td>
                  <td className="border border-[#6d6e71] align-top">
                    <p className="p-1">
                      Apply more advanced study skills such as effective note
                      taking, using study strategies like summarizing and
                      highlighting and utilizing digital tools for organization.
                    </p>
                  </td>
                  <td className="border border-[#6d6e71] align-top">
                    <p className="p-1">
                      Choose organizational and study strategies that work best
                      for them and apply these strategies with regularity,
                      leading to effective learning habits.
                    </p>
                  </td>
                </tr>
                <tr>
                  <td className="border border-[#6d6e71] align-top">
                    <p className="font-bold p-1">
                      A:B1:2 Identify creative approaches to learning and tasks
                    </p>
                  </td>
                  <td className="border border-[#6d6e71] align-top">
                    <p className="p-1">
                      Explore ideas and interests through creative play.
                    </p>
                  </td>
                  <td className="border border-[#6d6e71] align-top">
                    <p className="p-1">
                      Generate multiple ideas for how to approach projects or
                      tasks.
                    </p>
                  </td>
                  <td className="border border-[#6d6e71] align-top">
                    <p className="p-1">
                      Experiment with new approaches to learning and develop
                      creative solutions to problems.
                    </p>
                  </td>
                  <td className="border border-[#6d6e71] align-top">
                    <p className="p-1">
                      Develop creative ideas, solutions, and approaches to
                      learning, independently and in collaboration with others.
                    </p>
                  </td>
                  <td className="border border-[#6d6e71] align-top">
                    <p className="p-1">
                      Develop and implement creative solutions to complex
                      problems, leading and motivating others in collaborative
                      projects and initiatives.
                    </p>
                  </td>
                </tr>
                <tr>
                  <td className="border border-[#6d6e71] align-top">
                    <p className="font-bold p-1">
                      A:B1:3 Demonstrates independence as a self-directed
                      learner
                    </p>
                  </td>
                  <td className="border border-[#6d6e71] align-top">
                    <p className="p-1">
                      Make choices about how to play and assist with tasks in
                      the learning environment.
                    </p>
                  </td>
                  <td className="border border-[#6d6e71] align-top">
                    <p className="p-1">
                      Assume responsibilities within the learning environment.
                    </p>
                  </td>
                  <td className="border border-[#6d6e71] align-top">
                    <p className="p-1">
                      Make choices and solve problems related to their own
                      learning.
                    </p>
                  </td>
                  <td className="border border-[#6d6e71] align-top">
                    <p className="p-1">
                      Evaluate options before making choices about their
                      learning.
                    </p>
                  </td>
                  <td className="border border-[#6d6e71] align-top">
                    <p className="p-1">
                      Take ownership of their learning by making choices,
                      solving problems, and monitoring progress toward goals.
                    </p>
                  </td>
                </tr>
                <tr>
                  <td className="border border-[#6d6e71] align-top">
                    <p className="font-bold p-1">
                      A:B1:4 Demonstrate the motivation and resilience to
                      achieve and sustain individual potential
                    </p>
                  </td>
                  <td className="border border-[#6d6e71] align-top">
                    <p className="p-1">
                      Demonstrate the ability to try again when challenges are
                      experienced during play.
                    </p>
                  </td>
                  <td className="border border-[#6d6e71] align-top">
                    <p className="p-1">
                      Demonstrate the ability to calm themselves down when faced
                      with frustration and recover from minor academic setbacks
                      or challenges.
                    </p>
                  </td>
                  <td className="border border-[#6d6e71] align-top">
                    <p className="p-1">
                      Demonstrate the ability to recover from academic setbacks
                      or challenges, adapt to change, and persevere through
                      difficult tasks.
                    </p>
                  </td>
                  <td className="border border-[#6d6e71] align-top">
                    <p className="p-1">
                      Demonstrate the ability to recover from academic setbacks
                      or challenges, adapt to change, apply strategies for
                      problem-solving, seek help when needed, and persevere
                      through difficult tasks.
                    </p>
                  </td>
                  <td className="border border-[#6d6e71] align-top">
                    <p className="p-1">
                      Demonstrate the ability to recover from academic setbacks,
                      learn from their mistakes, remain focused on long-term
                      objectives, and persevere during times of high stress and
                      difficult tasks.
                    </p>
                  </td>
                </tr>
                <tr>
                  <td className="border border-[#6d6e71] align-top">
                    <p className="font-bold p-1">
                      A:B1:5 Demonstrate an active role in deciding what and how
                      one will learn
                    </p>
                  </td>
                  <td className="border border-[#6d6e71] align-top">
                    <p className="p-1">
                      Make age-appropriate choices through the exploration of
                      interests and self-directed play.
                    </p>
                  </td>
                  <td className="border border-[#6d6e71] align-top">
                    <p className="p-1">
                      Select from various options to interact with learning
                      materials and demonstrate understanding in ways that align
                      with preferences and strengths.
                    </p>
                  </td>
                  <td className="border border-[#6d6e71] align-top">
                    <p className="p-1">
                      Choose topics that align with their interests and decide
                      how to explore and understand those subjects.
                    </p>
                  </td>
                  <td className="border border-[#6d6e71] align-top">
                    <p className="p-1">
                      Assume responsibility for their learning and set a
                      personal learning plan based on their interests and
                      preferred learning methods.
                    </p>
                  </td>
                  <td className="border border-[#6d6e71] align-top">
                    <p className="p-1">
                      Take initiative with their learning by selecting engaging
                      topics, deciding how to study them, actively
                      participating, seeking help as needed, and reflecting on
                      progress and strategies.
                    </p>
                  </td>
                </tr>
                <tr>
                  <td className="border border-[#6d6e71] align-top">
                    <p className="font-bold p-1">
                      A:B1:6 Assess the task at hand and evaluate their own
                      level of knowledge and skills needed to accomplish the
                      task
                    </p>
                  </td>
                  <td className="border border-[#6d6e71] align-top">
                    <p className="p-1">
                      Break down basic daily tasks with help (e.g.,
                      understanding the steps or skills required for tidying
                      toys or transitioning between activities).
                    </p>
                  </td>
                  <td className="border border-[#6d6e71] align-top">
                    <p className="p-1">
                      Deconstruct academic tasks into parts and describe what
                      one might need to know and be able to do to accomplish the
                      task.
                    </p>
                  </td>
                  <td className="border border-[#6d6e71] align-top">
                    <p className="p-1">
                      Deconstruct academic tasks by breaking them down into
                      specific components and identify existing knowledge and
                      abilities related to the task.
                    </p>
                  </td>
                  <td className="border border-[#6d6e71] align-top">
                    <p className="p-1">
                      Deconstruct academic tasks into specific components and
                      identify new knowledge and skills that will be needed to
                      accomplish the task.
                    </p>
                  </td>
                  <td className="border border-[#6d6e71] align-top">
                    <p className="p-1">
                      Assess the existing knowledge and skills required to
                      complete tasks, then create a plan based on this
                      assessment.
                    </p>
                  </td>
                </tr>
                <tr>
                  <td className="border border-[#6d6e71] align-top">
                    <p className="font-bold p-1">
                      A:B1:7 Apply decision-making protocols that are informed
                      by data gathered from a variety of reliable and relevant
                      sources
                    </p>
                  </td>
                  <td className="border border-[#6d6e71] align-top">
                    <p className="p-1">
                      Choose between options when making a decision.
                    </p>
                  </td>
                  <td className="border border-[#6d6e71] align-top">
                    <p className="p-1">
                      Use basic information such as facts, details, or simple
                      knowledge when making decisions.
                    </p>
                  </td>
                  <td className="border border-[#6d6e71] align-top">
                    <p className="p-1">
                      Distinguish between reliable and unreliable, and important
                      and unimportant information when making decisions.
                    </p>
                  </td>
                  <td className="border border-[#6d6e71] align-top">
                    <p className="p-1">
                      Gather information from a variety of reliable and relevant
                      sources when making decisions.
                    </p>
                  </td>
                  <td className="border border-[#6d6e71] align-top">
                    <p className="p-1">
                      Follow a process when making data-informed decisions that
                      are based on a variety of reliable and relevant sources.
                    </p>
                  </td>
                </tr>
                <tr>
                  <td className="border border-[#6d6e71] align-top">
                    <p className="font-bold p-1">
                      A:B1:8 Use communication skills to self advocate and seek
                      help as a reflective learner
                    </p>
                  </td>
                  <td className="border border-[#6d6e71] align-top">
                    <p className="p-1">
                      Express their needs and wants during learning experiences.
                    </p>
                  </td>
                  <td className="border border-[#6d6e71] align-top">
                    <p className="p-1">
                      Make simple requests, such as asking for clarification or
                      help with a task.
                    </p>
                  </td>
                  <td className="border border-[#6d6e71] align-top">
                    <p className="p-1">
                      Identify when they need help related to their learning and
                      seek assistance from adults or classmates.
                    </p>
                  </td>
                  <td className="border border-[#6d6e71] align-top">
                    <p className="p-1">
                      Articulate what they need to be a successful learner, seek
                      assistance, and use resources available to them.
                    </p>
                  </td>
                  <td className="border border-[#6d6e71] align-top">
                    <p className="p-1">
                      Apply a variety of communication skills and tools,
                      including verbal and written communication, technology
                      use, collaboration, and self-reflection, to effectively
                      advocate for their learning needs and preferences.
                    </p>
                  </td>
                </tr>
                <tr className="bg-[#9acdc0] text-black text-center border border-[#6d6e71]">
                  <td colSpan="6">
                    <p className="font-bold p-1">
                      Competency B2 Planning and Goal Setting
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
                      A:B2.1 Develop and implement an annual plan of study to
                      maximize academic ability and achievement
                    </p>
                  </td>
                  <td className="border border-[#6d6e71] align-top">
                    <p className="p-1">
                      With support, identify their favorite activities from the
                      school year.
                    </p>
                  </td>
                  <td className="border border-[#6d6e71] align-top">
                    <p className="p-1">
                      Identify their favorite activities from the school year
                      and begin to articulate why certain activities or subjects
                      were enjoyable.
                    </p>
                  </td>
                  <td className="border border-[#6d6e71] align-top">
                    <p className="p-1">
                      Reflect on and articulate strengths, interests, and areas
                      of improvement based on past school experiences.
                    </p>
                  </td>
                  <td className="border border-[#6d6e71] align-top">
                    <p className="p-1">
                      Assess and rank the academic and cocurricular activities
                      enjoyed most at the end of the year and show an
                      understanding of high school academic options.
                    </p>
                  </td>
                  <td className="border border-[#6d6e71] align-top">
                    <p className="p-1">
                      Explore course options and create an academic plan that
                      aligns with strengths and interests in cocurricular
                      activities.
                    </p>
                  </td>
                </tr>
                <tr>
                  <td className="border border-[#6d6e71] align-top">
                    <p className="font-bold p-1">
                      A:B2.2 Use assessment tools to guide goal setting and
                      educational planning
                    </p>
                  </td>
                  <td className="border border-[#6d6e71] align-top">
                    <p className="p-1">
                      Participate in simple self-exploration tasks to discover
                      emerging interests, preferences, and abilities.
                    </p>
                  </td>
                  <td className="border border-[#6d6e71] align-top">
                    <p className="p-1">
                      With support, reflect on learning experiences, discuss
                      strengths, and set short-term and specific goals.
                    </p>
                  </td>
                  <td className="border border-[#6d6e71] align-top">
                    <p className="p-1">
                      Reflect on assessment results to gain self-awareness and
                      set learning goals.
                    </p>
                  </td>
                  <td className="border border-[#6d6e71] align-top">
                    <p className="p-1">
                      Examine assessment results to identify action steps and
                      achieve learning goals.
                    </p>
                  </td>
                  <td className="border border-[#6d6e71] align-top">
                    <p className="p-1">
                      Analyze assessment data to identify strengths and areas
                      for improvement and develop detailed educational plans
                      with steps to achieve goals.
                    </p>
                  </td>
                </tr>
                <tr>
                  <td className="border border-[#6d6e71] align-top">
                    <p className="font-bold p-1">
                      A:B2.3 Establish attainable long- and short-term goals
                    </p>
                  </td>
                  <td className="border border-[#6d6e71] align-top">
                    <p className="p-1">
                      With support, choose a simple and achievable goal related
                      to specific activities, skills, or behaviors.
                    </p>
                  </td>
                  <td className="border border-[#6d6e71] align-top">
                    <p className="p-1">
                      Choose a goal that is realistic and achievable with
                      effort.
                    </p>
                  </td>
                  <td className="border border-[#6d6e71] align-top">
                    <p className="p-1">
                      Choose a long-term goal and break it down into smaller,
                      manageable goals that can be achieved in a relatively
                      short period of time.
                    </p>
                  </td>
                  <td className="border border-[#6d6e71] align-top">
                    <p className="p-1">
                      Identify both long- and short-term learning goals that are
                      realistic, attainable, and challenging.
                    </p>
                  </td>
                  <td className="border border-[#6d6e71] align-top">
                    <p className="p-1">
                      Identify both long- and short-term learning goals and
                      explain why they are attainable.
                    </p>
                  </td>
                </tr>
                <tr>
                  <td className="border border-[#6d6e71] align-top">
                    <p className="font-bold p-1">
                      A:B2.4 Choose and implement specific strategies that will
                      lead to goal attainment
                    </p>
                  </td>
                  <td className="border border-[#6d6e71] align-top">
                    <p className="p-1">
                      Apply simple strategies with guidance to achieve specific
                      goals during play-based activities.
                    </p>
                  </td>
                  <td className="border border-[#6d6e71] align-top">
                    <p className="p-1">
                      Select and use specific strategies that help achieve their
                      goals.
                    </p>
                  </td>
                  <td className="border border-[#6d6e71] align-top">
                    <p className="p-1">
                      Apply a variety of strategies to achieve goals.
                    </p>
                  </td>
                  <td className="border border-[#6d6e71] align-top">
                    <p className="p-1">
                      Apply a variety of strategies to achieve goals, reflecting
                      on how well the chosen strategies have worked.
                    </p>
                  </td>
                  <td className="border border-[#6d6e71] align-top">
                    <p className="p-1">
                      Examine the outcomes and results achieved with the
                      strategies chosen to better attain goals.
                    </p>
                  </td>
                </tr>
                <tr>
                  <td className="border border-[#6d6e71] align-top">
                    <p className="font-bold p-1">
                      A:B2.5 Monitor progress toward goals and use
                      problem-solving strategies to adjust approach when
                      necessary
                    </p>
                  </td>
                  <td className="border border-[#6d6e71] align-top">
                    <p className="p-1">
                      Assess their progress toward a learning goal by
                      identifying what has been done and what still needs to be
                      accomplished.
                    </p>
                  </td>
                  <td className="border border-[#6d6e71] align-top">
                    <p className="p-1">
                      With support, identify any challenges or obstacles they
                      may be facing and apply a problem-solving strategy.
                    </p>
                  </td>
                  <td className="border border-[#6d6e71] align-top">
                    <p className="p-1">
                      Describe progress toward learning goals to determine if
                      they are on target to meet them, identify challenges
                      faced, and apply problem-solving strategies accordingly.
                    </p>
                  </td>
                  <td className="border border-[#6d6e71] align-top">
                    <p className="p-1">
                      Reflect on progress toward learning goals, explain
                      strategies used, and adjust action plans when facing
                      challenges.
                    </p>
                  </td>
                  <td className="border border-[#6d6e71] align-top">
                    <p className="p-1">
                      Explain progress toward learning goals, reflect on
                      effective strategies, and show the ability to adjust
                      action plans when challenges arise.
                    </p>
                  </td>
                </tr>
                <tr>
                  <td className="border border-[#6d6e71] align-top">
                    <p className="font-bold p-1">
                      A:B2.6 Reflect on learning and self-assess areas of
                      strength and areas for growth
                    </p>
                  </td>
                  <td className="border border-[#6d6e71] align-top">
                    <p className="p-1">
                      Share what they learned, enjoyed, or found challenging in
                      specific activities.
                    </p>
                  </td>
                  <td className="border border-[#6d6e71] align-top">
                    <p className="p-1">
                      Recognize activities or tasks where confidence or success
                      is felt, as well as areas for growth.
                    </p>
                  </td>
                  <td className="border border-[#6d6e71] align-top">
                    <p className="p-1">
                      Engage in reflective and self-assessment processes to gain
                      insights into areas of strength and areas for growth.
                    </p>
                  </td>
                  <td className="border border-[#6d6e71] align-top">
                    <p className="p-1">
                      Examine strengths and areas for growth in different
                      subjects, identifying common patterns.
                    </p>
                  </td>
                  <td className="border border-[#6d6e71] align-top">
                    <p className="p-1">
                      Take action on insights gained through self-assessment by
                      setting goals, developing strategies, and seeking support
                      where needed.
                    </p>
                  </td>
                </tr>
                <tr className="bg-[#026666] text-white">
                  <td className="border border-[#6d6e71] align-top">
                    <p className="font-bold p-1">Standard C:</p>
                  </td>
                  <td className="border border-[#6d6e71]" colSpan="5">
                    <p className="font-bold p-1">
                      Students will make connections between school and life
                      experiences
                    </p>
                  </td>
                </tr>
                <tr className="bg-[#9acdc0] text-black text-center">
                  <td className="border border-[#6d6e71]" colSpan="6">
                    <p className="font-bold p-1">
                      Competency C1 School to Life Experience
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
                      A:C1:1 Examine the relationship between school
                      success/academic achievement and future career success
                    </p>
                  </td>
                  <td className="border border-[#6d6e71] align-top">
                    <p className="p-1">
                      Meet developmental goals related to academic and social
                      skills that lay a foundation for future academic success.
                    </p>
                  </td>
                  <td className="border border-[#6d6e71] align-top">
                    <p className="p-1">
                      Identify the skills that are required to be a successful
                      learner.
                    </p>
                  </td>
                  <td className="border border-[#6d6e71] align-top">
                    <p className="p-1">
                      Identify the skills that are required to be a successful
                      learner and explain how these skills relate to their
                      future career aspirations.
                    </p>
                  </td>
                  <td className="border border-[#6d6e71] align-top">
                    <p className="p-1">
                      Explain the relevance and importance of school
                      success/academic achievement in shaping their desired
                      careers.
                    </p>
                  </td>
                  <td className="border border-[#6d6e71] align-top">
                    <p className="p-1">
                      Explain how school success/academic achievement can be a
                      critical determinant of future career success.
                    </p>
                  </td>
                </tr>
                <tr>
                  <td className="border border-[#6d6e71] align-top">
                    <p className="font-bold p-1">
                      A:C1:2 Articulate the value of lifelong learning as it
                      pertains to seeking, obtaining and maintaining life goals
                    </p>
                  </td>
                  <td className="border border-[#6d6e71] align-top">
                    <p className="p-1">
                      Begin to recognize the ways in which people of all ages
                      continue to learn and grow.
                    </p>
                  </td>
                  <td className="border border-[#6d6e71] align-top">
                    <p className="p-1">
                      Discuss how people continually learn and adapt throughout
                      their lives.
                    </p>
                  </td>
                  <td className="border border-[#6d6e71] align-top">
                    <p className="p-1">
                      Communicate what they are learning and how it relates to
                      future goals.
                    </p>
                  </td>
                  <td className="border border-[#6d6e71] align-top">
                    <p className="p-1">
                      Communicate their reflections about how past learning
                      experiences have contributed to personal growth and goal
                      achievement.
                    </p>
                  </td>
                  <td className="border border-[#6d6e71] align-top">
                    <p className="p-1">
                      Articulate the value of lifelong learning and its direct
                      impact on their ability to seek, obtain, and maintain life
                      goals.
                    </p>
                  </td>
                </tr>
                <tr>
                  <td className="border border-[#6d6e71] align-top">
                    <p className="font-bold p-1">
                      A:C1:3 Explain how the skills learned in school apply to
                      post-secondary and career readiness
                    </p>
                  </td>
                  <td className="border border-[#6d6e71] align-top">
                    <p className="p-1">
                      Discuss the skills used by professionals in their
                      community.
                    </p>
                  </td>
                  <td className="border border-[#6d6e71] align-top">
                    <p className="p-1">
                      Recognize how professionals apply what they learned in
                      school to help them in their careers.
                    </p>
                  </td>
                  <td className="border border-[#6d6e71] align-top">
                    <p className="p-1">
                      Identify skills unique to the subjects being learned and
                      discuss how they may be applied in the future.
                    </p>
                  </td>
                  <td className="border border-[#6d6e71] align-top">
                    <p className="p-1">
                      Identify and list specific skills they are developing
                      through academic coursework and extracurricular
                      activities, and compare the identified skills with the
                      skill sets required for post-secondary life.
                    </p>
                  </td>
                  <td className="border border-[#6d6e71] align-top">
                    <p className="p-1">
                      Analyze the extent to which the skills they are developing
                      through academic coursework and extracurricular activities
                      align with the demands of their post-secondary and/or
                      career aspirations.
                    </p>
                  </td>
                </tr>
                <tr>
                  <td className="border border-[#6d6e71] align-top">
                    <p className="font-bold p-1">
                      A:C1:4 Seek cocurricular and community experiences to
                      develop a broad range of interests in abilities
                    </p>
                  </td>
                  <td className="border border-[#6d6e71] align-top">
                    <p className="p-1">
                      Engage in diverse activities to explore interests and
                      develop foundational skills through play.
                    </p>
                  </td>
                  <td className="border border-[#6d6e71] align-top">
                    <p className="p-1">
                      Begin to engage in cocurricular and community experiences
                      that align with their interests.
                    </p>
                  </td>
                  <td className="border border-[#6d6e71] align-top">
                    <p className="p-1">
                      Engage in cocurricular and community experiences that
                      broaden their interests.
                    </p>
                  </td>
                  <td className="border border-[#6d6e71] align-top">
                    <p className="p-1">
                      Engage in a variety of cocurricular and community
                      experiences and explain how these support the development
                      of their interests and abilities.
                    </p>
                  </td>
                  <td className="border border-[#6d6e71] align-top">
                    <p className="p-1">
                      Actively seek out cocurricular and community experiences
                      to discover their passions and interests and provide
                      direction for future educational and career paths.
                    </p>
                  </td>
                </tr>
                <tr>
                  <td className="border border-[#6d6e71] align-top">
                    <p className="font-bold p-1">
                      A:C1:5 Demonstrate the ability to balance school, studies,
                      extracurricular activities, leisure time, and family life
                    </p>
                  </td>
                  <td className="border border-[#6d6e71] align-top">
                    <p className="p-1">
                      Follow a structured routine that includes a balance of
                      educational activities, playtime, and rest periods.
                    </p>
                  </td>
                  <td className="border border-[#6d6e71] align-top">
                    <p className="p-1">
                      Follow a structured routine that includes designated times
                      for school, homework, extracurricular activities, leisure,
                      and family time.
                    </p>
                  </td>
                  <td className="border border-[#6d6e71] align-top">
                    <p className="p-1">
                      Apply basic time-management skills to allocate time for
                      homework, extracurriculars, and leisure activities.
                    </p>
                  </td>
                  <td className="border border-[#6d6e71] align-top">
                    <p className="p-1">
                      Apply time-management skills to make choices about which
                      extracurricular activities to pursue based on academic and
                      personal commitments.
                    </p>
                  </td>
                  <td className="border border-[#6d6e71] align-top">
                    <p className="p-1">
                      Apply effective time-management skills, prioritizing tasks
                      and assignments to ensure they meet academic deadlines
                      while still participating in extracurriculars and
                      maintaining personal commitments.
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

export default DomainAcademicPage;
