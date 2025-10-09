"use client";

import React, { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger, SplitText } from "gsap/all";

export default function PricingHeading() {
  useEffect(() => {
    if (typeof window === "undefined") return;

    // Register GSAP plugins
    gsap.registerPlugin(ScrollTrigger, SplitText);

    // Get all title elements
    const splitTitleLines = gsap.utils.toArray(".title-anim");

    splitTitleLines.forEach((splitTextLine) => {
      // Split text into lines
      const split = new SplitText(splitTextLine, { type: "lines" });
      gsap.set(splitTextLine, { perspective: 400 });

      // Animation timeline
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: splitTextLine,
          start: "top 90%",
          end: "bottom 60%",
          scrub: false,
          markers: false,
          toggleActions: "play none none none",
        },
      });

      // Animate each line
      tl.from(split.lines, {
        duration: 1,
        delay: 0.3,
        opacity: 0,
        rotationX: -80,
        force3D: true,
        transformOrigin: "top center -50",
        stagger: 0.1,
        ease: "power3.out",
      });
    });

    // Cleanup GSAP triggers on unmount
    return () => {
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, []);

  return (
    <h3 className="sec-title be-kind title-anim text-4xl md:text-5xl font-bold leading-tight text-left">
      Be kind to your <br />
      mind
    </h3>
  );
}
