import React from "react";
import { UserAvatarProps } from "../types";

export const UserAvatar: React.FC<UserAvatarProps> = ({
  size = 39,
  item,
}: {
  size?: number;
  item?: string;
}) => {
  return (
    <div className="flex flex-col self-stretch my-auto w-[39px] ">
      <div
        className={`flex -ml-${
          Number(item) * 10
        } border-white border-solid bg-[#ccc] bg-opacity-50 h-[${size}px] rounded-full w-[${size}px]`}
      />
    </div>
  );
};
