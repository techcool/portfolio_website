import Image from "next/image";
import React from "react";

export default function Thumb1({portfolioData}) {
  return (
    <>
      <div className="portfolio__detail-thumb">
        <Image
          src="assets/imgs/portfolio/detail/1.jpg"
          alt="Portfolio Thumbnail"
          data-speed="auto"
        />
      </div>
    </>
  );
}
