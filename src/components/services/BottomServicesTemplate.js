import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import React from "react";
import FaqAccordion from "../HomePage/FaqAccordion";

export default function BottomServicesTemplate({bottomService}) {
  return (
    <>
       <div className="services-area midServices">
          <div className="container mx-auto px-4 g-0 line pt-110 pb-130">
            <div className="line-3"></div>
            <section className="top-area ">
              <div className="flex items-start justify-between gap-12">
                <div className="sec-title-wrapper w-[100%] md:w-[36%]">
                  <h2 className="sec-title">{bottomService?.serviceName}</h2>
                  <h3>{bottomService?.pageTitle}</h3>
                </div>
                <div className="development__wrapper prose w-[100%] md:w-[64%]">
                  <div
                    className="development__content prose"
                    dangerouslySetInnerHTML={{ __html: bottomService.description }}
                  />
                </div>
              </div>
            </section>
            <section className="development__area top-image">
              <div className="w-full">
                <div className="development__img">
                  <Image src={bottomService.topImg} alt={bottomService.serviceName} />
                </div>
              </div>
            </section>
            <section className="workflow__area-6 whyChooseUs">
              <div className="sec-title-wrapper">
                <h2 className="sec-title title-anim">
                  {bottomService?.typeOfServicesHeading}
                </h2>
              </div>
              <div
                className="prose"
                dangerouslySetInnerHTML={{ __html: bottomService.typeOfServicesContent }}
              />
              <div className="workflow__area-6">
                <div className="line-3"></div>
                <div className="workflow__wrapper-6">
                  {/* {bottomService.typeOfServicesList && (
                    <h5>{midService.topFeatureListHead}</h5>
                  )} */}
                  <div className="flex items-start justify-between">
                    {bottomService.typeOfServicesList.map((list, indx) => (
                      <div key={indx} className="w-full md:w-[25%]">
                        <div className="workflow__slide-6">
                          <h6 className="workflow__title-6">{list.head}</h6>
                          {list.list && <p>{list.list}</p>}
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
                    <Image src={bottomService.trendImg} alt={bottomService.howWorkHeading} />
                  </div>
                  <div
                    className="service__detail-content prose"
                    dangerouslySetInnerHTML={{ __html: bottomService.howWorkContent }}
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
                <div className="w-full h-[1px] bg-blue-100 mb-10"></div>
                <div className="flex flex-wrap items-start justify-between">
                  <div className="w-full md:w-[42%] lg:w-[34%]">
                    <h2 className="portfolio__detail-title title-anim">
                      {bottomService.typeOfWebsiteHeading}
                    </h2>
                  </div>
                  <div className="w-full md:w-[58%] lg:w-[66%]">
                    <div className="service__detail-content mb-3.5">
                        <h5>{bottomService.typeOfWebsiteSubHeading}</h5>
                    </div>
                    <ul className="flex flex-col gap-6">
                      {bottomService.expertTeamList &&
                        bottomService.expertTeamList.map((list, indx) => (
                          <li key={indx}>
                            <FontAwesomeIcon icon={faCheck} />
                            {list?.content}
                          </li>
                        ))}
                    </ul>
                  </div>
                </div>
                <div className="w-full h-[1px] bg-blue-100 mt-10"></div>
              </div>
            </section>
            <section className="development__area">
              <div className="w-full">
                <div className="development__img">
                  <Image
                    src={bottomService.expertImg}
                    alt={bottomService.trendBenefitHead}
                  />
                </div>
              </div>
            </section>
            <section className="services-contents">
              <div className="block-content">
                <div className="flex flex-wrap items-start justify-between">
                  <div className="w-full md:w-[42%] lg:w-[34%]">
                    <h2 className="portfolio__detail-title title-anim">
                      {bottomService.trendBenefitHead}
                    </h2>
                  </div>
                  {/* <div className="w-full md:w-[58%] lg:w-[66%]">
                    <div className=" mb-3.5">
                      <p>{midService.expertTeamContent}</p>
                    </div>
                  </div> */}
                </div>
              </div>
              <div className="services-list grid grid-col-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                {/* {midService.listHeading && (
                  <h5 className="portfolio__detail-title">
                    {midService.epertTeamListHead}
                  </h5>
                )} */}
                {/* {midService.expertTeamList &&
                  midService.expertTeamList.map((list, indx) => (
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
                  ))} */}
                  <ul className="flex flex-col gap-6">
                      {bottomService.trendBenefitList &&
                        bottomService.trendBenefitList.map((list, indx) => (
                          <li key={indx}>
                            <FontAwesomeIcon icon={faCheck} />
                            {list?.list}
                          </li>
                        ))}
                    </ul>
              </div>
              {/* <div className="bottom-content mt-8">
                {top.ServicesContentTopPartHeading && (
                  <h5>{top.ServicesContentTopPartHeading}</h5>
                )}
                <p>{top.specializedServicesContentTopPart}</p>
              </div> */}
            </section>
            <section className="hire-section">
                <span className="line-3"></span>
                <div className="flex flex-wrap justify-between">
                  <div className="w-full md:w-[42%] px-4">
                    <div className="sec-title-wrapper">
                      <h2 className="sec-title title-anim">
                        {bottomService.hireHead}
                      </h2>
                      <p><strong>{bottomService.hireListHead}</strong></p>
                      
                    </div>
                  </div>
                  <div className="w-full md:w-[58%] px-4">
                    <ul className="career__benefits-list">
                      {bottomService.hireList &&(
                        bottomService.hireList.map((list,indx)=>(
                          <li key={indx}>{list.list}</li>
                        ))
                      )}
                    </ul>
                  </div>
                  
                </div>
            </section>
            <section className="faq__area">
                <div className="line-3"></div>
                <div className="fag-area flex items-start">
                  <div className="w-full md:w-[50%] pr-0 md:pr-12">
                    <div className="faq__img">
                      <Image src={bottomService.faqImg} alt="Faq image"/>
                    </div>
                  </div>
                  <div className="w-full md:w-[50%] pl-0 md:pl-12">
                    <FaqAccordion accordData={bottomService.faqs}/>
                  </div>
                </div>
            </section>
          </div>
        </div>
    </>
  );
}
