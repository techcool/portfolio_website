import imgRef from "@/utils/images";
import Image from "next/image";
import React from "react";

function HeroImg() {
  return (
    <>
      <div className="hero3-img-ani">
        <Image src={imgRef.homeHeroImg} alt="Hero Image" className="hero3-img" width={1000} height={293}/>
        
      </div>
    </>
  );
}

export default HeroImg;
