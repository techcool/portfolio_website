import React from "react";
import FaqAccordion from "./FaqAccordion";
import GetInTouch from "./GetInTouch";
import { homeAccordionData } from "@/data/faqAccordionData";
import PricingHeading from "./PricingHeading";

export default function Pricing() {
  return (
    <>
      <section className="price__area pt-32 pb-36">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap -mx-4">
            <div className="w-full lg:w-1/2 px-4 mb-12 lg:mb-0">
              <div className="sec-title-wrapper mb-8">
               
               <PricingHeading/>
              </div>

              <FaqAccordion accordData={homeAccordionData}  />
            </div>

            <GetInTouch />
          </div>
        </div>
      </section>
    </>
  );
}
