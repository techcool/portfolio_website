import { testimonialData } from "@/data/testimonialData";
import React from "react";

export default function TestimonialSliderItems() {
  return (
    <>
      {testimonialData.map((data) => (
        <div className="swiper-slide testimonial__slide" key={data.id}>
          <div className="testimonial__inner-2 space-y-4">
            <h2 className="testimonial__title-2 text-2xl font-semibold">
              {data.title}
            </h2>
            <p className="testimonial__text-2 text-gray-600 leading-relaxed">
             {data.message}
            </p>
            <h3 className="testimonial__author font-semibold text-lg">
              {data.name}
            </h3>
            <h4 className="testimonial__role text-sm text-gray-500">
              {data.designation}
            </h4>
          </div>
        </div>
      ))}
      {/* <div className="swiper-slide testimonial__slide">
        <div className="testimonial__inner-2 space-y-4">
          <h2 className="testimonial__title-2 text-2xl font-semibold">
            Amazing digital service
          </h2>
          <p className="testimonial__text-2 text-gray-600 leading-relaxed">
            We were there right at the beginning just when the concept for
            search engine optimisation taking office and the full of internet.
            So we’ve grown to employ more than 50 talented specialists with
            diverse experiences and broad skill sets of huge markers.
          </p>
          <h3 className="testimonial__author font-semibold text-lg">
            Adam Syndera
          </h3>
          <h4 className="testimonial__role text-sm text-gray-500">
            CEO, Agency
          </h4>
        </div>
      </div>

      <div className="swiper-slide testimonial__slide">
        <div className="testimonial__inner-2 space-y-4">
          <h2 className="testimonial__title-2 text-2xl font-semibold">
            Amazing digital service
          </h2>
          <p className="testimonial__text-2 text-gray-600 leading-relaxed">
            We were there right at the beginning just when the concept for
            search engine optimisation taking office and the full of internet.
            So we’ve grown to employ more than 50 talented specialists with
            diverse experiences and broad skill sets of huge markers.
          </p>
          <h3 className="testimonial__author font-semibold text-lg">
            Adam Syndera
          </h3>
          <h4 className="testimonial__role text-sm text-gray-500">
            CEO, Agency
          </h4>
        </div>
      </div>

      <div className="swiper-slide testimonial__slide">
        <div className="testimonial__inner-2 space-y-4">
          <h2 className="testimonial__title-2 text-2xl font-semibold">
            Amazing digital service
          </h2>
          <p className="testimonial__text-2 text-gray-600 leading-relaxed">
            We were there right at the beginning just when the concept for
            search engine optimisation taking office and the full of internet.
            So we’ve grown to employ more than 50 talented specialists with
            diverse experiences and broad skill sets of huge markers.
          </p>
          <h3 className="testimonial__author font-semibold text-lg">
            Adam Syndera
          </h3>
          <h4 className="testimonial__role text-sm text-gray-500">
            CEO, Agency
          </h4>
        </div>
      </div> */}
    </>
  );
}
