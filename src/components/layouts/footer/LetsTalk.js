"use client";

import React, { useEffect } from "react";
import gsap from "gsap";
import { SplitText } from "gsap/SplitText";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import chroma from "chroma-js";
import { usePathname } from "next/navigation";

export default function LetsTalk() {
  const pathname = usePathname();

  useEffect(() => {
    if (typeof window === "undefined") return;

    // register plugins once (ignore if already registered)
    try {
      gsap.registerPlugin(ScrollTrigger, SplitText);
    } catch (e) {}

    // make sure target exists
    const el = document.querySelector(".end");
    if (!el) return;

    // initial fade in handled by a simple ScrollTrigger animation
    gsap.set(".end", { opacity: 0 });
    const fade = gsap.to(".end", {
      opacity: 1,
      duration: 1,
      ease: "power2.out",
      scrollTrigger: {
        trigger: ".end",
        start: "bottom 100%-=50px",
        once: true,
      },
    });

    // create SplitText and timeline (paused initially)
    const split = new SplitText(".end", { type: "words,chars" });
    const chars = split.chars || [];

    const endGradient = chroma.scale([
      "#F9D371",
      "#F47340",
      "#EF2F88",
      "#8843F2",
    ]);

    const tl = gsap.timeline({ paused: true, repeat: -1, delay: 0.5 });

    tl.to(chars, {
      duration: 0.5,
      scaleY: 0.6,
      ease: "power3.out",
      stagger: 0.04,
      transformOrigin: "center bottom",
    })
      .to(
        chars,
        {
          yPercent: -20,
          ease: "elastic",
          stagger: 0.03,
          duration: 0.8,
        },
        0.5
      )
      .to(
        chars,
        {
          scaleY: 1,
          ease: "elastic.out(2.5, 0.2)",
          stagger: 0.03,
          duration: 1.5,
        },
        0.5
      )
      .to(
        chars,
        {
          color: (i, el, arr) => endGradient(i / arr.length).hex(),
          ease: "power2.out",
          stagger: 0.03,
          duration: 0.3,
        },
        0.5
      )
      .to(
        chars,
        {
          yPercent: 0,
          ease: "back",
          stagger: 0.03,
          duration: 0.8,
        },
        0.7
      )
      .to(chars, {
        color: "#c9f31d",
        duration: 1.4,
        stagger: 0.05,
      });

    // Trigger to start/pause the repeating timeline when the element is in view
    const st = ScrollTrigger.create({
      trigger: ".end",
      start: "bottom 100%-=50px",
      onEnter: () => tl.play(),
      onLeave: () => tl.pause(0),
      onEnterBack: () => tl.play(),
      onLeaveBack: () => tl.pause(0),
    });

    // ensure ScrollTrigger layout is correct
    ScrollTrigger.refresh();

    // cleanup
    return () => {
      try {
        st && st.kill();
        fade && fade.kill();
        tl && tl.kill();
        split && split.revert();
        ScrollTrigger.getAll().forEach((t) => t.kill());
      } catch (e) {}
    };
    // re-run whenever the pathname changes so animation re-inits on client navigation
  }, [pathname]);

  return (
    <>
      <div className="footer__contact-3">
        <a href="/contact-us" className="end">
          Let’s talk
        </a>
      </div>
    </>
  );
}