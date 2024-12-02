import React from "react";
import { CTAButtonProps } from "../types";

export const CTAButton: React.FC<CTAButtonProps> = ({ label, onClick }) => {
  return (
    <button
      onClick={onClick}
      className="gap-2 self-center px-6 py-3.5 text-base font-semibold tracking-tighter bg-gray-100 rounded-xl shadow-[0px_29px_48px_rgba(205,254,125,0.08)] text-neutral-900"
    >
      {label}
    </button>
  );
};
