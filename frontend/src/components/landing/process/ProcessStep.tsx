import * as React from "react";
import { StepProps } from "../types";
import { ArrowRightIcon } from "@radix-ui/react-icons";

export const ProcessStep: React.FC<StepProps> = ({
  stepNumber,
  title,
  shortDesc,
  description,
  isActive,
}) => {
  return (
    <div
      className={`flex flex-col text-white transition-width duration-500 ease-in-out 
        bg-[url('https://s3-alpha-sig.figma.com/img/4764/a3ed/91379249f471b35dbb77ff1df75b6864?Expires=1734307200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=n2pG8TcudzUFxWZ0wu7Mm6VlBr1zEshwNfL3~3lABS1h6BGxtaii~eJ~DV7qnpqxiviWgXsqslHBDuS1hclIX2g120s3QndrHNEwDju9wVQq5eAa9eWPXAY~MfYcfzBfMCXvEHcHVk-LNhF2tOr1oMdOWUq59k0rCSMMgAYmu0~kbQRkiRj1O85Hgqg46m3tln-s0erUhuCFdC8e3910AE0pgwUVTeoGkXYgOK2Ktj1CaKYD1P9foCsGCCu1cpOeq-7Gmoa3SdQO4k6AqF4xSLO-21Auz3V4B8qpuUnnPm4ZzBz9~thJyHzAvFKVy7R~m1Msb70ZB319YKd7xZmC2w__')]
        bg-cover bg-center 
        ${isActive ? "w-1/3" : "max-w-[230px]"} rounded-3xl min-h-[640px]
        ${isActive ? "w-full lg:w-1/3" : "hidden lg:block xl:block 2xl:block"}
        `}
    >
      <div
        className={`px-6 pt-96 pb-8 max-md:px-5 max-md:pt-24 rounded-3xl ${
          isActive ? "" : "bg-black bg-opacity-50"
        } h-[640px]`}
      >
        <div>
          <div className="gap-2.5 self-start px-3 py-1 text-sm leading-tight bg-[linear-gradient(0deg,rgba(57,57,57,0.50_0.07%,rgba(79,79,79,0.50)_69.79%))] rounded-[99px]">
            {stepNumber}
          </div>

          {isActive ? (
            <div className="flex flex-col mt-6 w-full min-h-[114px] transition-all duration-500 ease-in-out">
              <div className="flex flex-row items-end">
                <div className="flex flex-col flex-1 w-full">
                  <div className="text-2xl font-semibold leading-tight uppercase">
                    {title}
                  </div>
                  <div className="mt-1 text-sm leading-5 ">{description}</div>
                </div>
                <div className="bg-[#fff] h-[60px] w-[60px] color-[#000] rounded-full flex items-center justify-center">
                  <ArrowRightIcon className="text-black h-[24px] w-[24px]" />
                </div>
              </div>
            </div>
          ) : (
            <div className="flex flex-col mt-6 w-full min-h-[114px] transition-all duration-500 ease-in-out">
              <div className="flex flex-col flex-1 w-full">
                <div className="text-2xl font-semibold leading-tight uppercase truncate">
                  {title}
                </div>
                <div className="mt-1 text-sm leading-5">{shortDesc}</div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
