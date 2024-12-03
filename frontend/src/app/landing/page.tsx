import { Inter } from "next/font/google";

import { Metadata } from "next";
import Header from "@/components/landing/Header";
import HeroSection from "@/components/landing/Hero";
import HowItWorks from "@/components/landing/HowItWorks";
import OurProcess from "@/components/landing/OurProcess";
import TestimonialSection from "@/components/landing/Testimonial";
import FAQsAndCTAs from "@/components/landing/Faq";
import Footer from "@/components/landing/Footer";

export const metadata: Metadata = {
  title: "HonestValue | Home",
};

const inter = Inter({ subsets: ["latin"] });

export default function LandingPage() {
  return (
    <div className={inter.className}>
      <Header />
      <HeroSection />
      <HowItWorks />
      <OurProcess />
      <TestimonialSection />
      <FAQsAndCTAs />
      <Footer />
    </div>
  );
}
