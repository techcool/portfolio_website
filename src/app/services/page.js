import BrandLogo from "@/components/HomePage/BrandLogo";
import CommonHeading from "@/components/layouts/Heading/CommonHeading";
import SubLinks from "@/components/services/SubLinks";
import { navLinks } from "@/data/navLinks";
import slugify from "@/libs/slugify";
import CTA from "@/ui/CTA";
import Link from "next/link";
import React from "react";

export default function ServicesPage() {
  const navs = navLinks.find((link) => link.title === "Services").submenu;


  return (
    <>
      <section className="portfolio__service service-v5 pt-140 pb-140 services-main-page">
        <div className="container mx-auto px-4 pt-24 pb-36 relative">
          <div className="flex items-center flex-wrap">
            <div className="w-full md:w-[42%] px-4">
              <CommonHeading label="I MAKE THE Service BETTER." tag="h2" extraClass="sec-title" />
            </div>
            <div className="w-full md:w-[58%] px-4">
              <div className="sec-text">
                <p>
                  Static and dynamic secure code review can prevent a 0day
                  before your product is even released. We can integrate with
                  your dev environment
                </p>
              </div>
            </div>
          </div>
          <div className="portfolio__service-list">
            <div className="flex flex-wrap gap-3">
              {navs &&
                navs.map((service, indx) => (
                  <div className="w-full md:w-[32%]" key={indx}>
                    <div className="portfolio__service-item p-10 bg-white h-full">
                      <h3 className="ps-title">
                        <Link href={`/services/${slugify(service.title)}`}>
                          {service.title}
                        </Link>
                      </h3>
                      <SubLinks service={service}/>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </div>
      </section>
      <BrandLogo/>
      <CTA/>
    </>
  );
}
