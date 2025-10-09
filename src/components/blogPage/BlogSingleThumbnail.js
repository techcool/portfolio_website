"use client"
import Image from "next/image";
import React, { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger, ScrollSmoother, SplitText } from "gsap/all";


function BlogSingleThumbnail({blog}) {

   useEffect(()=>{
    if (typeof window === "undefined") return;

    gsap.registerPlugin(ScrollTrigger, ScrollSmoother, SplitText);
    const device_width = window.innerWidth;

    // Scroll Smoother setup
    let smoother;
    if (ScrollSmoother && device_width >= 1025) {
      const skewSetter = gsap.quickTo(".portfolio__item-5 img", "skewY");
      const clamp = gsap.utils.clamp(-15, 15);

      smoother = ScrollSmoother.create({
        smooth: 1.35,
        effects: true,
        smoothTouch: false,
        normalizeScroll: false,
        ignoreMobileResize: true,
        onUpdate: (self) => skewSetter(clamp(self.getVelocity() / -80)),
        onStop: () => skewSetter(0),
      });
    }
  },[]) 
  return (
    <>
      <div className="w-full">
        <div className="blog__detail-thumb">
          <Image src={blog.imgSrc} alt={blog.title} data-speed="0.5" />
        </div>
      </div>
    </>
  );
}

export default BlogSingleThumbnail;
