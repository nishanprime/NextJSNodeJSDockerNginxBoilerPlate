import * as React from "react";
import { HeroContent } from "./HeroContent";
import Image from "next/image";
import { GET_STARTED_ICON, HERO_IMAGE } from "../image";

export const stats = [
  {
    value: "80%",
    label: "Use of Recycled Materials",
    trend: { value: "54%", direction: "up" },
  },
  {
    value: "65%",
    label: "Carbon Emission Reduction",
    trend: { value: "35%", direction: "down" },
  },
];

export const MobileHero: React.FC = () => {
  const heroData = {
    title: "One Step Away From HonestValue",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed viverra ante vel lectus consectetur vestibulum. In cursus dictum nibh molestie pretium.",
    cta: {
      text: "Get Started",
      icon: GET_STARTED_ICON,
    },
  };

  return (
    <div className="">
      <div className="px-2 py-4">
        <img loading="lazy" src={HERO_IMAGE} />
      </div>
      <HeroContent {...heroData} />
    </div>
  );
};
