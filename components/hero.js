import Image from "next/image";
import Container from "./container";
import heroImg from "../public/img/hero.png"; // You can update this image to reflect your business

export default function Hero() {
  return (
    <>
      <Container className="flex flex-wrap">
        <div className="flex items-center w-full lg:w-1/2">
          <div className="max-w-2xl mb-8">
            <h1 className="text-4xl font-bold leading-snug tracking-tight text-gray-800 lg:text-4xl lg:leading-tight xl:text-6xl xl:leading-tight dark:text-white">
              Empower Your Business with Cutting-Edge Tech Solutions!
            </h1>
            <p className="py-5 text-xl leading-normal text-gray-500 lg:text-xl xl:text-2xl dark:text-gray-300">
              At TechInfoUSA, we provide innovative and customized technology
              solutions to take your business to the next level. Our expert
              services include:
            </p>
            <ul className="list-disc list-inside text-gray-500 dark:text-gray-300">
              <li>Web Development</li>
              <li>Mobile App Development</li>
              <li>Cloud Solutions and DevOps</li>
              <li>Business Consulting and Strategy</li>
            </ul>
            <p className="py-5 text-xl leading-normal text-gray-500 lg:text-xl xl:text-2xl dark:text-gray-300">
              With over 10 years of experience in delivering scalable,
              high-performance solutions, we partner with you to bring your
              vision to life and drive digital transformation.
            </p>
            <h2 className="text-2xl font-bold text-indigo-600">
              Future-proof your business with our top-notch tech services!
            </h2>
            <p className="py-3 text-lg font-semibold text-gray-700 dark:text-gray-300">
              <span className="line-through">$999</span> $799{" "}
              <span className="text-xs">(limited-time offer)</span>
            </p>
            <a
              href="#contact"
              className="px-8 py-4 text-lg font-medium text-center text-white bg-indigo-600 rounded-md"
            >
              Get Started
            </a>
          </div>
        </div>
        <div className="flex items-center justify-center w-full lg:w-1/2">
          <div className="hidden lg:block">
            <Image
              src={heroImg}
              width="616"
              height="617"
              alt="Hero Illustration"
              layout="intrinsic"
              loading="eager"
              placeholder="blur"
            />
          </div>
        </div>
      </Container>
    </>
  );
}
