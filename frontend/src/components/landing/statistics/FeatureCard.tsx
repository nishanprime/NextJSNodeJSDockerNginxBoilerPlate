import * as React from "react";

type FeatureCardProps = {
  imageSrc: string;
  title: string;
  description: string;
};

export const FeatureCard: React.FC<FeatureCardProps> = ({
  imageSrc,
  title,
  description,
}) => {
  return (
    <div className="flex overflow-hidden flex-col flex-1 shrink self-stretch pt-6 my-auto bg-white rounded-3xl basis-0 min-w-[240px] max-md:max-w-full">
      <img
        loading="lazy"
        src={imageSrc}
        alt={title}
        className="object-contain max-w-full aspect-[1.42] lg:w-[400px]"
      />
      <div className="flex flex-col items-start px-4 py-5 bg-[#20abb6] bg-opacity-10 min-h-[170px] max-md:max-w-full">
        <div className="text-xl font-medium tracking-tight leading-none text-center w-full">
          {title}
        </div>
        <div className="mt-3 font-extralight text-sm leading-5 text-center w-full">
          {description}
        </div>
      </div>
    </div>
  );
};
