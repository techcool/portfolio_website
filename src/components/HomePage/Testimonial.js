import { testimonialData } from "@/data/testimonialData";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";

import Image from "next/image";
import testimonialImg1 from '../../../public/assets/imgs/testimonial/3/1.jpg'
import testimonialImg2 from '../../../public/assets/imgs/testimonial/3/2.jpg'   
import testimonialImg3 from '../../../public/assets/imgs/testimonial/3/3.jpg'
import testimonialImg4 from '../../../public/assets/imgs/testimonial/3/4.jpg'
import testimonialImg5 from '../../../public/assets/imgs/testimonial/3/5.jpg'
import testimonialImg6 from '../../../public/assets/imgs/testimonial/3/6.jpg'

function Testimonial() {
  return (
    <>
      <section className="testimonial__area-3">
        <div className="container mx-auto px-4">
          <div className="row">
            <div className="col-xxl-12">
              <div className="swiper testimonial__slider-3">
                <div className="swiper-wrapper">
                  {
                    testimonialData.map((testimonial,index) => (
                        <div className="swiper-slide testimonial__slide-3" key={index}>
                          <p>{testimonial.message}</p>
                          <h2 className="client__name-3">{testimonial.name}</h2>
                            <h3 className="client__role-3">{testimonial.role}</h3>
                        </div>
                    ))
                  }  
                 
                </div>
                <div className="next-button swipper-btn">
                  <FontAwesomeIcon icon={faArrowLeft} />
                </div>
                <div className="prev-button swipper-btn">
                  <FontAwesomeIcon icon={faArrowRight} />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="testimonial__images-3 animation_image_zoom">
          <Image src={testimonialImg1} alt="testimonial Image" className="testimonial3__img" />  
            <Image src={testimonialImg2} alt="testimonial Image" className="testimonial3__img-2" />
            <Image src={testimonialImg3} alt="testimonial Image" className="testimonial3__img-3" />
            <Image src={testimonialImg4} alt="testimonial Image" className="testimonial3__img-4" />
            <Image src={testimonialImg5} alt="testimonial Image" className="testimonial3__img-5" />
            <Image src={testimonialImg6} alt="testimonial Image" className="testimonial3__img-6" />
          
        </div>
      </section>
    </>
  );
}

export default Testimonial;
