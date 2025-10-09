"use client"

import React, { useEffect } from 'react'
import gsap from "gsap";
import { SplitText } from "gsap/all";

function ContactInfoHeading() {
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
      <h3 className="sub-title-anim-top animation__word_come">Don't be afraid man !<br/> say hello</h3>
    </>
  )
}

export default ContactInfoHeading
