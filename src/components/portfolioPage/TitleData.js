"use client"

import slugify from "@/libs/slugify";
import gsap from "gsap";
import { SplitText } from "gsap/all";
import Link from "next/link";
import React, { useEffect } from "react";
gsap.registerPlugin(SplitText);

export default function TitleData({portfolioData}) {

  useEffect(() => {
    let char_come = document.querySelectorAll(".animation__char_come");

    char_come.forEach((char_come) => {
      let split_char = new SplitText(char_come, { type: "chars, words" });
      gsap.from(split_char.chars, {
        duration: 1,
        x: 70,
        autoAlpha: 0,
        stagger: 0.05,
      });
    });

    
  }, []);

  return (
    <>
      <div className="flex flex-wrap items-end justify-between">
        <div className="w-full md:w-[58%] lg:w-[66%]">
          <div className="sec-title-wrapper w-full ">
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
                <Link href={`/portfolio/category/${slugify(portfolioData.category)}`}>{portfolioData.category}</Link>
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
