"use client"

import React, { useEffect } from 'react'
import gsap from "gsap";
import { ScrollTrigger, ScrollSmoother, SplitText } from "gsap/all";

gsap.registerPlugin(ScrollTrigger, ScrollSmoother, SplitText);

export default function WhatWeDo({portfolioData}) {

  useEffect(()=>{
     const splits = [];

    // Split text animation for titles
    const splitTitleLines = gsap.utils.toArray(".title-anim");
    splitTitleLines.forEach((el) => {
      const split = new SplitText(el, { type: "lines" });
      splits.push(split);

      gsap.set(el, { perspective: 400 });
      gsap.timeline({
        scrollTrigger: {
          trigger: el,
          start: "top 90%",
          end: "bottom 60%",
          toggleActions: "play none none none",
        },
      }).from(split.lines, {
        duration: 1,
        delay: 0.3,
        opacity: 0,
        rotationX: -80,
        transformOrigin: "top center -50",
        stagger: 0.1,
      });
    });
  },[])
  return (
    <>
        <div className="block-content">
              <div className="flex flex-wrap items-start justify-between">
                <div className="w-full md:w-[42%] lg:w-[34%]">
                  <h2 className="portfolio__detail-title title-anim">
                    {portfolioData.whatWeDoTitle}
                  </h2>
                </div>

                <div className="w-full md:w-[58%] lg:w-[66%]">
                  <div className="portfolio__detail-text">
                    <p>{portfolioData.whatWeDoDetails}</p>

                    <ul>
                      {
                        portfolioData.whatWeDo.map((data,indx)=>(
                            <li key={indx}>{data.title}</li>
                        ))
                      }  
                    </ul>
                  </div>
                </div>
              </div>
            </div>
    </>
  )
}
