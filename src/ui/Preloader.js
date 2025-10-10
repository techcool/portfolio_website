"use client";

import React, { useEffect } from "react";

export default function Preloader() {
  useEffect(() => {
    const preloader = document.querySelector(".preloader");

    const hidePreloader = () => {
      if (preloader) {
        preloader.style.opacity = "0";
        preloader.style.transition = "opacity 0.5s ease-out";
        setTimeout(() => {
          preloader.style.display = "none";
        }, 500); // wait for fade-out
      }
    };

    // ✅ If page already loaded (important for Next.js fast transitions)
    if (document.readyState === "complete") {
      hidePreloader();
    } else {
      window.addEventListener("load", hidePreloader);
    }

    // Cleanup
    return () => {
      window.removeEventListener("load", hidePreloader);
    };
  }, []);

  return (
    <div className="preloader">
      <div className="loading">
        <div className="bar bar1"></div>
        <div className="bar bar2"></div>
        <div className="bar bar3"></div>
        <div className="bar bar4"></div>
        <div className="bar bar5"></div>
        <div className="bar bar6"></div>
        <div className="bar bar7"></div>
        <div className="bar bar8"></div>
      </div>
    </div>
  );
}
