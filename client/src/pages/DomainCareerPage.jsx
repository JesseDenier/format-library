// Imports React library
import React from "react";

// Imports the authentication utility
import Auth from "../utils/auth";

// Imports the query utility
import { useQuery } from "@apollo/client";
import { QUERY_USER } from "../utils/queries";

// Imports PDF handling
import { handlePDFWatermarkAndDownload } from "../utils/pdfUtils";

const DomainCareerPage = () => {
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
                "/private/domain_career.pdf",
                user,
                "ISCA Career Domain"
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
          id="Career_Domain"
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
                    <p className="font-bold p-1">Career</p>
                  </td>
                </tr>
                <tr className="bg-[#026666] text-white">
                  <td className="border border-[#6d6e71] align-top">
                    <p className="font-bold p-1">Standard A:</p>
                  </td>
                  <td className="border border-[#6d6e71]" colSpan="5">
                    <p className="font-bold p-1">
                      Students will research and anticipate potential career
                      paths that align with their abilities and personal
                      interests
                    </p>
                  </td>
                </tr>
                <tr className="bg-[#9acdc0] text-black text-center">
                  <td className="border border-[#6d6e71]" colSpan="6">
                    <p className="font-bold p-1">
                      Competency A1 Self-Exploration
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
                      C:A1:1 Draw connections between personal abilities,
                      skills, interests, and potential career options
                    </p>
                  </td>
                  <td className="border border-[#6d6e71] align-top">
                    <p className="p-1">
                      Explore the world of work through play, stories, and
                      interactions with role models.
                    </p>
                  </td>
                  <td className="border border-[#6d6e71] align-top">
                    <p className="p-1">
                      List and describe the tasks that people in different
                      occupations perform, as well as the skills necessary to
                      carry out those tasks.
                    </p>
                  </td>
                  <td className="border border-[#6d6e71] align-top">
                    <p className="p-1">
                      Make connections between what they excel at, what they
                      enjoy doing, and the types of jobs or professions that
                      could be a good fit for them based on the intersection of
                      these qualities.
                    </p>
                  </td>
                  <td className="border border-[#6d6e71] align-top">
                    <p className="p-1">
                      Make personal connections between their abilities, skills,
                      and interests, and suitable professions.
                    </p>
                  </td>
                  <td className="border border-[#6d6e71] align-top">
                    <p className="p-1">
                      Evaluate personal abilities, skills, and interests to
                      generate a list of aligned career options.
                    </p>
                  </td>
                </tr>
                <tr>
                  <td className="border border-[#6d6e71] align-top">
                    <p className="font-bold p-1">
                      C:A1:2 Draw connections between enrichment and
                      extracurricular activities and potential career paths
                    </p>
                  </td>
                  <td className="border border-[#6d6e71] align-top">
                    <p className="p-1">
                      Begin to develop personal interests through playful and
                      structured experiences.
                    </p>
                  </td>
                  <td className="border border-[#6d6e71] align-top">
                    <p className="p-1">
                      Identify the enrichment and/or extracurricular activities
                      they enjoy.
                    </p>
                  </td>
                  <td className="border border-[#6d6e71] align-top">
                    <p className="p-1">
                      Discuss the interests and skills acquired through
                      participating in various enrichment or extracurricular
                      activities.
                    </p>
                  </td>
                  <td className="border border-[#6d6e71] align-top">
                    <p className="p-1">
                      Explain how their involvement in enrichment and/or
                      extracurricular activities relates to possible career
                      choices.
                    </p>
                  </td>
                  <td className="border border-[#6d6e71] align-top">
                    <p className="p-1">
                      Analyze how specific skills and experiences gained from
                      their enrichment and/or extracurricular activities
                      directly contribute to and prepare them for their future
                      career paths.
                    </p>
                  </td>
                </tr>
                <tr>
                  <td className="border border-[#6d6e71] align-top">
                    <p className="font-bold p-1">
                      C:A1:3 Consider how various career paths may align or
                      conflict with personal values
                    </p>
                  </td>
                  <td className="border border-[#6d6e71] align-top">
                    <p className="p-1">
                      Begin to understand their preferences, laying the
                      groundwork for self-concept and future career awareness.
                    </p>
                  </td>
                  <td className="border border-[#6d6e71] align-top">
                    <p className="p-1">
                      Begin to form an understanding of their identity, their
                      abilities, and their roles in the world.
                    </p>
                  </td>
                  <td className="border border-[#6d6e71] align-top">
                    <p className="p-1">
                      Describe how various occupations can align with or differ
                      from their beliefs, values, and self-concept.
                    </p>
                  </td>
                  <td className="border border-[#6d6e71] align-top">
                    <p className="p-1">
                      Identify their core values as they continue to develop
                      self-concept and explain why it is crucial to consider
                      these when choosing a career path.
                    </p>
                  </td>
                  <td className="border border-[#6d6e71] align-top">
                    <p className="p-1">
                      Evaluate how well various occupations and career paths
                      align with their core values and self-concept.
                    </p>
                  </td>
                </tr>
                <tr>
                  <td className="border border-[#6d6e71] align-top">
                    <p className="font-bold p-1">
                      C:A1:4 Apply academic and employment readiness skills in
                      work-based learning situations such as internships,
                      shadowing, and/or mentoring experiences
                    </p>
                  </td>
                  <td className="border border-[#6d6e71] align-top">
                    <p className="p-1">
                      Engage in role-play, classroom tasks, and other
                      experiential learning activities.
                    </p>
                  </td>
                  <td className="border border-[#6d6e71] align-top">
                    <p className="p-1">
                      Continue to engage in classroom tasks and other work-based
                      learning experiences, recognizing the skills that each
                      experience requires.
                    </p>
                  </td>
                  <td className="border border-[#6d6e71] align-top">
                    <p className="p-1">
                      Define the skills and behaviors that are important in a
                      work-based learning environment.
                    </p>
                  </td>
                  <td className="border border-[#6d6e71] align-top">
                    <p className="p-1">
                      Distinguish between skills that are typically taught in
                      academic settings and skills that are specifically needed
                      to succeed in a workplace.
                    </p>
                  </td>
                  <td className="border border-[#6d6e71] align-top">
                    <p className="p-1">
                      Apply and adapt their academic and employment readiness
                      skills to different real-world, work-based learning
                      experiences and environments.
                    </p>
                  </td>
                </tr>
                <tr>
                  <td className="border border-[#6d6e71] align-top">
                    <p className="font-bold p-1">
                      C:A1:5 Demonstrate respect of individual cultural
                      uniqueness and cultural understanding in the workplace
                    </p>
                  </td>
                  <td className="border border-[#6d6e71] align-top">
                    <p className="p-1">
                      Demonstrate respectful behavior as they begin to build
                      trust with peers and adults in their learning environment.
                    </p>
                  </td>
                  <td className="border border-[#6d6e71] align-top">
                    <p className="p-1">
                      Continue to demonstrate respectful behavior to build
                      relationships with peers and adults from diverse cultural
                      backgrounds.
                    </p>
                  </td>
                  <td className="border border-[#6d6e71] align-top">
                    <p className="p-1">
                      Develop cultural awareness about the people within their
                      community and recognize how this helps to avoid
                      misunderstandings and build stronger relationships.
                    </p>
                  </td>
                  <td className="border border-[#6d6e71] align-top">
                    <p className="p-1">
                      Demonstrate respect for individual cultural uniqueness and
                      understanding in various collaborative settings,
                      recognizing the value of diverse perspectives.
                    </p>
                  </td>
                  <td className="border border-[#6d6e71] align-top">
                    <p className="p-1">
                      Describe how culture affects how people work and develop
                      cultural awareness to better understand individual
                      cultural differences in the workplace.
                    </p>
                  </td>
                </tr>
                <tr>
                  <td className="border border-[#6d6e71] align-top">
                    <p className="font-bold p-1">
                      C:A1:6 Identify strategies to maintain work-life balance
                    </p>
                  </td>
                  <td className="border border-[#6d6e71] align-top">
                    <p className="p-1">
                      Take breaks or time to rest throughout the day.
                    </p>
                  </td>
                  <td className="border border-[#6d6e71] align-top">
                    <p className="p-1">
                      Demonstrate the ability to work diligently for extended
                      periods while also knowing when it is necessary to take
                      breaks.
                    </p>
                  </td>
                  <td className="border border-[#6d6e71] align-top">
                    <p className="p-1">
                      Describe why it is important to balance work with breaks
                      for relaxation and enjoyable activities.
                    </p>
                  </td>
                  <td className="border border-[#6d6e71] align-top">
                    <p className="p-1">
                      Make and follow a schedule that includes work and leisure
                      activities, considering what work-life balance looks and
                      feels like.
                    </p>
                  </td>
                  <td className="border border-[#6d6e71] align-top">
                    <p className="p-1">
                      Identify and practice strategies to maintain a work-life
                      balance, such as resting and taking breaks during periods
                      of high work volume.
                    </p>
                  </td>
                </tr>
                <tr className="bg-[#9acdc0] text-black text-center">
                  <td className="border border-[#6d6e71]" colSpan="6">
                    <p className="font-bold p-1">
                      Competency A2 Career Research
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
                      C:A2:1 Identify career trends and occupations
                    </p>
                  </td>
                  <td className="border border-[#6d6e71] align-top">
                    <p className="p-1">
                      Demonstrate an awareness of the occupations of people
                      within their community.
                    </p>
                  </td>
                  <td className="border border-[#6d6e71] align-top">
                    <p className="p-1">
                      Define career-related vocabulary terms and explain what an
                      occupation is.
                    </p>
                  </td>
                  <td className="border border-[#6d6e71] align-top">
                    <p className="p-1">
                      Identify various types of careers and occupations.
                    </p>
                  </td>
                  <td className="border border-[#6d6e71] align-top">
                    <p className="p-1">
                      Gather information about emerging career trends,
                      identifying which occupations are becoming more popular or
                      in demand.
                    </p>
                  </td>
                  <td className="border border-[#6d6e71] align-top">
                    <p className="p-1">
                      Explore the latest career trends to identify which
                      occupations are gaining popularity and are in high demand.
                    </p>
                  </td>
                </tr>
                <tr>
                  <td className="border border-[#6d6e71] align-top">
                    <p className="font-bold p-1">
                      C:A2:2 Identify and define the skills that are predicted
                      to be essential for the future workforce
                    </p>
                  </td>
                  <td className="border border-[#6d6e71] align-top">
                    <p className="p-1">
                      Explore different occupations through play and recognize
                      some basic skills needed for them.
                    </p>
                  </td>
                  <td className="border border-[#6d6e71] align-top">
                    <p className="p-1">
                      Match the occupation to the corresponding skill, tool, or
                      type of work that is involved.
                    </p>
                  </td>
                  <td className="border border-[#6d6e71] align-top">
                    <p className="p-1">
                      List the skills needed for various careers and
                      occupations.
                    </p>
                  </td>
                  <td className="border border-[#6d6e71] align-top">
                    <p className="p-1">
                      Recognize and describe the skills that are predicted to be
                      essential for the future workforce.
                    </p>
                  </td>
                  <td className="border border-[#6d6e71] align-top">
                    <p className="p-1">
                      Describe the evolving job market, identify important
                      emerging skills, and recognize rapidly growing industries
                      to make informed decisions about their future career paths
                      and educational choices.
                    </p>
                  </td>
                </tr>
                <tr>
                  <td className="border border-[#6d6e71] align-top">
                    <p className="font-bold p-1">
                      C:A2:3 Locate, evaluate, and interpret career information
                    </p>
                  </td>
                  <td className="border border-[#6d6e71] align-top">
                    <p className="p-1">
                      Interact with age-appropriate resources related to career
                      exploration.
                    </p>
                  </td>
                  <td className="border border-[#6d6e71] align-top">
                    <p className="p-1">
                      Identify basic information such as responsibilities,
                      skills, and the importance of various occupations using
                      resources that are provided.
                    </p>
                  </td>
                  <td className="border border-[#6d6e71] align-top">
                    <p className="p-1">
                      Gather information from a variety of reliable resources
                      about an occupation of interest.
                    </p>
                  </td>
                  <td className="border border-[#6d6e71] align-top">
                    <p className="p-1">
                      Investigate career profiles to obtain basic information
                      about careers of interest.
                    </p>
                  </td>
                  <td className="border border-[#6d6e71] align-top">
                    <p className="p-1">
                      Research potential careers to locate, evaluate, and
                      interpret information such as job descriptions, working
                      conditions, earnings, educational requirements, etc.
                    </p>
                  </td>
                </tr>
                <tr>
                  <td className="border border-[#6d6e71] align-top">
                    <p className="font-bold p-1">
                      C:A2:4 Identify the necessary education and training
                      needed to achieve potential career goals
                    </p>
                  </td>
                  <td className="border border-[#6d6e71] align-top">
                    <p className="p-1">
                      Recognize the characteristics of various occupations
                      (e.g., what a doctor does, what tools an engineer uses,
                      what skills a teacher must possess).
                    </p>
                  </td>
                  <td className="border border-[#6d6e71] align-top">
                    <p className="p-1">
                      Identify an occupation of interest and list some of the
                      necessary skills and experiences needed for that
                      occupation.
                    </p>
                  </td>
                  <td className="border border-[#6d6e71] align-top">
                    <p className="p-1">
                      Explain the importance of gaining relevant skills and
                      experience to achieve career goals.
                    </p>
                  </td>
                  <td className="border border-[#6d6e71] align-top">
                    <p className="p-1">
                      Identify a career goal and conduct basic research to
                      identify the education and training required.
                    </p>
                  </td>
                  <td className="border border-[#6d6e71] align-top">
                    <p className="p-1">
                      Synthesize information to identify different paths to
                      achieve career goals, such as college degrees, vocational
                      training, apprenticeships, or certifications.
                    </p>
                  </td>
                </tr>
                <tr>
                  <td className="border border-[#6d6e71] align-top">
                    <p className="font-bold p-1">
                      C:A2:5 Understand how stereotypes and other biases may
                      impact career accessibility, and actively challenge these
                      barriers on behalf of self and others
                    </p>
                  </td>
                  <td className="border border-[#6d6e71] align-top">
                    <p className="p-1">
                      Show fairness and kindness toward others.
                    </p>
                  </td>
                  <td className="border border-[#6d6e71] align-top">
                    <p className="p-1">
                      Recognize some assumptions and biases related to careers.
                    </p>
                  </td>
                  <td className="border border-[#6d6e71] align-top">
                    <p className="p-1">
                      Identify common stereotypes and biases related to careers.
                    </p>
                  </td>
                  <td className="border border-[#6d6e71] align-top">
                    <p className="p-1">
                      Identify and challenge common assumptions, stereotypes,
                      and biases related to careers through advocacy and
                      support.
                    </p>
                  </td>
                  <td className="border border-[#6d6e71] align-top">
                    <p className="p-1">
                      Advocate for inclusive and equitable opportunities in the
                      workplace.
                    </p>
                  </td>
                </tr>
                <tr>
                  <td className="border border-[#6d6e71] align-top">
                    <p className="font-bold p-1">
                      C:A2:6 Explain the rights and responsibilities of
                      employers and employees
                    </p>
                  </td>
                  <td className="border border-[#6d6e71] align-top">
                    <p className="p-1">
                      Begin to recognize their basic rights and responsibilities
                      in the learning environment.
                    </p>
                  </td>
                  <td className="border border-[#6d6e71] align-top">
                    <p className="p-1">
                      Explain the connection between classroom and school rules
                      and their intended purpose, such as safety and protection.
                    </p>
                  </td>
                  <td className="border border-[#6d6e71] align-top">
                    <p className="p-1">
                      Distinguish between rights and responsibilities as applied
                      to the workplace, examining how these might be similar or
                      different depending on the country (e.g., minimum wage,
                      working hours, working conditions, age requirements,
                      etc.).
                    </p>
                  </td>
                  <td className="border border-[#6d6e71] align-top">
                    <p className="p-1">
                      Anticipate the types of problems that may occur in the
                      workplace from the perspectives of both the employer and
                      employee.
                    </p>
                  </td>
                  <td className="border border-[#6d6e71] align-top">
                    <p className="p-1">
                      Identify potential sources for problems that may occur in
                      the workplace (e.g., power imbalance, discrimination,
                      mistreatment, etc.) and provide examples of policies,
                      rights, and laws that have been established to protect
                      employees in different countries.
                    </p>
                  </td>
                </tr>
                <tr>
                  <td className="border border-[#6d6e71] align-top">
                    <p className="font-bold p-1">
                      C:A2:7 Explain the importance of responsibility,
                      dependability, integrity, and effort in the workplace
                    </p>
                  </td>
                  <td className="border border-[#6d6e71] align-top">
                    <p className="p-1">
                      Begin to demonstrate responsibility for their belongings,
                      dependability, truthfulness, and effort when learning and
                      playing.
                    </p>
                  </td>
                  <td className="border border-[#6d6e71] align-top">
                    <p className="p-1">
                      Demonstrate responsibility by managing personal
                      belongings, exhibit reliability by fulfilling commitments,
                      uphold integrity by being honest, and show perseverance in
                      both learning and play activities.
                    </p>
                  </td>
                  <td className="border border-[#6d6e71] align-top">
                    <p className="p-1">
                      Explain how being responsible, dependable, honest, and
                      hardworking is important for achieving future goals
                      related to careers.
                    </p>
                  </td>
                  <td className="border border-[#6d6e71] align-top">
                    <p className="p-1">
                      Relate the importance of responsibility, dependability,
                      integrity, and effort to future goals and potential career
                      paths, identifying skills that employers look for.
                    </p>
                  </td>
                  <td className="border border-[#6d6e71] align-top">
                    <p className="p-1">
                      Demonstrate responsibility, dependability, integrity, and
                      effort in real-life and work-related situations and
                      explain their impact on professional success and
                      relationships.
                    </p>
                  </td>
                </tr>
                <tr className="bg-[#026666] text-white">
                  <td className="border border-[#6d6e71] align-top">
                    <p className="font-bold p-1">Standard B:</p>
                  </td>
                  <td className="border border-[#6d6e71]" colSpan="5">
                    <p className="font-bold p-1">
                      Students will plan for future career aspirations and goals
                    </p>
                  </td>
                </tr>
                <tr className="bg-[#9acdc0] text-black text-center">
                  <td className="border border-[#6d6e71]" colSpan="6">
                    <p className="font-bold p-1">
                      Competency B1 Post-Secondary and Career Planning
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
                      C:B1:1 Use a variety of resources and tools to research
                      and enhance career planning and assessment tools
                    </p>
                  </td>
                  <td className="border border-[#6d6e71] align-top">
                    <p className="p-1">
                      Engage in the exploration of different jobs and careers
                      through play and in existing curricula.
                    </p>
                  </td>
                  <td className="border border-[#6d6e71] align-top">
                    <p className="p-1">
                      Develop basic research skills by using age-appropriate
                      tools to explore interests and learn about various
                      occupations and careers.
                    </p>
                  </td>
                  <td className="border border-[#6d6e71] align-top">
                    <p className="p-1">
                      Locate information about occupations and careers from a
                      variety of resources.
                    </p>
                  </td>
                  <td className="border border-[#6d6e71] align-top">
                    <p className="p-1">
                      Begin to explore career assessment tools to identify
                      interests, strengths, and values related to future career
                      paths.
                    </p>
                  </td>
                  <td className="border border-[#6d6e71] align-top">
                    <p className="p-1">
                      Engage in in-depth career exploration, drawing from a
                      variety of resources and hands-on experiences.
                    </p>
                  </td>
                </tr>
                <tr>
                  <td className="border border-[#6d6e71] align-top">
                    <p className="font-bold p-1">
                      C:B1:2 Apply decision-making skills to course selection,
                      postsecondary, and career planning
                    </p>
                  </td>
                  <td className="border border-[#6d6e71] align-top">
                    <p className="p-1">
                      Make choices about what and how they will learn and play.
                    </p>
                  </td>
                  <td className="border border-[#6d6e71] align-top">
                    <p className="p-1">
                      Begin to develop basic decision-making skills related to
                      what and how they will learn.
                    </p>
                  </td>
                  <td className="border border-[#6d6e71] align-top">
                    <p className="p-1">
                      Use decision-making skills to support future goals by
                      choosing activities and projects that match personal
                      interests and explore career options through
                      age-appropriate activities.
                    </p>
                  </td>
                  <td className="border border-[#6d6e71] align-top">
                    <p className="p-1">
                      Apply decision-making skills to make choices that align
                      with future goals and interests, such as selecting
                      elective courses or participating in career exploration
                      activities.
                    </p>
                  </td>
                  <td className="border border-[#6d6e71] align-top">
                    <p className="p-1">
                      Apply decision-making skills to create and/or revise a
                      four-year high school course plan which aligns with
                      careers of interest and future goals.
                    </p>
                  </td>
                </tr>
                <tr>
                  <td className="border border-[#6d6e71] align-top">
                    <p className="font-bold p-1">
                      C:B1:3 Develop a personal draft of a postsecondary plan
                      and career path
                    </p>
                  </td>
                  <td className="border border-[#6d6e71] align-top">
                    <p className="p-1">
                      Express curiosity and demonstrate a desire to learn more
                      about topics of personal interest.
                    </p>
                  </td>
                  <td className="border border-[#6d6e71] align-top">
                    <p className="p-1">
                      Begin to express thoughts and ideas about future
                      aspirations.
                    </p>
                  </td>
                  <td className="border border-[#6d6e71] align-top">
                    <p className="p-1">
                      Identify various options available after finishing high
                      school, such as attending universities or technical
                      schools, or pursuing apprenticeships.
                    </p>
                  </td>
                  <td className="border border-[#6d6e71] align-top">
                    <p className="p-1">
                      List the steps needed to pursue career aspirations,
                      including identifying educational pathways, acquiring
                      relevant skills, and exploring opportunities to gain
                      practical experience.
                    </p>
                  </td>
                  <td className="border border-[#6d6e71] align-top">
                    <p className="p-1">
                      Create a comprehensive postsecondary plan or portfolio
                      that reflects their career interests, chosen majors, and
                      ideas for postsecondary training.
                    </p>
                  </td>
                </tr>
                <tr>
                  <td className="border border-[#6d6e71] align-top">
                    <p className="font-bold p-1">
                      C:B1:4 Assess and modify an educational plan to support
                      career goals
                    </p>
                  </td>
                  <td className="border border-[#6d6e71] align-top">
                    <p className="p-1">Follow a simple plan to meet a goal.</p>
                  </td>
                  <td className="border border-[#6d6e71] align-top">
                    <p className="p-1">
                      Make simple plans for learning by choosing projects and
                      activities that align with their interests.
                    </p>
                  </td>
                  <td className="border border-[#6d6e71] align-top">
                    <p className="p-1">
                      Describe their ideal self (i.e., the person they aspire to
                      be) and begin to connect their career aspirations with
                      what they are learning in school.
                    </p>
                  </td>
                  <td className="border border-[#6d6e71] align-top">
                    <p className="p-1">
                      Identify possible challenges when planning for future
                      careers and describe how to adjust their educational plan
                      to overcome them.
                    </p>
                  </td>
                  <td className="border border-[#6d6e71] align-top">
                    <p className="p-1">
                      Assess progress toward goals and adjust educational plans
                      to ensure alignment with evolving career objectives.
                    </p>
                  </td>
                </tr>
                <tr>
                  <td className="border border-[#6d6e71] align-top">
                    <p className="font-bold p-1">
                      C:B1:5 Describe the career planning process
                    </p>
                  </td>
                  <td className="border border-[#6d6e71] align-top">
                    <p className="p-1">
                      Begin to recognize some basic steps of a plan or process.
                    </p>
                  </td>
                  <td className="border border-[#6d6e71] align-top">
                    <p className="p-1">
                      Make a simple plan to investigate and pursue their
                      interests and goals for the future.
                    </p>
                  </td>
                  <td className="border border-[#6d6e71] align-top">
                    <p className="p-1">
                      Identify the basic steps involved in career planning
                      (e.g., exploring personal interests, learning about
                      different occupations, setting simple goals related to
                      future aspirations).
                    </p>
                  </td>
                  <td className="border border-[#6d6e71] align-top">
                    <p className="p-1">
                      Explain the key components of the career planning process,
                      including self-assessment, exploration of career options,
                      goal setting, creating an action plan, and understanding
                      the connection between education and future career goals.
                    </p>
                  </td>
                  <td className="border border-[#6d6e71] align-top">
                    <p className="p-1">
                      Analyze the key components of the career planning process
                      by examining how self-assessment, exploration of career
                      options, goal setting, and understanding the connection
                      between education and future career goals interact and
                      influence each other.
                    </p>
                  </td>
                </tr>
                <tr>
                  <td className="border border-[#6d6e71] align-top">
                    <p className="font-bold p-1">C:B1:6 Create a resume</p>
                  </td>
                  <td className="border border-[#6d6e71] align-top">
                    <p className="p-1">
                      Recognize and celebrate personal achievements.
                    </p>
                  </td>
                  <td className="border border-[#6d6e71] align-top">
                    <p className="p-1">
                      Recount experiences that reflect personal achievements
                      and/or growth.
                    </p>
                  </td>
                  <td className="border border-[#6d6e71] align-top">
                    <p className="p-1">
                      Identify personal information, extracurricular activities,
                      academic and personal skills, and achievements.
                    </p>
                  </td>
                  <td className="border border-[#6d6e71] align-top">
                    <p className="p-1">
                      List and organize personal information to highlight
                      academic achievements, extracurricular involvement, and
                      relevant skills to showcase strengths and potential.
                    </p>
                  </td>
                  <td className="border border-[#6d6e71] align-top">
                    <p className="p-1">
                      Create a concise and well-organized resume that
                      effectively highlights qualifications and experiences
                      relevant to their chosen occupation.
                    </p>
                  </td>
                </tr>
                <tr>
                  <td className="border border-[#6d6e71] align-top">
                    <p className="font-bold p-1">
                      C:B1:7 Maintain a digital career planning portfolio
                    </p>
                  </td>
                  <td className="border border-[#6d6e71] align-top">
                    <p className="p-1">
                      Contribute artifacts of learning to a portfolio.
                    </p>
                  </td>
                  <td className="border border-[#6d6e71] align-top">
                    <p className="p-1">
                      Engage with basic digital tools and platforms appropriate
                      for young learners to showcase their learning.
                    </p>
                  </td>
                  <td className="border border-[#6d6e71] align-top">
                    <p className="p-1">
                      Use digital tools and platforms to highlight and reflect
                      on their learning experiences.
                    </p>
                  </td>
                  <td className="border border-[#6d6e71] align-top">
                    <p className="p-1">
                      Begin to develop a digital portfolio to record and reflect
                      on academic progress, extracurricular activities, and
                      personal interests.
                    </p>
                  </td>
                  <td className="border border-[#6d6e71] align-top">
                    <p className="p-1">
                      Create and maintain a digital resume or portfolio to
                      record and reflect on academic progress, extracurricular
                      activities, and personal interests.
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

export default DomainCareerPage;
