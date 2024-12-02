import * as React from "react";
import { ImpactHeaderProps } from "../types";

export const ImpactHeader: React.FC<ImpactHeaderProps> = ({
  title,
  subtitle,
  description,
}) => {
  return (
    <div className="flex flex-col w-full max-md:max-w-full">
      <div className="gap-2.5 self-center px-6 py-3 text-base font-bold tracking-widest leading-none uppercase rounded-[99px] text-cyan-950 max-md:px-5">
        {title}
      </div>
      <div className="flex flex-col mt-8 w-full max-md:max-w-full">
        <div className="text-5xl self-center font-medium tracking-tighter leading-none text-black capitalize max-md:max-w-full max-md:text-4xl">
          {subtitle}
        </div>
        <div className="self-center text-center mt-6 text-base leading-5 text-black  ">
          {description}
        </div>
      </div>
    </div>
  );
};
