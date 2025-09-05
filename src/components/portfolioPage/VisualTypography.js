import Image from "next/image";
import React from "react";
import typeImg from "@public/assets/imgs/portfolio/detail/shape.png"

export default function VisualTypography({portfolioData}) {
  return (
    <>
      <div className="block-content  pt-140">
        <div className="flex flex-wrap items-start justify-between">
          <div className="w-full md:w-[42%] lg:w-[34%]">
            <h2 className="portfolio__detail-title title-anim">
              {portfolioData.visualTypographyTitle}
            </h2>
          </div>

          <div className="w-full md:w-[58%] lg:w-[66%]">
            <div className="portfolio__detail-text">
              <p>{portfolioData.visualTypographyDetails}</p>

              <div className="fonts">
                <Image
                  src={typeImg}
                  alt="Font Style"
                />
                <ul>
                  {
                    portfolioData.fonts.map((data,indx)=>(
                        <li className={data.class} key={indx}>
                            <span>{data.weight}</span> {data.example}
                        </li>
                    ))
                  }  
                  
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
