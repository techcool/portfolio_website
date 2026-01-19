import { faCheck, faCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import React from "react";
import FaqAccordion from "../HomePage/FaqAccordion";
import TitleAnimHeading from "../layouts/Heading/TitleAnimHeading";
import ScrollSmootherEffect from "../layouts/ScrollSmootherEffect";

export default function BottomServicesTemplate({ bottomService }) {
  return (
    <>
      <ScrollSmootherEffect />
      <TitleAnimHeading />
      <div className="services-area bottomServices  pt-16 md:pt-0">
        <div className="container mx-auto px-4 g-0 line pt-110 pb-130">
          <div className="line-3"></div>
          <section className="top-area ">
            <div className="flex items-start justify-between gap-4 md:gap-10 flex-wrap">
              <div className="sec-title-wrapper w-[100%] lg:w-[32%]">
                <h2 className="sec-title">{bottomService?.serviceName}</h2>
                <div className="mt-5">
                  <h3 className="title-anim text-xl md:text-2xl">
                    {bottomService?.pageTitle}
                  </h3>
                </div>
              </div>
              <div className="development__wrapper prose w-[100%] lg:w-[64%]">
                <div
                  className="development__content prose"
                  dangerouslySetInnerHTML={{
                    __html: bottomService.description,
                  }}
                />
              </div>
            </div>
          </section>
          <section className="development__area top-image mt-10 md:mt-18 mb-10 md:mb-18 lg:mb-20">
            <div className="w-full">
              <div className="development__img">
                <Image
                  data-speed="auto"
                  data-lang="0"
                  src={bottomService?.topImg}
                  alt={bottomService?.serviceName}
                />
              </div>
            </div>
          </section>
          <section className="workflow__area-6 whyChooseUs service__detail">
            <div className="sec-title-wrapper mb-6">
              <h2 className="sec-title title-anim">
                {bottomService?.typeOfServicesHeading}
              </h2>
            </div>
            <div
              className="prose"
              dangerouslySetInnerHTML={{
                __html: bottomService.typeOfServicesContent,
              }}
            />
            <div className="workflow__area-6 mt-6">
              <div className="line-3"></div>
              <div className="workflow__wrapper-6 mt-6">
                {/* {bottomService.typeOfServicesList && (
                    <h5>{midService.topFeatureListHead}</h5>
                  )} */}
                <div className="flex flex-wrap gap-y-4">
                  {bottomService.typeOfServicesList.map((list, indx) => (
                    <div key={indx} className="w-full md:w-[25%]">
                      <div className="workflow__slide-6 pr-4">
                        <h6 className="workflow__title-6">
                          <FontAwesomeIcon
                            style={{ fontSize: 10 }}
                            icon={faCircle}
                          />{" "}
                          {list?.head}
                        </h6>
                        {list?.list && <p>{list?.list}</p>}
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
                {bottomService?.howWorkHeading}
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
                    src={bottomService?.trendImg}
                    alt={bottomService?.howWorkHeading}
                  />
                </div>
                <div
                  className="service__detail-content prose"
                  dangerouslySetInnerHTML={{
                    __html: bottomService.howWorkContent,
                  }}
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
              <div className="flex flex-wrap justify-between">
                <div className="w-full md:w-[42%] lg:w-[34%]">
                  <h2 className="portfolio__detail-title title-anim">
                    {bottomService?.typeOfWebsiteHeading}
                  </h2>
                </div>
                <div className="w-full md:w-[58%] lg:w-[66%]">
                  {bottomService?.typeOfWebsiteContent && (
                    <div className="w-full mb-6">
                      <div
                        className="service__detail-content prose"
                        dangerouslySetInnerHTML={{
                          __html: bottomService.typeOfWebsiteContent,
                        }}
                      />
                    </div>
                  )}
                  <div className="w-full">
                    {bottomService?.typeOfWebsiteListHead && (
                      <div className="service__detail-content mb-3.5">
                        <h5 className="text-2xl">
                          {bottomService.typeOfWebsiteListHead}
                        </h5>
                      </div>
                    )}
                    {bottomService.expertTeamList && (
                      <ul className="flex flex-wrap flex-row gap-6 inner-list double-list mt-5">
                        {bottomService.expertTeamList.map((list, indx) => (
                          <li key={indx} className="">
                            {/* <FontAwesomeIcon
                              icon={faCircle}
                              style={{ fontSize: 10 }}
                            />{" "} */}
                            {list?.heading && (
                              <h6 className="text-[18px] font-semibold">
                                {list?.heading}
                              </h6>
                            )}
                            {list?.content && <p>{list?.content}</p>}
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
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
                  src={bottomService?.expertImg}
                  alt={bottomService?.trendBenefitHead}
                />
              </div>
            </div>
          </section>
          <section className="services-contents">
            <div className="block-content">
              <div className="flex flex-wrap items-start justify-between">
                <div className="w-full md:w-[42%] lg:w-[32%]">
                  <h2 className="portfolio__detail-title title-anim">
                    {bottomService?.trendBenefitHead}
                  </h2>
                </div>
                <div className="w-full md:w-[58%] lg:w-[68%]">
                  {bottomService?.trendBenefitContent && (
                        <div
                          className="service__detail-content prose"
                          dangerouslySetInnerHTML={{
                            __html: bottomService?.trendBenefitContent
                          }}
                        />
                    
                  )}
                  {bottomService.trendBenefitList && (
                  <div className="w-full">
                    <ul className="flex flex-wrap flex-row gap-6 inner-list double-list">
                      {
                        bottomService.trendBenefitList.map((list, indx) => (
                          <li key={indx} className="">
                            {/* <FontAwesomeIcon
                              icon={faCircle}
                              style={{ fontSize: 10 }}
                            />{" "} */}
                            {list?.title && (
                              <h6 className="text-[18px] font-semibold">
                                {list?.title}
                              </h6>
                            )}
                            {list?.list && <p>{list?.list}</p>}
                          </li>
                        ))}
                    </ul>
                  </div>
                  )}
                </div>
              </div>
            </div>
            <div className="services-list grid grid-col-1 md:grid-cols-2 lg:grid-cols-3 gap-5"></div>
            {/* <div className="bottom-content mt-8">
                {top.ServicesContentTopPartHeading && (
                  <h5>{top.ServicesContentTopPartHeading}</h5>
                )}
                <p>{top.specializedServicesContentTopPart}</p>
              </div> */}
          </section>
          {bottomService.hireHead && (
          <section className="hire-section  mt-14 mb-14 md:mt-30 md:mb-30">
            <div className="w-full h-[1px] white-line-4 mb-10"></div>
            <span className="line-3"></span>
            <div className="flex flex-wrap justify-between gap-9 md:gap-0 mt-10 sm:mt-24">
              <div className="w-full md:w-[32%] ">
                <div className="sec-title-wrapper">
                  <h2 className="portfolio__detail-title title-anim">
                    {bottomService.hireHead}
                  </h2>
                  {bottomService.hireListHead && (
                    <div className="mt-6">
                      <p>
                        <strong>{bottomService.hireListHead}</strong>
                      </p>
                    </div>
                  )}
                </div>
              </div>
              <div className="w-full md:w-[58%] ">
                <ul className="career__benefits-list">
                  {bottomService.hireList &&
                    bottomService.hireList.map((list, indx) => (
                      <li key={indx} className="p-3.5">
                        <h6 className="text-[18px]">{list?.title}</h6>
                        {list?.list}
                      </li>
                    ))}
                </ul>
              </div>
            </div>
          </section>
          )}
          {bottomService?.whyChooseHead && (
            <section className="whyChoose-section mt-14 mb-14 md:mt-30 md:mb-30">
              <div className="w-full h-[1px] white-line-4 mb-10"></div>
              <div className="flex flex-wrap justify-between">
                <div className="w-full md:w-[42%] lg:w-[34%]">
                  <h2 className="portfolio__detail-title title-anim">
                    {bottomService.whyChooseHead}
                  </h2>
                </div>
                <div className="w-full md:w-[58%] lg:w-[66%]">
                  <div className="w-full ">
                    {bottomService?.whyChooseContent && (
                      <div
                        className="service__detail-content prose"
                        dangerouslySetInnerHTML={{
                          __html: bottomService.whyChooseContent,
                        }}
                      />
                    )}
                  </div>
                  <div className="w-full">
                    <div className="service__detail-content mb-3.5">
                      <h5 className="text-2xl">
                        {bottomService?.whyChooseListHead}
                      </h5>
                    </div>
                    {bottomService?.whyChooseList && (
                      <ul className="flex flex-wrap flex-row gap-6 inner-list double-list">
                        {bottomService.whyChooseList.map((list, indx) => (
                          <li key={indx} className="">
                            {/* <FontAwesomeIcon
                              icon={faCircle}
                              style={{ fontSize: 10 }}
                            />{" "} */}
                            {list?.title && (
                              <h6 className="text-[18px] font-semibold">
                                {list?.title}
                              </h6>
                            )}
                            {list?.list && <p>{list?.list}</p>}
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                </div>
              </div>
            </section>
          )}

          <section className="faq__area mt-16 md:mt-24">
            {/* <div className="line-3"></div> */}
            <div className="fag-area flex items-start flex-wrap">
              <div className="w-full md:w-[50%] pr-0 md:pr-12 mb-8 md:mb-0">
                <div className="faq__img">
                  <Image
                    data-speed="auto"
                    data-lang="0"
                    src={bottomService.faqImg}
                    alt="Faq image"
                  />
                </div>
              </div>
              <div className="w-full md:w-[50%] pl-0 md:pl-12">
                <h3 className="faq__title title-anim">
                  Frequently Asked Questions
                </h3>
                <FaqAccordion accordData={bottomService.faqs} />
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  );
}
