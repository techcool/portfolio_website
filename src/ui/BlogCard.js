import slugify from "@/libs/slugify";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function BlogCard({
  posts,
  currentPage,
  totalPages,
  basePath = "/blog",
}) {
  if (!posts || posts === 0) {
    return (
      <p className="font-bold text-red-700 text-center">No blog posts found.</p>
    );
  }

  return (
    <>
      <div className="grid gap-6 md:gap-7 lg:gap-14 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 ">
        {posts.map((data, id) => (
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
                <Link href={`/blog/category/${slugify(data.category)}`}>
                  {data.category}
                </Link>{" "}
                . {data.date}
              </h4>
              <h5>
                <Link
                  href={`/blog/${slugify(data.title)}`}
                  className="blog__title"
                >
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
      </div>
      {/* Pagination Controls */}
      {totalPages > 1 && (
        <div className="flex justify-center mt-10 space-x-2">
          {/* Prev button */}
          {currentPage > 1 && (
            <Link
              href={
                currentPage - 1 === 1
                  ? basePath
                  : `${basePath}/page/${currentPage - 1}`
              }
              className="px-4 py-2 rounded bg-gray-200 hover:bg-gray-300"
            >
              Prev
            </Link>
          )}
          {Array.from({ length: totalPages }).map((_, i) => {
            const pageNum = i + 1;
            return (
              <Link
                key={i}
                href={pageNum === 1 ? basePath : `${basePath}/page/${pageNum}`}
                className={`px-4 py-2 rounded ${
                  pageNum === currentPage
                    ? "bg-black text-white"
                    : "bg-gray-200 hover:bg-gray-300"
                }`}
              >
                {pageNum}
              </Link>
            );
          })}
          {/* Next button */}
          {currentPage < totalPages && (
            <Link
              href={`${basePath}/page/${currentPage + 1}`}
              className="px-4 py-2 rounded bg-gray-200 hover:bg-gray-300"
            >
              Next
            </Link>
          )}
        </div>
      )}
    </>
  );
}
