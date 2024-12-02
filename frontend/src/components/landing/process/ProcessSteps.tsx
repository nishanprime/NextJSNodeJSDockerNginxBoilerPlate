import * as React from "react";
import { ProcessTab } from "./ProcessTab";
import { ProcessStep } from "./ProcessStep";

export const ProcessSteps: React.FC = () => {
  const [processData, setProcessData] = React.useState({
    tabs: [
      { label: "Property Search", isActive: true },
      { label: "Data Gathering" },
      { label: "AI Analysis" },
      { label: "Appeal Process" },
      { label: "Tax Savings" },
    ],
    steps: [
      {
        stepNumber: "STEP 1",
        title: "Provide Your Property Address and Details",
        shortDesc:
          "To kickstart the process, simply provide us with your property address....",
        description:
          "To kickstart the process, simply provide us with your property address. Our advanced system will swiftly retrieve all the relevant details related to your property. This initial step ensures we have the necessary information to proceed effectively, showing you your estimated tax savings right away.",
        isActive: true,
      },
      {
        stepNumber: "STEP 2",
        title: "Provide Your Property Address and Details",
        shortDesc:
          "To kickstart the process, simply provide us with your property address....",
        description:
          "To kickstart the process, simply provide us with your property address. Our advanced system will swiftly retrieve all the relevant details related to your property. This initial step ensures we have the necessary information to proceed effectively, showing you your estimated tax savings right away.",
      },
      {
        stepNumber: "STEP 3",
        title: "Provide Your Property Address and Details",
        shortDesc:
          "To kickstart the process, simply provide us with your property address....",
        description:
          "To kickstart the process, simply provide us with your property address. Our advanced system will swiftly retrieve all the relevant details related to your property. This initial step ensures we have the necessary information to proceed effectively, showing you your estimated tax savings right away.",
      },
      {
        stepNumber: "STEP 4",
        title: "Provide Your Property Address and Details",
        shortDesc:
          "To kickstart the process, simply provide us with your property address....",
        description:
          "To kickstart the process, simply provide us with your property address. Our advanced system will swiftly retrieve all the relevant details related to your property. This initial step ensures we have the necessary information to proceed effectively, showing you your estimated tax savings right away.",
      },
      {
        stepNumber: "STEP 5",
        title: "Provide Your Property Address and Details",
        shortDesc:
          "To kickstart the process, simply provide us with your property address....",
        description:
          "To kickstart the process, simply provide us with your property address. Our advanced system will swiftly retrieve all the relevant details related to your property. This initial step ensures we have the necessary information to proceed effectively, showing you your estimated tax savings right away.",
      },
    ],
  });

  return (
    <div>
      <div className="mt-8 flex flex-col justify-center items-center py-8 w-full bg-white max-md:px-5 max-md:max-w-full">
        <div className="flex flex-col w-full font-medium text-center lg:max-w-[1328px] max-md:max-w-full">
          <div className="flex flex-col w-full text-5xl tracking-tighter leading-none text-black capitalize max-md:max-w-full max-md:text-4xl">
            <div className="w-full max-md:max-w-full max-md:text-4xl">
              How our process works
            </div>
          </div>
          <div className="hidden lg:flex xl:flex 2xl:flex flex-wrap gap-8 justify-center items-center self-center px-3 py-1.5 mt-8 text-base tracking-tight text-black bg-cyan-800 bg-opacity-10 rounded-[100px] max-md:max-w-full">
            {processData &&
              processData?.tabs.map((tab, index) => (
                <ProcessTab
                  key={index}
                  {...tab}
                  processData={processData}
                  setProcessData={setProcessData}
                  index={index}
                />
              ))}
          </div>
          <div className="block lg:hidden xl:hidden flex flex-wrap gap-1 justify-center items-center self-center  py-1.5 mt-8 text-base tracking-tight text-black bg-cyan-800 bg-opacity-10 rounded-[100px] max-md:max-w-full">
            {processData &&
              processData?.tabs.map((tab, index) => (
                <ProcessTab
                  key={index}
                  {...tab}
                  processData={processData}
                  setProcessData={setProcessData}
                  index={index}
                />
              ))}
          </div>
        </div>
      </div>
      <div>
        <div className="pt-8 flex transition-all duration-500 ease-in-out flex-wrap gap-3 items-center max-w-full max-md:mt-10 ml-14 pb-8">
          {processData &&
            processData?.steps.map((step, index) => (
              <ProcessStep key={index} {...step} />
            ))}
        </div>
      </div>
    </div>
  );
};
