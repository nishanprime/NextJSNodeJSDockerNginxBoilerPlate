import * as React from "react";
import { NewsletterFormData } from "../types";

export const NewsletterForm: React.FC = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  };

  return (
    <div>
      <form
        onSubmit={handleSubmit}
        className="hidden lg:flex flex-col w-full max-md:max-w-full"
      >
        <div className="flex gap-3 items-center p-3.5 w-full bg-white rounded-xl border border-gray-100 border-solid lg:max-w-[436px] max-md:max-w-full">
          <div className="flex gap-1.5 justify-center items-center self-stretch px-2.5 my-auto w-11 h-11 rounded-lg bg-neutral-100">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/4b3e86d08c0e6561193a6d5f4a8d28ea63b4a9e81b6d22eb0a7fb69a8d08bebc?placeholderIfAbsent=true&apiKey=02c83d3fb4d44be9b48bf609449d3150"
              alt=""
              className="object-contain self-stretch my-auto w-6 aspect-square"
            />
          </div>
          <label htmlFor="email" className="sr-only">
            Enter your email
          </label>
          <input
            type="email"
            id="email"
            className="flex-1 shrink self-stretch my-auto text-base tracking-tighter basis-[43px] text-zinc-400 bg-transparent border-none outline-none"
            placeholder="Enter your email"
            required
          />
          <button
            type="submit"
            className="gap-2 self-stretch py-3.5 pr-5 pl-6 my-auto text-sm font-semibold tracking-tight leading-none text-white whitespace-nowrap bg-black lg:bg-gray-100  rounded-lg shadow-[0px_29px_48px_rgba(205,254,125,0.08)] w-[108px] max-md:px-5  hover:bg-black transition-all duration-500 ease-in-out"
          >
            Subscribe
          </button>
        </div>
      </form>
      <form
        onSubmit={handleSubmit}
        className="block lg:hidden flex-col w-full max-md:max-w-full"
      >
        <div className="flex flex-col gap-3 items-center p-3.5 w-full bg-white rounded-xl border border-gray-100 border-solid lg:max-w-[436px] max-md:max-w-full">
          <div className="flex gap-2 -ml-6">
            <div className="flex justify-center items-center self-stretch my-auto w-11 h-11 rounded-lg bg-neutral-100">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/4b3e86d08c0e6561193a6d5f4a8d28ea63b4a9e81b6d22eb0a7fb69a8d08bebc?placeholderIfAbsent=true&apiKey=02c83d3fb4d44be9b48bf609449d3150"
                alt=""
                className="object-contain self-stretch my-auto w-6 aspect-square"
              />
            </div>
            <label htmlFor="email" className="sr-only">
              Enter your email
            </label>
            <input
              type="email"
              id="email"
              className="flex-1 shrink self-stretch my-auto text-base tracking-tighter basis-[43px] text-zinc-400 bg-transparent border-none outline-none"
              placeholder="Enter your email"
              required
            />
          </div>
          <button
            type="submit"
            className="gap-2 self-stretch py-3.5 pr-5 pl-6 my-auto text-sm font-semibold tracking-tight leading-none text-white whitespace-nowrap bg-black lg:bg-gray-100  rounded-lg shadow-[0px_29px_48px_rgba(205,254,125,0.08)] w-[108px] max-md:px-5  hover:bg-black transition-all duration-500 ease-in-out"
          >
            Subscribe
          </button>
        </div>
      </form>
    </div>
  );
};
