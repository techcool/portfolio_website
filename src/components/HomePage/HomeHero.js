import React from "react";
import VideoInfo from "./VideoInfo";
import HeroImg from "./HeroImg";
import Image from "next/image";
import arrowDownIcon from "@public/assets/imgs/icon/arrow-down-sm.png";
import CircleButton from "../common/CircleButton";

function HomeHero() {
  return (
    <>
      <section className="hero__area-3">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap">
            <div className="w-full">
              <div className="hero__inner-3">
                <div className="sec-title-wrapper">
                  <h2 className="sec-sub-title">Digital</h2>
                  <h3 className="sec-title title-left">Mark</h3>
                  <h3 className="sec-title title-right">eting</h3>
                </div>
                <div className="hero__text-3">
                  <p className="hero__text-animation">
                    Static and dynamic secure code review can prevent a day
                    before your product is even released. We can integrate with
                    your dev environment
                  </p>
                </div>
                <CircleButton variant='light' position='left' link="/free-consultation" label="Free Consultation" />
                <div className="scroll-down">
                  <button>
                    <Image src={arrowDownIcon} alt="arrow icon" />
                   
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <VideoInfo />
        <HeroImg />

        
      </section>
    </>
  );
}

export default HomeHero;
