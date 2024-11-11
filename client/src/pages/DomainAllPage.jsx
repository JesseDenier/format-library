// Imports React library
import React from "react";

// Imports the authentication utility
import Auth from "../utils/auth";

// Imports the query utility
import { useQuery } from "@apollo/client";
import { QUERY_USER } from "../utils/queries";

// Imports PDF handling
import { handlePDFWatermarkAndDownload } from "../utils/pdfUtils";

const DomainAllPage = () => {
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
            className="bg-[#026666] hover:bg-[#9acdc0] text-white font-bold py-2 px-4 mx-2 rounded"
          >
            Introduction and Resources
          </button>
          {/* PDF Download Button */}
          <button
            onClick={() =>
              handlePDFWatermarkAndDownload(
                "/private/domain_all.pdf",
                user,
                "ISCA Complete Progression"
              )
            }
            className="bg-[#026666] hover:bg-[#9acdc0] text-white font-bold py-2 px-4 mx-2 rounded"
          >
            Digital PDF Download
          </button>
          {/* PDF Download Button */}
          <button
            onClick={() =>
              handlePDFWatermarkAndDownload(
                "/private/domain_all_p.pdf",
                user,
                "ISCA Complete Progression Print"
              )
            }
            className="bg-[#026666] hover:bg-[#9acdc0] text-white font-bold py-2 px-4 mx-2 rounded"
          >
            Print PDF Download
          </button>
        </div>
      </div>
      {/* Full width table with all domain content */}
      <div className="flex-grow pb-4">
        <div
          id="Social_Domain"
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
                    <p className="p-1">Social-Emotional</p>
                  </td>
                </tr>
                <tr className="bg-[#026666] text-white">
                  <td className="border border-[#6d6e71] align-top">
                    <p className="font-bold p-1">Standard A:</p>
                  </td>
                  <td className="border border-[#6d6e71]" colSpan="5">
                    <p className="font-bold p-1">
                      Students will demonstrate the dispositions, knowledge, and
                      skills to develop and maintain positive relationships with
                      self and others
                    </p>
                  </td>
                </tr>
                <tr className="bg-[#9acdc0] text-black text-center">
                  <td className="border border-[#6d6e71]" colSpan="6">
                    <p className="font-bold p-1">
                      Competency A1 Social and Self-Awareness
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
                      SE:A1:1 Identify personal values, attitudes, and beliefs
                    </p>
                  </td>
                  <td className="border border-[#6d6e71] align-top">
                    <p className="p-1">
                      Begin to express their likes and dislikes through play,
                      showing early signs of personal preferences.
                    </p>
                  </td>
                  <td className="border border-[#6d6e71] align-top">
                    <p className="p-1">Express their opinions and beliefs.</p>
                  </td>
                  <td className="border border-[#6d6e71] align-top">
                    <p className="p-1">
                      Express what is important to them and articulate their
                      opinions and beliefs.
                    </p>
                  </td>
                  <td className="border border-[#6d6e71] align-top">
                    <p className="p-1">
                      Identify and differentiate between their values,
                      attitudes, and beliefs, and identify some factors that
                      influence how they think and feel.
                    </p>
                  </td>
                  <td className="border border-[#6d6e71] align-top">
                    <p className="p-1">
                      Explain their values, attitudes, and beliefs, describing
                      the influences that have shaped their development and how
                      these insights enhance self-awareness.
                    </p>
                  </td>
                </tr>
                <tr>
                  <td className="border border-[#6d6e71] align-top">
                    <p className="font-bold p-1">
                      SE:A1:2 Identify and express feelings and emotions
                    </p>
                  </td>
                  <td className="border border-[#6d6e71] align-top">
                    <p className="p-1">
                      Recognize facial expressions and body language associated
                      with basic emotions and express their feelings using
                      simple words or nonverbal communication.
                    </p>
                  </td>
                  <td className="border border-[#6d6e71] align-top">
                    <p className="p-1">
                      Identify and label basic emotions to communicate their own
                      feelings and infer how others might be feeling.
                    </p>
                  </td>
                  <td className="border border-[#6d6e71] align-top">
                    <p className="p-1">
                      Recognize and label a range of complex emotions, using
                      precise vocabulary to name their own feelings and describe
                      the feelings of others.
                    </p>
                  </td>
                  <td className="border border-[#6d6e71] align-top">
                    <p className="p-1">
                      Compare the varying intensity levels of their own and
                      others' emotions and identify potential triggers for
                      specific emotional responses.
                    </p>
                  </td>
                  <td className="border border-[#6d6e71] align-top">
                    <p className="p-1">
                      Recognize and label their emotions in various situations
                      and understand their body's emotional responses to express
                      feelings in healthy ways.
                    </p>
                  </td>
                </tr>
                <tr>
                  <td className="border border-[#6d6e71] align-top">
                    <p className="font-bold p-1">
                      SE:A1:3 Develop self-awareness and self-management skills
                      essential for mental health
                    </p>
                  </td>
                  <td className="border border-[#6d6e71] align-top">
                    <p className="p-1">
                      Recognize and identify basic emotions like happiness,
                      sadness, and anger, and begin to express them using simple
                      self-regulation strategies like deep breathing or seeking
                      comfort from a trusted adult.
                    </p>
                  </td>
                  <td className="border border-[#6d6e71] align-top">
                    <p className="p-1">
                      Describe their feelings and begin to use advanced
                      self-regulation strategies like counting to calm down,
                      positive self-talk, or seeking support from teachers or
                      peers.
                    </p>
                  </td>
                  <td className="border border-[#6d6e71] align-top">
                    <p className="p-1">
                      Recognize their emotional needs, choose effective
                      self-regulation strategies, and seek support from teachers
                      or peers when needed.
                    </p>
                  </td>
                  <td className="border border-[#6d6e71] align-top">
                    <p className="p-1">
                      Demonstrate understanding of the complexities of their
                      emotions and their impact on mental health, choose
                      effective self-regulation and self-management strategies,
                      and seek support when experiencing mental health issues.
                    </p>
                  </td>
                  <td className="border border-[#6d6e71] align-top">
                    <p className="p-1">
                      Recognize, identify, and manage complex emotional
                      challenges by making informed decisions about mental
                      well-being, utilizing effective self-regulation and
                      self-management strategies, and seeking the needed support
                      when experiencing mental health issues.
                    </p>
                  </td>
                </tr>
                <tr>
                  <td className="border border-[#6d6e71] align-top">
                    <p className="font-bold p-1">
                      SE:A1:4 Take action (individually or with support) to
                      positively impact their own mental health
                    </p>
                  </td>
                  <td className="border border-[#6d6e71] align-top">
                    <p className="p-1">
                      Identify simple actions that help them feel better, such
                      as playing, resting, or talking to a trusted adult.
                    </p>
                  </td>
                  <td className="border border-[#6d6e71] align-top">
                    <p className="p-1">
                      Identify and choose activities or strategies that support
                      self- regulation, as needed.
                    </p>
                  </td>
                  <td className="border border-[#6d6e71] align-top">
                    <p className="p-1">
                      Describe actions they can take to maintain or improve
                      their mental health and practice self-regulation
                      techniques, as needed.
                    </p>
                  </td>
                  <td className="border border-[#6d6e71] align-top">
                    <p className="p-1">
                      Develop a personal plan for managing stress, enhancing
                      mental well- being, and practicing self-regulation.
                    </p>
                  </td>
                  <td className="border border-[#6d6e71] align-top">
                    <p className="p-1">
                      Implement self-regulation and coping strategies based on
                      personal preferences and experiences, regularly assessing
                      the effectiveness of the strategies and advocating for
                      their mental health needs.
                    </p>
                  </td>
                </tr>
                <tr>
                  <td className="border border-[#6d6e71] align-top">
                    <p className="font-bold p-1">
                      SE:A1:5 Describe the relationship between feelings and
                      behavior
                    </p>
                  </td>
                  <td className="border border-[#6d6e71] align-top">
                    <p className="p-1">
                      Demonstrate understanding of how emotions like happiness
                      or sadness can influence their actions, such as smiling
                      when happy or crying when sad, recognizing basic
                      cause-and-effect relationships.
                    </p>
                  </td>
                  <td className="border border-[#6d6e71] align-top">
                    <p className="p-1">
                      Explain how various emotions can result in different
                      behaviors, such as feelings of anger leading to shouting.
                    </p>
                  </td>
                  <td className="border border-[#6d6e71] align-top">
                    <p className="p-1">
                      Identify how social and environmental factors influence
                      emotions and behaviors and articulate how one individual's
                      behavior can affect the feelings of others.
                    </p>
                  </td>
                  <td className="border border-[#6d6e71] align-top">
                    <p className="p-1">
                      Examine how personal behavior changes with emotions,
                      social situations, and the environment, and understand its
                      impact on others' feelings.
                    </p>
                  </td>
                  <td className="border border-[#6d6e71] align-top">
                    <p className="p-1">
                      Describe the intricate and reciprocal relationship between
                      their emotions and behavioral responses, illustrating how
                      feelings influence actions and vice versa.
                    </p>
                  </td>
                </tr>
                <tr>
                  <td className="border border-[#6d6e71] align-top">
                    <p className="font-bold p-1">
                      SE:A1:6 Develop healthy ways to identify, express, and
                      respond to one's emotions
                    </p>
                  </td>
                  <td className="border border-[#6d6e71] align-top">
                    <p className="p-1">
                      Recognize how facial expressions convey emotions and use
                      simple forms of communication like words, gestures, and
                      expressions to express how they feel.
                    </p>
                  </td>
                  <td className="border border-[#6d6e71] align-top">
                    <p className="p-1">
                      Use specific words and/or self-expressive activities to
                      communicate how they are feeling.
                    </p>
                  </td>
                  <td className="border border-[#6d6e71] align-top">
                    <p className="p-1">
                      Identify and apply effective emotional expression
                      strategies and coping mechanisms to manage emotions.
                    </p>
                  </td>
                  <td className="border border-[#6d6e71] align-top">
                    <p className="p-1">
                      Develop a toolbox of strategies that they find effective
                      for expressing and managing emotions.
                    </p>
                  </td>
                  <td className="border border-[#6d6e71] align-top">
                    <p className="p-1">
                      Select and adapt strategies for effective emotional
                      expression, enabling them to articulate and respond to
                      various emotions and situations they encounter.
                    </p>
                  </td>
                </tr>
                <tr>
                  <td className="border border-[#6d6e71] align-top">
                    <p className="font-bold p-1">
                      SE:A1:7 Identify personal and social identities
                    </p>
                  </td>
                  <td className="border border-[#6d6e71] align-top">
                    <p className="p-1">
                      Recognize and name personal characteristics such as name,
                      age, family members, languages spoken, and interests.
                    </p>
                  </td>
                  <td className="border border-[#6d6e71] align-top">
                    <p className="p-1">
                      Recognize the unique aspects of their identities,
                      identifying what makes them similar to and different from
                      others.
                    </p>
                  </td>
                  <td className="border border-[#6d6e71] align-top">
                    <p className="p-1">
                      Identify the complexities and diversity within personal
                      and social identities.
                    </p>
                  </td>
                  <td className="border border-[#6d6e71] align-top">
                    <p className="p-1">
                      Explain how different aspects of a person's social
                      identities combine or intersect to influence their unique
                      experiences, perspectives, and challenges in life.
                    </p>
                  </td>
                  <td className="border border-[#6d6e71] align-top">
                    <p className="p-1">
                      Form a coherent and continually developing sense of
                      identity that incorporates various facets of who a person
                      is within their social context.
                    </p>
                  </td>
                </tr>
                <tr>
                  <td className="border border-[#6d6e71] align-top">
                    <p className="font-bold p-1">
                      SE:A1:8 Accept constructive feedback from others, and use
                      it to learn and grow
                    </p>
                  </td>
                  <td className="border border-[#6d6e71] align-top">
                    <p className="p-1">
                      Practice actively listening and demonstrating
                      attentiveness through body language when receiving verbal
                      feedback from someone, such as a peer or trusted adult.
                    </p>
                  </td>
                  <td className="border border-[#6d6e71] align-top">
                    <p className="p-1">
                      Demonstrate a willingness to consider and accept feedback
                      and communicate their thoughts and emotions in response to
                      that feedback.
                    </p>
                  </td>
                  <td className="border border-[#6d6e71] align-top">
                    <p className="p-1">
                      Distinguish between feedback and personal criticism,
                      accepting helpful feedback from peers and adults.
                    </p>
                  </td>
                  <td className="border border-[#6d6e71] align-top">
                    <p className="p-1">
                      Seek out and accept feedback from others and use it as an
                      opportunity to learn and grow.
                    </p>
                  </td>
                  <td className="border border-[#6d6e71] align-top">
                    <p className="p-1">
                      Use feedback to make adjustments and improvements,
                      demonstrating an understanding of its importance for
                      learning and personal growth.
                    </p>
                  </td>
                </tr>
                <tr>
                  <td className="border border-[#6d6e71] align-top">
                    <p className="font-bold p-1">
                      SE:A1:9 Identify long- and short-term goals
                    </p>
                  </td>
                  <td className="border border-[#6d6e71] align-top">
                    <p className="p-1">
                      With support, make a simple plan or set a simple goal
                      related to familiar activities and routines.
                    </p>
                  </td>
                  <td className="border border-[#6d6e71] align-top">
                    <p className="p-1">
                      Begin to articulate simple short-term personal goals.
                    </p>
                  </td>
                  <td className="border border-[#6d6e71] align-top">
                    <p className="p-1">
                      Define both short-term and long-term personal goals.
                    </p>
                  </td>
                  <td className="border border-[#6d6e71] align-top">
                    <p className="p-1">
                      Articulate a long-term personal goal and deconstruct it
                      into smaller, short-term goals.
                    </p>
                  </td>
                  <td className="border border-[#6d6e71] align-top">
                    <p className="p-1">
                      Develop long- and short-term personal goals, adjusting
                      them based on changing priorities and aspirations.
                    </p>
                  </td>
                </tr>
                <tr>
                  <td className="border border-[#6d6e71] align-top">
                    <p className="font-bold p-1">
                      SE:A1:10 Develop an action plan to achieve personal goals
                    </p>
                  </td>
                  <td className="border border-[#6d6e71] align-top">
                    <p className="p-1">
                      Follow and recall basic steps for completing a simple
                      task.
                    </p>
                  </td>
                  <td className="border border-[#6d6e71] align-top">
                    <p className="p-1">
                      Identify basic steps to achieve simple personal goals,
                      such as completing a small task or learning a new skill.
                    </p>
                  </td>
                  <td className="border border-[#6d6e71] align-top">
                    <p className="p-1">
                      Outline a simple action plan with sequential steps to
                      achieve personal goals.
                    </p>
                  </td>
                  <td className="border border-[#6d6e71] align-top">
                    <p className="p-1">
                      Create detailed and organized action plans for personal
                      goals, including timelines and deadlines for both
                      short-term and long-term objectives.
                    </p>
                  </td>
                  <td className="border border-[#6d6e71] align-top">
                    <p className="p-1">
                      Create organized action plans for short-term and long-term
                      personal goals with realistic timelines and deadlines,
                      anticipating obstacles, overcoming them, and adapting the
                      plan as needed.
                    </p>
                  </td>
                </tr>
                <tr>
                  <td className="border border-[#6d6e71] align-top">
                    <p className="font-bold p-1">
                      SE:A1:11 Identify strategies to cope with loss and grief
                    </p>
                  </td>
                  <td className="border border-[#6d6e71] align-top">
                    <p className="p-1">
                      Recognize and express emotions related to loss and sadness
                      through age-appropriate activities.
                    </p>
                  </td>
                  <td className="border border-[#6d6e71] align-top">
                    <p className="p-1">
                      Recognize different forms of loss and begin to identify
                      symptoms of grief in different people; identify simple
                      coping strategies such as talking about feelings or
                      engaging in comforting activities.
                    </p>
                  </td>
                  <td className="border border-[#6d6e71] align-top">
                    <p className="p-1">
                      Explain the different ways that people may cope with loss;
                      identify a range of coping strategies for dealing with
                      loss, such as creative expression, journaling, and seeking
                      support from trusted individuals.
                    </p>
                  </td>
                  <td className="border border-[#6d6e71] align-top">
                    <p className="p-1">
                      Identify the stages of grief and explain how the grieving
                      process is unique to each individual; develop more
                      sophisticated coping mechanisms, such as mindfulness,
                      self-reflection, and engaging in meaningful activities.
                    </p>
                  </td>
                  <td className="border border-[#6d6e71] align-top">
                    <p className="p-1">
                      Create a well-developed toolkit of coping strategies,
                      knowing how to adjust them based on the nature and
                      intensity of the loss.
                    </p>
                  </td>
                </tr>
                <tr>
                  <td className="border border-[#6d6e71] align-top">
                    <p className="font-bold p-1">
                      SE:A1:12 Recognize that everyone has rights and
                      responsibilities
                    </p>
                  </td>
                  <td className="border border-[#6d6e71] align-top">
                    <p className="p-1">
                      Recognize simple rights, such as the right to be treated
                      kindly and with respect, and engage in basic
                      responsibilities, such as cleaning up after oneself.
                    </p>
                  </td>
                  <td className="border border-[#6d6e71] align-top">
                    <p className="p-1">
                      Identify basic rights and responsibilities in classroom
                      and social settings, demonstrating awareness of fairness
                      and respect.
                    </p>
                  </td>
                  <td className="border border-[#6d6e71] align-top">
                    <p className="p-1">
                      Define and express personal and human rights and
                      responsibilities in different situations, showing respect
                      for diversity and inclusion.
                    </p>
                  </td>
                  <td className="border border-[#6d6e71] align-top">
                    <p className="p-1">
                      Analyze and evaluate complex rights and responsibilities
                      in local and global contexts.
                    </p>
                  </td>
                  <td className="border border-[#6d6e71] align-top">
                    <p className="p-1">
                      Evaluate how personal actions affect the rights and
                      well-being of others, while promoting equity, justice, and
                      global civic engagement.
                    </p>
                  </td>
                </tr>
                <tr>
                  <td className="border border-[#6d6e71] align-top">
                    <p className="font-bold p-1">
                      SE:A1:13 Identify the signs of stress and use techniques
                      for reducing stress
                    </p>
                  </td>
                  <td className="border border-[#6d6e71] align-top">
                    <p className="p-1">
                      Practice simple self-soothing techniques such as belly
                      breathing.
                    </p>
                  </td>
                  <td className="border border-[#6d6e71] align-top">
                    <p className="p-1">
                      Identify basic physical signs of stress, such as
                      stomachaches or changes in breathing, and apply simple
                      techniques for self-soothing, such as taking deep breaths
                      or engaging in a calming activity.
                    </p>
                  </td>
                  <td className="border border-[#6d6e71] align-top">
                    <p className="p-1">
                      Describe what stress feels like to them emotionally and
                      physically and practice a variety of stress-reducing
                      strategies to identify the ones that they find most
                      effective.
                    </p>
                  </td>
                  <td className="border border-[#6d6e71] align-top">
                    <p className="p-1">
                      Recognize additional signs of stress, such as changes in
                      sleep patterns or appetite, and develop a personalized
                      toolbox of stress reduction strategies, incorporating
                      techniques like journaling, exercise, and time management.
                    </p>
                  </td>
                  <td className="border border-[#6d6e71] align-top">
                    <p className="p-1">
                      Identify personal stressors, recognize the signs of stress
                      in self and others, and select strategies to prevent or
                      manage stressful situations, such as mindfulness exercises
                      and/or physical activities.
                    </p>
                  </td>
                </tr>
                <tr>
                  <td className="border border-[#6d6e71] align-top">
                    <p className="font-bold p-1">
                      SE:A1:14 Describe the growth and development process
                    </p>
                  </td>
                  <td className="border border-[#6d6e71] align-top">
                    <p className="p-1">
                      Begin to recognize and describe physical changes in self
                      and others such as getting taller or learning new skills.
                    </p>
                  </td>
                  <td className="border border-[#6d6e71] align-top">
                    <p className="p-1">
                      Describe the changes in growth and development of their
                      bodies in simple terms.
                    </p>
                  </td>
                  <td className="border border-[#6d6e71] align-top">
                    <p className="p-1">
                      Explain how bodies change and develop in preadolescence.
                    </p>
                  </td>
                  <td className="border border-[#6d6e71] align-top">
                    <p className="p-1">
                      Describe adolescence as a distinct stage in the life
                      cycle, recognizing the predictable physical, cognitive,
                      and emotional changes associated with it.
                    </p>
                  </td>
                  <td className="border border-[#6d6e71] align-top">
                    <p className="p-1">
                      Explain how physical, cognitive, and emotional well-being
                      are connected in overall development, and reflect on their
                      own growth journey.
                    </p>
                  </td>
                </tr>
                <tr className="bg-[#9acdc0] text-black text-center border border-[#6d6e71]">
                  <td colSpan="6">
                    <p className="font-bold p-1">Competency A2 Relationships</p>
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
                      SE:A2:1 Make and maintain healthy relationships, including
                      friendships, to promote mental health
                    </p>
                  </td>
                  <td className="border border-[#6d6e71] align-top">
                    <p className="p-1">
                      Form positive social interactions with peers through
                      sharing, turn-taking, and respecting boundaries.
                    </p>
                  </td>
                  <td className="border border-[#6d6e71] align-top">
                    <p className="p-1">
                      Create and maintain friendships based on shared interests
                      and activities.
                    </p>
                  </td>
                  <td className="border border-[#6d6e71] align-top">
                    <p className="p-1">
                      Engage in deeper and more nuanced friendships, considering
                      emotional support and shared values.
                    </p>
                  </td>
                  <td className="border border-[#6d6e71] align-top">
                    <p className="p-1">
                      Foster a variety of relationships consisting of healthy
                      boundaries with peers, teachers, and family members.
                    </p>
                  </td>
                  <td className="border border-[#6d6e71] align-top">
                    <p className="p-1">
                      Develop and maintain a diverse and supportive social
                      network, both online and offline, demonstrating healthy
                      relationships that promote overall mental health and
                      well-being.
                    </p>
                  </td>
                </tr>
                <tr>
                  <td className="border border-[#6d6e71] align-top">
                    <p className="font-bold p-1">
                      SE:A2:2 Develop empathy, respect, compassion, and
                      acceptance of differences, which are essential components
                      of healthy relationships
                    </p>
                  </td>
                  <td className="border border-[#6d6e71] align-top">
                    <p className="p-1">
                      Recognize and identify the feelings of others and
                      demonstrate a response that shows kindness and care.
                    </p>
                  </td>
                  <td className="border border-[#6d6e71] align-top">
                    <p className="p-1">
                      Recognize, identify, and respond in respectful ways to the
                      emotions and differences of others.
                    </p>
                  </td>
                  <td className="border border-[#6d6e71] align-top">
                    <p className="p-1">
                      Show empathy and respect for individuals with diverse
                      experiences, backgrounds, abilities, cultures, and
                      interests.
                    </p>
                  </td>
                  <td className="border border-[#6d6e71] align-top">
                    <p className="p-1">
                      Use social cues to understand people's feelings and
                      respond with empathy, respect, compassion, and acceptance
                      while speaking and acting respectfully toward diversity in
                      abilities, cultures, and interests.
                    </p>
                  </td>
                  <td className="border border-[#6d6e71] align-top">
                    <p className="p-1">
                      Develop and maintain healthy relationships by showing
                      empathy, respect, compassion, and acceptance of
                      differences.
                    </p>
                  </td>
                </tr>
                <tr>
                  <td className="border border-[#6d6e71] align-top">
                    <p className="font-bold p-1">
                      SE:A2:3 Use effective oral and written communication
                      skills, including active listening skills and both verbal
                      and nonverbal behaviors
                    </p>
                  </td>
                  <td className="border border-[#6d6e71] align-top">
                    <p className="p-1">
                      Communicate needs and thoughts through simple words and
                      gestures and listen to and follow basic instructions.
                    </p>
                  </td>
                  <td className="border border-[#6d6e71] align-top">
                    <p className="p-1">
                      Express ideas and feelings in conversations with peers and
                      adults, utilizing nonverbal communication skills like body
                      language and facial expressions to enhance communication.
                    </p>
                  </td>
                  <td className="border border-[#6d6e71] align-top">
                    <p className="p-1">
                      Articulate ideas and emotions in conversations with peers
                      and adults, employing listening skills, nonverbal cues,
                      and questions to empathetically understand the feelings
                      and perspectives of others.
                    </p>
                  </td>
                  <td className="border border-[#6d6e71] align-top">
                    <p className="p-1">
                      Identify different modes of communication and demonstrate
                      the ability to calibrate language for the situational
                      context.
                    </p>
                  </td>
                  <td className="border border-[#6d6e71] align-top">
                    <p className="p-1">
                      Demonstrate effective oral and written communication
                      skills to build strong relationships.
                    </p>
                  </td>
                </tr>
                <tr>
                  <td className="border border-[#6d6e71] align-top">
                    <p className="font-bold p-1">
                      SE:A2:4 Engage with opposing viewpoints in a respectful
                      manner
                    </p>
                  </td>
                  <td className="border border-[#6d6e71] align-top">
                    <p className="p-1">
                      Listen to and acknowledge different perspectives during
                      play and simple discussions.
                    </p>
                  </td>
                  <td className="border border-[#6d6e71] align-top">
                    <p className="p-1">
                      Apply skills and strategies to talk and listen effectively
                      when they disagree with someone.
                    </p>
                  </td>
                  <td className="border border-[#6d6e71] align-top">
                    <p className="p-1">
                      Distinguish between disrespectful and respectful
                      disagreements and demonstrate the ability to respectfully
                      disagree with the perspectives of others.
                    </p>
                  </td>
                  <td className="border border-[#6d6e71] align-top">
                    <p className="p-1">
                      Engage with diverse viewpoints, using speaking and active
                      listening skills to respectfully acknowledge and discuss
                      differing perspectives.
                    </p>
                  </td>
                  <td className="border border-[#6d6e71] align-top">
                    <p className="p-1">
                      Express differences respectfully while analyzing personal
                      biases and remaining open to new ideas.
                    </p>
                  </td>
                </tr>
                <tr>
                  <td className="border border-[#6d6e71] align-top">
                    <p className="font-bold p-1">
                      SE:A2:5 Demonstrate effective conflict resolution skills
                    </p>
                  </td>
                  <td className="border border-[#6d6e71] align-top">
                    <p className="p-1">
                      Express how they are feeling when a problem arises while
                      playing with friends.
                    </p>
                  </td>
                  <td className="border border-[#6d6e71] align-top">
                    <p className="p-1">
                      Express how they are feeling when a social problem arises
                      and explain or advocate for their desired outcome.
                    </p>
                  </td>
                  <td className="border border-[#6d6e71] align-top">
                    <p className="p-1">
                      Express feelings when a social problem arises, advocate
                      for their desired outcomes while considering others'
                      feelings, and practice mediation to resolve social
                      conflicts.
                    </p>
                  </td>
                  <td className="border border-[#6d6e71] align-top">
                    <p className="p-1">
                      Recognize factors that escalate conflicts and use
                      strategies to de-escalate and resolve them.
                    </p>
                  </td>
                  <td className="border border-[#6d6e71] align-top">
                    <p className="p-1">
                      Resolve peer conflicts using mediation and/or conflict
                      resolution skills in a constructive manner.
                    </p>
                  </td>
                </tr>
                <tr>
                  <td className="border border-[#6d6e71] align-top">
                    <p className="font-bold p-1">
                      SE:A2:6 Differentiate between situations requiring peer
                      support and situations requiring adult or professional
                      help
                    </p>
                  </td>
                  <td className="border border-[#6d6e71] align-top">
                    <p className="p-1">
                      Begin to recognize when help is needed, such as when
                      feeling upset or experiencing a problem.
                    </p>
                  </td>
                  <td className="border border-[#6d6e71] align-top">
                    <p className="p-1">
                      Distinguish between situations where it is appropriate to
                      seek support from peers and those that require adult
                      involvement.
                    </p>
                  </td>
                  <td className="border border-[#6d6e71] align-top">
                    <p className="p-1">
                      Explain the roles of different adults in providing support
                      and identify situations that may require the specialized
                      expertise of professionals like counselors or medical
                      personnel.
                    </p>
                  </td>
                  <td className="border border-[#6d6e71] align-top">
                    <p className="p-1">
                      Independently assess situations to decide when to seek
                      support and when to involve adults in more serious
                      matters.
                    </p>
                  </td>
                  <td className="border border-[#6d6e71] align-top">
                    <p className="p-1">
                      Make informed choices about when to seek help from peers,
                      adults, or professionals, depending on the nature and
                      seriousness of the situation.
                    </p>
                  </td>
                </tr>
                <tr>
                  <td className="border border-[#6d6e71] align-top">
                    <p className="font-bold p-1">
                      SE:A2:7 Identify strengths, assets, and areas for
                      self-improvement in relation to working collaboratively
                    </p>
                  </td>
                  <td className="border border-[#6d6e71] align-top">
                    <p className="p-1">
                      Recognize their contributions to collaborative play and
                      activities.
                    </p>
                  </td>
                  <td className="border border-[#6d6e71] align-top">
                    <p className="p-1">
                      Recognize strengths and identify areas for improvement in
                      collaborative settings.
                    </p>
                  </td>
                  <td className="border border-[#6d6e71] align-top">
                    <p className="p-1">
                      Engage in self-reflection to identify strengths and areas
                      for improvement in collaborative settings.
                    </p>
                  </td>
                  <td className="border border-[#6d6e71] align-top">
                    <p className="p-1">
                      Use feedback from others to recognize strengths and areas
                      for improvement in collaborative settings.
                    </p>
                  </td>
                  <td className="border border-[#6d6e71] align-top">
                    <p className="p-1">
                      Demonstrate self-awareness by identifying strengths,
                      assets, and areas for improvement in complex
                      collaborations, and describe how personal strengths
                      enhance team success.
                    </p>
                  </td>
                </tr>
                <tr>
                  <td className="border border-[#6d6e71] align-top">
                    <p className="font-bold p-1">
                      SE:A2:8 Develop strategies to cope with social pressure
                      and refrain from applying pressure to others
                    </p>
                  </td>
                  <td className="border border-[#6d6e71] align-top">
                    <p className="p-1">
                      Begin to demonstrate an understanding of simple social
                      expectations in group settings, such as taking turns and
                      sharing.
                    </p>
                  </td>
                  <td className="border border-[#6d6e71] align-top">
                    <p className="p-1">
                      Recognize social pressures in peer groups and use
                      strategies like expressing feelings and preferences while
                      avoiding pressuring others.
                    </p>
                  </td>
                  <td className="border border-[#6d6e71] align-top">
                    <p className="p-1">
                      Describe how social pressure affects them and others and
                      apply strategies to make decisions based on personal
                      values rather than external influences.
                    </p>
                  </td>
                  <td className="border border-[#6d6e71] align-top">
                    <p className="p-1">
                      Examine peer pressure dynamics across various situations
                      and create personal strategies to manage them, including
                      using clear and assertive communication to navigate social
                      pressures and avoid pressuring others.
                    </p>
                  </td>
                  <td className="border border-[#6d6e71] align-top">
                    <p className="p-1">
                      Assess the risks and benefits of social pressures they
                      encounter, promote positive social interactions, intervene
                      when peers are negatively influenced, use critical media
                      literacy to resist pressures from different sources, and
                      avoid pressuring others.
                    </p>
                  </td>
                </tr>

                <tr className="bg-[#026666] text-white">
                  <td className="border border-[#6d6e71] align-top">
                    <p className="font-bold p-1">Standard B:</p>
                  </td>
                  <td className="border border-[#6d6e71]" colSpan="5">
                    <p className="font-bold p-1">
                      Students will make decisions, solve problems, set goals,
                      and take necessary action to achieve personal goals
                    </p>
                  </td>
                </tr>
                <tr className="bg-[#9acdc0] text-black text-center border border-[#6d6e71]">
                  <td colSpan="6">
                    <p className="font-bold p-1">
                      Competency B1 Decision-Making
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
                      SE:B1:1 Develop effective coping skills to manage
                      challenges
                    </p>
                  </td>
                  <td className="border border-[#6d6e71] align-top">
                    <p className="p-1">
                      Begin to solve common problems in the context of play
                      through sharing, turn-taking, apologizing, and/or
                      self-redirection.
                    </p>
                  </td>
                  <td className="border border-[#6d6e71] align-top">
                    <p className="p-1">
                      Identify the cause of a problem or challenge and start a
                      problem-solving process, which may involve calming down,
                      apologizing, sharing, or taking turns to find a solution.
                    </p>
                  </td>
                  <td className="border border-[#6d6e71] align-top">
                    <p className="p-1">
                      Use different problem-solving and coping skills and
                      consider the possible results of each strategy.
                    </p>
                  </td>
                  <td className="border border-[#6d6e71] align-top">
                    <p className="p-1">
                      Use different problem-solving and coping skills and
                      evaluate their effectiveness in various situations.
                    </p>
                  </td>
                  <td className="border border-[#6d6e71] align-top">
                    <p className="p-1">
                      Analyze the complexity of a personal challenge or problem,
                      identifying multiple perspectives, possible solutions, and
                      potential obstacles before choosing an advanced coping
                      mechanism.
                    </p>
                  </td>
                </tr>
                <tr>
                  <td className="border border-[#6d6e71] align-top">
                    <p className="font-bold p-1">
                      SE:B1:2 Analyze the relationship between choices and their
                      outcomes, and identify strategies to recover from negative
                      consequences
                    </p>
                  </td>
                  <td className="border border-[#6d6e71] align-top">
                    <p className="p-1">
                      Recognize simple cause-and-effect relationships in their
                      daily activities.
                    </p>
                  </td>
                  <td className="border border-[#6d6e71] align-top">
                    <p className="p-1">
                      Recognize cause-and-effect relationships in choices,
                      describe consequences of decisions, and identify
                      strategies to recover from less-favorable outcomes.
                    </p>
                  </td>
                  <td className="border border-[#6d6e71] align-top">
                    <p className="p-1">
                      Recognize the impact of decisions on themselves and
                      others, and practice recovery strategies like flexibility,
                      setting boundaries, and improving communication.
                    </p>
                  </td>
                  <td className="border border-[#6d6e71] align-top">
                    <p className="p-1">
                      Analyze both short-term and long-term consequences of
                      decisions, develop foresight, and implement strategies to
                      recover from setbacks through self-reflection and
                      proactive problem-solving.
                    </p>
                  </td>
                  <td className="border border-[#6d6e71] align-top">
                    <p className="p-1">
                      Examine how their choices affect long-term outcomes,
                      demonstrating resilience and using coping strategies to
                      recover from setbacks or adverse situations.
                    </p>
                  </td>
                </tr>
                <tr>
                  <td className="border border-[#6d6e71] align-top">
                    <p className="font-bold p-1">
                      SE:B1:3 Apply effective problem-solving and responsible
                      decision-making skills to make safe and healthy choices
                    </p>
                  </td>
                  <td className="border border-[#6d6e71] align-top">
                    <p className="p-1">
                      Recognize simple problems and choose basic, safe solutions
                      with support.
                    </p>
                  </td>
                  <td className="border border-[#6d6e71] align-top">
                    <p className="p-1">
                      Identify simple problems, evaluate healthy and unhealthy
                      options, and make safe choices.
                    </p>
                  </td>
                  <td className="border border-[#6d6e71] align-top">
                    <p className="p-1">
                      Apply basic problem-solving steps to make responsible
                      decisions affecting their health and safety.
                    </p>
                  </td>
                  <td className="border border-[#6d6e71] align-top">
                    <p className="p-1">
                      Use a decision-making process to make safe and healthy
                      choices.
                    </p>
                  </td>
                  <td className="border border-[#6d6e71] align-top">
                    <p className="p-1">
                      Apply a decision-making process to analyze situations,
                      generate options, consider consequences, and ensure safety
                      and health in navigating complex life choices.
                    </p>
                  </td>
                </tr>
                <tr>
                  <td className="border border-[#6d6e71] align-top">
                    <p className="font-bold p-1">
                      SE:B1:4 Accept responsibility for own decisions and modify
                      behavior accordingly
                    </p>
                  </td>
                  <td className="border border-[#6d6e71] align-top">
                    <p className="p-1">
                      Recognize when a personal or social problem arises.
                    </p>
                  </td>
                  <td className="border border-[#6d6e71] align-top">
                    <p className="p-1">
                      Take responsibility for their actions, acknowledge their
                      role in what happened, and strive to repair any harm
                      caused.
                    </p>
                  </td>
                  <td className="border border-[#6d6e71] align-top">
                    <p className="p-1">
                      Demonstrate increased awareness of personal responsibility
                      and actively work to repair any harm caused.
                    </p>
                  </td>
                  <td className="border border-[#6d6e71] align-top">
                    <p className="p-1">
                      Assess their level of responsibility for outcomes in
                      difficult personal or social situations and take action to
                      repair the harm caused.
                    </p>
                  </td>
                  <td className="border border-[#6d6e71] align-top">
                    <p className="p-1">
                      Take responsibility, reflecting on decisions made in
                      personal or social situations and actively working to
                      repair harm while preventing recurrence.
                    </p>
                  </td>
                </tr>
                <tr>
                  <td className="border border-[#6d6e71] align-top">
                    <p className="font-bold p-1">
                      SE:B1:5 Demonstrate when, where, and how to seek support
                      for solving problems and making decisions
                    </p>
                  </td>
                  <td className="border border-[#6d6e71] align-top">
                    <p className="p-1">
                      Recognize when they are struggling and signal that support
                      is needed, verbally and/or nonverbally.
                    </p>
                  </td>
                  <td className="border border-[#6d6e71] align-top">
                    <p className="p-1">
                      Seek and accept help from others as needed when solving
                      problems or making decisions.
                    </p>
                  </td>
                  <td className="border border-[#6d6e71] align-top">
                    <p className="p-1">
                      Ask questions and seek help from adults and peers when
                      solving problems and making decisions.
                    </p>
                  </td>
                  <td className="border border-[#6d6e71] align-top">
                    <p className="p-1">
                      Recognize and communicate their needs, ask questions, and
                      use resources to support problem-solving and
                      decision-making.
                    </p>
                  </td>
                  <td className="border border-[#6d6e71] align-top">
                    <p className="p-1">
                      Use a variety of resources to seek support and advocate
                      for their needs as they solve problems and make decisions.
                    </p>
                  </td>
                </tr>
                <tr>
                  <td className="border border-[#6d6e71] align-top">
                    <p className="font-bold p-1">
                      SE:B1:6 Recognize when social pressure is influencing a
                      personal decision
                    </p>
                  </td>
                  <td className="border border-[#6d6e71] align-top">
                    <p className="p-1">
                      Begin to express personal preferences in social contexts.
                    </p>
                  </td>
                  <td className="border border-[#6d6e71] align-top">
                    <p className="p-1">
                      Recognize simple instances of peer influence in
                      decision-making and begin to differentiate between
                      personal preferences and choices influenced by peers.
                    </p>
                  </td>
                  <td className="border border-[#6d6e71] align-top">
                    <p className="p-1">
                      Distinguish between different types of peer influence and
                      define peer pressure in social contexts.
                    </p>
                  </td>
                  <td className="border border-[#6d6e71] align-top">
                    <p className="p-1">
                      Analyze social pressures and how they can affect personal
                      decisions.
                    </p>
                  </td>
                  <td className="border border-[#6d6e71] align-top">
                    <p className="p-1">
                      Analyze complex social dynamics and peer influence and
                      explain their potential impact on decision-making.
                    </p>
                  </td>
                </tr>
                <tr className="bg-[#026666] text-white">
                  <td className="border border-[#6d6e71] align-top">
                    <p className="font-bold p-1">Standard C:</p>
                  </td>
                  <td className="border border-[#6d6e71]" colSpan="5">
                    <p className="font-bold p-1">
                      Students will demonstrate personal safety skills
                    </p>
                  </td>
                </tr>
                <tr className="bg-[#9acdc0] text-black text-center">
                  <td className="border border-[#6d6e71]" colSpan="6">
                    <p className="font-bold p-1">
                      Competency C1 Personal Safety
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
                      SE:C1:1 State knowledge of personal contact information
                    </p>
                  </td>
                  <td className="border border-[#6d6e71] align-top" colSpan="5">
                    <p className="p-1">
                      Provide personal and family contact information and know
                      how to use it for personal safety.
                    </p>
                  </td>
                </tr>
                <tr>
                  <td className="border border-[#6d6e71] align-top">
                    <p className="font-bold p-1">
                      SE:C1:2 Develop skills to utilize personal and community
                      resources related to mental health
                    </p>
                  </td>
                  <td className="border border-[#6d6e71] align-top">
                    <p className="p-1">
                      Identify trusted adults at home and school for support and
                      recall a mental health strategy, such as drawing, deep
                      breaths, or mindful movement, and its appropriate use.
                    </p>
                  </td>
                  <td className="border border-[#6d6e71] align-top">
                    <p className="p-1">
                      Identify trusted adults and peers to ask for help when
                      needed and describe strategies to support mental health
                      and their appropriate use.
                    </p>
                  </td>
                  <td className="border border-[#6d6e71] align-top">
                    <p className="p-1">
                      Identify trusted adults for help and locate community
                      resources such as school counselors and teachers for
                      mental health support.
                    </p>
                  </td>
                  <td className="border border-[#6d6e71] align-top">
                    <p className="p-1">
                      Identify trusted adults for support, explain the role of
                      community organizations and mental health services,
                      recognize signs of distress in themselves and their peers,
                      and seek help using personal and community resources.
                    </p>
                  </td>
                  <td className="border border-[#6d6e71] align-top">
                    <p className="p-1">
                      Identify trusted adults for support, explain the
                      importance of seeking professional help for mental health
                      challenges, recognize signs of distress in themselves and
                      their peers, and seek help using personal and community
                      resources.
                    </p>
                  </td>
                </tr>
                <tr>
                  <td className="border border-[#6d6e71] align-top">
                    <p className="font-bold p-1">
                      SE:C1:3 Recognize and advocate for personal boundaries,
                      rights, and privacy needs
                    </p>
                  </td>
                  <td className="border border-[#6d6e71] align-top">
                    <p className="p-1">
                      Demonstrate basic awareness of personal space and use
                      simple refusal skills to communicate appropriate
                      boundaries.
                    </p>
                  </td>
                  <td className="border border-[#6d6e71] align-top">
                    <p className="p-1">
                      Recognize their right to feel safe and comfortable by
                      asking for privacy when needed and/or using refusal skills
                      to establish appropriate boundaries.
                    </p>
                  </td>
                  <td className="border border-[#6d6e71] align-top">
                    <p className="p-1">
                      Identify types of personal boundaries, such as physical,
                      emotional, and online boundaries, and advocate for their
                      right to feel safe and comfortable.
                    </p>
                  </td>
                  <td className="border border-[#6d6e71] align-top">
                    <p className="p-1">
                      Apply skills to express and defend personal boundaries and
                      advocate for their right to feel safe and comfortable, as
                      well as for the rights of others.
                    </p>
                  </td>
                  <td className="border border-[#6d6e71] align-top">
                    <p className="p-1">
                      Analyze situations or examples of personal boundaries,
                      rights, and/or privacy being violated and explain the
                      implications and possible advocacy strategies.
                    </p>
                  </td>
                </tr>
                <tr>
                  <td className="border border-[#6d6e71] align-top">
                    <p className="font-bold p-1">
                      SE:C1:4 Examine the relationship between rules, laws,
                      safety, and the protection of human rights of the
                      individual
                    </p>
                  </td>
                  <td className="border border-[#6d6e71] align-top">
                    <p className="p-1">
                      Recall simple classroom rules and basic safety practices
                      such as looking both ways before crossing the street or
                      how to use scissors safely.
                    </p>
                  </td>
                  <td className="border border-[#6d6e71] align-top">
                    <p className="p-1">
                      Explain how rules, both in class and at home, contribute
                      to maintaining harmony, ensuring safety, and promoting
                      fairness for everyone.
                    </p>
                  </td>
                  <td className="border border-[#6d6e71] align-top">
                    <p className="p-1">
                      Explain the purpose of laws to protect self and others.
                    </p>
                  </td>
                  <td className="border border-[#6d6e71] align-top">
                    <p className="p-1">
                      Describe the impact of laws on individuals and society in
                      relation to the protection of human rights.
                    </p>
                  </td>
                  <td className="border border-[#6d6e71] align-top">
                    <p className="p-1">
                      Analyze examples of the complex interplay between rules
                      and laws and evaluate their effectiveness in protecting
                      the safety and human rights of individuals.
                    </p>
                  </td>
                </tr>
                <tr>
                  <td className="border border-[#6d6e71] align-top">
                    <p className="font-bold p-1">
                      SE:C1:5 Distinguish between safe and unsafe physical
                      contact, and identify ways to respond to unsafe situations
                    </p>
                  </td>
                  <td className="border border-[#6d6e71] align-top">
                    <p className="p-1">
                      Recognize safe and unsafe situations such as unwanted or
                      uncomfortable touch, identify trusted adults to seek out
                      when feeling unsafe, and use refusal strategies.
                    </p>
                  </td>
                  <td className="border border-[#6d6e71] align-top">
                    <p className="p-1">
                      Distinguish between safe and unsafe touch, communicate
                      feelings about physical interactions, advocate for
                      personal safety, and recall and apply strategies to stay
                      safe and respond to unsafe situations.
                    </p>
                  </td>
                  <td className="border border-[#6d6e71] align-top">
                    <p className="p-1">
                      Explain different types of unsafe situations, including
                      physical, verbal, nonverbal, and online interactions;
                      advocate for personal safety for themselves and others;
                      and use strategies to stay safe.
                    </p>
                  </td>
                  <td className="border border-[#6d6e71] align-top">
                    <p className="p-1">
                      Assess the appropriateness of situations based on context,
                      relationships, and comfort levels, including physical,
                      verbal, nonverbal, and online interactions; advocate for
                      personal safety for themselves and others; and describe
                      strategies to stay safe depending on the scenario and
                      context.
                    </p>
                  </td>
                  <td className="border border-[#6d6e71] align-top">
                    <p className="p-1">
                      Critically evaluate the appropriateness of physical,
                      verbal, nonverbal, and online interactions in complex and
                      evolving situations, and develop a comprehensive plan to
                      address and prevent unsafe situations while advocating for
                      the personal safety of themselves and others.
                    </p>
                  </td>
                </tr>
                <tr>
                  <td className="border border-[#6d6e71] align-top">
                    <p className="font-bold p-1">
                      SE:C1:6 State the legal consequences for substance use,
                      sexual activity, marriage, etc., according to the country
                      one lives in
                    </p>
                  </td>
                  <td className="border border-[#6d6e71] align-top">
                    <p className="p-1">
                      Show understanding of basic rules and concepts of right
                      and wrong, particularly in relation to their own behavior
                      and safety.
                    </p>
                  </td>
                  <td className="border border-[#6d6e71] align-top">
                    <p className="p-1">
                      Identify basic personal safety rules taught in school.
                    </p>
                  </td>
                  <td className="border border-[#6d6e71] align-top">
                    <p className="p-1">
                      Recall the school personal safety policies.
                    </p>
                  </td>
                  <td className="border border-[#6d6e71] align-top">
                    <p className="p-1">
                      Explain the school personal safety policies and legal
                      consequences for substance use, sexual activity, marriage,
                      etc., according to the country they live in.
                    </p>
                  </td>
                  <td className="border border-[#6d6e71] align-top">
                    <p className="p-1">
                      Analyze and explain the school personal safety policies
                      and legal consequences for substance use, sexual activity,
                      marriage, etc., according to the country they live in.
                    </p>
                  </td>
                </tr>
                <tr>
                  <td className="border border-[#6d6e71] align-top">
                    <p className="font-bold p-1">
                      SE:C1:7 Explain the concept of consent and how it relates
                      to setting and respecting boundaries
                    </p>
                  </td>
                  <td className="border border-[#6d6e71] align-top">
                    <p className="p-1">
                      Follow simple rules about respecting one another's
                      personal space and belongings during activities.
                    </p>
                  </td>
                  <td className="border border-[#6d6e71] align-top">
                    <p className="p-1">
                      Begin to demonstrate understanding of the concept of
                      consent by asking for permission in simple scenarios like
                      sharing toys or playing together.
                    </p>
                  </td>
                  <td className="border border-[#6d6e71] align-top">
                    <p className="p-1">
                      Apply the concept of consent to everyday scenarios,
                      including borrowing items, physical contact, and sharing
                      personal information, and emphasize the significance of
                      setting and respecting personal boundaries.
                    </p>
                  </td>
                  <td className="border border-[#6d6e71] align-top">
                    <p className="p-1">
                      Discuss the role of consent in more complex relationships,
                      including dating and romantic interactions, and articulate
                      the responsibility of individuals to ensure their actions
                      are consensual and respectful.
                    </p>
                  </td>
                  <td className="border border-[#6d6e71] align-top">
                    <p className="p-1">
                      Describe types of consent, including informed consent, and
                      explain how individual autonomy relates to respecting each
                      person's right to control their body and choices.
                    </p>
                  </td>
                </tr>
                <tr>
                  <td className="border border-[#6d6e71] align-top">
                    <p className="font-bold p-1">
                      SE:C1:8 Demonstrate digital citizenship focusing on
                      internet safety skills
                    </p>
                  </td>
                  <td className="border border-[#6d6e71] align-top">
                    <p className="p-1">
                      Follow simple rules to stay safe when using the internet
                      and digital tools.
                    </p>
                  </td>
                  <td className="border border-[#6d6e71] align-top">
                    <p className="p-1">
                      Recognize safe behavior when using the internet and
                      digital tools, such as not sharing personal information.
                    </p>
                  </td>
                  <td className="border border-[#6d6e71] align-top">
                    <p className="p-1">
                      Describe why it is important to behave safely online and
                      be a responsible digital citizen, including using privacy
                      settings and understanding the risks of sharing personal
                      information on the internet.
                    </p>
                  </td>
                  <td className="border border-[#6d6e71] align-top">
                    <p className="p-1">
                      Engage in safe, legal, and ethical behavior when using
                      technology and manage their digital identity and personal
                      safety when having online interactions.
                    </p>
                  </td>
                  <td className="border border-[#6d6e71] align-top">
                    <p className="p-1">
                      Engage in safe, legal, and ethical behavior when using
                      technology and manage their digital identity and personal
                      safety when engaging in online interactions.
                    </p>
                  </td>
                </tr>
                <tr>
                  <td className="border border-[#6d6e71] align-top">
                    <p className="font-bold p-1">
                      SE:C1:9 Explain the emotional and physical dangers of
                      substance use and dependency
                    </p>
                  </td>
                  <td className="border border-[#6d6e71] align-top">
                    <p className="p-1">
                      Recall simple safety rules, such as not ingesting anything
                      without a trusted adult's guidance.
                    </p>
                  </td>
                  <td className="border border-[#6d6e71] align-top">
                    <p className="p-1">
                      Explain the dual effects of substances like medications on
                      the body and brain, emphasizing the importance of taking
                      them as prescribed by a doctor and never using medications
                      intended for others.
                    </p>
                  </td>
                  <td className="border border-[#6d6e71] align-top">
                    <p className="p-1">
                      Explain how substances such as drugs, alcohol, and
                      nicotine can affect different parts of the body, brain,
                      and emotional state.
                    </p>
                  </td>
                  <td className="border border-[#6d6e71] align-top">
                    <p className="p-1">
                      Explain how alcohol, drugs, and nicotine can negatively
                      affect brain development in adolescence, emphasizing the
                      increased vulnerability to addiction due to developing
                      brains, and identify protective factors for lowering the
                      risk of addiction.
                    </p>
                  </td>
                  <td className="border border-[#6d6e71] align-top">
                    <p className="p-1">
                      Examine the complexity of addiction, considering genetics,
                      environment, and treatments; describe how substance use
                      affects relationships, mental health, and well-being; and
                      demonstrate the ability to recognize signs of alcohol
                      overdose and seek urgent medical help.
                    </p>
                  </td>
                </tr>
                <tr>
                  <td className="border border-[#6d6e71] align-top">
                    <p className="font-bold p-1">
                      SE:C1:10 Identify trusted adults in the school and
                      community, and know how, when, and where to ask for help
                      for self and others
                    </p>
                  </td>
                  <td className="border border-[#6d6e71] align-top" colSpan="5">
                    <p className="p-1">
                      Identify trusted adults in the school and community, and
                      know how, when, and where to ask for help for self and
                      others
                    </p>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
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

export default DomainAllPage;
