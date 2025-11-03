"use client"

import React, { useEffect } from 'react'
import gsap from "gsap";
import { ScrollSmoother } from "gsap/ScrollSmoother";
import { ScrollTrigger } from "gsap/ScrollTrigger";



export default function ScrollSmootherEffect() {
 //const pathname = usePathname();
     useEffect(() => {
      gsap.registerPlugin(ScrollTrigger, ScrollSmoother);
        if (typeof window === "undefined") return;
    
    
        const device_width = window.innerWidth;
    
        // Scroll Smoother setup
        let smoother;
        if (ScrollSmoother && device_width >= 1025) {
          //const skewSetter = gsap.quickTo(".portfolio__item-5 img", "skewY");
          const clamp = gsap.utils.clamp(-15, 15);
    
          smoother = ScrollSmoother.create({
            smooth: 1.35,
            effects: true,
            smoothTouch: false,
            normalizeScroll: false,
            ignoreMobileResize: true,
           // onUpdate: (self) => skewSetter(clamp(self.getVelocity() / -80)),
          //  onStop: () => skewSetter(0),
          });
        }
    
        // Keep track of SplitText instances so we can revert them later
    
    
        // Cleanup — destroy all animations and revert SplitText
        return () => {
         // ScrollTrigger.getAll().forEach((t) => t.kill());
          if (smoother) smoother.kill();
    
        };
      }, []);

  return null
}
