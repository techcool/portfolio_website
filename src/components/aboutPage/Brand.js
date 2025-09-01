import React from 'react'
import BrandList from './BrandList'

export default function Brand() {
  return (
    <>
       <section className="brand__area">
          <div className="container mx-auto px-4 g-0 line pt-140 pb-140">
            {/* <span className="line-3"></span> */}
            <div className="row g-0">
              <div className="w-full">
                <div className="sec-title-wrapper">
                  <h2 className="sec-sub-title title-anim">Internation Brands</h2>
                  <h3 className="sec-title title-anim">We are happy to work with global <br />
                    largest brands</h3>
                </div>
              </div>
              <BrandList/>  
              
            </div>
          </div>
        </section>
    </>
  )
}
