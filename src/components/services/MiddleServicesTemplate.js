import Image from "next/image";
import Link from "next/link";
import React from "react";
import FaqAccordion from "../HomePage/FaqAccordion";
import slugify from "@/libs/slugify";
import { navLinks } from "@/data/navLinks";
import CommonHeading from "../layouts/Heading/CommonHeading";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircle } from "@fortawesome/free-solid-svg-icons";
import TitleAnimHeading from "../layouts/Heading/TitleAnimHeading";

export default function MiddleServicesTemplate({ midService, midSlug }) {
  const subLinks = navLinks
    .filter((link) => link.submenu)
    .flatMap((link) =>
      link.submenu.flatMap((subLink) => subLink.subServices || [])
    );

  const subLinkTitle = subLinks
    .filter((subLink) => slugify(subLink.heading) === midSlug)
    .flatMap((s) => s.subNavs || []);
  return (
    <>
      <TitleAnimHeading />
      <div className="services-area midServices pt-16 md:pt-0">
        <div className="container mx-auto px-4 g-0 line pt-110 pb-130">
          <div className="line-3"></div>
          <section className="top-area ">
            <div className="flex items-start justify-between gap-4 md:gap-10 flex-wrap">
              <div className="sec-title-wrapper w-[100%] md:w-[32%]">
                <CommonHeading
                  label={midService?.categoryName}
                  tag="h2"
                  extraClass="sec-title"
                />
              </div>
              <div className="development__wrapper prose w-[100%] md:w-[64%]">
                <div
                  className="development__content prose"
                  dangerouslySetInnerHTML={{ __html: midService.description }}
                />
                <ul>
                  {subLinkTitle &&
                    subLinkTitle.map((list, i) => (
                      <li key={i}>
                        <Link
                          href={`/services/${midService.parent}/${
                            midService.slug
                          }/${slugify(list?.title)}`}
                        >
                          + {list?.title}
                        </Link>
                      </li>
                    ))}
                </ul>
              </div>
            </div>
          </section>
          <section className="development__area top-image mb-10 md:mb-18 lg:mb-20">
            <div className="w-full">
              <div className="development__img">
                <Image
                  data-speed="auto"
                  data-lang="0"
                  src={midService.topImg}
                  alt={midService.categoryName}
                />
              </div>
            </div>
          </section>
          <section className="workflow__area-6 whyChooseUs service__detail">
            <div className="sec-title-wrapper mb-6">
              <h2 className="sec-title title-anim">
                {midService?.topFeatureHeading}
              </h2>
            </div>
            <div
              className="prose"
              dangerouslySetInnerHTML={{ __html: midService.whyChooseContent }}
            />
            <div className="workflow__area-6 mt-6">
              <div className="line-3"></div>
              {midService.topFeatureListHead && (
                <h5 className="text-[18px] md:text-xl">
                  {midService.topFeatureListHead}
                </h5>
              )}
              <div className="workflow__wrapper-6 mt-6">
                <div className="flex flex-wrap gap-y-4">
                  {midService.TopFeatureList.map((list, indx) => (
                    <div key={indx} className="w-full md:w-[25%]">
                      <div className="workflow__slide-6 pr-4">
                        <h6 className="workflow__title-6">
                          <FontAwesomeIcon
                            style={{ fontSize: 10 }}
                            icon={faCircle}
                          />{" "}
                          {list.head}
                        </h6>
                        {list.list && <p>{list.list}</p>}
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
                {midService?.underStandingCMSHeading}
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
                  <Image
                    src={midService.trendImg}
                    alt={midService.underStandingCMSHeading}
                  />
                </div>
                <div
                  className="service__detail-content prose"
                  dangerouslySetInnerHTML={{ __html: midService.latestTrend }}
                />
                {/* {top.latestTrendList ? (
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
                  ) : null} */}
              </div>
            </div>
          </section>
          <section className="methodology mt-12">
            <div className="block-content">
              <div className="w-full h-[1px] white-line-4 mb-10"></div>
              <div className="flex flex-wrap items-start justify-between">
                <div className="w-full md:w-[42%] lg:w-[34%]">
                  <h2 className="portfolio__detail-title title-anim">
                    {midService.behindTheSceneHeading}
                  </h2>
                </div>
                <div className="w-full md:w-[58%] lg:w-[66%]">
                  <div
                    className="prose service__detail-content mb-3.5"
                    dangerouslySetInnerHTML={{
                      __html: midService.behindTheSceneContent,
                    }}
                  />
                  {/* <ol className="flex flex-col gap-6">
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
                    </ol> */}
                </div>
              </div>
              <div className="w-full h-[1px] white-line-4 mt-10"></div>
            </div>
          </section>
          <section className="development__area top-image mb-10 md:mb-18 lg:mb-20">
            <div className="w-full">
              <div className="development__img">
                <Image
                  data-speed="auto"
                  data-lang="0"
                  src={midService.expertImg}
                  alt="Expert image"
                />
              </div>
            </div>
          </section>
          <section className="services-contents">
            <div className="block-content">
              <div className="flex flex-wrap items-start justify-between">
                <div className="w-full md:w-[42%] lg:w-[34%]">
                  <h2 className="portfolio__detail-title title-anim">
                    {midService.experTeamHeading}
                  </h2>
                </div>
                <div className="w-full md:w-[58%] lg:w-[66%]">
                  <div className=" mb-3.5">
                    <p>{midService.expertTeamContent}</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="services-list grid grid-col-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-14">
              {midService.listHeading && (
                <h5 className="portfolio__detail-title">
                  {midService.epertTeamListHead}
                </h5>
              )}
              {midService.expertTeamList &&
                midService.expertTeamList.map((list, indx) => (
                  <div
                    className="portfolio__service-item opacity-100"
                    key={indx}
                  >
                    <Link href="#">
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
                <p>{top.specializedServicesContentTopPart}</p>
              </div> */}
          </section>
          <section className="faq__area mt-16 md:mt-24">
            {/* <div className="line-3"></div> */}
            <div className="fag-area flex items-start flex-wrap">
              <div className="w-full md:w-[50%] pr-0 md:pr-12 mb-8 md:mb-0">
                <div className="faq__img">
                  <Image
                    data-speed="auto"
                    data-lang="0"
                    src={midService.faqImg}
                    alt="Faq image"
                  />
                </div>
              </div>
              <div className="w-full md:w-[50%] pl-0 md:pl-12">
                <h3 className="faq__title title-anim">
                  Frequently Asked Questions
                </h3>
                <FaqAccordion accordData={midService.faqs} />
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  );
}
