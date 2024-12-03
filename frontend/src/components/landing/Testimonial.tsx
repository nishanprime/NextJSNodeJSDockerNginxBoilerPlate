"use client";

import { useRef, useState } from "react";
import Image from "next/image";

import TestimonialImage1 from "@/app/assets/images/testimonial_image1.png";
import TestimonialImage2 from "@/app/assets/images/testimonial_image2.png";
import TestimonialImage3 from "@/app/assets/images/testimonial_image3.png";
import TestimonialImage4 from "@/app/assets/images/testimonial_image4.png";

const testimonials = [
  {
    id: 1,
    content:
      "Before discovering JumboTax, navigating property taxes felt like a relentless uphill battle. Thanks to their advanced AI-driven approach, I saved significantly on my commercial properties. Their transparent and efficient system is an absolute game-changer for business owners like me.",
    author: "Jenny Wilson",
    role: "Solar energy service",
    image: TestimonialImage1,
  },
  {
    id: 2,
    content:
      "Before discovering JumboTax, navigating property taxes felt like a relentless uphill battle. Thanks to their advanced AI-driven approach, I saved significantly on my commercial properties. Their transparent and efficient system is an absolute game-changer for business owners like me.",
    author: "Dianne Russell",
    role: "EV service",
    image: TestimonialImage2,
  },
  {
    id: 3,
    content:
      "Before discovering JumboTax, navigating property taxes felt like a relentless uphill battle. Thanks to their advanced AI-driven approach, I saved significantly on my commercial properties. Their transparent and efficient system is an absolute game-changer for business owners like me.",
    author: "Cody Fisher",
    role: "Solar energy service",
    image: TestimonialImage3,
  },
  {
    id: 4,
    content:
      "Before discovering JumboTax, navigating property taxes felt like a relentless uphill battle. Thanks to their advanced AI-driven approach, I saved significantly on my commercial properties. Their transparent and efficient system is an absolute game-changer for business owners like me.",
    author: "Alex Johnson",
    role: "Real estate developer",
    image: TestimonialImage4,
  },
  {
    id: 5,
    content:
      "Before discovering JumboTax, navigating property taxes felt like a relentless uphill battle. Thanks to their advanced AI-driven approach, I saved significantly on my commercial properties. Their transparent and efficient system is an absolute game-changer for business owners like me.",
    author: "Sarah Lee",
    role: "Retail store owner",
    image: TestimonialImage1,
  },
  {
    id: 6,
    content:
      "Before discovering JumboTax, navigating property taxes felt like a relentless uphill battle. Thanks to their advanced AI-driven approach, I saved significantly on my commercial properties. Their transparent and efficient system is an absolute game-changer for business owners like me.",
    author: "Sarah Lee",
    role: "Retail store owner",
    image: TestimonialImage2,
  },
  {
    id: 7,
    content:
      "Before discovering JumboTax, navigating property taxes felt like a relentless uphill battle. Thanks to their advanced AI-driven approach, I saved significantly on my commercial properties. Their transparent and efficient system is an absolute game-changer for business owners like me.",
    author: "Sarah Lee",
    role: "Retail store owner",
    image: TestimonialImage3,
  },
  {
    id: 8,
    content:
      "Before discovering JumboTax, navigating property taxes felt like a relentless uphill battle. Thanks to their advanced AI-driven approach, I saved significantly on my commercial properties. Their transparent and efficient system is an absolute game-changer for business owners like me.",
    author: "Sarah Lee",
    role: "Retail store owner",
    image: TestimonialImage4,
  },
  {
    id: 9,
    content:
      "Before discovering JumboTax, navigating property taxes felt like a relentless uphill battle. Thanks to their advanced AI-driven approach, I saved significantly on my commercial properties. Their transparent and efficient system is an absolute game-changer for business owners like me.",
    author: "Sarah Lee",
    role: "Retail store owner",
    image: TestimonialImage1,
  },
];

const TestimonialSection = () => {
  const [mouseDown, setMouseDown] = useState<boolean>(false);
  const [startX, setStartX] = useState<number>(0);
  const [scrollLeft, setScrollLeft] = useState<number>(0);

  const sliderRef = useRef<HTMLDivElement | null>(null);

  const startDragging = (e: React.MouseEvent<HTMLDivElement>) => {
    if (sliderRef.current) {
      setMouseDown(true);
      setStartX(e.pageX - sliderRef.current.offsetLeft);
      setScrollLeft(sliderRef.current.scrollLeft);
      sliderRef.current.style.cursor = "grabbing";
      sliderRef.current.style.userSelect = "none";
    }
  };

  const stopDragging = () => {
    if (sliderRef.current) {
      setMouseDown(false);
      sliderRef.current.style.cursor = "auto";
      sliderRef.current.style.userSelect = "auto";
    }
  };

  const onMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!mouseDown || !sliderRef.current) return;
    e.preventDefault();

    const x = e.pageX - sliderRef.current.offsetLeft;
    const scroll = x - startX;
    const newScrollLeft = scrollLeft - scroll;

    requestAnimationFrame(() => {
      sliderRef.current!.scrollLeft = newScrollLeft;
    });
  };

  return (
    <section className="pt-[60px] pb-[86px] bg-[#022c2b] text-white px-4 sm:px-[inherit]">
      <div className="container mx-auto">
        <div className="flex justify-between mb-8 flex-col md:flex-row">
          <h2 className="capitalize text-4xl md:text-5xl font-medium leading-[52.80px] text-center md:text-left md:w-1/2 mb-4 md:mb-[inherit]">
            Read what our valuable customers say
          </h2>
          <p className="md:w-1/2 flex md:justify-end md:self-center text-xl md:text-2xl text-center md:text-left">
            “Using JumboTax saved me thousands in property taxes”
          </p>
        </div>
        <div className="overflow-hidden md:-mr-10">
          <div
            ref={sliderRef}
            onMouseDown={startDragging}
            onMouseUp={stopDragging}
            onMouseLeave={stopDragging}
            onMouseMove={onMouseMove}
            className="flex overflow-auto pb-6 custom-scrollbar testimonial-custom-scroll"
          >
            {testimonials.map((testimonial) => (
              <div
                key={testimonial.id}
                className={
                  "flex-shrink-0 w-[350px] bg-white rounded-lg shadow-lg p-6 mr-6 transition-opacity duration-300"
                }
              >
                <p className="text-gray-800 mb-4">{testimonial.content}</p>
                <div className="flex items-center">
                  <Image
                    src={testimonial.image}
                    alt={testimonial.author}
                    className="w-10 h-10 rounded-full mr-4"
                  />
                  <div>
                    <h3 className="font-semibold text-gray-800">
                      {testimonial.author}
                    </h3>
                    <p className="text-sm text-gray-600">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
