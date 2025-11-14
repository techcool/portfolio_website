"use client"
import { counter } from '@/data/whyChooseData'
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import React, { useEffect } from 'react'

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
   
    // Cleanup
    return () => {
       if (io) io.disconnect();
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, []);
  return (
    <>
       {counter.map((item) => (
        <div className="counter__item-3 counter__anim" key={item.id}>
        <h2 className="counter__number text-3xl md:text-4xl">{item.number}</h2>
        <p className="text-gray-600">
            {item.titlePart1} {item.titlePart2}
        </p>
        </div>
    ))}
    </>
  )
}
