
"use client"
import React, { useEffect } from "react";
import Image from "next/image";
import CircleButton from "../../ui/CircleButton";
import award from "@public/assets/imgs/awards/award.png";
import Video from "@/ui/Video";
import gsap from "gsap";
import { SplitText } from "gsap/all";


export default function AboutHero() {
  useEffect(() => {
    let word_come = document.querySelectorAll(".animation__word_come");
    word_come.forEach((word_come) => {
      let split_word_come = new SplitText(word_come, {
        type: "chars words",
        position: "absolute",
      });
      gsap.from(split_word_come.words, {
        duration: 1,
        x: 50,
        autoAlpha: 0,
        stagger: 0.05,
      });
    });

  const splits = [];

    // Split text animation for titles
    const splitTitleLines = gsap.utils.toArray(".title-anim p");
    splitTitleLines.forEach((el) => {
      const split = new SplitText(el, { type: "lines" });
      splits.push(split);

      gsap.set(el, { perspective: 400 });
      gsap.timeline({
        scrollTrigger: {
          trigger: el,
          start: "top 90%",
          end: "bottom 60%",
          toggleActions: "play none none none",
        },
      }).from(split.lines, {
        duration: 1,
        delay: 0.3,
        opacity: 0,
        rotationX: -80,
        transformOrigin: "top center -50",
        stagger: 0.1,
      });
    });
  }, []);

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
                  <CircleButton
                    link="services"
                    label="Trends & Technology"
                    position="left"
                    variant="light"
                    modal="false"
                  />
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
              <Video videoSrc="assets/video/video.mp4" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
