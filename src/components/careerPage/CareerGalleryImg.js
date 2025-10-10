"use client"

import React, { useEffect } from "react";
import galleryPic1 from "@public/assets/imgs/career/2.jpg";
import galleryPic2 from "@public/assets/imgs/career/3.jpg";
import galleryPic3 from "@public/assets/imgs/career/4.jpg";
import galleryPic4 from "@public/assets/imgs/career/5.jpg";
import Image from "next/image";

import gsap from "gsap";
import { ScrollTrigger, ScrollSmoother, SplitText } from "gsap/all";

gsap.registerPlugin(ScrollTrigger, ScrollSmoother, SplitText);

export default function CareerGalleryImg() {
  useEffect(() => {
    if (typeof window === "undefined") return;

    const deviceWidth = window.innerWidth;
    let smoother;
    let ctx = gsap.context(() => {
      if (ScrollSmoother && deviceWidth >= 1025) {
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
    });

    // 🔹 Cleanup on unmount
    return () => {
      ctx.revert(); // removes all GSAP effects tied to this component
      if (smoother && smoother.kill) smoother.kill(); // kills smoother instance
      ScrollTrigger.getAll().forEach((t) => t.kill()); // clean up scroll triggers
    };
  }, []);
  return (
    <>
      <div className="flex flex-wrap gap-4 justify-between">
        <div className="w-full md:w-[23%] ">
          <div className="career__gallery-img">
            <Image src={galleryPic1} alt="Career image 1" />
          </div>
        </div>
        <div className="w-full md:w-[40%]">
          <div className="career__gallery-img img-anim">
            <Image src={galleryPic2} alt="Career image 2" data-speed="auto" />
          </div>
        </div>
        <div className="w-full md:w-[33%]">
          <div className="career__gallery-img">
            <Image src={galleryPic3} alt="Career image 3" />
            <Image src={galleryPic4} alt="Career image 4" />
          </div>
        </div>
      </div>
    </>
  );
}
