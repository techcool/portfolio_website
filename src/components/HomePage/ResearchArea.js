import { socialLinks } from "@/data/navLinks";
import { whyChooseResearch } from "@/data/whyChooseData";
import Link from "next/link";
import React from "react";

export default function ResearchArea() {
  return (
    <>
      <div className="research__area wf_panel pt-36">
        <div className="container mx-auto px-4 inner_content">
          <div className="flex flex-wrap items-start -mx-4">
            <div className="w-full lg:w-1/2 px-4 mb-12 lg:mb-0">
              <div className="sec-title-wrapper">
                <h2 className="sec-sub-title">
                  why <br />
                  choose us
                </h2>
                <h3 className="sec-title mt-2">
                  Keword, Research Strategy, Survey, & Analytics
                </h3>
                <p className="mt-4 text-gray-600 leading-relaxed">
                  Attention, we take out our round glasses and our sweater with
                  elbow patches to go back to the origins of the user
                  experience: the first mention of the user and its importance
                  was born in the
                </p>
              </div>
              <ul className="research__tools flex space-x-4 mt-6">
                {
                    socialLinks.map((link,index)=>(
                        <li key={index}>
                            <Link href={link.href || "#"} className="text-blue-600 hover:underline">{link.title}</Link>
                        </li>
                    ))
                }
                
              </ul>
            </div>

            <div className="w-full lg:w-1/2 px-4">
              <div className="research__list space-y-8">

                {
                    whyChooseResearch.map(item=>(
                        <div className="research__item flex items-start space-x-6" key={item.id}>
                            <div className="research__number text-3xl font-bold text-blue-600">
                                <span>{item.percent}</span>
                            </div>
                            <div className="research__info">
                                <h4 className="research__title text-xl font-semibold">
                                {item.title}
                                </h4>
                                <p className="text-gray-600">
                                {item.desc}
                                </p>
                            </div>
                        </div>
                    ))
                }
                
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
