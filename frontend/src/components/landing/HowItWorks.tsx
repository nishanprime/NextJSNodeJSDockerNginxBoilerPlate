import Image from "next/image";
import TaxPaymentImage from "@/app/assets/images/tax-payment.png";

const revenueStatsItems = [
  {
    count: "$1,148",
    desc: "Average Savings",
  },
  {
    count: "4.9/5",
    desc: "Customer Satisfaction",
  },
  {
    count: "95%",
    desc: "Success Rate",
  },
];

const stepsRow = [
  {
    image: TaxPaymentImage,
    title: "Seamless Experience",
    desc: "Say goodbye to the days of complicated paperwork and endless back-and-forth with tax authorities. At JumboTax, we prioritize your convenience. Provide us with a few essential details, and let us handle the rest. Filing property tax appeals has never been this easy!",
  },
  {
    image: TaxPaymentImage,
    title: "Seamless Experience",
    desc: "Say goodbye to the days of complicated paperwork and endless back-and-forth with tax authorities. At JumboTax, we prioritize your convenience. Provide us with a few essential details, and let us handle the rest. Filing property tax appeals has never been this easy!",
  },
  {
    image: TaxPaymentImage,
    title: "Seamless Experience",
    desc: "Say goodbye to the days of complicated paperwork and endless back-and-forth with tax authorities. At JumboTax, we prioritize your convenience. Provide us with a few essential details, and let us handle the rest. Filing property tax appeals has never been this easy!",
  },
];

const HowItWorks = () => {
  return (
    <section className="bg-[#036775]/5 my-12 py-8 px-4 sm:px-[inherit]">
      <div className="container mx-auto">
        <p className="text-center text-[#01414a] text-base font-bold uppercase leading-none tracking-wider mb-8">
          OUR IMPACT
        </p>
        <div className="space-y-6 mb-8">
          <h2 className="capitalize text-4xl md:text-5xl font-medium leading-[52.80px] text-center">
            Why reach out to JumboTax?
          </h2>
          <p className="max-w-4xl mx-auto text-center">
            Reaching out to JumboTax ensures you pay property taxes that truly
            reflect your property's value. With our AI-driven expertise, we
            navigate the intricate landscape of property tax appeals. Simply
            share your property details, and our intelligent system ensures
            you're not overpaying a dime. Partner with JumboTax for fair
            property tax
          </p>
        </div>

        <div className="space-y-8">
          <div className="flex gap-5 flex-col md:flex-row items-center justify-center">
            {revenueStatsItems.map((item) => (
              <div
                key={item.count}
                className="space-y-6 text-center p-8 bg-white rounded-3xl min-w-60"
              >
                <h3 className="text-[#01414a] text-6xl font-semibold">
                  {item.count}
                </h3>
                <p>{item.desc}</p>
              </div>
            ))}
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {stepsRow.map((step, index) => (
              <div key={index} className="rounded-3xl pt-6 bg-white">
                <Image src={step.image} alt={step.desc} />
                <div className="bg-[#036775]/20 px-4 pt-4 pb-6 text-center rounded-b-3xl">
                  <h5 className="text-black text-xl font-medium leading-snug mb-3">
                    {step.title}
                  </h5>
                  <p className="text-center text-black/60 text-sm font-normal leading-[18.20px]">
                    {step.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
