"use client";

import React, { useEffect } from "react";
import ResearchArea from "./ResearchArea";
import WhyChooseCounter from "./WhyChooseCounter";
import WhyChooseCTA from "./WhyChooseCTA";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/all";
gsap.registerPlugin(ScrollTrigger , SplitText);

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
  // sections.forEach((s) => gsap.set(s, { flex: "0 0 100%", width: "100vw" }));

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
    const splitTitleLines = gsap.utils.toArray(".title-anim");

    splitTitleLines.forEach((splitTextLine) => {
      // Split text into lines
      const split = new SplitText(splitTextLine, { type: "lines" });
      gsap.set(splitTextLine, { perspective: 400 });

      // Animation timeline
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: splitTextLine,
          start: "top 90%",
          end: "bottom 60%",
          scrub: false,
          markers: false,
          toggleActions: "play none none none",
        },
      });

      // Animate each line
      tl.from(split.lines, {
        duration: 1,
        delay: 0.3,
        opacity: 0,
        rotationX: -80,
        force3D: true,
        transformOrigin: "top center -50",
        stagger: 0.1,
        ease: "power3.out",
      });
    });

    let io;
    (async () => {
      if (typeof window === "undefined") return;
      try {
        const mod = await import("counterup2");
        const counterUp = mod.default || mod;
        const about_cb = (entries) => {
          entries.forEach((entry) => {
            const el = entry.target;
            if (entry.isIntersecting && !el.classList.contains("is-visible")) {
              counterUp(el, {
                duration: 1000,
                delay: 16,
              });
              el.classList.add("is-visible");
            }
          });
        };
        io = new IntersectionObserver(about_cb, { threshold: 1 });
        const els = document.querySelectorAll(".counter__number");
        els.forEach((el) => io.observe(el));
      } catch (err) {
        // fail silently in prod; log in dev
        console.warn("counterup init failed:", err);
      }
    })();
       
    return () => {
      // disconnect observer
      try {
        if (io) io.disconnect();
      } catch (e) {}
      cleanup && cleanup();
    };
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
