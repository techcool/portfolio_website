import { portfolioData } from "@/data/portfolioData";
import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";

function PortfolioItems2() {
  return (
    <>
      <div className="row">
        <div className="col-xxl-12">
          <div className="swiper portfolio__slider-3">
            <div className="swiper-wrapper">
              {
                portfolioData.slice(0,5).map((item,index)=>(
                    <div className="swiper-slide" key={index}>
                        <div className="portfolio__slide-3">
                            <a href="#">
                                <h3 className="portfolio__title-3">
                                    {item.title} {item.year}
                                </h3>
                                <img
                                    src={item.imgSrc}
                                    alt="Portfolio Image"
                                />
                            </a>
                        </div>
                    </div>
                        
                ))
              }  
             
            </div>

            <div className="swiper-pagination"></div>

            <div className="swiper-btn">
              <div className="pp-prev">
                <FontAwesomeIcon icon={faArrowLeft} />
              </div>
              <div className="pp-next">
                <FontAwesomeIcon icon={faArrowRight}/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default PortfolioItems2;
