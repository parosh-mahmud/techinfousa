import Head from "next/head";
import Hero from "../components/hero";
import Navbar from "../components/navbar";
import SectionTitle from "../components/sectionTitle";

import { benefitOne, benefitTwo } from "../components/data";
import Video from "../components/video";
import Benefits from "../components/benefits";
import Footer from "../components/footer";
import Testimonials from "../components/testimonials";
import Cta from "../components/cta";
import Faq from "../components/faq";
import PopupWidget from "../components/popupWidget";

//import dynamic from "next/dynamic";

// const Video = dynamic(() => import("../components/video"));

// const Benefits = dynamic(() => import("../components/benefits"));
// const Footer = dynamic(() => import("../components/footer"));
// const Testimonials = dynamic(() => import("../components/testimonials"));
// const Cta = dynamic(() => import("../components/cta"));
// const Faq = dynamic(() => import("../components/faq"));

// const PopupWidget = dynamic(() => import("../components/popupWidget"));

export default function Home() {
  return (
    <>
      <Head>
        <title>TechInfoUSA - Technology Solutions & Consulting</title>
        <meta
          name="description"
          content="TechInfoUSA delivers innovative technology solutions, consulting, and training services to empower businesses and individuals."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />
      <Hero />
      <SectionTitle pretitle="Our Expertise" title="Why Choose TechInfoUSA?">
        TechInfoUSA provides a full spectrum of technology services, from expert
        consulting to professional training. We help businesses and individuals
        stay competitive in a rapidly changing tech environment, delivering
        tailored solutions that meet your unique needs.
      </SectionTitle>
      <Benefits data={benefitOne} />
      <Benefits imgPos="right" data={benefitTwo} />
      <SectionTitle
        pretitle="Explore Our Services"
        title="Watch Our Solutions in Action"
      >
        This section highlights a video showcasing how TechInfoUSA can transform
        your business with the latest technology solutions. Learn more about our
        impact through this visual presentation.
      </SectionTitle>
      <Video />
      <SectionTitle pretitle="Client Success" title="What Our Clients Say">
        Our clients’ testimonials speak volumes about our commitment to quality.
        Discover how TechInfoUSA has helped organizations achieve their business
        goals through innovative solutions.
      </SectionTitle>
      <Testimonials />
      <SectionTitle pretitle="FAQ" title="Frequently Asked Questions">
        Do you have questions about our services, consulting, or training
        programs? Find the answers here to learn more about how TechInfoUSA can
        support your business growth.
      </SectionTitle>
      <Faq />
      <Cta />
      <Footer />
      <PopupWidget />
    </>
  );
}
