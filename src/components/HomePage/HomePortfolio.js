import React from "react";
import PortfolioItems from "./PortfolioItems";

function HomePortfolio() {
  return (
    <>
      <section className="portfolio__area-3">
        <div className="container mx-auto px-4 pt-100 pb-150">
          <div className="row">
            <div className="col-xxl-12">
              <div className="sec-title-wrapper">
                <h2 className="sec-sub-title title-anim">
                  Featured <br />
                  Work
                </h2>
              </div>
            </div>
          </div>

          <PortfolioItems />
        </div>
      </section>
    </>
  );
}

export default HomePortfolio;
