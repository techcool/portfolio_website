import React from "react";
import { getAllServicesTree } from "@/utils/servicesDataTree";
import FaqAccordion from "@/components/HomePage/FaqAccordion";
import Image from "next/image";
import Link from "next/link";
import { middleData } from "@/data/services/middleData";
import slugify from "@/libs/slugify";
import { navLinks } from "@/data/navLinks";

export default async function MiddleServices({ params }) {
  const { slug, midSlug } =await  params;
  //const servicesTree = getAllServicesTree();

   const midService = middleData.find((item)=> slugify(item.slug || item.categoryName) === midSlug);

     const subLinks = navLinks
       .filter((link) => link.submenu)
       .flatMap((link) =>
        link.submenu.flatMap((subLink) => subLink.subServices || [])
      );

   const subLinkTitle = subLinks
    .filter((subLink) => slugify(subLink.heading)===midSlug)
    .flatMap((s) => s.subNavs || []);

  //   const bottomServices = subLinkTitle.subNavs.map((title) => title);

  // const subLinkSlugs = subLinks
  // .filter((slug) => slugify(slug));
 //console.log(subLinkTitle)

  // Find the specific top and mid-level service
  //const topService = servicesTree.find(s => s.slug === slug);
  //const midService = topService?.children?.find(c => c.slug === midSlug);


  //console.log(midService);
  

   if (!midService) {
    return (
      <div className="container mx-auto py-20 text-center">
        <h2>Service not found!</h2>
      </div>
    );
  }

  //console.log(midService);

  return (
    <>
        <div className="services-area midServices">
          <div className="container mx-auto px-4 g-0 line pt-110 pb-130">
            <div className="line-3"></div>
            <section className="top-area ">
              <div className="flex items-start justify-between gap-12">
                <div className="sec-title-wrapper w-[100%] md:w-[36%]">
                  <h2 className="sec-title">{midService?.categoryName}</h2>
                  {/* <h3>{top?.pageTitle}</h3> */}
                </div>
                <div className="development__wrapper prose w-[100%] md:w-[64%]">
                  <div
                    className="development__content prose"
                    dangerouslySetInnerHTML={{ __html: midService.description }}
                  />
                  <ul>
                    {
                      subLinkTitle && (
                        subLinkTitle.map((list,i)=>(
                          <li key={i}><Link href={`/services/${midService.parent}/${midService.slug}/${slugify(list?.title)}`}>+ {list?.title}</Link></li>
                        ))
                      )
                    }
                  </ul>
                </div>
              </div>
            </section>
            <section className="development__area top-image">
              <div className="w-full">
                <div className="development__img">
                  <Image src={midService.topImg} alt={midService.categoryName} />
                </div>
              </div>
            </section>
            <section className="workflow__area-6 whyChooseUs">
              <div className="sec-title-wrapper">
                <h2 className="sec-title title-anim">
                  {midService?.topFeatureHeading}
                </h2>
              </div>
              <div
                className="prose"
                dangerouslySetInnerHTML={{ __html: midService.whyChooseContent }}
              />
              <div className="workflow__area-6">
                <div className="line-3"></div>
                <div className="workflow__wrapper-6">
                  {midService.topFeatureListHead && (
                    <h5>{midService.topFeatureListHead}</h5>
                  )}
                  <div className="flex items-start justify-between">
                    {midService.TopFeatureList.map((list, indx) => (
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
                    <Image src={midService.trendImg} alt={midService.underStandingCMSHeading} />
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
                <div className="w-full h-[1px] bg-blue-100 mb-10"></div>
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
                <div className="w-full h-[1px] bg-blue-100 mt-10"></div>
              </div>
            </section>
            <section className="development__area">
              <div className="w-full">
                <div className="development__img">
                  <Image
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
              <div className="services-list grid grid-col-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
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
                        {list.title && (
                          <h3 className="ps-title">{list.title}</h3>
                        )}
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
            <section className="faq__area">
                <div className="line-3"></div>
                <div className="fag-area flex items-start">
                  <div className="w-full md:w-[50%] pr-0 md:pr-12">
                    <div className="faq__img">
                      <Image src={midService.faqImg} alt="Faq image"/>
                    </div>
                  </div>
                  <div className="w-full md:w-[50%] pl-0 md:pl-12">
                    <FaqAccordion accordData={midService.faqs}/>
                  </div>
                </div>
            </section>
          </div>
        </div>
    </>
  );
}
