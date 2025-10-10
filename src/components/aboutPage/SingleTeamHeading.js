"use client"

import React, { useEffect } from "react";
import gsap from "gsap";
import { SplitText } from "gsap/all";

gsap.registerPlugin(SplitText);

export default function SingleTeamHeading({teamData}) {

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
  }, []);
  return (
    <>
      <h2 className="team__member-name-7 animation__char_come mb-4">
        {teamData.name}
      </h2>
      <h3 className="team__member-role-7 animation__char_come">
        {teamData.designation}
      </h3>
    </>
  );
}
