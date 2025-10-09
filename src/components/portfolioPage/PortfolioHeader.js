"use client";

import React, { useEffect } from "react";
import gsap from "gsap";
import { SplitText } from "gsap/all";

gsap.registerPlugin(SplitText);

function PortfolioHeader() {
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

    const charComeLongEls = document.querySelectorAll(".animation__char_come_long");
    charComeLongEls.forEach((el) => {
      const split = new SplitText(el, { type: "chars, words" });
      splits.push(split);
      const anim = gsap.from(split.chars, {
        duration: 1,
        x: 70,
        autoAlpha: 0,
        stagger: 0.15,
      });
      animations.push(anim);
    });

    return () => {
      // Kill all GSAP animations
      animations.forEach((a) => a.kill());

      // Revert SplitText DOM modifications
      splits.forEach((s) => s.revert());
    };
  }, []);

  return (
    <div>
      <h2 className="sec-sub-title animation__char_come">Featured</h2>
      <h3 className="sec-title animation__char_come_long">Work</h3>
      <p>
        View the full case study of our recent featured and awesome works that we created
        for our clients.
      </p>
    </div>
  );
}

export default PortfolioHeader;
