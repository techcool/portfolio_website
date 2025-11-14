import React from "react";
import TeamSliderItems from "./TeamSliderItems";

export default function TeamSlider({teamCursorRef}) {
  return (
    <>
      <div className="swiper team__slider">
        <div className="swiper-wrapper">
            <TeamSliderItems teamCursorRef={teamCursorRef}/>
        </div>
      </div>
    </>
  );
}
