import { counter } from "@/data/whyChooseData";
import React from "react";

import counterImg from "../../../public/assets/imgs/thumb/counter-3.png"
import Image from "next/image";

export default function WhyChooseCounter() {
  return (
    <>
      <div className="counter__area-3 wf_panel py-20">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap">
            <div className="w-full">
              <div className="sec-title-wrapper text-center">
                <h2 className="sec-sub-title">
                  Why <br />
                  Choose Us
                </h2>
              </div>
            </div>
          </div>

          <div className="flex flex-wrap items-center -mx-4">
            <div className="w-full md:w-5/12 px-4 mb-10 md:mb-0">
              <div className="counter__wrapper-3 grid grid-cols-2 gap-8">
                {
                    counter.map((item)=>(
                        <div className="counter__item-3" key={item.id}>
                            <h2 className="counter__number">{item.number}</h2>
                            <p className="text-gray-600">
                                {item.titlePart1} <br />
                                {item.titlePart2}
                            </p>
                        </div>
                    ))
                }
                
              </div>
            </div>

            <div className="w-full md:w-7/12 px-4">
              <div className="counter__img-3">
                <Image src={counterImg} alt="Counter Image" className="rounded-lg shadow-lg"/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
