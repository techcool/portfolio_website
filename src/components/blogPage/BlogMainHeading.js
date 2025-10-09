"use client"
import React, { useEffect } from "react";
import gsap from "gsap";
import { SplitText } from "gsap/all";

function BlogMainHeading({blog}) {
useEffect(() => {
    let char_come = document.querySelectorAll(".animation__word_come");

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
      <h2 className="blog__detail-date animation__word_come">
        {blog.category}
      </h2>
      <h3 className="blog__detail-title animation__word_come">{blog.title}</h3>
    </>
  );
}

export default BlogMainHeading;
