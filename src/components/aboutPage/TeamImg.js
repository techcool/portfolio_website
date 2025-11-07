"use client";

import React, { useEffect } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger, ScrollSmoother } from "gsap/all";


gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

export default function TeamImg({ teamData }) {
  useEffect(() => {
    if (typeof window === "undefined") return;

    const device_width = window.innerWidth;

    // Scroll Smoother setup
    // let smoother;
    // if (ScrollSmoother && device_width >= 1025) {
    //   const skewSetter = gsap.quickTo(".team__img-wrapper img", "skewY");
    //   const clamp = gsap.utils.clamp(-15, 15);

    //   smoother = ScrollSmoother.create({
    //     smooth: 1.35,
    //     effects: true,
    //     smoothTouch: false,
    //     normalizeScroll: false,
    //     ignoreMobileResize: true,
    //     onUpdate: (self) => skewSetter(clamp(self.getVelocity() / -80)),
    //     onStop: () => skewSetter(0),
    //   });
    // }
  }, []);

  return (
    <>
      
      <div className="flex justify-center md:justify-start team__img-wrapper">
        <Image
          src={teamData.image}
          alt={teamData.name}
          className="w-full object-cover"
          data-speed="auto"
          data-lang="0"
        />
      </div>
    </>
  );
}
