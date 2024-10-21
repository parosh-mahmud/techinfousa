import React from "react";
import Container from "./container";
import { Disclosure } from "@headlessui/react";
import { ChevronUpIcon } from "@heroicons/react/solid";

export default function Faq() {
  return (
    <Container className="!p-0">
      <div className="w-full max-w-2xl p-2 mx-auto rounded-2xl">
        {faqdata.map((item, index) => (
          <div key={item.question} className="mb-5">
            <Disclosure>
              {({ open }) => (
                <>
                  <Disclosure.Button className="flex items-center justify-between w-full px-4 py-4 text-lg text-left text-gray-800 rounded-lg bg-gray-50 hover:bg-gray-100 focus:outline-none focus-visible:ring focus-visible:ring-indigo-100 focus-visible:ring-opacity-75 dark:bg-trueGray-800 dark:text-gray-200">
                    <span>{item.question}</span>
                    <ChevronUpIcon
                      className={`${
                        open ? "transform rotate-180" : ""
                      } w-5 h-5 text-indigo-500`}
                    />
                  </Disclosure.Button>
                  <Disclosure.Panel className="px-4 pt-4 pb-2 text-gray-500 dark:text-gray-300">
                    {item.answer}
                  </Disclosure.Panel>
                </>
              )}
            </Disclosure>
          </div>
        ))}
      </div>
    </Container>
  );
}

const faqdata = [
  {
    question:
      "Is TechInfoUSA's consulting service customizable for my business?",
    answer:
      "Yes, we tailor our consulting services to meet the specific needs and challenges of your business, ensuring the best possible outcomes.",
  },
  {
    question: "Do you offer technical training and certification?",
    answer:
      "Yes, TechInfoUSA offers a variety of technical training programs, complete with certifications to help you or your team stay current with the latest technologies.",
  },
  {
    question: "What industries does TechInfoUSA serve?",
    answer:
      "TechInfoUSA provides technology solutions across multiple industries, including finance, healthcare, retail, and manufacturing, among others.",
  },
  {
    question: "How can I contact TechInfoUSA for support?",
    answer:
      "You can reach our support team via email at support@techinfousa.com. We also offer priority support through our paid plans.",
  },
];
