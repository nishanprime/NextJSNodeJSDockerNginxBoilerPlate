import * as React from "react";
import { TestimonialCardProps } from "../types";

export const TestimonialCard: React.FC<TestimonialCardProps> = ({
  content,
  author,
  role,
  imageUrl,
  className = "",
}) => {
  return (
    <div
      className={`flex overflow-hidden flex-col justify-center p-10 w-96 bg-teal-50 rounded-2xl shadow-xl min-h-[356px] min-w-[384px] text-zinc-900 max-md:px-5 ${className}`}
    >
      <div className="flex flex-col flex-1 w-full">
        <div className="flex-1 text-base font-medium tracking-normal leading-6">
          {content}
        </div>
        <div className="flex gap-6 items-center self-start mt-10">
          <img
            loading="lazy"
            src={imageUrl}
            alt={`Profile picture of ${author}`}
            className="object-contain shrink-0 self-stretch my-auto w-14 aspect-square rounded-[200px]"
          />
          <div className="flex flex-col self-stretch my-auto">
            <div className="text-xl font-medium tracking-normal leading-tight">
              {author}
            </div>
            <div className="mt-1 text-lg tracking-normal leading-none">
              {role}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
