"use client"
import React, { useEffect } from "react";
import gsap from "gsap";
import { SplitText } from "gsap/all";

function BlogCategoryHeading({ currentPosts }) {
  useEffect(() => {
    let char_come = document.querySelectorAll(".animation__char_come");

    char_come.forEach((char_come) => {
      let split_char = new SplitText(char_come, { type: "chars, words" });
      gsap.from(split_char.chars, {
        duration: 1,
        x: 70,
        autoAlpha: 0,
        stagger: 0.05,
      });
    });
  }, []);
  return (
    <>
      <h2 className="sec-title-2 ggg animation__char_come">
        {currentPosts.length > 0
          ? currentPosts[0].category
          : "No Category Found"}
      </h2>
    </>
  );
}

export default BlogCategoryHeading;
