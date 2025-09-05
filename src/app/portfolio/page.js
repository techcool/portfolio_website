
import CTA from "@/components/common/CTA";
import PortfolioItems from "@/components/portfolioPage/PortfolioItems";
import { portfolioData } from "@/data/portfolioData";

//import React, { useState } from "react";

export default function Portfolio() {

  const totalPortfolioItems = portfolioData.length;
  const displayTotal = totalPortfolioItems > 9 ? totalPortfolioItems:`0${totalPortfolioItems}`;

 // const [displayTotal, setDisplayTotal] = useState("00")

  return (
    <>
      <section className="portfolio__area-6">
        <div className="container mx-auto px-4 pt-24 pb-36 relative">
          {/* Decorative line */}
          {/* <span className="absolute left-0 top-0 h-full w-px bg-gray-200"></span> */}

          <div className="zi-9">
              <div className="row block md:flex">
                <div className="w-full md:w-[40%]">
                  <div className="sec-title-wrapper portfolio__title-wrap-6">
                    <div className="">
                      <h2 className="sec-sub-title animation__char_come">Featured</h2>
                      <h3 className="sec-title animation__char_come_long">Work</h3>
                      <p>View the full case study of our recent featured and awesome works that we created for our
                        clients.
                      </p>
                    </div>
                    <div className="portfolio__pagination-6">
                      <span className="portfolio__current">01</span> / <span className="portfolio__total">{displayTotal}</span>
                    </div>
                  </div>
                </div>

                <div className="w-full md:w-[60%]">
                    <PortfolioItems/>
                </div>
              </div>
            </div>
        </div>
      </section>
      <CTA/>
    </>
  );
}
