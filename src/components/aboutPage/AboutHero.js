import React from 'react'
import Image from "next/image";
import CircleButton from '../../ui/CircleButton';
import award from "@public/assets/imgs/awards/award.png"
import Video from '@/ui/Video';


export default function AboutHero() {
  return (
    <>
      <section className="hero__about">
        <div className="container mx-auto px-4 relative">
          
          {/* Content Section */}
          <div className="w-full">
            <div className="hero__about-content text-center lg:text-left">
              <h1 className="hero-title animation__word_come text-3xl md:text-5xl font-bold leading-tight">
                We’re a full service creative and digital agency, working
                globally with the largest brands.
              </h1>

              <div className="hero__about-info mt-8 flex flex-col lg:flex-row items-start lg:items-center gap-8">
                {/* Button */}
                <div className="hero__about-btn">
                 
                  <CircleButton link="services" label='Trends & Technology' position='left' variant='light' modal='false'/>
                </div>

                {/* Text */}
                <div className="hero__about-text title-anim max-w-xl">
                  <p className="text-gray-600">
                    Think of the world's most iconic and successful
                    brands—easily findable, impactful, interactional, and
                    exceptional designs. Our story began in 2013.
                  </p>
                </div>

                {/* Award */}
                <div className="hero__about-award">
                  <Image
                    src={award}
                    alt="Best Studio Award"
                    className="mx-auto lg:mx-0"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Video Section */}
          <div className="w-full mt-12">
            <div className="hero__about-video relative overflow-hidden rounded-xl shadow-lg">
              <Video videoSrc="assets/video/video.mp4"/>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
