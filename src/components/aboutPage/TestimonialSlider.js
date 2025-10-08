"use client";

import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect } from "react";
import TestimonialSliderItems from "./TestimonialSliderItems";

// ✅ Swiper imports for v11+
import Swiper from "swiper";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

export default function TestimonialSlider() {
  useEffect(() => {
    // ✅ Register the Navigation module
    Swiper.use([Navigation]);

    // ✅ Initialize Swiper
    const testimonial_slider = new Swiper(".testimonial__slider", {
      modules: [Navigation],
      spaceBetween: 0,
      loop: true,
      slidesPerView: 1,
      speed: 2000,
      navigation: {
        nextEl: ".next-button",
        prevEl: ".prev-button",
      },
    });

    // ✅ Cleanup
    return () => {
      if (testimonial_slider && testimonial_slider.destroy) {
        testimonial_slider.destroy(true, true);
      }
    };
  }, []);

  return (
    <div className="md:col-span-7">
      <div className="testimonial__slider-wrapper-2">
        <div className="swiper testimonial__slider">
          <div className="swiper-wrapper">
            <TestimonialSliderItems />
          </div>
        </div>

        <div className="testimonial__pagination flex-col flex items-center gap-4 mt-6">
          <button className="prev-button w-10 h-10 flex items-center justify-center rounded-full border border-gray-400 hover:bg-gray-800 hover:text-white transition cursor-pointer">
            <FontAwesomeIcon icon={faArrowLeft} />
          </button>
          <button className="next-button w-10 h-10 flex items-center justify-center rounded-full border border-gray-400 hover:bg-gray-800 hover:text-white transition cursor-pointer">
            <FontAwesomeIcon icon={faArrowRight} />
          </button>
        </div>
      </div>
    </div>
  );
}
