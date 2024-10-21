import Image from "next/image";
import React from "react";
import Container from "./container";

// Uncomment the imports below if the images load successfully via import
// import userOneImg from "../public/img/user1.jpg";
// import userTwoImg from "../public/img/user2.jpg";
// import userThreeImg from "../public/img/user3.jpg";

export default function Testimonials() {
  return (
    <Container>
      <div className="grid gap-10 lg:grid-cols-2 xl:grid-cols-3">
        <div className="lg:col-span-2 xl:col-auto">
          <div className="flex flex-col justify-between w-full h-full bg-gray-100 px-14 rounded-2xl py-14 dark:bg-trueGray-800">
            <p className="text-2xl leading-normal ">
              TechInfoUSA provided us with exceptional service. Their{" "}
              <Mark>expertise</Mark> in technology consulting helped us
              streamline our processes and grow our business.
            </p>
            <Avatar
              // Use imported image if it works, otherwise fall back to direct path
              image={"/img/user1.jpg"}
              name="Sarah Johnson"
              title="VP Operations at Alpha Corp"
            />
          </div>
        </div>
        <div>
          <div className="flex flex-col justify-between w-full h-full bg-gray-100 px-14 rounded-2xl py-14 dark:bg-trueGray-800">
            <p className="text-2xl leading-normal ">
              The training programs from TechInfoUSA were{" "}
              <Mark>invaluable</Mark>. Our team gained the skills needed to
              implement cutting-edge solutions.
            </p>
            <Avatar
              image={"/img/user2.jpg"}
              name="Michael Lee"
              title="Lead Developer at Innovate Tech"
            />
          </div>
        </div>
        <div>
          <div className="flex flex-col justify-between w-full h-full bg-gray-100 px-14 rounded-2xl py-14 dark:bg-trueGray-800">
            <p className="text-2xl leading-normal ">
              TechInfoUSA's consulting services transformed our approach to
              technology. Their <Mark>guidance</Mark> was crucial to our
              success.
            </p>
            <Avatar
              image={"/img/user3.jpg"}
              name="Jessica Parker"
              title="CEO at Bright Solutions"
            />
          </div>
        </div>
      </div>
    </Container>
  );
}

function Avatar({ image, name, title }) {
  return (
    <div className="flex items-center mt-8 space-x-3">
      <div className="flex-shrink-0 overflow-hidden rounded-full w-14 h-14">
        <Image
          src={image} // Direct path
          width="40"
          height="40"
          alt="Avatar"
          layout="responsive"
        />
      </div>
      <div>
        <div className="text-lg font-medium">{name}</div>
        <div className="text-gray-600 dark:text-gray-400">{title}</div>
      </div>
    </div>
  );
}

function Mark({ children }) {
  return (
    <mark className="text-indigo-800 bg-indigo-100 rounded-md ring-indigo-100 ring-4 dark:ring-indigo-900 dark:bg-indigo-900 dark:text-indigo-200">
      {children}
    </mark>
  );
}
