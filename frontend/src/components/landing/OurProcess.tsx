"use client";

import { type MouseEventHandler, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { MoveRight } from "lucide-react";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import PropertyImage from "@/app/assets/images/property_image_preview.png";

const ourProcessTabs = [
  {
    title: "Property Search",
    children: "",
  },
  {
    title: "Data Gathering",
    children: "",
  },
  {
    title: "AI Analysis",
    children: "",
  },
  {
    title: "Appeal Process",
    children: "",
  },
  {
    title: "Tax Savings",
    children: "",
  },
];

const steps = [
  {
    id: 1,
    title: "PROVIDE YOUR PROPERTY ADDRESS AND DETAILS",
    description:
      "To kickstart the process, simply provide us with your property address. Our advanced system will swiftly retrieve all the relevant details related to your property. This initial step ensures we have the necessary information to proceed effectively, showing you your estimated tax savings right away.",
    image: PropertyImage,
  },
  {
    id: 2,
    title: "PROVIDE DOCUMENTATION",
    description:
      "To kickstart the process, simply provide us with your property details and we'll guide you through the next steps.",
    image: PropertyImage,
  },
  {
    id: 3,
    title: "PROVIDE VERIFICATION",
    description:
      "To kickstart the process, simply provide us with your property details and we'll guide you through the next steps.",
    image: PropertyImage,
  },
  {
    id: 4,
    title: "PROVIDE CONFIRMATION",
    description:
      "To kickstart the process, simply provide us with your property details and we'll guide you through the next steps.",
    image: PropertyImage,
  },
  {
    id: 5,
    title: "PROVIDE FINAL REVIEW",
    description:
      "To kickstart the process, simply provide us with your property details and we'll guide you through the next steps.",
    image: PropertyImage,
  },
];

const PropertySlider = () => {
  const propertySliderContainerRef = useRef<HTMLDivElement | null>(null);

  const handleMouseToggle: MouseEventHandler<HTMLDivElement> = (event) => {
    const activeElement = document?.querySelector("#property-card-0");

    if (!activeElement) return;

    if (event.type === "mouseover") {
      if (activeElement.classList.contains("is-active")) {
        activeElement.classList.remove("is-active");
      }
      return;
    }

    if (!activeElement.classList.contains("is-active")) {
      activeElement.classList.add("is-active");
    }
  };

  useEffect(() => {
    const activeElement = document?.querySelector("#property-card-0");
    if (activeElement) {
      activeElement.classList.add("is-active");
    }
  }, []);

  return (
    <div
      ref={propertySliderContainerRef}
      className="flex h-[600px] w-full mx-auto overflow-auto pb-4 sm:pb-0 sm:overflow-hidden rounded-2xl gap-3"
      onMouseOver={handleMouseToggle}
      onMouseLeave={handleMouseToggle}
    >
      {steps.map((step, index) => (
        <div
          key={step.id}
          id={`property-card-${index}`}
          className="group property-card relative w-[300px] sm:overflow-hidden cursor-pointer transition-[width] duration-500 ease-in-out rounded-3xl flex-1 sm:hover:flex-[3]"
        >
          <div className="absolute inset-0">
            <Image
              src={step.image}
              alt={`Step ${step.id}`}
              className="object-cover h-full w-full"
              priority={step.id === 1}
            />
            <div className="absolute inset-0 bg-black opacity-40 sm:opacity-70 sm:group-hover:opacity-40 transition-opacity duration-700 ease-in-out" />
          </div>

          <div className="relative h-full p-6 flex flex-col justify-end w-80 sm:w-[inherit]">
            <div className="flex flex-col items-start gap-2">
              <div
                className="text-white overflow-hidden transition-all duration-1000 ease-in-out
                group-hover:-translate-y-4 translate-y-0
                sm:group-hover:opacity-100 sm:opacity-50 w-5/6 pb-7 group-hover:pb-0"
              >
                <div className="text-sm font-medium mb-2 whitespace-nowrap px-3 py-1 bg-gradient-to-t from-[#393939] to-[#4e4e4e] rounded-[99px] inline-block">
                  STEP {step.id}
                </div>
                <h3
                  className="font-bold mb-2 transition-all duration-1000 line-clamp-1 group-hover:line-clamp-none
                  text-2xl"
                >
                  {step.title}
                </h3>
                <div
                  className="overflow-hidden transition-all duration-300 ease-in-out
                  group-hover:max-h-max max-h-16"
                >
                  <p className="text-sm text-gray-200">{step.description}</p>
                </div>
              </div>
              <Link
                href="#"
                className="self-end absolute bottom-4 right-4 transition-all duration-500 ease-in-out bg-white h-14 w-14 rounded-full flex items-center
                group-hover:opacity-100 group-hover:translate-x-0 opacity-0 -translate-x-4"
              >
                <MoveRight className="h-6 w-6 mx-auto" />
              </Link>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

const OurProcess = () => {
  return (
    <section className="container mx-auto py-8 space-y-8 px-4 sm:px-[inherit]">
      <h2 className="capitalize text-4xl md:text-5xl font-medium leading-[52.80px] text-center">
        How our process works
      </h2>

      <Tabs defaultValue="Property Search" className="mx-auto flex flex-col">
        <TabsList className="md:self-center custom-scrollbar flex h-auto py-1.5 px-3 items-center gap-8 bg-[#0367750F] rounded-[100px] mb-12 overflow-auto">
          {ourProcessTabs.map((item) => (
            <TabsTrigger
              key={item.title}
              value={item.title}
              className="text-base px-2 md:px-4 py-2 rounded-[100px] text-black data-[state=active]:text-white data-[state=active]:bg-[#01414A] transition-colors duration-100 hover:bg-white"
            >
              {item.title}
            </TabsTrigger>
          ))}
        </TabsList>
        <TabsContent value="Property Search">
          <PropertySlider />
        </TabsContent>
      </Tabs>
    </section>
  );
};

export default OurProcess;
