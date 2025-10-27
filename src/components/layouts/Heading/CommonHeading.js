"use client"

import React, { useEffect } from "react";
import gsap from "gsap";
import { SplitText } from "gsap/all";

export default function CommonHeading({label, tag, extraClass=''}) {
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
       {tag === "h3" ? (
        <h3 className="text-2xl md:text-4xl animation__char_come">{label}</h3>
      ) : tag === "h2" ? (
        <h2 className={`text-3xl md:text-5xl animation__char_come  ${extraClass}`}>{label}</h2>
      ) : null}
      
    </>
  );
}
