import React from "react";
import Link from "next/link";
import Image from "next/image";
import { topData } from "@/data/services/topData";
import slugify from "@/libs/slugify";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faCircle } from "@fortawesome/free-solid-svg-icons";
import CommonHeading from "@/components/layouts/Heading/CommonHeading";
import TitleAnimHeading from "@/components/layouts/Heading/TitleAnimHeading";
import ScrollSmootherEffect from "@/components/layouts/ScrollSmootherEffect";

export default async function TopServices({ params }) {
  const { slug } = await params;

  const top = topData.find(
    (item) => slugify(item.slug || item.topCategoryName) === slug
  );
  if (!top) {
    return (
      <div className="container mx-auto py-20 text-center">
        <h2>Service not found</h2>
      </div>
    );
  }
  return (
    <>
      <TitleAnimHeading />
      <ScrollSmootherEffect />

      <div className="services-area top-services pt-16 md:pt-0">
        <div className="container mx-auto px-4 g-0 line pt-110 pb-130">
          <div className="line-3"></div>
          <section className="top-area ">
            <div className="flex items-start justify-between gap-4 md:gap-10 flex-wrap">
              <div className="sec-title-wrapper w-[100%] xl:w-[32%]">
                <CommonHeading
                  label={top?.topCategoryName}
                  tag="h2"
                  extraClass="sec-title"
                />

                <div className="mt-5">
                  <h3 className="title-anim text-xl md:text-2xl">
                    {top?.pageTitle}
                  </h3>
                </div>
              </div>
              <div className="development__wrapper prose w-[100%] xl:w-[64%]">
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
          <section className="development__area top-image mb-10 md:mb-18 lg:mb-20">
            <div className="w-full">
              <div className="development__img">
                <Image
                  data-speed="auto"
                  data-lang="0"
                  src={top.topImg}
                  alt={top.topCategoryName}
                />
              </div>
            </div>
          </section>
          <section className="workflow__area-6 whyChooseUs service__detail customWhyChoose">
            <div className="sec-title-wrapper mb-6">
              <h2 className="title-anim sec-title">{top?.whyChooseHeading}</h2>
            </div>
            <div
              className="prose"
              dangerouslySetInnerHTML={{ __html: top.whyChooseContent }}
            />
            <div className="workflow__area-6 mt-6">
              <div className="line-3"></div>
              <h5 className="text-[18px] md:text-xl">
                {top?.whyChooseListHeading}
              </h5>
              <div className="workflow__wrapper-6 mt-6">
                <div className="flex flex-wrap gap-y-4">
                  {top.whyChooseList.map((list, indx) => (
                    <div key={indx} className="w-full md:w-[25%] pr-4">
                      <div className="workflow__slide-6">
                        <h6 className="workflow__title-6">
                          <FontAwesomeIcon
                            style={{ fontSize: 10 }}
                            icon={faCircle}
                          />{" "}
                          {list.title}
                        </h6>
                        {list.content && <p>{list.content}</p>}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>
          <section className="service__detail latestTrends mt-10 md:mt-20">
            <div className="sec-title-wrapper mb-12">
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
                    <ul className="flex flex-col gap-6">
                      {top.latestTrendList.map((trendList, indx) => (
                        <li key={indx}>
                          <FontAwesomeIcon
                            icon={faCircle}
                            style={{ fontSize: 10 }}
                          />{" "}
                          <strong> {trendList.title}</strong>{" "}
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
              <div className="w-full h-[1px] white-line-4 mb-10"></div>
              <div className="flex flex-wrap items-start justify-between">
                <div className="w-full md:w-[42%] lg:w-[34%]">
                  <h2 className="portfolio__detail-title title-anim">
                    {top.methodologyHeading}
                  </h2>
                </div>
                <div className="w-full md:w-[58%] lg:w-[66%]">
                  <div
                    className="prose mb-6"
                    dangerouslySetInnerHTML={{
                      __html: top.methodologyContent,
                    }}
                  />
                  <ul className="flex flex-col gap-6">
                    {top.methodologyList &&
                      top.methodologyList.map((list, indx) => (
                        <li key={indx}>
                          <div className="flex items-center gap-1 mb-3">
                            <FontAwesomeIcon
                              icon={faCircle}
                              style={{ fontSize: 10 }}
                            />
                            <h6 className="ml-2.5 font-bold text-md">
                              {list?.listHead}
                            </h6>{" "}
                          </div>
                          {list?.listContent}
                        </li>
                      ))}
                  </ul>
                </div>
              </div>
              <div className="w-full h-[1px] white-line-4 mt-10"></div>
            </div>
          </section>
          <section className="development__area mt-14 mb-20">
            <div className="w-full">
              <div className="development__img">
                <Image
                  data-speed="auto"
                  data-lang="0"
                  src={top.specializedServicesImg}
                  alt={top.specializedServicesHeading}
                />
              </div>
            </div>
          </section>
          <section className="services-contents top-level-content">
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
            <div className="services-list grid grid-col-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-14">
              {/* {top.listHeading && (
                <h2 className="portfolio__detail-title title-anim">
                  {top.listHeading}
                </h2>
              )} */}
              {top.servicesList &&
                top.servicesList.map((list, indx) => (
                  <div
                    className="portfolio__service-item opacity-100"
                    key={indx}
                  >
                    <Link href={`/services/${top.slug}/${slugify(list.title)}`}>
                      {list.title && <h3 className="ps-title">{list.title}</h3>}
                      <p>{list?.content}</p>
                    </Link>
                  </div>
                ))}
            </div>
            {/* <div className="bottom-content mt-8">
              {top.ServicesContentTopPartHeading && (
                <h5>{top.ServicesContentTopPartHeading}</h5>
              )}
              <p>{top.specializedServicesContentBottomPart}</p>
            </div> */}
          </section>
          <section className="mt-14 partner-area">
            <div className="row">
              <div className="cta__content">
                <h2 className="cta__title title-anim">{top.lastPartHeading}</h2>
                {/* <p className="text-center">
                  {top.specializedServicesContentTopPart}
                  At Uniterrene Websoft, we do not merely create websites, we
                  create digital platforms to success. We are solution-oriented
                  based on a strategy, innovation, and understanding of business
                  objectives. Collaborate with us to make your online presence a
                  potent growth vehicle.
                </p>
                <p className="strong-txt">
                  <strong>
                    Let’s build your next digital success story, crafted with
                    precision, creativity, and care.
                  </strong>
                </p> */}
                <div
                  className="prose mb-6"
                  dangerouslySetInnerHTML={{
                    __html: top.lastPartContent,
                  }}
                />
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  );
}
