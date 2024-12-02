"use client";
import * as React from "react";
import Footer from "@/components/landing/footer/Footer";
import { Impact } from "@/components/landing/impact/Impact";
import { Statistics } from "@/components/landing/statistics/Statistics";
import { ProcessSteps } from "@/components/landing/process/ProcessSteps";
import { TestimonialSection } from "@/components/landing/testimonial/TestimonialSection";
import { FAQPage } from "@/components/landing/faq/FAQPage";
import Main from "@/components/landing/main/Main";
import Head from "next/head";

export default function LandingPage() {
  return (
    <div className="flex flex-col bg-white border-blue-2">
      <Head>
        {/* Import Outfit font from Google Fonts */}
        <link
          href="https://fonts.googleapis.com/css2?family=Outfit:wght@400;500;600&display=swap"
          rel="stylesheet"
        />
      </Head>
      <Main />
      <Impact />
      <Statistics />
      <ProcessSteps />
      <TestimonialSection />
      <FAQPage />
      <Footer />
    </div>
  );
}
