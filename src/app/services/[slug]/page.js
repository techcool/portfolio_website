import React from "react";
import { getAllServicesTree } from "@/utils/servicesDataTree";
import Link from "next/link";
import Image from "next/image";
import { topData } from "@/data/services/topData";
import { navLinks } from "@/data/navLinks";
import slugify from "@/libs/slugify";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";

export default async function TopServices({params}) {
 
   const {slug} = await params;

   const top = topData.find((item)=> slugify(item.slug || item.topCategoryName) === slug);
   if (!top) {
    return (
      <div className="container mx-auto py-20 text-center">
        <h2>Service not found</h2>
      </div>
    );
  }

//    console.log("Slugified name:", slugify("Design and Branding"));
// console.log("Slug from params:", slug);

  //const servicesTree = getAllServicesTree();
  const subLinks = navLinks
    .filter((link) => link.submenu)
    .flatMap((link) =>
      link.submenu.flatMap((subLink) => subLink.subServices || [])
    );

  //console.log(subLinkSlug);

  const subLinkTitle = subLinks
    .filter((head) => head.heading)
    .map((s) => s.heading);

  //console.log(subLinkTitle);

  const subLinkSlugs = subLinkTitle.map((slug) => slugify(slug));

  //console.log(subLinkSlugs);

  return (
    <>
        <div className="services-area">
          <div className="container mx-auto px-4 g-0 line pt-110 pb-130">
            <div className="line-3"></div>
            <section className="top-area ">
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

                  {/* <ul>
                    {subLinkTitle.map((mid, i) => (
                      <li key={i}>
                        <Link href={`/services/${top.slug}/${subLinkSlugs[i]}`}>
                          + {mid}
                        </Link>
                      </li>
                    ))}
                  </ul> */}
                </div>
              </div>
            </section>
            <section className="development__area top-image">
              <div className="w-full">
                <div className="development__img">
                  <Image src={top.topImg} alt={top.topCategoryName} />
                </div>
              </div>
            </section>
            <section className="workflow__area-6 whyChooseUs">
              <div className="sec-title-wrapper">
                <h2 className="sec-title title-anim">
                  {top?.whyChooseHeading}
                </h2>
              </div>
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
                          <h6 className="workflow__title-6">{list.title}</h6>
                          {list.content && <p>{list.content}</p>}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </section>
            <section className="service__detail latestTrends">
              <div className="sec-title-wrapper">
                <h2 className="sec-title title-anim">
                  {top?.latestTrendsHeading}
                </h2>
              </div>
              <div className="content-wapper flex align-start justify-between">
                <div className="hidden md:block md:w-[25%] pr-10">
                  <div className="service__detail-circle">
                    <span></span>
                  </div>
                </div>
                <div className="w-full md:w-[75%]">
                  <div className="service__detail-img">
                    <Image src={top.trendImg} alt={top.latestTrendsHeading} />
                  </div>
                  <div
                    className="service__detail-content prose"
                    dangerouslySetInnerHTML={{ __html: top.latestTrend }}
                  />
                  {top.latestTrendList ? (
                    <div className="trendList">
                      <ul>
                        {top.latestTrendList.map((trendList, indx) => (
                          <li key={indx}>
                            <strong>{trendList.title}</strong>{" "}
                            {trendList.content}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ) : null}
                </div>
              </div>
            </section>
            <section className="methodology mt-12">
              <div className="block-content">
                <div className="w-full h-[1px] bg-blue-100 mb-10"></div>
                <div className="flex flex-wrap items-start justify-between">
                  <div className="w-full md:w-[42%] lg:w-[34%]">
                    <h2 className="portfolio__detail-title title-anim">
                      {top.methodologyHeading}
                    </h2>
                  </div>
                  <div className="w-full md:w-[58%] lg:w-[66%]">
                    <div
                      className="prose mb-3.5"
                      dangerouslySetInnerHTML={{
                        __html: top.methodologyContent,
                      }}
                    />
                    <ol className="flex flex-col gap-6">
                      {top.methodologyList &&
                        top.methodologyList.map((list, indx) => (
                          <li key={indx}>
                            <FontAwesomeIcon icon={faCheck} />
                            <strong className="ml-2.5">
                              {list?.listHead}:
                            </strong>{" "}
                            {list?.listContent}
                          </li>
                        ))}
                    </ol>
                  </div>
                </div>
                <div className="w-full h-[1px] bg-blue-100 mt-10"></div>
              </div>
            </section>
            <section className="development__area">
              <div className="w-full">
                <div className="development__img">
                  <Image
                    src={top.specializedServicesImg}
                    alt={top.specializedServicesHeading}
                  />
                </div>
              </div>
            </section>
            <section className="services-contents">
              <div className="block-content">
                <div className="flex flex-wrap items-start justify-between">
                  <div className="w-full md:w-[42%] lg:w-[34%]">
                    <h2 className="portfolio__detail-title title-anim">
                      {top.specializedServicesHeading}
                    </h2>
                  </div>
                  <div className="w-full md:w-[58%] lg:w-[66%]">
                    <div className=" mb-3.5">
                      <p>{top.specializedServicesContentTopPart}</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="services-list grid grid-col-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                {top.listHeading && (
                  <h2 className="portfolio__detail-title title-anim">
                    {top.listHeading}
                  </h2>
                )}
                {top.servicesList &&
                  top.servicesList.map((list, indx) => (
                    <div
                      className="portfolio__service-item opacity-100"
                      key={indx}
                    >
                      <Link href="#">
                        {list.title && (
                          <h3 className="ps-title">{list.title}</h3>
                        )}
                        <p>{list?.content}</p>
                      </Link>
                    </div>
                  ))}
              </div>
              <div className="bottom-content mt-8">
                {top.ServicesContentTopPartHeading && (
                  <h5>{top.ServicesContentTopPartHeading}</h5>
                )}
                <p>{top.specializedServicesContentTopPart}</p>
              </div>
            </section>
          </div>
        </div>
    </>
  );
}
