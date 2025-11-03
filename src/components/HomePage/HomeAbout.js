import React from "react";
import Image from "next/image";
import aboutImg from "../../../public/assets/imgs/about/3/1.jpg";
import CircleButton from "../../ui/CircleButton";

import TitleAnimHeading from "../layouts/Heading/TitleAnimHeading";
import HomeAboutTextAnimation from "./HomeAboutTextAnimation";


function HomeAbout() {

  return (
    <>
    <TitleAnimHeading/>
    <section className="about__area-3">
      <div className="bg-gradient-to-tr from-blue-950 to-purple-900">
        <div className="container mx-auto px-4 pt-36 pb-28">
          <div className="flex flex-wrap items-center -mx-4">
            <div className="w-full md:w-1/2 px-4 mb-8 md:mb-0">
              <div className="about__img-3">
                <Image
                  src={aboutImg}
                  placeholder="blur"
                  alt="About Thumbnail"
                  className="shadow-md"
                  data-speed="auto"
                />
              </div>
            </div>
            <div className="w-full md:w-1/2 px-4">
              <div className="sec-title-wrapper mb-6">
                <h2 className="sec-sub-title title-anim" label="Who We Are">Who We Are</h2>
                {/* <TitleAnimHeading label="Who We Are" tag="h2" extraClass="sec-sub-title" /> */}
                <h3 className="sec-title text-gray-900 title-anim">We are leading digital marketing agency.</h3>
                {/* <TitleAnimHeading label="We are leading digital marketing agency." tag="h3" extraClass="sec-title text-gray-900" /> */}
              </div>

              <div className="sec-text-wrapper">
                <div className="sec-text text-anim text-gray-600 leading-relaxed">
                 <HomeAboutTextAnimation/>

                  <CircleButton
                    variant="colored"
                    position="left"
                    link="/about"
                    label="Explore Us"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    </>
  );
  
}

export default HomeAbout;
