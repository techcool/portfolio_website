import { portfolioData } from "@/data/portfolioData";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function PortfolioItems() {
  return (
    <>
      {portfolioData.map((data) => (
        <div className="portfolio__item-6" data-portfitem={data.id} key={data.id}>
          <Link href={`portfolio/${data.id}`}>
            <Image
                src={data.imgSrc}
                alt={data.title}
                className="w-full"
                data-speed="0.4"
                            />
            <div className="portfolio__content-6">
              <h4 className="portfolio__title-6">{data.title}</h4>
              <h5 className="portfolio__date">{data.date} {data.year}</h5>
            </div>
          </Link>
        </div>
      ))}
    
    </>
  );
}
