import * as React from "react";
import { FooterColumn } from "./FooterColumn";
import { SocialLink } from "./SocialLink";
import { NewsletterForm } from "./NewsletterForm";

export const Footer: React.FC = () => {
  const footerColumns = [
    {
      title: "Company",
      links: ["About", "Pricing", "Demo"],
    },
    {
      title: "Pricing",
      links: ["Blog", "Events", "Tool Library"],
    },
    {
      title: "Contact Us",
      links: ["Terms of Use", "Privacy Policy"],
    },
  ];

  const socialLinks = ["Instagram", "LinkedIn", "Twitter", "Github"];

  return (
    <div className="bg-cover bg-[url('https://s3-alpha-sig.figma.com/img/4764/a3ed/91379249f471b35dbb77ff1df75b6864?Expires=1734307200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=n2pG8TcudzUFxWZ0wu7Mm6VlBr1zEshwNfL3~3lABS1h6BGxtaii~eJ~DV7qnpqxiviWgXsqslHBDuS1hclIX2g120s3QndrHNEwDju9wVQq5eAa9eWPXAY~MfYcfzBfMCXvEHcHVk-LNhF2tOr1oMdOWUq59k0rCSMMgAYmu0~kbQRkiRj1O85Hgqg46m3tln-s0erUhuCFdC8e3910AE0pgwUVTeoGkXYgOK2Ktj1CaKYD1P9foCsGCCu1cpOeq-7Gmoa3SdQO4k6AqF4xSLO-21Auz3V4B8qpuUnnPm4ZzBz9~thJyHzAvFKVy7R~m1Msb70ZB319YKd7xZmC2w__')]">
      <div className={`px-14 py-14 h-full w-full bg-black bg-opacity-50 `}>
        <div className="flex flex-col px-12 pt-20 pb-14 bg-cyan-950 min-w-[240px] rounded-[40px] w-full max-md:px-5 max-md:max-w-full">
          <div className="flex items-start w-full max-md:max-w-full">
            <div className="hidden lg:flex w-1/2 flex-wrap gap-20 items-start px-6 py-6 min-w-[240px] max-md:px-5 max-md:max-w-full">
              {footerColumns.map((column, index) => (
                <FooterColumn key={index} {...column} />
              ))}
            </div>
            <div className="hidden lg:flex w-1/2 ml-40 flex-col min-w-[240px] max-md:max-w-full">
              <div className="gap-4 self-stretch text-7xl font-semibold text-white whitespace-nowrap max-md:max-w-full max-md:text-4xl">
                HonestValue
              </div>
              <div className="flex flex-col mt-2 max-w-full lg:w-[436px]">
                <div className="flex flex-col w-full text-base max-md:max-w-full">
                  <div className="flex-1 shrink gap-2 self-stretch w-full font-semibold tracking-tighter text-white whitespace-nowrap max-md:max-w-full ">
                    Subscribe
                  </div>
                  <div className="mt-2 tracking-tighter text-gray-400 max-md:max-w-full">
                    Join our newsletter to stay up to date on features and
                    releases.
                  </div>
                </div>
                <div className="flex flex-col mt-6 w-full max-md:max-w-full">
                  <NewsletterForm />
                  <div className="mt-4 text-xs tracking-tight text-gray-400 max-md:max-w-full">
                    <span>By subscribing you agree to with our </span>
                    <span className="text-white underline">Privacy Policy</span>
                  </div>
                </div>
              </div>
            </div>
            {/*  */}
            <div className="flex flex-col lg:hidden xl:hidden 2xl:hidden">
              <div className="flex w-1/2 flex-wrap gap-20 items-start py-6  max-md:max-w-full">
                {footerColumns.map((column, index) => (
                  <FooterColumn key={index} {...column} />
                ))}
              </div>
              <div className="flex  flex-col max-md:max-w-full">
                <div className="gap-4 self-stretch text-7xl font-semibold text-white whitespace-nowrap max-md:max-w-full max-md:text-4xl">
                  HonestValue
                </div>
                <div className="flex flex-col mt-2 max-w-full ">
                  <div className="flex flex-col w-full text-base max-md:max-w-full">
                    <div className="flex-1 shrink gap-2 self-stretch w-full font-semibold tracking-tighter text-white whitespace-nowrap max-md:max-w-full ">
                      Subscribe
                    </div>
                    <div className="mt-2 tracking-tighter text-gray-400 max-md:max-w-full">
                      Join our newsletter to stay up to date on features and
                      releases.
                    </div>
                  </div>
                  <div className="flex flex-col mt-6 w-full max-md:max-w-full">
                    <NewsletterForm />
                    <div className="mt-4 text-xs tracking-tight text-gray-400 max-md:max-w-full">
                      <span>By subscribing you agree to with our </span>
                      <span className="text-white underline">
                        Privacy Policy
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="hidden lg:flex flex-col pt-14 mt-20 w-full text-base text-white capitalize border-t border-solid border-t-zinc-600 max-md:mt-10 max-md:max-w-full">
            <div className="flex flex-wrap gap-4 items-center w-full max-md:max-w-full">
              <div className="flex gap-4 items-start self-stretch my-auto whitespace-nowrap min-w-[240px]">
                <div className="flex gap-4 items-start min-w-[240px]">
                  {socialLinks.map((link, index) => (
                    <SocialLink key={index} name={link} />
                  ))}
                </div>
              </div>
              <div className="flex flex-1 shrink justify-center items-center self-stretch px-4 py-2.5 my-auto border border-white border-solid basis-0 min-w-[240px] rounded-[100px] max-md:max-w-full">
                <div className="flex gap-2 justify-center items-center">
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/60b22027483b9ea7a8c3cacb07516143a8eaf3508a3e666718352e001d407a02?placeholderIfAbsent=true&apiKey=02c83d3fb4d44be9b48bf609449d3150"
                    alt=""
                    className="object-contain shrink-0 self-stretch my-auto w-6 aspect-square fill-white"
                  />
                  <div className="self-stretch text-center my-auto">
                    all Rights Reserved
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex lg:hidden flex-col pt-14 mt-20 w-full text-base text-white capitalize border-t border-solid border-t-zinc-600 max-md:mt-10 max-md:max-w-full">
            <div className="flex flex-wrap gap-4 items-center w-full max-md:max-w-full">
              <div className="flex gap-4 items-start self-stretch my-auto whitespace-nowrap min-w-[240px]">
                <div className="flex gap-1 items-start">
                  {socialLinks.slice(0, 2).map((link, index) => (
                    <SocialLink key={index} name={link} />
                  ))}
                </div>
              </div>
              <div className="flex gap-4 items-start self-stretch my-auto whitespace-nowrap min-w-[240px]">
                <div className="flex gap-1 items-start">
                  {socialLinks.slice(2, 4).map((link, index) => (
                    <SocialLink key={index} name={link} />
                  ))}
                </div>
              </div>
              <div className="flex flex-1 shrink justify-center items-center self-stretch px-4 py-2.5 my-auto border border-white border-solid basis-0 min-w-[240px] rounded-[100px] max-md:max-w-full">
                <div className="flex gap-2 justify-center items-center">
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/60b22027483b9ea7a8c3cacb07516143a8eaf3508a3e666718352e001d407a02?placeholderIfAbsent=true&apiKey=02c83d3fb4d44be9b48bf609449d3150"
                    alt=""
                    className="object-contain shrink-0 self-stretch my-auto w-6 aspect-square fill-white"
                  />
                  <div className="self-stretch text-center my-auto">
                    all Rights Reserved
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
