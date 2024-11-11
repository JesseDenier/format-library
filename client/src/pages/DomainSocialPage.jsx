// Imports React library
import React from "react";

// Imports the authentication utility
import Auth from "../utils/auth";

// Imports the query utility
import { useQuery } from "@apollo/client";
import { QUERY_USER } from "../utils/queries";

// Imports PDF handling
import { handlePDFWatermarkAndDownload } from "../utils/pdfUtils";

const DomainSocialPage = () => {
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
                "/private/domain_social.pdf",
                user,
                "ISCA Social Domain"
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
    </main>
  );
};

export default DomainSocialPage;
