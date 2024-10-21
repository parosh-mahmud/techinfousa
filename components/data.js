import {
  EmojiHappyIcon,
  ChartSquareBarIcon,
  CursorClickIcon,
  DeviceMobileIcon,
  AdjustmentsIcon,
  SunIcon,
} from "@heroicons/react/outline";

import benefitOneImg from "../public/img/benefit-one.png";
import benefitTwoImg from "../public/img/benefit-two.png";

const benefitOne = {
  title: "Empower Your Business with Cutting-Edge Solutions",
  desc: "At TechInfoUSA, we provide technology solutions tailored to your business needs. Our services help you understand your customers better, improve acquisition, and boost retention rates.",
  image: benefitOneImg,
  bullets: [
    {
      title: "Understand Your Business Needs",
      desc: "We analyze your business processes to offer solutions that match your goals.",
      icon: <EmojiHappyIcon />,
    },
    {
      title: "Boost Performance and Efficiency",
      desc: "Our consulting services help you acquire the right technology to drive growth.",
      icon: <ChartSquareBarIcon />,
    },
    {
      title: "Improve Customer Retention",
      desc: "Our strategies are focused on ensuring long-term success with your clients.",
      icon: <CursorClickIcon />,
    },
  ],
};

const benefitTwo = {
  title: "Comprehensive Solutions for Your Technology Challenges",
  desc: "TechInfoUSA offers a wide range of services designed to tackle your most challenging technology needs. Our solutions are designed to ensure you stay competitive in today’s fast-paced digital world.",
  image: benefitTwoImg,
  bullets: [
    {
      title: "Mobile-Friendly & Responsive",
      desc: "Our solutions are mobile-first, ensuring your services are accessible on any device.",
      icon: <DeviceMobileIcon />,
    },
    {
      title: "Latest Technologies",
      desc: "We use the latest technologies, including Next.js and TailwindCSS, to deliver high-performance solutions.",
      icon: <AdjustmentsIcon />,
    },
    {
      title: "Dark & Light Mode Support",
      desc: "Our designs are optimized for both light and dark mode, offering flexibility and accessibility.",
      icon: <SunIcon />,
    },
  ],
};

export { benefitOne, benefitTwo };
