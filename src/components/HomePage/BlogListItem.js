import { blogData } from "@/data/blogData";
import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";

export default function BlogListItem() {
  return (
    <>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {
              blogData.slice(0, 2).map((blog) => (
                <article key={blog.id} className="blog__item-3 bg-white rounded-lg shadow hover:shadow-lg transition overflow-hidden">
                  <div className="blog__img-wrapper-3">
                    <a href={blog.link}>
                      <div className="img-box relative">
                        <Image
                          className="image-box__item w-full object-cover"
                          src={blog.imgSrc}
                          alt="Blog Thumbnail"
                        />
                        <Image
                          className="image-box__item absolute inset-0 transition"
                          src={blog.imgSrc}
                          alt="Blog Thumbnail"
                        />
                      </div>
                    </a>
                  </div>
                  <div className="blog__info-3 p-6">
                    <h4 className="blog__meta text-sm text-gray-500 mb-2">
                      <a href={blog.categoryLink} className="text-blue-600 hover:underline">
                        {blog.category}
                      </a>
                      · {blog.date}
                    </h4>
                    <h5 className="text-xl font-semibold mb-4">
                      <a
                        href={blog.link}
                        className="blog__title-3 hover:text-blue-600 transition"
                      >
                        {blog.title}
                      </a>
                    </h5>
                    <a href={blog.link} className="blog__btn">
                      Read More
                      <span>
                        <FontAwesomeIcon icon={faArrowRight} className="ml-2"/>
                      </span>
                    </a>
                  </div>
                </article>
              ))
            }
           
          </div>
    </>
  );
}
