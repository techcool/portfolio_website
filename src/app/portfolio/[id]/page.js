import Gallery from "@/components/portfolioPage/Gallery";
import Thumb1 from "@/components/portfolioPage/Thumb1";
import Thumb2 from "@/components/portfolioPage/Thumb2";
import Thumb3 from "@/components/portfolioPage/Thumb3";
import TitleData from "@/components/portfolioPage/TitleData";
import VisualTypography from "@/components/portfolioPage/VisualTypography";
import WhatWeDo from "@/components/portfolioPage/WhatWeDo";
import { singlePortfolioData } from "@/data/singlePortfolioData";
import Link from "next/link";

import React from "react";

export default async function PortfolioDetails({ params }) {
  const { id } = await params;
  const portfolioData = singlePortfolioData.find(
    (data) => data.id === Number(id)
  );
  //console.log('data', portfolioData);
  
  if (!portfolioData) {
    return (
      <p className="text-center text-red-500">No portfolio data is found</p>
    );
  }
 const currentIndex = singlePortfolioData.findIndex((item)=> item.id === portfolioData.id)
 
 const prevIndex = currentIndex > 0 ? currentIndex -1 : portfolioData.length-1;
 const prevId = singlePortfolioData[prevIndex].id;

 const nextIndex = currentIndex < portfolioData.length -1 ? currentIndex+1 : 0
 const nextId= singlePortfolioData[nextIndex].id;

  return (
    <>
      <section className="portfolio__detail">
        <div className="portfolio__detail-top">
          <div className="container mx-auto px-4 g-0 line pt-110 pb-130">
            {/* <span className="line-3"></span> */}
            <TitleData portfolioData={portfolioData} />
          </div>
        </div>

        <Thumb1 portfolioData={portfolioData} />

        <div className="portfolio__detail-content">
          <div className="container mx-auto px-4 g-0 line pt-140">
            {/* <span className="line-3"></span> */}

            <WhatWeDo portfolioData={portfolioData} />

            <Thumb2 portfolioData={portfolioData} />

            <VisualTypography portfolioData={portfolioData} />
            <Gallery portfolioData={portfolioData} />

            <Thumb3 portfolioData={portfolioData} />

            <div className="row">
              <div className="col-xxl-12 col-xl-12 col-lg-12 col-md-12">
                <div className="portfolio__detail-btns pt-150 pb-150">
                  <Link
                    href={`/portfolio/${prevId}`}
                    className="wc-btn-primary btn-hover"
                  >
                    <span></span> Prev Work
                  </Link>
                  <Link
                    href={`/portfolio/${nextId}`}
                    className="wc-btn-primary btn-hover"
                  >
                    <span></span> Next Work
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
