import CTA from "@/ui/CTA";
import PortfolioItems from "@/components/portfolioPage/PortfolioItems";
import { portfolioData } from "@/data/portfolioData";

import PortfolioHeader from "@/components/portfolioPage/PortfolioHeader";
import ScrollSmootherEffect from "@/components/layouts/ScrollSmootherEffect";


//import React, { useState } from "react";

export default function Portfolio() {
  const totalPortfolioItems = portfolioData.length;
  const displayTotal =
    totalPortfolioItems > 9 ? totalPortfolioItems : `0${totalPortfolioItems}`;

  // const [displayTotal, setDisplayTotal] = useState("00")

 

  return (
    <>
      <ScrollSmootherEffect/>
      <section className="portfolio__area-6">
        <div className="container mx-auto px-4 pt-24 pb-36 relative">
          {/* Decorative line */}
          {/* <span className="absolute left-0 top-0 h-full w-px bg-gray-200"></span> */}

          <div className="zi-9">
            <div className="row block md:flex">
              <div className="w-full md:w-[40%]">
                <div className="sec-title-wrapper portfolio__title-wrap-6">
                  <PortfolioHeader/>
                  <div className="portfolio__pagination-6">
                    <span className="portfolio__current">01</span> /{" "}
                    <span className="portfolio__total">{displayTotal}</span>
                  </div>
                </div>
              </div>

              <div className="w-full md:w-[60%]">
                <PortfolioItems />
              </div>
            </div>
          </div>
        </div>
      </section>
      <CTA />
    </>
  );
}
