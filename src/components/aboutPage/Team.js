import React from "react";
import TeamSlider from "./TeamSlider";

export default function Team() {
  return (
    <>
      <div className="cursor" id="team_cursor">Drag</div>
      <section className="team__area py-36">
        {/* Section Title */}
        <div className="sec-title-wrapper text-center mb-12">
          <h2 className="sec-sub-title title-anim text-lg font-medium text-gray-500">
            Our Team
          </h2>
          <h3 className="sec-title title-anim text-3xl md:text-4xl font-bold text-gray-900">
            How we work
          </h3>
        </div>

        {/* Swiper Container */}
        <TeamSlider/>
      </section>
    </>
  );
}
