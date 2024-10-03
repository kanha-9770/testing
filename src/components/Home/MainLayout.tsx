"use client";
import React, { useRef } from "react";
import dynamic from "next/dynamic";
import Hero from "@/components/Home/Home";
import NavLinksDemo from "@/components/Home/NavLinks";
import ContactIcons from "@/components/Contact/ContactIcon";
import FeatureNews from "@/components/Home/FeatureNews";
import { AnnouncementSection } from "@/components/Home/AnnouncementSection";
import data from "../Constants/hero.json";
const AboutUs = dynamic(() => import("@/components/Home/AboutSection"), {
  ssr: false,
});

const MarqueeSection = dynamic(
  () => import("@/components/Home/MarqueeSection"),
  {
    ssr: false,
  }
);

const KnowMore = dynamic(() => import("@/components/Home/KnowMore"), {
  ssr: true,
});

const HomeMachine = dynamic(() => import("@/components/Home/HomeMachine"), {
  ssr: true,
});

const HomeTestimonial = dynamic(
  () => import("@/components/Home/TestimonialsSection"),
  {
    ssr: false,
  }
);

export default function MainLayout() {
  const aboutUsRef = useRef<HTMLDivElement>(null);
  const infiniteCardsRef = useRef<HTMLDivElement>(null);
  const knowMoreRef = useRef<HTMLDivElement>(null);
  const homeMachineRef = useRef<HTMLDivElement>(null);
  const newsFeatureRef = useRef<HTMLDivElement>(null);
  const homeTestimonialRef = useRef<HTMLDivElement>(null);
  const iotRef = useRef<HTMLDivElement>(null);

  const navItems = [
    { text: "Machines", ref: homeMachineRef },
    { text: "About Us", ref: aboutUsRef },
    { text: "Clientele", ref: infiniteCardsRef },
    { text: "KnowMore", ref: knowMoreRef },
    { text: "IoT", ref: iotRef },
    { text: "News", ref: newsFeatureRef },
    { text: "Testimonials", ref: homeTestimonialRef },
  ];

  return (
    <main className="relative  bg-[#f2f2f2] top-14 gap-2 h-full">
      <div className="top-2 relative">
        <Hero />
      </div>
      <ContactIcons />
      <NavLinksDemo navItems={navItems} />
      <div className="h-full font-poppins py-20">
        <div
          id="machines"
          className="flex space-y-6 flex-col"
          ref={homeMachineRef}
        >
          <div className="flex justify-center text-3xl items-center space-x-2">
            <h2 className="bg-gradient-to-r text-3xl from-[#483d73] to-red-700  bg-clip-text text-transparent font-medium">
              {data[0].homeMachineSection?.title.trim().replace(/\s+\S+$/, "")}
              <span className="font-semibold ml-1">
                {data[0].homeMachineSection?.title.trim().match(/\S+$/)}
              </span>
            </h2>
          </div>
          <div className="text-sm w-full lg:w-full flex items-center justify-center">
            <p className="lg:w-[50%] text-sm lg:px-0 px-2 lg:text-base font-regular text-center">
              {data[0].homeMachineSection?.subheading}
            </p>
          </div>
          <HomeMachine />
        </div>
        <div className="h-auto max-w-screen-2xl mx-auto lg:py-8">
          <AnnouncementSection />
        </div>
        <div id="aboutUs" className="" ref={aboutUsRef}>
          <AboutUs />
        </div>

        <div
          id="clientele"
          className="max-w-screen-2xl mx-auto"
          ref={infiniteCardsRef}
        >
          <MarqueeSection />
        </div>
        <div id="knowMore" className="h-auto" ref={knowMoreRef}>
          <KnowMore />
        </div>

        <div id="news" className="" ref={newsFeatureRef}>
          {/* <NewsFeature /> */}
          <FeatureNews />
        </div>

        <div
          id="testimonials"
          className="relative  bg-gradient-to-l via-purple-200 to-transparent h-screen overflow-hidden"
          ref={homeTestimonialRef}
        >
          <HomeTestimonial />
        </div>
      </div>
    </main>
  );
}
