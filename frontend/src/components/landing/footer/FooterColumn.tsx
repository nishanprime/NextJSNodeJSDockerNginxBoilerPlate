import * as React from "react";
import { FooterColumnProps } from "../types";

export const FooterColumn: React.FC<FooterColumnProps> = ({ title, links }) => (
  <div className="flex flex-col justify-center">
    <div className="text-2xl font-semibold text-white">{title}</div>
    <div className="flex flex-col mt-6 text-lg text-neutral-50">
      {links.map((link, index) => (
        <div key={index} className={index > 0 ? "mt-4" : ""}>
          {link}
        </div>
      ))}
    </div>
  </div>
);
