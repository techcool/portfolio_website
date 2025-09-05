import Image from "next/image";
import React from "react";

export default function Thumb2({portfolioData}) {
  return (
    <>
      <div className="block-thumb">
        <Image
          src={portfolioData.portFolioThumbImg2}
          alt="Portfolio Image"
          data-speed="0.5"
        />
      </div>
    </>
  );
}
