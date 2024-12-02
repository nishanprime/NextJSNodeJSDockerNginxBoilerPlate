import React from "react";
import { FAQSection } from "./FAQSection";
import { CTAButton } from "./CTAButton";
import { UserAvatar } from "./UserAvatar";
import { faqItems } from "../data";

export const FAQPage: React.FC = () => {
  return (
    <div className="mt-8 px-14 flex flex-col justify-center items-center pt-12 pb-8 w-full bg-white max-md:max-w-full">
      <div className="max-w-full rounded-[42px]">
        <div className="flex max-md:flex-col">
          <div className="flex flex-col w-[57%] max-md:ml-0 max-md:w-full">
            <div className="flex overflow-hidden flex-col grow pt-28 pr-5 pb-14 pl-16 w-full border border-solid bg-neutral-100 border-neutral-200 rounded-[42px] max-md:pt-24 max-md:pl-5 max-md:max-w-full">
              <div className="flex flex-col justify-center max-md:max-w-full">
                <h1 className="text-5xl font-medium tracking-tighter leading-[53px] text-teal-950 w-3/4 max-md:text-4xl max-md:leading-[49px]">
                  Questions About our JumboTax?
                </h1>
                <FAQSection items={faqItems} />
              </div>
              <div className="self-end mt-10 text-2xl tracking-tighter leading-6 text-right text-teal-950 max-md:max-w-full">
                We've got answers. If you have some other questions, feel free
                to
                <a
                  href="https://jumbotaxes.com/contact"
                  className="underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  contact us.
                </a>
                <br />
              </div>
            </div>
          </div>

          <div className="flex flex-col w-[43%] max-md:ml-0 max-md:w-full">
            <div className="flex flex-col justify-end overflow-hidden flex-col py-16 pl-14 mx-auto w-full bg-white border border-solid border-neutral-200 rounded-[42px] h-full">
              <div className="self-start max-md:max-w-full ">
                <div className="flex gap-5 max-md:flex-col">
                  <div className="flex flex-col w-[64%] max-md:ml-0 max-md:w-full">
                    <div className="flex z-10 flex-col items-start mr-0 font-medium max-md:max-w-full">
                      <h2 className="self-stretch text-6xl text-black leading-[64px] max-md:max-w-full max-md:text-4xl max-md:leading-10">
                        Evaluate Your Potential Savings
                      </h2>
                      <div className="mt-5 text-sm leading-5 text-neutral-400 w-[257px]">
                        No upfront costs
                        <br />
                        No Credit Card Required
                        <br />
                        Quick signup: Less than 30 minute
                        <br />
                        Pay 25% of what you save. No hidden costs
                      </div>
                      <button className="flex gap-2 justify-center items-center py-2.5 px-5 mt-9 w-[241px] text-base tracking-tight text-white border border-black border-solid rounded-[99px] bg-black">
                        Join now
                        <img
                          loading="lazy"
                          src="https://cdn.builder.io/api/v1/image/assets/TEMP/4f315f73ac39f77eb1fadad4f1d9e2c4ba4101d6239119420970b50ac55c9321?placeholderIfAbsent=true&apiKey=02c83d3fb4d44be9b48bf609449d3150"
                          alt=""
                          className="w-5 aspect-square"
                        />
                      </button>
                    </div>
                  </div>
                  <div className="flex flex-col ml-5 w-[36%] max-md:ml-0 max-md:w-full">
                    <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/02bab8f98f0b3b7ab1989b2a706d820f136654abce8bd9392a4bbda6eeb7da80?placeholderIfAbsent=true&apiKey=02c83d3fb4d44be9b48bf609449d3150"
                      alt="Savings illustration"
                      className="object-contain grow mt-10 w-full aspect-[0.49]"
                    />
                  </div>
                </div>
              </div>

              <div className="flex justify-between items-end mt-14 max-md:mt-10 max-md:mr-1.5">
                <div className="flex overflow-hidden flex-col items-start py-5 pr-20 pl-5 bg-white rounded-3xl border border-solid border-neutral-200 border-opacity-90 min-w-[240px] shadow-[0px_1px_2px_rgba(0,0,0,0.05)] w-[513px] max-md:pr-5 max-md:max-w-full">
                  <div className="text-sm tracking-tight text-black">
                    Join +1 million users around the world
                  </div>
                  <div className="flex gap-0 items-center mt-2.5">
                    {[...Array(8)].map((_, index) => (
                      <UserAvatar key={index} item={index} />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full mb-8">
        <div className="flex overflow-hidden flex-col pr-11 mt-14 max-w-full bg-neutral-900 rounded-[40px] w-full max-md:mt-10">
          <div className="py-8 flex flex-col mt-0 ml-11 max-md:mt-0 max-md:max-w-full">
            <div className="py-8 flex flex-col w-full text-6xl font-medium tracking-tighter leading-10 text-center text-white min-h-[182px] max-md:max-w-full max-md:text-4xl max-md:leading-7">
              <div className="gap-5 w-full min-h-[182px] max-md:max-w-full max-md:text-4xl max-md:leading-7">
                <span className="text-6xl">95%</span>
                <br />
                <span className="text-2xl tracking-normal">
                  of our appeals are successful.
                </span>
              </div>
            </div>
            <CTAButton label="Get Started - It's Free" />
          </div>
        </div>
      </div>
    </div>
  );
};
