"use client";

import gsap from "gsap";
import { SplitText, ScrollTrigger } from "gsap/all";
import { usePathname } from "next/navigation";
import React, { useEffect } from "react";

gsap.registerPlugin(ScrollTrigger, SplitText);

export default function TitleAnimHeading() {
//const pathname = usePathname();
//console.log('pathname ', pathname);

  useEffect(()=>{
    const splits = [];
    const splitTitleLines = gsap.utils.toArray(".title-anim");
    splitTitleLines.forEach((el) => {
      const split = new SplitText(el, { type: "lines" });
      splits.push(split);

      gsap.set(el, { perspective: 400 });
     gsap.from(split.lines, {
        duration: 1,
        opacity: 0,
        rotationX: -80,
        transformOrigin: "top center -50",
        stagger: 0.1,
        scrollTrigger: {
          trigger: el,
          start: "top bottom-=100",
          end: "bottom center",
          toggleActions: "play none none reverse",
          // markers: true, // Enable for debugging
        }
      });
    });

    return () => {
          ScrollTrigger.getAll().forEach((t) => t.kill());
          // revert SplitText DOM changes
          splits.forEach((split) => split.revert());
        };
  },[])

  return null

  // return (
  //   <>
  //     {tag === "h3" ? (
  //       <h3 className={`title-anim ${extraClass}`}>{label}</h3>
  //     ) : tag === "h2" ? (
  //       <h2
  //         className={`title-anim  ${extraClass}`}
  //       >
  //         {label}
  //       </h2>
  //     ) : null}
  //   </>
  // );
}
