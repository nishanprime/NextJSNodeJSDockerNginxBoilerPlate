import Image from "next/image";
import Link from "next/link";
import { MoveUpRight } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

import GrayRectangleImage from "@/app/assets/images/shape-rectangle.svg";

const FAQs = [
  {
    question: "Can I use the fitness dashboard on my mobile device?",
    answer:
      "Yes, our fitness dashboard is fully optimized for mobile devices. You can access all features and track your workouts on the go using your smartphone or tablet. Simply download our app from the App Store or Google Play",
  },
  {
    question: "How do I get started with the fitness dashboard?",
    answer:
      "Yes, our fitness dashboard is fully optimized for mobile devices. You can access all features and track your workouts on the go using your smartphone or tablet. Simply download our app from the App Store or Google Play",
  },
  {
    question: "How does the personalized insights feature work?",
    answer:
      "Yes, our fitness dashboard is fully optimized for mobile devices. You can access all features and track your workouts on the go using your smartphone or tablet. Simply download our app from the App Store or Google Play",
  },
  {
    question: "What types of workouts can I track with the fitness dashboard?",
    answer:
      "Yes, our fitness dashboard is fully optimized for mobile devices. You can access all features and track your workouts on the go using your smartphone or tablet. Simply download our app from the App Store or Google Play",
  },
  {
    question: "Is my data safe and secure?",
    answer:
      "Yes, our fitness dashboard is fully optimized for mobile devices. You can access all features and track your workouts on the go using your smartphone or tablet. Simply download our app from the App Store or Google Play",
  },
];

const FAQsAndCTAs = () => {
  return (
    <section className="container px-4 sm:px-[inherit] mx-auto py-8 ">
      <div className="grid-cols-1 grid md:flex">
        <div className="px-6 md:pl-14 pt-10 pr-4 md:w-3/5 pb-[37px] flex flex-col md:justify-end bg-[#f6f6f6] rounded-[42px] border border-[#e4e4e4] mb-5 md:mb-0">
          <h2 className="capitalize text-4xl md:text-5xl font-medium leading-[52.80px] mb-8 text-center md:text-left md:mb-14">
            Questions About our JumboTax?
          </h2>

          <Accordion
            type="single"
            defaultValue={FAQs[0].question}
            collapsible
            className="w-full"
          >
            {FAQs.map((faq, index) => (
              <AccordionItem
                className="last:border-0"
                key={index}
                value={faq.question}
              >
                <AccordionTrigger className="text-lg text-left md:text-xl font-medium">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-base">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>

          <p className="md:self-end md:w-4/6 text-[#022c2b] text-lg md:text-2xl mt-10 text-right">
            We've got answers. If you have some other questions, feel free to
            <Link
              prefetch={false}
              href="https://jumbotaxes.com/contact"
              className="underline hover:text-[#036775] transition-colors duration-200"
            >
              &nbsp;contact us.
            </Link>
          </p>
        </div>

        <div className="h-[849px] group md:w-2/5 overflow-hidden relative bg-white rounded-[42px] border border-[#e4e4e4] pt-16 pl-14 flex flex-col">
          <Image
            src={GrayRectangleImage}
            alt="A minimalist design featuring a white rectangle on a deep black background, emphasizing simplicity and contrast."
            className="absolute right-0 top-36 group-hover:scale-x-115 group-hover:translate-x-2 transition-transform duration-1000"
            height={500}
          />
          <h2 className="text-5xl md:text-[64px] relative z-[1] text-left font-medium capitalize leading-[64px] mb-5">
            Evaluate Your Potential Savings
          </h2>
          <ul className="text-[#8f8f8f] relative z-[1] text-sm w-1/2 font-medium list-disc leading-tight space-y-1.5 ml-3.5 mb-5">
            {[
              "No upfront costs",
              "No Credit Card Required",
              "Quick signup: Less than 30 minute",
              "Pay 25% of what you save. No hidden costs",
            ].map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
          <Link
            href="#"
            className="px-5 py-2.5 bg-gradient-to-t font-medium relative z-[1] to-[#171717] from-[#7D7D7D] rounded-[99px] border border-black justify-center items-center gap-2 flex w-2/4 text-white hover:-translate-y-1.5 transition-all duration-200"
            style={{
              backgroundSize: "100% 356.25%",
            }}
          >
            Join now
            <MoveUpRight className="h-4 w-4" />
          </Link>

          <div className="h-full flex flex-col justify-end pb-14 pr-1">
            <div className="relative p-5 space-y-2.5 rounded-[20px] shadow-sm border border-neutral-200/90">
              <p className="opacity-50 text-black text-sm font-normal  capitalize">
                Join +1 million users around the world
              </p>
              <div className="flex items-center">
                {[1, 2, 3, 4, 5, 6, 7, 8].map((item, index) => (
                  <div
                    key={item + "" + index}
                    className="rounded-full [&:not(:first-child)]:-m-1.5 border-[2px] border-white bg-[#dedede] h-10 w-10"
                  ></div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-[#171717] text-white py-16 text-center mt-14 mb-16 rounded-[40px]">
        <h4 className="text-[60px] font-medium leading-[60px]">95%</h4>
        <p className="text-2xl font-medium">of our appeals are successful.</p>
        <Link
          href="#"
          className="inline-block px-6 py-3.5 bg-[#eef0f4] rounded-xl shadow text-black mt-20 border hover:bg-transparent hover:text-white transition duration-300"
        >
          Get Started - It's Free
        </Link>
      </div>
    </section>
  );
};

export default FAQsAndCTAs;
