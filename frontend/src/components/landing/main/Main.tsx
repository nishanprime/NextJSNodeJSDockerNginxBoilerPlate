"use client";
import * as React from "react";
import { StatCard } from "@/components/landing/main/StatCard";
import { NavItem } from "@/components/landing/main/NavItem";
import { Hero, stats } from "./Hero";
import { COMPANY_LOGO } from "../image";
import MobileNav from "./MobileNav";
import { MobileHero } from "./MobileHero";

const navItems = [
  { label: "Home", isActive: true },
  { label: "How it works", isActive: false },
  { label: "About Us", isActive: false },
  { label: "Contact", isActive: false },
];

export default function Main() {
  return (
    <div className="pb-20">
      {/* FOR LARGE SCREENS ONLY */}
      <div className="hidden lg:block">
        <div className="flex overflow-hidden flex-col bg-white">
          <nav className="flex z-10 flex-wrap gap-10 px-20 py-6 w-full text-base font-medium tracking-tight text-center text-black bg-white max-md:px-5 max-md:max-w-full">
            <img
              loading="lazy"
              src={COMPANY_LOGO}
              alt="Company Logo"
              className="object-contain shrink-0 self-start max-w-full aspect-[3.77] w-[162px]"
            />
            <div className="flex  gap-8 justify-center items-center mx-auto px-3 py-1.5 bg-cyan-800 bg-opacity-10 rounded-[100px] max-md:max-w-full">
              {navItems.map((item, index) => (
                <NavItem key={index} {...item} />
              ))}
            </div>
          </nav>
          <div className="hidden lg:block">
            <Hero />
          </div>
        </div>
      </div>
      {/* navigation for mobile screen */}
      <div>
        <MobileNav />
      </div>
      <div className="block lg:hidden">
        <MobileHero />
      </div>
      {/* Stats Section */}
      <div
        className="hidden lg:block"
        style={{
          zIndex: 100,
          width: "100%",
          position: "absolute",
          bottom: "100px",
          right: "300px",
        }}
      >
        <section className="flex flex-wrap gap-5 justify-end mt-8 zIndex-50">
          {stats.map((stat, index) => (
            <StatCard key={index} {...stat} />
          ))}
        </section>
      </div>
      <div className="block lg:hidden">
        <section className="flex flex-wrap gap-5 justify-center mt-8 zIndex-50">
          {stats.map((stat, index) => (
            <StatCard key={index} {...stat} />
          ))}
        </section>
      </div>
    </div>
  );
}
