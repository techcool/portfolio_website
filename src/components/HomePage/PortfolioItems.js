"use client";
import React, { useEffect, useRef } from "react";
import { portfolioData } from "@/data/portfolioData";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";
import Link from "next/link";
import { Swiper } from "swiper";
import { Navigation, Pagination, EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
import { gsap } from "gsap";

function PortfolioItems() {
  const sliderRef = useRef(null);

  useEffect(() => {
    let swiperInstance;

    if (sliderRef.current) {
      swiperInstance = new Swiper(sliderRef.current, {
        modules: [Navigation, Pagination, EffectFade],
        speed: 1500,
        loop: true,
        effect: "fade",
        autoplay: false,
        pagination: {
          el: ".swiper-pagination",
          type: "fraction",
        },
        navigation: {
          nextEl: ".pp-next",
          prevEl: ".pp-prev",
        },
      });
    }

    // ✅ GSAP animation logic
    const tl = gsap.timeline();
    const t2 = gsap.timeline();

    const handleMouseMove = (e) => {
      const target = e.target;
      if (target.closest(".portfolio__slider-3")) {
        tl.to(sliderRef.current, {
          opacity: 1,
          ease: "power4.out",
          duration: 0.3,
        });
      } else {
        t2.to(sliderRef.current, {
          opacity: 0.8,
          ease: "power4.out",
          duration: 0.3,
        });
      }
    };

    document.addEventListener("mousemove", handleMouseMove);

    return () => {
      if (swiperInstance) swiperInstance.destroy(true, true);
      document.removeEventListener("mousemove", handleMouseMove);
      tl.kill();
      t2.kill();
    };
  }, []);

  return (
    <div className="row">
      <div className="col-xxl-12">
        <div ref={sliderRef} className="swiper portfolio__slider-3">
          <div className="swiper-wrapper">
            {portfolioData.slice(0, 5).map((item, index) => (
              <div className="swiper-slide" key={index}>
                <div className="portfolio__slide-3">
                  <Link href={`portfolio/${item.id}`}>
                    <h3 className="portfolio__title-3">
                      {item.title} {item.year}
                    </h3>
                    <Image
                      src={item.imgSrc}
                      alt="Portfolio Image"
                      width={550}
                      height={670}
                      className="object-cover object-center"
                    />
                  </Link>
                </div>
              </div>
            ))}
          </div>

          <div className="swiper-pagination"></div>

          <div className="swiper-btn">
            <div className="pp-prev">
              <FontAwesomeIcon icon={faArrowLeft} />
            </div>
            <div className="pp-next">
              <FontAwesomeIcon icon={faArrowRight} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PortfolioItems;
