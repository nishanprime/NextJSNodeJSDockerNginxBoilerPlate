import * as React from "react";
import { TestimonialCard } from "./TestimonialCard";
import { testimonials } from "../data";

export const TestimonialSection: React.FC = () => {
  return (
    <div className="flex overflow-hidden flex-col justify-center px-14 py-20 w-full bg-teal-950 max-md:pl-5 max-md:max-w-full">
      <div className="flex flex-col w-full max-md:max-w-full">
        <div className="flex flex-row flex-wrap gap-10 items-center max-w-full text-white">
          <div className="w-1/3 self-stretch my-auto text-5xl font-medium tracking-tighter leading-[53px] max-md:max-w-full max-md:text-4xl max-md:leading-[49px]">
            Read what our valuable customers say
          </div>
          <div class="w-1/3"></div>
          <div className="w-1/3  flex-1 shrink self-stretch my-auto text-2xl tracking-tighter leading-7 basis-0">
            "Using JumboTax saved me thousands in property taxes"
          </div>
        </div>
        <div className="flex gap-8 items-start mt-8 w-full max-md:max-w-full overflow-x-auto hide-scrollbar">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard
              key={`${testimonial.author}-${index}`}
              {...testimonial}
            />
          ))}
        </div>
        <div className="flex flex-col mt-8 w-full max-md:max-w-full">
          <div className="flex flex-col items-start bg-white bg-opacity-60 max-md:pr-5 max-md:max-w-full">
            <div className="flex shrink-0 max-w-full h-0.5 bg-white w-[373px]" />
          </div>
        </div>
      </div>
    </div>
  );
};
