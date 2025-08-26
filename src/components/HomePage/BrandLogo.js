import React from "react";
import logo1 from "../../../public/assets/imgs/brand/1.png";
import logo2 from "../../../public/assets/imgs/brand/2.png";      
import logo3 from "../../../public/assets/imgs/brand/3.png";
import logo4 from "../../../public/assets/imgs/brand/4.png";
import logo5 from "../../../public/assets/imgs/brand/5.png";
import logo6 from "../../../public/assets/imgs/brand/6.png";
import Image from "next/image";
//import { brandLogos } from "@/data/navLinks";



function BrandLogo() {
  return (
    <>
      <section className="brand__area">
        <div className="container mx-auto px-4 lg:py-36 md:py-12 py-10">
          <div className="flex flex-wrap">
            <div className="w-full text-center">
              <h2 className="brand__title-3 title-anim">
                We worked with global largest brands
              </h2>

              <div className="brand__list-3 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center justify-items-center">
                {/* {brandLogos.map((logo, index) => (
                  <div className="brand__item-2 fade_bottom" key={index}>   
                    <Image src={logo.img} alt={logo.alt} className="object-contain" />
                  </div>
                ))} */}
                <div className="brand__item-2 fade_bottom">
                  <Image src={logo1} alt="Brand Logo" className="object-contain" />
                </div>
                <div className="brand__item-2 fade_bottom">
                    <Image src={logo2} alt="Brand Logo" className="object-contain" />
                </div>
                <div className="brand__item-2 fade_bottom">
                   <Image src={logo3} alt="Brand Logo" className="object-contain" /> 
                </div>
                <div className="brand__item-2 fade_bottom">
                  <Image src={logo4} alt="Brand Logo" className="object-contain" />  
                  
                </div>
                <div className="brand__item-2 fade_bottom">
                  <Image src={logo5} alt="Brand Logo" className="object-contain" />  
                </div>
                <div className="brand__item-2 fade_bottom">
                  <Image src={logo6} alt="Brand Logo" className="object-contain" />  
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default BrandLogo;
