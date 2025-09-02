import Link from "next/link";
import React from "react";

export default function TitleData({portfolioData}) {
  return (
    <>
      <div className="flex items-end justify-between">
        <div className="w-full md:w-[58%] lg:w-[66%]">
          <div className="sec-title-wrapper w-full md:w-[60%]">
            <h2 className="sec-title animation__char_come">
              {portfolioData.title}
            </h2>
          </div>
        </div>

        <div className="w-full md:w-[42%] lg:w-[34%]">
          <div className="portfolio__detail-info">
            <ul>
              <li>
                Category{" "}
                <Link href="category.html">{portfolioData.category}</Link>
              </li>
              <li>
                Client <span>{portfolioData.client}</span>
              </li>
              <li>
                Start Date <span>{portfolioData.startDate}</span>
              </li>
              <li>
                Handover <span>{portfolioData.endDate}</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
