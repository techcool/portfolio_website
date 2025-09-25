"use client";
import { portfolioData } from "@/data/portfolioData";
import slugify from "@/libs/slugify";
import gsap from "gsap";
import ScrollSmoother from "gsap/ScrollSmoother";
import ScrollTrigger from "gsap/ScrollTrigger";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect } from "react";

gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

export default function PortfolioItems() {
 // const totalPortfolioItem = portfolioData.length;
 //const displayTotalPortfolioItem = totalPortfolioItem>9? totalPortfolioItem:`0${totalPortfolioItem}`

  useEffect(() => {
    let ctx = gsap.context(() => {
      const device_width = window.innerWidth;

      if (device_width > 100) {
        let skewSetter = gsap.quickTo(".portfolio__item-5 img", "skewY"),
          clamp = gsap.utils.clamp(-15, 15);

        const smoother = ScrollSmoother.create({
          smooth: 1.35,
          effects: device_width < 1025 ? false : true,
          smoothTouch: false,
          normalizeScroll: false,
          ignoreMobileResize: true,
          onUpdate: (self) => skewSetter(clamp(self.getVelocity() / -80)),
          onStop: () => skewSetter(0),
        });
      }

      ScrollTrigger.create({
        trigger: ".portfolio__wrapper-6",
        start: "top top",
        end: "bottom bottom",
        pin: ".portfolio__title-wrap-6",
        pinSpacing: false,
      });
    });
   
    // if (setDisplayTotal){
    //   setDisplayTotal(displayTotalPortfolioItem)
    // }
    // cleanup on unmount
    return () => ctx.revert();
  }, []);
  return (
    <>
      <div className="portfolio__wrapper-6">
        <div className="portfolio__list-6">
          {portfolioData.map((data) => (
            <div
              className="portfolio__item-6"
              data-portfitem={data.id}
              key={data.id}
            >
              <Link href={`portfolio/${slugify(data.title)}`}>
                <Image
                  src={data.imgSrc}
                  alt={data.title}
                  className="w-full"
                  data-speed="0.4"
                />
                <div className="portfolio__content-6">
                  
                  <h4 className="portfolio__title-6">{data.title}</h4>
                  <h5 className="portfolio__date">
                    {data.endDate}
                  </h5>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
