import * as React from "react";
import { ProcessTabProps } from "../types";

export const ProcessTab: React.FC<ProcessTabProps> = ({
  processData,
  setProcessData,
  label,
  isActive,
  index,
}) => {
  return (
    <div
      className={`gap-2 transition-all duration-500 ease-in-out self-stretch px-4 py-2 my-auto rounded-[100px] hover:bg-cyan-950 hover:text-white ${
        isActive ? "text-white bg-cyan-950" : ""
      } cursor-pointer`}
      onClick={() => {
        const details = JSON.parse(JSON.stringify(processData));
        const foundIndex = details?.tabs?.findIndex(
          (obj: any) => obj.isActive === true
        );
        details.tabs[foundIndex].isActive = false;
        details.steps[foundIndex].isActive = false;
        details.tabs[index].isActive = true;
        details.steps[index].isActive = true;
        setProcessData(details);
      }}
    >
      {label}
    </div>
  );
};
