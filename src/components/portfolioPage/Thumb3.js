import Image from "next/image";
import React from "react";

export default function Thumb3({portfolioData}) {
  return (
    <>
      <div className="block-thumb">
        <Image
          src={portfolioData.portFolioThumbImg3}
          alt="Portfolio Image"
          data-speed="0.5"
        />
      </div>
    </>
  );
}
