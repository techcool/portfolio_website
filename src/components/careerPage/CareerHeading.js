"use client";
import gsap from "gsap";
import { SplitText } from "gsap/all";
import React, { useEffect } from "react";

export default function CareerHeading() {
  useEffect(() => {
    const animations = [];
    const splits = [];
    const charComeEls = document.querySelectorAll(".animation__char_come");
    charComeEls.forEach((el) => {
      const split = new SplitText(el, { type: "chars, words" });
      splits.push(split);
      const anim = gsap.from(split.chars, {
        duration: 1,
        x: 70,
        autoAlpha: 0,
        stagger: 0.05,
      });
      animations.push(anim);
    });

    return () => {
      // Kill all GSAP animations
      animations.forEach((a) => a.kill());

      // Revert SplitText DOM modifications
      splits.forEach((s) => s.revert());
    };
  },[]);
  return (
    <>
      <h2 className="sec-title-2 animation__char_come">
        Join our team & let’s work together
      </h2>
    </>
  );
}
