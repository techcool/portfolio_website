import React from "react";
import { getAllServicesTree } from "@/utils/servicesDataTree";
import Link from "next/link";
import Image from "next/image";

export default function TopServices() {
  const servicesTree = getAllServicesTree();
  return (
    <>
      {servicesTree?.map((top, indx) => (
        <div className="services-top-area" key={indx}>
          <div className="container mx-auto px-4 g-0 line pt-110 pb-130">
            <div className="line-3"></div>
            <div className="flex items-start justify-between gap-12">
              <div className="sec-title-wrapper w-[100%] md:w-[36%]">
                <h2 className="sec-title">{top?.topCategoryName}</h2>
                <h3>{top?.pageTitle}</h3>
              </div>
              <div className="development__wrapper prose w-[100%] md:w-[64%]">
                <div
                  className="development__content prose"
                  dangerouslySetInnerHTML={{ __html: top.description }}
                />
                {/* second level */}

                <ul>
                  {top.children?.length > 0 &&
                    top.children.map((mid, i) =>
                      mid.categoryName ? (
                        <li key={i}>
                          <Link href={`/services/${top.slug}/${mid.slug}`}>
                            + {mid.categoryName}
                          </Link>
                        </li>
                      ) : (
                        ""
                      )
                    )}
                </ul>
              </div>
            </div>
            <div className="w-full">
              <div className="development__img">
                <Image src={top.topImg} alt={top.topCategoryName} />
              </div>
            </div>
            
            <div className="sec-title-wrapper">
            <h2 className="sec-title title-anim">
                {top?.whyChooseHeading}
            </h2>
            <div
                className="prose"
                dangerouslySetInnerHTML={{ __html: top.whyChooseContent }}
            />
            <div className="workflow__area-6">
                <div className="line-3"></div>
                <div className="workflow__wrapper-6">
                <div className="flex items-start justify-between">
                    {top.whyChooseList.map((list, indx) => (
                    <div key={indx} className="w-full md:w-[25%]">
                        <div className="workflow__slide-6">
                            <h6>{list.list}</h6>
                        </div>
                        
                    </div>
                    ))}
                </div>
                </div>
            </div>
            </div>
                    
          </div>
        </div>
      ))}
    </>
  );
}
