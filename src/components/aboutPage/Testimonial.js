import React from "react";
import TestimonialSlider from "./TestimonialSlider";


export default function Testimonial() {
  return (
    <>
      <section className="testimonial__area-2">
        <div className="container mx-auto px-4 pb-36 relative">
          <span className="line-3 absolute left-0 top-0 h-full w-px bg-gray-200"></span>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
            <div className="md:col-span-5">
              <div className="testimonial__video">
                <video
                  autoPlay
                  muted
                  loop
                  className="w-full h-auto rounded-lg shadow-lg"
                >
                  <source src="assets/video/testimonial.mp4" type="video/mp4" />
                </video>
              </div>
            </div>

            <TestimonialSlider/>
          </div>
        </div>
      </section>
    </>
  );
}
