import { counter } from "@/data/whyChooseData";
import React from "react";

export default function Counter() {
  return (
    <>
      <section className="counter__area">
        <div className="container mx-auto px-4 relative py-36">
         
          {/* <span className="line-3 absolute left-0 top-0 h-full w-px bg-gray-200"></span> */}

          <div className="counter__wrapper-2 counter_animation grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {/* Counter Item */}
            {
                counter.map((data, index)=>(
                    <div className="counter__item-2 counter__anim" key={index}>
                        <h2 className="counter__number text-4xl font-bold">{data.number}</h2>
                        <p className="mt-2 text-gray-600">
                            {data.titlePart1} <br /> {data.titlePart2}
                        </p>
                        {/* <span className="counter__border block mx-auto mt-4 h-1 w-12 bg-black"></span> */}
                    </div>
                ))
            }
            
          </div>
        </div>
      </section>
    </>
  );
}
