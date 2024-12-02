import * as React from "react";
import { HeroContentProps } from "../types";
import { CTAButton } from "./CTAButton";

export const HeroContent: React.FC<HeroContentProps> = ({
  title,
  description,
  cta,
}) => {
  return (
    <div>
      <div className="hidden lg:flex relative flex-col items-start -mb-12 max-w-full h-[295px] lg:w-[671px] max-md:mb-2.5">
        <div className="flex flex-col w-full text-white">
          <div className="py-5 w-full text-7xl rounded-none max-md:pr-5 max-md:max-w-full max-md:text-4xl">
            {title}
          </div>
          <div className="mt-5 text-base max-md:max-w-full">{description}</div>
        </div>
        <div className="flex gap-4 items-center mt-8 text-xl text-center text-cyan-950">
          <CTAButton {...cta} />
        </div>
      </div>
      <div className="lg:hidden flex relative flex-col items-start -mb-12 max-w-full h-[295px] max-md:mb-2.5 pb-12">
        <div className="flex flex-row w-full px-2">
          <div className="w-1/3">
            <div className="text-3xl">{title}</div>
          </div>
          <div className="w-1/3"></div>
          <div className="flex-col -mt-[70px] justify-end align-end h-full w-1/2 mt-5 px-8 text-base ">
            <div>{description}</div>
            <div className="items-center text-xl text-center text-cyan-950">
              <CTAButton {...cta} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
