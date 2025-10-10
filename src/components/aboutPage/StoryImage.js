"use client";
import React, {useEffect} from 'react'
import storyOne from "@public/assets/imgs/story/1.jpg";
import storyTwo from "@public/assets/imgs/story/2.jpg";
import storyThree from "@public/assets/imgs/story/3.jpg";
import storyFour from "@public/assets/imgs/story/4.jpg";
import Image from "next/image";

import gsap from "gsap";
import { ScrollTrigger, ScrollSmoother, SplitText } from "gsap/all";

gsap.registerPlugin(ScrollTrigger, ScrollSmoother, SplitText);

export default function StoryImage() {
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
      <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          <div className="md:col-span-3">
            <div className="story__img-wrapper">
              <Image src={storyOne} alt="Story Thumbnail" className="w-full rounded-lg" />
            </div>
          </div>

          <div className="md:col-span-5">
            <div className="story__img-wrapper img-anim">
              <Image src={storyTwo} alt="Story Thumbnail" className="w-full rounded-lg" data-speed="auto" />
            </div>
          </div>

          <div className="md:col-span-4 flex flex-col gap-4">
            <div className="story__img-wrapper">
              <Image src={storyThree} alt="Story Thumbnail" className="w-full rounded-lg" />
              <Image src={storyFour} alt="Story Thumbnail" className="w-full rounded-lg" />
            </div>
          </div>
        </div>
    </>
  )
}
