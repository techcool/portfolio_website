import { blogData } from "@/data/blogData";
import slugify from "@/libs/slugify";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function BlogCard() {
  return (
    <>
      {blogData.map((data, id) => (
        <div className="w-full" key={id}>
          <article className="blog__item">
            <div className="blog__img-wrapper">
              <Link href={`/blog/${slugify(data.title)}`}>
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
              <Link href="#">{data.category}</Link> . {data.date}
            </h4>
            <h5>
              <Link href={`/blog/${slugify(data.title)}`} className="blog__title">
                {data.title}
              </Link>
            </h5>
            <Link href={`/blog/${slugify(data.title)}`} className="blog__btn">
              Read More
              <span>
                <FontAwesomeIcon icon={faArrowRight}></FontAwesomeIcon>
              </span>
            </Link>
          </article>
        </div>
      ))}
    </>
  );
}
