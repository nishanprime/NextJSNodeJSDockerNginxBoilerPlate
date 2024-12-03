import Link from "next/link";
import { Mail } from "lucide-react";

import FooterBackgroundImage from "@/app/assets/images/footer-bg.png";

const SocialLinks = [
  {
    name: "Instagram",
    link: "#",
  },
  {
    name: "Linkedin",
    link: "#",
  },
  {
    name: "Twitter",
    link: "#",
  },
  {
    name: "Github",
    link: "#",
  },
];

const Footer = () => {
  return (
    <footer
      className="block bg-cover bg-fixed bg-no-repeat py-6"
      style={{
        backgroundImage: `url('${FooterBackgroundImage.src}')`,
      }}
    >
      <div className="container w-auto sm:mx-auto mx-4 px-2 sm:px-6 md:px-12 pt-20 pb-14 bg-[#01414a] rounded-[40px]">
        <div className="flex justify-between flex-col md:flex-row gap-10 md:px-6 mb-20 mx-4">
          <div className="flex gap-6 flex-wrap sm:flex-wrap sm:justify-between md:gap-16">
            <div className="flex flex-col">
              <h5 className="text-white text-2xl font-semibold leading-9 mb-6">
                Company
              </h5>
              {["About", "Pricing", "Demo"].map((link) => (
                <Link
                  key={link}
                  href="#"
                  className="text-neutral-50 text-lg font-normal leading-[27px] mb-4 hover:translate-y-[1px] hover:underline transition-all duration-300"
                >
                  {link}
                </Link>
              ))}
            </div>
            <div className="flex flex-col">
              <h5 className="text-white text-2xl font-semibold leading-9 mb-6">
                Pricing
              </h5>
              {["Blog", "Events", "Tool Library"].map((link) => (
                <Link
                  key={link}
                  href="#"
                  className="text-neutral-50 text-lg hover:translate-y-[1px] font-normal leading-[27px] mb-4 hover:underline transition-all duration-300"
                >
                  {link}
                </Link>
              ))}
            </div>
            <div className="flex flex-col">
              <h5 className="text-white text-2xl font-semibold leading-9 mb-6">
                Contact us
              </h5>
              {["Terms of Use", "Privacy Policy"].map((link) => (
                <Link
                  key={link}
                  href="#"
                  className="text-neutral-50 text-lg hover:translate-y-[1px] font-normal leading-[27px] mb-4 hover:underline transition-all duration-300"
                >
                  {link}
                </Link>
              ))}
            </div>
          </div>

          <div className="">
            <h4 className="text-white text-3xl sm:text-5xl md:text-[74.67px] font-semibold leading-[112px]">
              HonestValue
            </h4>
            <h5 className="font-semibold leading-normal text-white mb-2">
              Subscribe
            </h5>
            <p className="text-[#8e93a4] text-base font-normal leading-normal mb-6">
              Join our newsletter to stay up to date on features and releases.
            </p>

            <form
              action="/"
              method="post"
              className="bg-white sm:max-w-[460px] md:w-full flex items-center px-3.5 py-2 gap-3 rounded-xl mb-4"
            >
              <div className="p-2.5 rounded-lg text-[#01414A] bg-[#f6f7f9] ">
                <Mail />
              </div>
              <input
                className="placeholder:text-[#918ea4] outline-none w-full md:flex-grow"
                name="email"
                type="email"
                placeholder="Enter your email"
              />
              <button className="bg-[#01414A] hover:bg-black transition duration-150 text-sm px-6 py-3.5 rounded-lg shadow text-white">
                Submit
              </button>
            </form>
            <p>
              <span className="text-[#8e93a4] text-xs font-normal leading-[18px]">
                By subscribing you agree to with our{" "}
              </span>
              <Link
                href="#"
                className="text-white text-xs font-normal underline leading-[18px]"
              >
                Privacy Policy
              </Link>
            </p>
          </div>
        </div>
        <div className="pt-14 border-t border-[#5f5f5f] flex items-center gap-4 flex-wrap mx-4 sm:mx-[inherit]">
          {SocialLinks.map((social) => (
            <Link
              key={social.name}
              href={social.link}
              prefetch={false}
              target="_blank"
              className="px-4 2xl:px-5 py-2.5 rounded-[100px] border border-white text-white hover:bg-white hover:text-[#01414A] hover:border-gray-100 transition-colors duration-300"
            >
              {social.name}
            </Link>
          ))}
          <div className="px-4 py-2.5 flex  basis-full md:basis-auto items-center gap-2 flex-grow justify-center rounded-[100px] border border-white text-white text-base font-normal capitalize">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12 0C5.39271 0 0 5.39272 0 12C0 18.6073 5.39271 24 12 24C18.6073 24 24 18.6073 24 12C24 5.39272 18.6073 0 12 0ZM3.35223 12C3.35223 9.52227 4.42105 7.23887 6.12146 5.68422C6.80162 5.05264 7.96761 5.24696 8.45344 6.07288L11.4656 11.2713C11.7571 11.7571 11.7571 12.3401 11.4656 12.8259L8.45344 18.0243C7.96761 18.8988 6.80162 19.0445 6.07288 18.3644C4.42105 16.7125 3.35223 14.4777 3.35223 12ZM15.5466 17.9271L12.5344 12.7288C12.2429 12.2429 12.2429 11.6599 12.5344 11.1741L15.5466 5.9757C16.0324 5.14979 17.1498 4.95547 17.8785 5.58705C19.5789 7.1417 20.6478 9.4251 20.6478 11.9028C20.6478 14.3806 19.5789 16.664 17.8785 18.2186C17.1498 18.996 16.0324 18.8016 15.5466 17.9271Z"
                fill="white"
              />
            </svg>
            all Rights Reserved
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
