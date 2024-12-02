import * as React from "react";
import { ButtonProps } from "../types";

export const CTAButton: React.FC<ButtonProps> = ({ text, icon, onClick }) => {
  return (
    <button
      onClick={onClick}
      className="flex gap-2.5 justify-center items-center self-stretch px-5 py-4 my-auto shadow-2xl bg-zinc-50 rounded-[1000px]"
    >
      <span className="self-stretch my-auto w-[120px] font-outfit font-normal text-[20px] leading-[25.2px] text-center">
        {text}
      </span>
      {icon && (
        <img
          loading="lazy"
          src={icon}
          alt=""
          className="object-contain shrink-0 self-stretch my-auto w-8 aspect-square"
        />
      )}
    </button>
  );
};
