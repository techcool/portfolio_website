"use client";

import gsap from "gsap";
import { SplitText, ScrollTrigger } from "gsap/all";
import React, { useEffect } from "react";

gsap.registerPlugin(ScrollTrigger, SplitText);

export default function HomeAboutTextAnimation() {
  useEffect(() => {
    const splits = [];

    // Split text animation for paragraphs
    const splitTextLines = gsap.utils.toArray(".text-anim p");
    splitTextLines.forEach((el) => {
      const split = new SplitText(el, { type: "lines" });
      splits.push(split);

      gsap.set(el, { perspective: 400 });
      gsap
        .timeline({
          scrollTrigger: {
            trigger: el,
            start: "top 90%",
            end: "bottom 60%",
            toggleActions: "play none none none",
          },
        })
        .from(split.lines, {
          duration: 1,
          delay: 0.5,
          opacity: 0,
          rotationX: -80,
          transformOrigin: "top center -50",
          stagger: 0.1,
        });
    });

     return () => {
          ScrollTrigger.getAll().forEach((t) => t.kill());
          // revert SplitText DOM changes
          splits.forEach((split) => split.revert());
        };
  }, []);
  return (
    <>
      <p className="mb-6 rd">
        We’re a team of strategic digital marketing working globally with
        largest brands. We believe that progress only happens when you refuse to
        play things safe. We combine ideas and behaviors, and insights with
        design, technological data to produce brand experiences that customers
        love our services.
      </p>
    </>
  );
}
