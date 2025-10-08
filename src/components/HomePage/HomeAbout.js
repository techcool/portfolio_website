"use client";

import React, { useEffect } from "react";
import Image from "next/image";
import aboutImg from "../../../public/assets/imgs/about/3/1.jpg";
import CircleButton from "../../ui/CircleButton";
import gsap from "gsap";
import { ScrollTrigger, ScrollSmoother, SplitText } from "gsap/all";

gsap.registerPlugin(ScrollTrigger, ScrollSmoother, SplitText);

function HomeAbout() {
  useEffect(() => {
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

    // Keep track of SplitText instances so we can revert them later
    const splits = [];

    // Split text animation for titles
    const splitTitleLines = gsap.utils.toArray(".title-anim");
    splitTitleLines.forEach((el) => {
      const split = new SplitText(el, { type: "lines" });
      splits.push(split);

      gsap.set(el, { perspective: 400 });
      gsap.timeline({
        scrollTrigger: {
          trigger: el,
          start: "top 90%",
          end: "bottom 60%",
          toggleActions: "play none none none",
        },
      }).from(split.lines, {
        duration: 1,
        delay: 0.3,
        opacity: 0,
        rotationX: -80,
        transformOrigin: "top center -50",
        stagger: 0.1,
      });
    });

    // Split text animation for paragraphs
    const splitTextLines = gsap.utils.toArray(".text-anim p");
    splitTextLines.forEach((el) => {
      const split = new SplitText(el, { type: "lines" });
      splits.push(split);

      gsap.set(el, { perspective: 400 });
      gsap.timeline({
        scrollTrigger: {
          trigger: el,
          start: "top 90%",
          end: "bottom 60%",
          toggleActions: "play none none none",
        },
      }).from(split.lines, {
        duration: 1,
        delay: 0.5,
        opacity: 0,
        rotationX: -80,
        transformOrigin: "top center -50",
        stagger: 0.1,
      });
    });

    // Cleanup — destroy all animations and revert SplitText
    return () => {
      ScrollTrigger.getAll().forEach((t) => t.kill());
      if (smoother) smoother.kill();

      // revert SplitText DOM changes
      splits.forEach((split) => split.revert());
    };
  }, []);

  return (
    <section className="about__area-3">
      <div className="bg-gradient-to-tr from-blue-950 to-purple-900">
        <div className="container mx-auto px-4 pt-36 pb-28">
          <div className="flex flex-wrap items-center -mx-4">
            <div className="w-full md:w-1/2 px-4 mb-8 md:mb-0">
              <div className="about__img-3">
                <Image
                  src={aboutImg}
                  placeholder="blur"
                  alt="About Thumbnail"
                  className="shadow-md"
                  data-speed="auto"
                />
              </div>
            </div>
            <div className="w-full md:w-1/2 px-4">
              <div className="sec-title-wrapper mb-6">
                <h2 className="sec-sub-title title-anim">Who We Are</h2>
                <h3 className="sec-title title-anim text-gray-900">
                  We are leading digital marketing agency.
                </h3>
              </div>

              <div className="sec-text-wrapper">
                <div className="sec-text text-anim text-gray-600 leading-relaxed">
                  <p className="mb-6">
                    We’re a team of strategic digital marketing working globally
                    with largest brands. We believe that progress only happens
                    when you refuse to play things safe. We combine ideas and
                    behaviors, and insights with design, technological data to
                    produce brand experiences that customers love our services.
                  </p>

                  <CircleButton
                    variant="colored"
                    position="left"
                    link="/about"
                    label="Explore Us"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HomeAbout;
