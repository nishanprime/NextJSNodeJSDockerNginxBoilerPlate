import * as React from "react";
import { StatCardProps } from "../types";
import { ArrowTopRightIcon, ArrowBottomLeftIcon } from "@radix-ui/react-icons";

export const StatCard: React.FC<StatCardProps> = ({ value, label, trend }) => {
  return (
    <div className="flex flex-col items-center text-center">
      <div className="flex gap-5 items-center whitespace-nowrap">
        <div className="self-stretch my-auto text-5xl font-semibold text-zinc-900 max-md:text-4xl">
          {value}
        </div>
        {trend && (
          <div
            className={`flex gap-2 items-center self-stretch my-auto text-xl ${
              trend.direction === "up" ? "text-emerald-500" : "text-red-700"
            }`}
          >
            {value === "80%" ? (
              <div className="flex justify-center items-center bg-[#01DC821A] h-[30px] w-[30px] rounded-full">
                {" "}
                <ArrowTopRightIcon />
              </div>
            ) : (
              <div className="flex justify-center items-center bg-[#DC01011A] h-[30px] w-[30px] rounded-full">
                <ArrowBottomLeftIcon />
              </div>
            )}
            <div className="self-stretch my-auto w-9">{trend.value}</div>
          </div>
        )}
      </div>
      <div className="mt-4 text-base text-neutral-500">{label}</div>
    </div>
  );
};
