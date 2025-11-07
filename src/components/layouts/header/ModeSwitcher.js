"use client";

import React, { useEffect } from "react";
import Sun from "@/components/icons/Sun";
import Moon from "@/components/icons/Moon";

export default function ModeSwitcher() {
  useEffect(() => {
    const buttons = document.querySelectorAll(".mode-type button");

    function handleClick(e) {
      const buttons = document.querySelectorAll(".mode-type button");
      buttons.forEach((btn) => btn.classList.remove("active"));

      // Instead of adding to current button
      // Add to the sibling one
      const sibling =
        e.currentTarget.nextElementSibling ||
        e.currentTarget.previousElementSibling;

      if (sibling) {
        sibling.classList.add("active");
      }

      const modeVal = sibling?.getAttribute("data-mode");
      if (modeVal === "dark") {
        document.body.classList.add("dark");
      } else {
        document.body.classList.remove("dark");
      }
    }

    // Attach event listeners
    buttons.forEach((btn) => btn.addEventListener("click", handleClick));

    // Cleanup listeners on unmount
    return () => {
      buttons.forEach((btn) => btn.removeEventListener("click", handleClick));
    };
  }, []);

  return (
    <div className="mode-type">
      <button
        className="search-icon switcherIcon active cursor-pointer"
        id="light_mode_icon"
        data-mode="light"
        title="Light Mode"
      >
        <Sun />
      </button>
      <button
        className="search-icon switcherIcon cursor-pointer"
        id="dark_mode_icon"
        data-mode="dark"
        title="Dark Mode"
      >
        <Moon />
      </button>
    </div>
  );
}
