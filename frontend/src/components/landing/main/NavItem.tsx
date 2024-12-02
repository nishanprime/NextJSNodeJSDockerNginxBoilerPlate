import * as React from "react";
import { NavItemProps } from "../types";

export const NavItem: React.FC<NavItemProps> = ({ label, isActive }) => {
  return (
    <div
      className={`gap-2 self-stretch px-4 py-2 my-auto ${
        isActive ? "text-white bg-cyan-950" : ""
      } rounded-[100px]`}
    >
      {label}
    </div>
  );
};
