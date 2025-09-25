import Gallery from "@/components/portfolioPage/Gallery";
import Thumb1 from "@/components/portfolioPage/Thumb1";
import Thumb2 from "@/components/portfolioPage/Thumb2";
import Thumb3 from "@/components/portfolioPage/Thumb3";
import TitleData from "@/components/portfolioPage/TitleData";
import VisualTypography from "@/components/portfolioPage/VisualTypography";
import WhatWeDo from "@/components/portfolioPage/WhatWeDo";
import { portfolioData } from "@/data/portfolioData";
import slugify from "@/libs/slugify";
import Link from "next/link";

import React from "react";
export async function generateMetadata({params}) {
  const { slug } = await params;
  const portfolio = portfolioData.find((b) => slugify(b.title) === slug);
  return {
    title: portfolio.title,
    description: portfolio.shortDescription.slice(0,160),
  }
  
}


export default async function PortfolioDetails({ params }) {
  const { slug } = await params;
  const portfolioDatas = portfolioData.find(
    (data) => slugify(data.title) === slug
  );
  //console.log('data', id);
  
  if (!portfolioDatas) {
    return (
      <p className="text-center text-red-500">No portfolio data is found</p>
    );
  }
 const currentIndex = portfolioData.findIndex((item)=> item.id === portfolioDatas.id)
 
 const prevIndex = currentIndex > 0 ? currentIndex -1 : portfolioData.length-1;
 const prevId = slugify(portfolioData[prevIndex].title);

 const nextIndex = currentIndex < portfolioData.length -1 ? currentIndex+1 : 0
 const nextId= slugify(portfolioData[nextIndex].title);

  return (
    <>
      <section className="portfolio__detail">
        <div className="portfolio__detail-top">
          <div className="container mx-auto px-4 g-0 line pt-110 pb-130">
            {/* <span className="line-3"></span> */}
            <TitleData portfolioData={portfolioDatas} />
          </div>
        </div>

        <Thumb1 portfolioData={portfolioDatas} />

        <div className="portfolio__detail-content">
          <div className="container mx-auto px-4 g-0 line pt-140">
            {/* <span className="line-3"></span> */}

            <WhatWeDo portfolioData={portfolioDatas} />

            <Thumb2 portfolioData={portfolioDatas} />

            <VisualTypography portfolioData={portfolioDatas} />
            <Gallery portfolioData={portfolioDatas} />

            <Thumb3 portfolioData={portfolioDatas} />

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
