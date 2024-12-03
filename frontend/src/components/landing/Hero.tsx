import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="container hero-section w-auto md:w-full md:h-[784px] mx-4 sm:mx-auto bg-no-repeat bg-cover md:bg-center rounded-[40px] px-4 md:pl-20">
      <div className="flex h-full flex-col md:flex-row">
        <div className="h-full flex flex-col md:gap-5 justify-center md:w-3/5 2xl:w-[55%] text-white">
          <h1 className="text-5xl md:text-[80px] capitalize pt-8 sm:pt-[inherit]">
            One Step Away From HonestValue
          </h1>
          <p className="mb-2">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed viverra
            ante vel lectus consectetur vestibulum. In cursus dictum nibh
            molestie pretium.
          </p>
          <Link
            href="#"
            className="bg-white relative border flex gap-2.5 items-center text-black rounded-[100px] py-4 px-5 self-start hover:text-white hover:bg-[#01414A]/85 hover:scale-105 transition-all duration-300"
          >
            Get Started
            <ArrowUpRight className="w-6 h-6" />
            <span className="animate-ping absolute top-2 right-0.5 border h-1.5 w-1.5 rounded-full bg-[#01414A]"></span>
          </Link>
        </div>
        <div className="relative bg-white md:bg-transparent md:-ml-32 2xl:-ml-20 flex flex-col md:flex-row py-8 mt-7 md:mt-[inherit] rounded-[40px] md:py-0 items-center md:items-end justify-start gap-16 px-7 mb-12 2xl:mb-3">
          <div>
            <div className="flex items-center gap-5 mb-3.5">
              <h4 className="text-5xl font-semibold">80%</h4>

              <div className="flex gap-2 text-[#01dc82]">
                <ArrowUpRight className="h-9 w-9 p-1 rounded-full bg-[#01dc82]/10" />
                <span className="text-xl">54%</span>
              </div>
            </div>
            <p className="text-[#787878] w-44 text-center">
              Use of Recycled Materials
            </p>
          </div>
          <div>
            <div className="flex items-center gap-5 mb-3.5">
              <h4 className="text-5xl font-semibold">65%</h4>

              <div className="flex gap-2 text-red-500">
                <ArrowUpRight className="h-9 w-9 p-1 rounded-full bg-red-100" />
                <span className="text-xl">54%</span>
              </div>
            </div>
            <p className="text-[#787878] w-44 text-center">
              Use of Recycled Materials
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
