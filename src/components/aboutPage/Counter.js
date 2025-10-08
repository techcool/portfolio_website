"use client";

import { counter } from "@/data/whyChooseData";
import gsap from "gsap";
import React, { useEffect } from "react";
import { ScrollTrigger } from "gsap/all";

export default function Counter() {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const device_width = window.innerWidth;

    // Reset the counters on each mount
    const counters = gsap.utils.toArray(".counter_animation .counter__anim");
    gsap.set(counters, { y: -100, opacity: 0 });

    if (device_width < 1023) {
      counters.forEach((item) => {
        let tl = gsap.timeline({
          scrollTrigger: {
            trigger: item,
            start: "top center+=200",
            // ✅ Re-run animation every time this element enters viewport
            toggleActions: "play none none reset",
          },
        });

        tl.to(item, {
          y: 0,
          opacity: 1,
          ease: "bounce",
          duration: 1.5,
        });
      });
    } else {
      gsap.to(counters, {
        scrollTrigger: {
          trigger: ".counter_animation",
          start: "top center+=300",
          toggleActions: "play none none reset", // ✅ allows re-animation when back
        },
        y: 0,
        opacity: 1,
        ease: "bounce",
        duration: 1.5,
        stagger: 0.3,
      });
    }

    // 🧹 Cleanup
    return () => {
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, []);

  return (
    <section className="counter__area">
      <div className="container mx-auto px-4 relative py-36">
        <div className="counter__wrapper-2 counter_animation grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {counter.map((data, index) => (
            <div className="counter__item-2 counter__anim" key={index}>
              <h2 className="counter__number text-4xl font-bold">{data.number}</h2>
              <p className="mt-2 text-gray-600">
                {data.titlePart1} <br /> {data.titlePart2}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
