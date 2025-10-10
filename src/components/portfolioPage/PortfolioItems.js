"use client";
import { portfolioData } from "@/data/portfolioData";
import slugify from "@/libs/slugify";
import gsap from "gsap";
import ScrollSmoother from "gsap/ScrollSmoother";
import ScrollTrigger from "gsap/ScrollTrigger";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect } from "react";

gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

export default function PortfolioItems() {
  useEffect(() => {
    let ctx = gsap.context(() => {
      const device_width = window.innerWidth;

      if (device_width > 100) {
        const skewSetter = gsap.quickTo(".portfolio__item-5 img", "skewY");
        const clamp = gsap.utils.clamp(-15, 15);

        ScrollSmoother.create({
          smooth: 1.35,
          effects: device_width < 1025 ? false : true,
          smoothTouch: false,
          normalizeScroll: false,
          ignoreMobileResize: true,
          onUpdate: (self) => skewSetter(clamp(self.getVelocity() / -80)),
          onStop: () => skewSetter(0),
        });
      }

      ScrollTrigger.create({
        trigger: ".portfolio__wrapper-6",
        start: "top top",
        end: "bottom bottom",
        pin: ".portfolio__title-wrap-6",
        pinSpacing: false,
      });
    });

    // 🔹 Vanilla JS scroll code (converted)
    const portfolioItems = document.querySelectorAll(".portfolio__item-6");
    const totalPortfolio = document.querySelector(".portfolio__total");
    const currentPortfolio = document.querySelector(".portfolio__current");

    // Set total items
    if (totalPortfolio && portfolioItems.length > 0) {
      totalPortfolio.textContent = portfolioItems.length;
    }

    const onScroll = () => {
      const scrollTop = window.scrollY;
      portfolioItems.forEach((item) => {
        const rect = item.getBoundingClientRect();
        const itemTop = rect.top + window.scrollY;
        const itemBottom = itemTop + item.offsetHeight;

        if (itemTop <= scrollTop && itemBottom > scrollTop) {
          const itemNum = item.getAttribute("data-portfitem");
          if (currentPortfolio) currentPortfolio.textContent = itemNum;

          portfolioItems.forEach((el) => el.classList.remove("active"));
          item.classList.add("active");
        }
      });
    };

    window.addEventListener("scroll", onScroll);

    // ✅ Cleanup
    return () => {
      ctx.revert();
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return (
    <>
      <div className="portfolio__wrapper-6">
        {/* optional title wrap */}
        

        <div className="portfolio__list-6">
          {portfolioData.map((data) => (
            <div
              className="portfolio__item-6"
              data-portfitem={data.id}
              key={data.id}
            >
              <Link href={`portfolio/${slugify(data.title)}`}>
                <Image
                  src={data.imgSrc}
                  alt={data.title}
                  className="w-full"
                  data-speed="0.4"
                />
                <div className="portfolio__content-6">
                  <h4 className="portfolio__title-6">{data.title}</h4>
                  <h5 className="portfolio__date">{data.endDate}</h5>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
