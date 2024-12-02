import React from "react";
import { FAQItem } from "../types";

interface FAQSectionProps {
  items: FAQItem[];
}

export const FAQSection: React.FC<FAQSectionProps> = ({ items }) => {
  return (
    <div className="flex flex-col mt-16 w-full text-black max-md:mt-10 max-md:max-w-full">
      {items.map((item, index) => (
        <div
          key={index}
          className={`flex flex-wrap gap-6 items-start py-5 w-full ${
            index !== 0
              ? "border-t border-b border-black border-opacity-10"
              : ""
          } max-md:max-w-full`}
        >
          <div className="flex flex-col flex-1 shrink justify-center basis-0 min-w-[240px] max-md:max-w-full">
            <div className="text-xl font-medium tracking-tight max-md:max-w-full">
              {item.question}
            </div>
            {item.answer && (
              <div className="mt-6 text-base tracking-tight max-md:max-w-full">
                {item.answer}
              </div>
            )}
          </div>
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/8984a04835394518409ed439f4979591b3057eb9cd9176790029fa6f66da5875?placeholderIfAbsent=true&apiKey=02c83d3fb4d44be9b48bf609449d3150"
            alt=""
            className="object-contain shrink-0 w-6 aspect-square"
          />
        </div>
      ))}
    </div>
  );
};
