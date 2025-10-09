"use client";

import React, { useEffect } from "react";
import ResearchArea from "./ResearchArea";
import WhyChooseCounter from "./WhyChooseCounter";
import WhyChooseCTA from "./WhyChooseCTA";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger /*, SplitText */);

function initHorizontalWorkflow() {
  const deviceWidth = window.innerWidth;
  if (deviceWidth <= 1200) return; // keep original behaviour on mobile/tablet

  const container = document.querySelector(".workflow__wrapper-3");
  if (!container) return;
  
  const sections = gsap.utils.toArray(".wf_panel");
  if (!sections.length) return;

  // Make sure panels are horizontal and each take viewport width
  // We set this via GSAP set so it works even if your CSS didn't cover it.
  gsap.set(container, { display: "flex", flexWrap: "nowrap" });
  sections.forEach((s) => gsap.set(s, { flex: "0 0 100%", width: "100vw" }));

  // Calculate scroll distance = width to move (total panels - 1) * viewport
  const scrollDistance = (sections.length - 1) * window.innerWidth;

  // main timeline that moves panels left
  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: container, // .workflow__area-3
      pin: true,
      scrub: 1,
      start: "top top",
      end: () => "+=" + scrollDistance,
      invalidateOnRefresh: true,
    },
  });

  // animate xPercent across all panels
  tl.to(sections, {
    xPercent: -100 * (sections.length - 1),
    ease: "none",
    duration: 1, // duration here is irrelevant since scrub controls timing
  });

  // Create per-section animations tied to the container animation (tl)
  // Using containerAnimation: tl ensures start/end positions are evaluated relative to the horizontal progress
  sections.forEach((section, i) => {
    // example small tween that fades/zooms the panel in when it's in view
    const sectionTween = gsap.fromTo(
      section,
      { autoAlpha: 0, scale: 0.9 },
      { autoAlpha: 1, scale: 1, duration: 0.6, paused: true }
    );

    ScrollTrigger.create({
      trigger: section,
      containerAnimation: tl, // <--- critical: ties this trigger to the main horizontal timeline
      start: "left center", // these keywords work when evaluating against containerAnimation
      end: "right center",
      onEnter: () => sectionTween.play(),
      onLeave: () => sectionTween.reverse(),
      onEnterBack: () => sectionTween.play(),
      onLeaveBack: () => sectionTween.reverse(),
      invalidateOnRefresh: true,
    });

    // If you use SplitText for titles INSIDE these panels, create & keep references here
    // so you can revert them on cleanup (example commented out):
    //
    // const titleEl = section.querySelector('.title-anim');
    // if (titleEl) {
    //   const split = new SplitText(titleEl, { type: "lines" });
    //   // animate split.lines with ScrollTrigger that has containerAnimation: tl as above
    //   // keep 'split' in an array for cleanup
    // }
  });

  // Ensure ScrollTrigger recalculates when window resizes
  const resizeHandler = () => {
    ScrollTrigger.refresh();
  };
  window.addEventListener("resize", resizeHandler);

  // Return cleanup function
  return () => {
    window.removeEventListener("resize", resizeHandler);
    // kill all triggers created by this flow
    ScrollTrigger.getAll().forEach((t) => t.kill());
    tl.kill();
    // Optionally remove inline styles we applied:
    gsap.set(container, { clearProps: "all" });
    sections.forEach((s) => gsap.set(s, { clearProps: "all" }));
  };
}

export default function WhyChooseUs() {
  useEffect(() => {
    const cleanup = initHorizontalWorkflow();
    return () => cleanup && cleanup();
  }, []);

  return (
    <>
      <section className="workflow__area-3">
        <div className="workflow__wrapper-3">
          <div className="choose-wrapper wf_panel">
            <div className="container mx-auto px-4">
              <div className="flex flex-wrap">
                <div className="w-full">
                  <div className="choose-title-wrapper text-center">
                    <h2 className="choose-title title-anim">
                      why <br />
                      choose us
                    </h2>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <ResearchArea />
          <WhyChooseCounter />
          <WhyChooseCTA />
        </div>
      </section>
    </>
  );
}
