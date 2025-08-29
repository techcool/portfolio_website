import React from "react";

import Image from "next/image";
import arrowDownIcon from "../../../public/assets/imgs/icon/arrow-down-sm.png";
import HeroImg from "../HomePage/HeroImg";
import VideoInfo from "../HomePage/VideoInfo";

function HomeHero2() {
  return (
    <>
      <section className="hero__area-3">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap">
            <div className="w-full">
              <div className="hero__inner-3">
                <div className="sec-title-wrapper">
                  <h2 className="sec-sub-title">Digital</h2>
                  <h3 className="sec-title title-left black">Mark</h3>
                  <h3 className="sec-title title-right black">eting</h3>
                </div>
                <div className="hero__text-3">
                  <p className="hero__text-animation">
                    Static and dynamic secure code review can prevent a day
                    before your product is even released. We can integrate with
                    your dev environment
                  </p>
                </div>
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
        < HeroImg />

        
      </section>
    </>
  );
}

export default HomeHero2;
