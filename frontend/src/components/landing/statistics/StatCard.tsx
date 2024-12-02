import * as React from "react";

type StatCardProps = {
  value: string;
  label: string;
};

export const StatCard: React.FC<StatCardProps> = ({ value, label }) => {
  return (
    <div className="flex flex-col flex-1 shrink justify-center self-stretch px-8 py-14 my-auto bg-white rounded-3xl basis-0 min-h-[220px] min-w-[240px] max-md:px-5">
      <div className="text-6xl text-center font-semibold tracking-tighter max-md:text-4xl">
        {value}
      </div>
      <div className="mt-6 w-full text-center text-base font-medium tracking-tight">
        {label}
      </div>
    </div>
  );
};
