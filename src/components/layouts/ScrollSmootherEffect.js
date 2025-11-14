"use client";

import React, { useEffect } from "react";
import gsap from "gsap";
import { ScrollSmoother } from "gsap/ScrollSmoother";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function ScrollSmootherEffect() {
  useEffect(() => {
    if (typeof window === "undefined") return;

    gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

    const device_width = window.innerWidth;
    let smoother;

    if (ScrollSmoother && device_width >= 1025) {
      smoother = ScrollSmoother.create({
        smooth: 1.35,
        effects: true,
        smoothTouch: false,
        normalizeScroll: false,
        ignoreMobileResize: true,
      });

      // Store globally
      window.smootherInstance = smoother;

      // Event to notify all components
      window.dispatchEvent(new Event("smootherReady"));
    }

    return () => {
      if (smoother) smoother.kill();
    };
  }, []);

  return null;
}
