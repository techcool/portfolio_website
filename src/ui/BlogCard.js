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
  const validPosts = (posts || []).filter((p) => p?.title);
  return (
    <>
      <div className="grid gap-6 md:gap-7 lg:gap-14 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 ">
        {validPosts.map((data, id) => (
          <div className="w-full" key={id}>
            <article className="blog__item">
              <div className="blog__img-wrapper">
                <Link href={`/blog/${slugify(data?.title || "")}`}>
                  <div className="img-box">
                    <Image
                      className="image-box__item"
                      src={data?.imageUrl}
                      alt={data?.title}
                      width={1200}
                      height={600}
                    />
                    <Image
                      className="image-box__item"
                      src={data?.imageUrl}
                      alt={data?.title}
                      width={1200}
                      height={600}
                    />
                  </div>
                </Link>
              </div>
              <h4 className="blog__meta">
                {data?.categories ? (
                  <>
                    {data.categories.split("|").map((cat, idx) => {
                      const trimmedCat = cat.trim();
                      return (
                        <span key={idx}>
                          <Link href={`/blog/category/${slugify(trimmedCat)}`}>
                            {trimmedCat}
                          </Link>
                          {idx < data.categories.split("|").length - 1 && ", "}
                        </span>
                      );
                    })}
                  </>
                ) : (
                  "Uncategorized"
                )}{" "}
                . <span>{data?.date}</span>
              </h4>
              <h5>
                <Link
                  href={`/blog/${slugify(data?.title || "")}`}
                  className="blog__title"
                >
                  {data?.title}
                </Link>
              </h5>
              <Link
                href={`/blog/${slugify(data?.title)}`}
                className="blog__btn"
              >
                Read More <span className="sr-only">about {data?.title}</span>
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
          {(() => {
            const windowSize = 5;
            const currentPageNum = Number(currentPage);

            let startPage = Math.max(
              1,
              currentPageNum - Math.floor(windowSize / 2)
            );
            let endPage = startPage + windowSize - 1;

            if (endPage > totalPages) {
              endPage = totalPages;
              startPage = Math.max(1, endPage - windowSize + 1);
            }

            const pages = [];
            for (let i = startPage; i <= endPage; i++) {
              pages.push(i);
            }

            return (
              <>
                {/* Show ellipsis before if not starting at page 1 */}
                {startPage > 1 && (
                  <span className="px-4 py-2 text-gray-600">...</span>
                )}

                {/* Page numbers */}
                {pages.map((pageNum) => (
                  <Link
                    key={pageNum}
                    href={
                      pageNum === 1 ? basePath : `${basePath}/page/${pageNum}`
                    }
                    className={`px-4 py-2 rounded ${
                      pageNum === currentPageNum
                        ? "bg-black text-white"
                        : "bg-gray-200 hover:bg-gray-300"
                    }`}
                  >
                    {pageNum}
                  </Link>
                ))}

                {/* Show ellipsis after if not ending at totalPages */}
                {endPage < totalPages && (
                  <span className="px-4 py-2 text-gray-600">...</span>
                )}
              </>
            );
          })()}
          {/* Next button */}
          {currentPage < totalPages && (
            <Link
              href={`${basePath}/page/${Number(currentPage) + 1}`}
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
