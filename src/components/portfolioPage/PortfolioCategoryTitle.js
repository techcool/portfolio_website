"use client"
import React, { useEffect } from 'react'
import gsap from "gsap";
import { SplitText } from "gsap/all";

gsap.registerPlugin(SplitText);

function PortfolioCategoryTitle({filteredPortfolio}) {

   useEffect(()=>{
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
   },[]) 
  return (
    <>
        <h2 className="sec-title-2 animation__char_come">
            {filteredPortfolio.length > 0
                ? filteredPortfolio[0].category
                : "No Category Found"}
        </h2>
    </>
  )
}

export default PortfolioCategoryTitle
