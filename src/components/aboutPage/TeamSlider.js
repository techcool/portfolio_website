import React from "react";
import TeamSliderItems from "./TeamSliderItems";

export default function TeamSlider() {
  return (
    <>
      <div className="swiper team__slider">
        <div className="swiper-wrapper">
            <TeamSliderItems/>
        </div>
      </div>
    </>
  );
}
