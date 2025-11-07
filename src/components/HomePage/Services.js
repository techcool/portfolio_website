"use client";
import React, { useEffect, useState } from "react";
import ServiceItems from "./ServiceItems";
import CommonHeading from "../layouts/Heading/CommonHeading";
import { navLinks } from "@/data/navLinks";
import SubLinks from "@/components/services/SubLinks";
import slugify from "@/libs/slugify";
import Link from "next/link";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger, ScrollToPlugin } from "gsap/all";
import { topData } from "@/data/services/topData";

function Services() {
  const servicesNav = navLinks.find(
    (link) => link.title === "Services"
  ).submenu;

  const [deviceWidth, setDeviceWidth] = useState(0);

  useEffect(() => {
    setDeviceWidth(window.innerWidth);
    const handleResize = () => {
      setDeviceWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

    if (deviceWidth > 1200) {
      gsap.to(".service__list-6", {
        scrollTrigger: {
          trigger: ".service__area-6",
          pin: ".service__list-6",
          pinSpacing: true,
          start: "top top",
          end: "bottom bottom",
        },
      });

      // let service_images = gsap.utils.toArray(".service__image");
      // let service_items = gsap.utils.toArray(".parent");

      let navItems = gsap.utils.toArray(".service__list-6 li a");
      if (navItems) {
        navItems.forEach((nav) => {
          nav.addEventListener("click", (e) => {
            e.preventDefault();
            // Remove 'active' from all
            // navItems.forEach((item) =>
            //   item.parentElement.classList.remove("active")
            // );

            // Add 'active' to the clicked one
            //nav.parentElement.classList.add("active");
            // const ids = nav.getAttribute("href");
            // gsap.to(window, {
            //   duration: 0.5,
            //   scrollTo: ids, // "#section-id"
            //   ease: "power4.out",
            // });
            const ids = nav.getAttribute("href");
            const target = document.querySelector(ids);
            if (target) {
              window.scrollTo({
                top: target.offsetTop,
                behavior: "smooth",
              });
            }
          });
        });
      }

      // Active Nav
      document.addEventListener("scroll", function () {
        const items = document.querySelectorAll(".service__items-6 .parent");
        const scrollTop = window.scrollY;

        items.forEach((item) => {
          // const rect = item.getBoundingClientRect();
          // const itemTop = rect.top + window.scrollY;
          // const itemBottom = itemTop + rect.height;
          const rect = item.getBoundingClientRect();
          const itemMiddle = rect.top + rect.height / 2;

          //console.log('rectTop: ',rect);
          // console.log('itemTop: ',itemTop, 'itemBottom: ', itemBottom, 'scrollTop: ', scrollTop);
          // console.log(itemTop <= scrollTop,  itemBottom > scrollTop);

          if (itemMiddle >= 0 && itemMiddle <= window.innerHeight) {
            const secId = item.dataset.secid;
            const listItems = document.querySelectorAll(".service__list-6 li");

            // console.log('Showing Item: ', item.innerHTML);
            listItems.forEach((li, index) => {
              if (index + 1 === Number(secId)) {
                li.classList.add("active");
              } else {
                li.classList.remove("active");
              }
            });
          }
        });
      });
      //   $(document).on('scroll', function () {
      //   $('.parent').each(function () {
      //     if ($(this).position().top <= $(document).scrollTop() && ($(this).position().top + $(this).outerHeight()) > $(document).scrollTop()) {
      //       var sec_id = $(this).data('secid');

      //       $('.parent li:nth-child(' + sec_id + ')').addClass('active').siblings().removeClass('active');
      //     }
      //   });
      // });
    }
  }, [deviceWidth]);

  return (
    <>
      {/* <section classNameName="service__area-3 pb-150">
            <div classNameName="container mx-auto px-4">
            <div classNameName="row">
                <div classNameName="col-xxl-12">
                <div classNameName="sec-title-wrapper pt-130 text-anim">
                    <h2 classNameName="sec-sub-title title-anim">Services</h2>
                    <h3 classNameName="sec-title title-anim">
                    Our <br />
                    Services
                    </h3>
                    <p>
                    Consumers today rely heavily on digital means to research
                    products. We research a brand of bldend engaging with it,
                    according to the meanwhile, 51% of consumers say they use
                    Google to research products before buying.
                    </p>
                </div>
                </div>
            </div>

            <ServiceItems />
            </div>
        </section> */}
      <section className="service__area-6">
        <div className="container mx-auto px-4 pt-36 pb-28">
          <div className="row inherit-row">
            <div className="col-xxl-12">
              <div className="content-wrapper">
                <div className="left-content">
                  <ul className="service__list-6">
                    {servicesNav.map((item, i) => (
                      <li key={i} className={i === 0 ? "active" : null}>
                        <Link href={`#${slugify(item.title)}`}>
                          {item.title}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="right-content">
                  <div className="service__items-6">
                    {
                      // topData ? (
                      //   topData.map((data,indx)=>(
                      //     <div key={indx} className="service__item-6 has__service_animation" id="service_1" data-secid="1">
                      //       <div className="image-tab">
                      //         <Image src={data.topImg} alt={data.topCategoryName}/>
                      //       </div>
                      //       <div className="animation__service_page">
                      //         <h2 className="service__title-6">{data.topCategoryName}</h2>
                      //       </div>
                      //     </div>
                      //   ))
                      // )
                      // :
                      // <p>Data coming soon</p>

                      servicesNav.map((item, i) => {
                        const matchingTopData = topData.find(
                          (topItem) => topItem.topCategoryName === item.title
                        );
                        return (
                          <div
                            key={i}
                            className="parent"
                            id={slugify(item.title)}
                            data-secid={i + 1}
                          >
                            {matchingTopData ? (
                              <div
                                className="service__item-6 has__service_animation"
                                id="service_1"
                              >
                                <div className="animation__service_page">
                                <div className="image-tab mb-10">
                                  <Image
                                    src={matchingTopData.topImg}
                                    alt={matchingTopData.topCategoryName}
                                  />
                                </div>
                                  <h2 className="service__title-6">
                                    {matchingTopData.topCategoryName}
                                  </h2>
                                <div className="prose" dangerouslySetInnerHTML={{ __html: matchingTopData.description }}/>
                                <ul>
                                  {
                                    matchingTopData.servicesList.map((item,i)=>(
                                      <li key={i}><Link href={`/services/${matchingTopData.slug}/${slugify(item.title)}`}>+ {item.title}</Link></li>
                                    ))
                                  }
                                </ul>
                                </div>
                              </div>
                            ) : (
                              <div className="service__item-6 flex flex-col text-white gap-5">
                                <h2 className="text-5xl text-black mb-5">
                                  {item.title}
                                </h2>
                                <p className="text-xl">
                                  <span className="text-gray-800">
                                    Data Coming soon
                                  </span>
                                </p>
                              </div>
                            )}
                          </div>
                        );
                      })
                    }
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Services;
