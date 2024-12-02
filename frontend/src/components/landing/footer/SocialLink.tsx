import * as React from "react";
import { SocialLinkProps } from "../types";

export const SocialLink: React.FC<SocialLinkProps> = ({ name }) => (
  <div
    className="gap-2.5 px-4 py-2.5 border border-white border-solid rounded-[100px]"
    role="button"
    tabIndex={0}
  >
    {name}
  </div>
);
