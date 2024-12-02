import * as React from "react";
import { ImpactHeader } from "./ImpactHeader";

export const Impact: React.FC = () => {
  return (
    <div className="pl-16 pt-8 pb-8 bg-custom-teal flex items-center">
      <ImpactHeader
        title="OUR IMPACT"
        subtitle="Why reach out to JumboTax?"
        description="Reaching out to JumboTax ensures you pay property taxes that truly reflect your property's value. With our AI-driven expertise, we navigate the intricate landscape of property tax appeals. Simply share your property details, and our intelligent system ensures you're not overpaying a dime. Partner with JumboTax for fair property tax"
      />
    </div>
  );
};
