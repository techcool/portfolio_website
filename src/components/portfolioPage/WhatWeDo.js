import React from 'react'

export default function WhatWeDo({portfolioData}) {
  return (
    <>
        <div className="block-content">
              <div className="flex flex-wrap items-start justify-between">
                <div className="w-full md:w-[42%] lg:w-[34%]">
                  <h2 className="portfolio__detail-title title-anim">
                    {portfolioData.whatWeDoTitle}
                  </h2>
                </div>

                <div className="w-full md:w-[58%] lg:w-[66%]">
                  <div className="portfolio__detail-text">
                    <p>{portfolioData.whatWeDoDetails}</p>

                    <ul>
                      {
                        portfolioData.whatWeDo.map((data,indx)=>(
                            <li key={indx}>{data.title}</li>
                        ))
                      }  
                    </ul>
                  </div>
                </div>
              </div>
            </div>
    </>
  )
}
