import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import TestimonialSliderItems from './TestimonialSliderItems'

export default function TestimonialSlider() {
  return (
    <>
        <div className="md:col-span-7">
              <div className="testimonial__slider-wrapper-2">
                <div className="swiper testimonial__slider">
                  <div className="swiper-wrapper">
                    <TestimonialSliderItems/>
                  </div>
                </div>

                <div className="testimonial__pagination flex-col flex items-center gap-4 mt-6">
                  <button className="prev-button w-10 h-10 flex items-center justify-center rounded-full border border-gray-400 hover:bg-gray-800 hover:text-white transition cursor-pointer">
                    <FontAwesomeIcon icon={faArrowRight} className="fa-solid"></FontAwesomeIcon>
                  </button>
                  <button className="next-button w-10 h-10 flex items-center justify-center rounded-full border border-gray-400 hover:bg-gray-800 hover:text-white transition cursor-pointer">
                    <FontAwesomeIcon icon={faArrowLeft} className="fa-solid fa-arrow-left"></FontAwesomeIcon>
                  </button>
                </div>
              </div>
            </div>
    </>
  )
}
