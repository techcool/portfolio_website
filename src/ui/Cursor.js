"use client";

import React, { useEffect } from "react";
import gsap from "gsap";

export default function Cursor() {
  useEffect(() => {
    const clientCursor = document.getElementById("client_cursor");
    const teamCursor = document.getElementById("team_cursor");
    const portfCursor6 = document.getElementById("portf_cursor_6");
    const featuredCursor = document.getElementById("featured_cursor");
    const portfolio4Cursor = document.getElementById("portfolio4_cursor");

    // Helper function for fade toggle
    const toggleCursor = (targetEl, condition) => {
      if (!targetEl) return;
      gsap.to(targetEl, {
        opacity: condition ? 1 : 0,
        duration: 0.3,
        ease: "power2.out",
      });
    };

    // Mousemove handler (optimized — no repeated code)
    const handleMouseMove = (e) => {
      const target = e.target;

      // Cursor move
      gsap.to(".cursor1", {
        x: e.clientX,
        y: e.clientY,
        ease: "power2.out",
        duration: 0.2,
      });
      gsap.to(".cursor2", {
        x: e.clientX,
        y: e.clientY,
        ease: "power2.out",
        duration: 0.3,
      });

      // Cursor visibility based on hover target
      toggleCursor(clientCursor, target.closest(".testimonial__img"));
      toggleCursor(teamCursor, target.closest(".team__slider"));
      toggleCursor(portfCursor6, target.closest(".portfolio__item-6"));
      toggleCursor(featuredCursor, target.closest(".portfolio__slider-3"));
      toggleCursor(portfolio4Cursor, target.closest(".portfolio__area-5"));
    };

    // ✅ Add listener
    document.addEventListener("mousemove", handleMouseMove);

    // ✅ Cleanup on unmount
    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      gsap.globalTimeline.clear(); // clears running tweens safely
    };
  }, []);

  return (
    <>
      <div className="cursor1"></div>
      <div className="cursor2"></div>
    </>
  );
}
