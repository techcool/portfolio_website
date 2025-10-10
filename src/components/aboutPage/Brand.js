"use client";

import React, { useEffect } from "react";
import BrandList from "./BrandList";
import gsap from "gsap";
import { ScrollTrigger, ScrollSmoother, SplitText } from "gsap/all";

gsap.registerPlugin(ScrollTrigger, ScrollSmoother, SplitText);

export default function Brand() {
  useEffect(() => {
    const splits = [];
    const animations = [];

    const splitTitleLines = gsap.utils.toArray(".title-anim");

    splitTitleLines.forEach((el) => {
      const split = new SplitText(el, { type: "lines" });
      splits.push(split);

      gsap.set(el, { perspective: 400 });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: el,
          start: "top 90%",
          end: "bottom 60%",
          toggleActions: "play none none none",
        },
      });

      tl.from(split.lines, {
        duration: 1,
        delay: 0.3,
        opacity: 0,
        rotationX: -80,
        transformOrigin: "top center -50",
        stagger: 0.1,
      });

      animations.push(tl);
    });

    // ✅ CLEANUP (important)
    return () => {
      // Kill all ScrollTriggers & timelines
      animations.forEach((anim) => anim.kill());
      ScrollTrigger.getAll().forEach((st) => st.kill());

      // Revert SplitText DOM changes
      splits.forEach((split) => split.revert());
    };
  }, []);

  return (
    <section className="brand__area">
      <div className="container mx-auto px-4 g-0 line pt-140 pb-140">
        <div className="row g-0">
          <div className="w-full">
            <div className="sec-title-wrapper">
              <h2 className="sec-sub-title title-anim">International Brands</h2>
              <h3 className="sec-title title-anim">
                We are happy to work with global <br />
                largest brands
              </h3>
            </div>
          </div>
          <BrandList />
        </div>
      </div>
    </section>
  );
}
