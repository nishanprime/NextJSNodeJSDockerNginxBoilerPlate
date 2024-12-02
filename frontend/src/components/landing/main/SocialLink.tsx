import * as React from "react";
import { SocialLinkProps } from "../types";

export const SocialLink: React.FC<SocialLinkProps> = ({ platform }) => {
  return (
    <div className="gap-2.5 px-4 py-2.5 border border-white border-solid rounded-[100px]">
      {platform}
    </div>
  );
};
