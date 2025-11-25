// import { blogData } from "@/data/blogData";
import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";
import slugify from "@/libs/slugify";
import Link from "next/link";



export default function BlogListItem({blogData}) {
  
   
  return (
    <>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {
              blogData.slice(0, 2).map((blog) => (
                <article key={blog.id} className="blog__item-3 bg-white rounded-lg shadow hover:shadow-lg transition overflow-hidden">
                  <div className="blog__img-wrapper-3">
                    <Link href={`blog/${slugify(blog.title)}`}>
                      <div className="img-box relative">
                        <Image
                          className="image-box__item w-full object-cover"
                          src={blog.imageUrl}
                          alt="Blog Thumbnail"
                          width={1200}
                          height={600}
                        />
                        <Image
                          className="image-box__item absolute inset-0 transition"
                          src={blog.imageUrl}
                          alt="Blog Thumbnail"
                          width={1200}
                          height={600}
                        />
                      </div>
                    </Link>
                  </div>
                  <div className="blog__info-3 p-6">
                    <h4 className="blog__meta text-sm text-gray-500 mb-2">
                      <Link href={`/blog/category/${slugify(blog.categories)}`} className="text-blue-600 hover:underline">
                        {blog.categories}
                      </Link>
                      · {blog.date}
                    </h4>
                    <h5 className="text-xl font-semibold mb-4">
                      <Link
                        href={`blog/${slugify(blog.title)}`}
                        className="blog__title-3 hover:text-blue-600 transition"
                      >
                        {blog.title}
                      </Link>
                    </h5>
                    <Link href={`blog/${slugify(blog.title)}`} className="blog__btn">
                      Read More
                      <span>
                        <FontAwesomeIcon icon={faArrowRight} className="ml-2"/>
                      </span>
                    </Link>
                  </div>
                </article>
              ))
            }
           
          </div>
    </>
  );
}
