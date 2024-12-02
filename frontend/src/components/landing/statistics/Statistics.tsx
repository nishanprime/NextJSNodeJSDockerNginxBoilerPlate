import * as React from "react";
import { StatCard } from "./StatCard";
import { FeatureCard } from "./FeatureCard";
import { SEAMLESS_EXPERIENCE_IMAGE } from "../image";

const statsData = [
  { value: "$1,148", label: "Average Savings" },
  { value: "4.9/5", label: "Customer Satisfaction" },
  { value: "95%", label: "Success Rate" },
];

const featuresData = [
  {
    imageSrc: SEAMLESS_EXPERIENCE_IMAGE,
    title: "Seamless Experience",
    description:
      "Say goodbye to the days of complicated paperwork and endless back-and-forth with tax authorities. At JumboTax, we prioritize your convenience. Provide us with a few essential details, and let us handle the rest. Filing property tax appeals has never been this easy!",
  },
  {
    imageSrc: SEAMLESS_EXPERIENCE_IMAGE,
    title: "Seamless Experience",
    description:
      "Say goodbye to the days of complicated paperwork and endless back-and-forth with tax authorities. At JumboTax, we prioritize your convenience. Provide us with a few essential details, and let us handle the rest. Filing property tax appeals has never been this easy!",
  },
  {
    imageSrc: SEAMLESS_EXPERIENCE_IMAGE,
    title: "Seamless Experience",
    description:
      "Say goodbye to the days of complicated paperwork and endless back-and-forth with tax authorities. At JumboTax, we prioritize your convenience. Provide us with a few essential details, and let us handle the rest. Filing property tax appeals has never been this easy!",
  },
];

export const Statistics: React.FC = () => {
  return (
    <div className="flex flex-col justify-center w-full max-md:max-w-full bg-custom-teal">
      <div className="flex flex-wrap gap-5 justify-center items-center self-center max-w-full leading-none text-cyan-950">
        {statsData.map((stat, index) => (
          <StatCard key={index} value={stat.value} label={stat.label} />
        ))}
      </div>
      <div className="flex flex-wrap gap-6 items-center mt-8 w-full text-black max-md:max-w-full pl-8 pr-8 pb-8">
        {featuresData.map((feature, index) => (
          <FeatureCard
            key={index}
            imageSrc={feature.imageSrc}
            title={feature.title}
            description={feature.description}
          />
        ))}
      </div>
    </div>
  );
};
