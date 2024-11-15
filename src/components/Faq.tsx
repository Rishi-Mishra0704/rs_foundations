"use client";
import React from "react";
import { Container } from "@/components/Container";

export const Faq = () => {
  return (
    <Container className="!p-0">
      <div className="w-full max-w-2xl p-2 mx-auto rounded-2xl">
        {faqdata.map((item, index) => (
          <div key={index} className="mb-5">
            <div
              tabIndex={0}
              className="collapse collapse-arrow bg-gray-50 dark:bg-trueGray-800 shadow-lg"
            >
              <input type="checkbox" className="peer" />
              <div className="collapse-title text-lg text-gray-800 dark:text-gray-200 flex items-center justify-between">
                <span>{item.question}</span>
              </div>
              <div className="collapse-content text-gray-500 dark:text-gray-300">
                <p>{item.answer}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </Container>
  );
};

const faqdata: Faq[] = [
  {
    question: "What does RS Foundations do?",
    answer:
      "RS Foundations is structured into three branches: RS Tech, which focuses on creating our own projects; RS Solutions, which builds custom projects as per client requirements; and RS Media, specializing in social media marketing services.",
  },
  {
    question: "What’s the difference between RS Tech and RS Solutions?",
    answer:
      "RS Tech is dedicated to developing proprietary projects aimed at innovation and market impact, while RS Solutions is a service-based branch that builds projects tailored to client specifications.",
  },
  {
    question: "What is the hourly rate for RS Solutions projects?",
    answer:
      "Our rate for RS Solutions is 300 INR per hour, approximately 3.60 USD or 2.85 GBP.",
  },
  {
    question: "What services does RS Solutions offer?",
    answer:
      "We offer full-stack services, including UI/UX design, Frontend Web development, Mobile App development, APIs and Backend solutions. We handle everything from planning to execution, ensuring a seamless experience for your project. We manage everything from the initial planning stages to the final execution, ensuring your project is completed with attention to detail and the highest industry standards.",
  },
  {
    question: "What is the typical timeline for RS Solutions projects?",
    answer:
      "Timelines vary based on project complexity, requirements, and scope. After our initial consultation, we will provide you with an estimated timeline for your specific project.",
  },
  {
    question: "How can I track the progress of my project?",
    answer:
      "We provide regular updates and use project management tools to keep you informed of every milestone. You’ll have visibility into the project’s progress and can communicate directly with our team throughout.",
  },
  {
    question: "Are there additional costs besides the hourly rate?",
    answer:
      "While the hourly rate covers development time, certain projects may require additional resources, third-party services, or subscriptions, which are not included in the base rate. We will inform you upfront of any such costs so there are no surprises.",
  },
  {
    question:
      "Can I use RS Foundations services for both custom projects and marketing?",
    answer:
      "Yes! We offer custom project development under RS Solutions and marketing services through RS Media, covering a range of client needs from technical solutions to audience outreach.",
  },
  {
    question: "Do you offer support for completed projects?",
    answer:
      "Yes, we provide post-project support and maintenance for an additional fee, but only for projects completed by our team at RS Foundations. This ensures that your project continues to run smoothly after launch, with updates, bug fixes, and any necessary adjustments handled by our experts.",
  },
  {
    question: "What is the onboarding process for new projects?",
    answer:
      "Our onboarding process includes an initial consultation to understand your goals, followed by detailed planning and timeline estimates. We ensure that every aspect is covered to align with your vision before development begins.",
  },
];
