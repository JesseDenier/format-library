// Imports React library
import React from "react";

// Imports the authentication utility
import Auth from "../utils/auth";

// Imports the query utility
import { useQuery } from "@apollo/client";
import { QUERY_USER } from "../utils/queries";

// Updated Card component without the image and with new styles
function Card({ title, description, link }) {
  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="w-96 rounded overflow-hidden shadow-lg m-4 p-2 bg-gradient-to-b from-[#337775] from-75% to-[#97cabf] to-100% text-center text-white"
      type="application/pdf" // Added this to specify that the link is a PDF
    >
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{title}</div>
        <p className="text-sm pb-6">{description}</p>
      </div>
    </a>
  );
}

const ModelSupportToolsPage = () => {
  const userId = Auth.getProfile().data._id;
  const { loading, data } = useQuery(QUERY_USER, {
    variables: { userId: userId },
  });

  if (loading) {
    return <div>Loading...</div>;
  }

  const user = data?.user || {};

  const cards = [
    {
      link: "/private/annual_agreement.pdf",
      title: "Annual Agreement",
      description:
        "Outlines the organization and focus of the school counseling program made between each school counselor and the administrator each year.",
    },
    {
      link: "/private/asca_ethical_standards.pdf",
      title: "ASCA Ethical Standards",
      description:
        "Specifies the principles of ethical behavior necessary to maintain the highest standard of integrity, leadership, and professionalism.",
    },
    {
      link: "/private/asca_standards_and_competencies.pdf",
      title: "ASCA Standards/Competencies",
      description:
        "Outlines the knowledge, attitudes, and skills that ensure school counselors are equipped to meet the rigorous demands of the profession.",
    },
    {
      link: "/private/calendar_of_counselor_lessons.pdf",
      title: "Calendar of Counselor Lessons",
      description:
        "Master calendar template of school counseling events to ensure everyone knows what, when and where activities will be held.",
    },
    {
      link: "/private/chalk_talk_protocol_isca_student_standards.pdf",
      title: "Chalk Talk Protocol: ISCA Student Standards",
      description:
        "Use this protocol to explore the ISCA Standards individually or as a group.",
    },
    {
      link: "/private/closing_the_gap_results_report.pdf",
      title: "Closing the Gap Results Report",
      description:
        "A guide to address academic or behavioral discrepancies that exist between student groups.",
    },
    {
      link: "/private/community_referral_resources.pdf",
      title: "Community Referral Resources",
      description:
        "Example of how to oragnize community resources in your area.",
    },
    {
      link: "/private/core_curriculum_results_report.pdf",
      title: "Core Curriculum Results Report",
      description:
        "Results report on the structured developmental lessons designed to assist students in achieving the competencies.",
    },
    {
      link: "/private/counselor_support_and_supervision_group.pdf",
      title: "Counselor Support Group",
      description:
        "Article from ISCA about how to set up a local support group.",
    },
    {
      link: "/private/crosswalking_tool.pdf",
      title: "Crosswalking Tool",
      description:
        "A tool designed to help you develop and align your program standards.",
    },
    {
      link: "/private/isca_student_standards.pdf",
      title: "ISCA Student Standards",
      description:
        "Internationally recognized content standards for students that guide school counseling programs by outlining the specific knowledge, attitudes, and skills that students should be able to demonstrate as a result of an effective school counseling program.",
    },
    {
      link: "https://iscainfo.com/Crisis-and-Grief",
      title: "ISCA Crisis and Grief Response",
      description: "List of resources for crisis and grief response.",
    },
    {
      link: "/private/lesson_plan_template.pdf",
      title: "Lesson Plan Template",
      description:
        "A tool to help you plan an effective classroom or large-group lessons.",
    },
    {
      link: "/private/program_assessment.pdf",
      title: "Program Assessment",
      description:
        "Template of program assessment that use data to show the impact of the school counseling program on student achievement, attendance, and behavior, and analyze school counseling program assessments to guide future action and improve future results for all students.",
    },
    {
      link: "/private/recommended_and_not_recommended_activities.pdf",
      title: "Recommended Activities",
      description:
        "This chart represents a comparison between the two similar types of activities and serves as a helpful tool when explaining school counseling program activities to teachers and/or administrators.",
    },
    {
      link: "/private/school_counseling_core_curriculum_action_plan.pdf",
      title: "Core Curriculum Action Plan",
      description:
        "Template to report on the structured developmental lessons delivered in your program which are designed to assist students in achieving the competencies.",
    },
    {
      link: "/private/school_counselor_performance_appraisal_template.pdf",
      title: "Performance Appraisal Template",
      description:
        "Counselor assessment of agreed-upon goals, contributions to the school counseling program, and personal and professional characteristics; specifies contract status recommendations and indicates summative evaluation of school counselor effectiveness.",
    },
    {
      link: "/private/school_data_profile_template.pdf",
      title: "School Data Profile Template",
      description:
        "A summary of the school's achievement, attendance, behavior analysis, and safety record over a multiyear period.",
    },
    {
      link: "/private/scope_and_sequence_nursery_g5.pdf",
      title: "Scope and Sequence Nursery-G5",
      description: "Scope and sequence for Nursery to Grade 5 students.",
    },
    {
      link: "/private/scope_and_sequence_g6_12.pdf",
      title: "Scope and Sequence G6-12",
      description: "Scope and sequence for Grade 6-Grade 12 students.",
    },
    {
      link: "/private/small_groups_results_report.pdf",
      title: "Small Groups Results Report",
      description:
        "Helps school counselors report the impact and effectiveness of the small-group intervention.",
    },
    {
      link: "/private/student_development_goals.pdf",
      title: "Student Development Goals",
      description:
        "These goals statements address specific student outcomes, including improved student achievement and school safety through one or more of the four domains: social/emotional, global perspective and identity development, academic and career.",
    },
    {
      link: "/private/ubd_curriculum_planning_template.pdf",
      title: "UbD Curriculum Planning",
      description:
        "A tool to help you plan an effective classroom or large-group lesson using the UbD format.",
    },
    {
      link: "/private/use_of_time_template.pdf",
      title: "Use of Time Template",
      description:
        "Helps the school counselor determine how much time is spent in each of the components of the ISCA International Model.",
    },
    {
      link: "/private/writing_smart_goals.pdf",
      title: "Writing SMART Goals",
      description: "Template for writing SMART goals.",
    },
  ];

  return (
    <main className="px-4 mx-auto pt-20 py-8">
      {/* Tagline centered above the cards */}
      <div className="text-center mb-4 w-3/4 mx-auto">
        <h2 className="text-xl font-semibold">
          On this page, you'll find a variety of tools to support your
          implementation of the ISCA International Model. Click on each box
          below to access and download the available resources. When applicable,
          documents are provided as editable and downloadable PDFs to make
          customization easier. Enjoy exploring these valuable resources!
        </h2>
      </div>
      {/* Container for the cards */}
      <div className="flex flex-wrap justify-center">
        {cards.map((card, index) => (
          <Card
            key={index}
            title={card.title}
            description={card.description}
            link={card.link}
          />
        ))}
      </div>
    </main>
  );
};

export default ModelSupportToolsPage;
