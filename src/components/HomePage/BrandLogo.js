import React from "react";

import BrandLogoItems from "./BrandLogoItems";
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

              <BrandLogoItems/>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default BrandLogo;
