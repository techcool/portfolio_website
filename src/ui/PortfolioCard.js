import slugify from "@/libs/slugify";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function PortfolioCard({portfolio}) {
  if (!portfolio || portfolio === 0) {
    return (
      <p className="font-bold text-red-700 text-center">No portfolio is found.</p>
    );
  }

  return (
    <>
      <div className="grid gap-6 md:gap-7 lg:gap-14 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 ">
        {portfolio.map((data, id) => (
          <div className="w-full" key={id}>
            <article className="blog__item">
              <div className="blog__img-wrapper">
                <Link href={`/portfolio/${slugify(data.title)}`}>
                  <div className="img-box">
                    <Image
                      className="image-box__item"
                      src={data.imgSrc}
                      alt={data.title}
                    />
                    <Image
                      className="image-box__item"
                      src={data.imgSrc}
                      alt={data.title}
                    />
                  </div>
                </Link>
              </div>
              <h4 className="blog__meta">
                <Link href={`/portfolio/category/${slugify(data.category)}`}>
                  {data.category}
                </Link>{" "}
                . {data.endDate}
              </h4>
              <h5>
                <Link
                  href={`/portfolio/${slugify(data.title)}`}
                  className="blog__title"
                >
                  {data.title}
                </Link>
              </h5>
              <Link href={`/portfolio/${slugify(data.title)}`} className="blog__btn">
                Read More
                <span>
                  <FontAwesomeIcon icon={faArrowRight}></FontAwesomeIcon>
                </span>
              </Link>
            </article>
          </div>
        ))}
      </div>
      
    </>
  );
}
