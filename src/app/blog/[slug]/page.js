import RelatedPost from "@/components/blogPage/RelatedPost";
import { blogData } from "@/data/blogData";
import { getAllTags } from "@/libs/blogHelpers";
import slugify from "@/libs/slugify";
import CTA from "@/ui/CTA";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export async function generateMetadata({params}) {
  const { slug } = await params;
  const blog = blogData.find((b) => slugify(b.title) === slug);
  return {
    title: blog.metaTitle,
    description: blog.metaDescription,
  }
  
}

export default async function BlogDetails({ params }) {
  const { slug } = await params;
  const blog = blogData.find((b) => slugify(b.title) === slug);
  const sameCatPosts= blogData.filter((cat)=> cat.category===blog.category && cat.id !== blog.id).slice(0,3)
 
  if (!blog) {
    return <p className="text-red-500">No blog found</p>;
  }
  const tags = blog.tags || [];

  return (
    <>
      <section className="blog__detail">
        <div className="container mx-auto px-4 line pt-140">
          <span className="line-3"></span>
          <div className="flex flex-col">
            {/* Blog header */}
            <div className="w-full lg:w-[80%] lg:self-end">
              <div className="blog__detail-top">
                <h2 className="blog__detail-date animation__word_come">
                  {blog.category}
                </h2>
                <h3 className="blog__detail-title animation__word_come">
                  {blog.title}
                </h3>
                <div className="blog__detail-metalist">
                  <div className="blog__detail-meta">
                    <p className="block md:flex items-center gap-1.5">
                      Author: <span>{blog.author}</span>
                    </p>
                    <p className="block md:flex items-center gap-1.5">Published Date: <span>{blog.date}</span></p>
                  </div>
                </div>
              </div>
            </div>

            {/* Thumbnail */}
            <div className="w-full">
              <div className="blog__detail-thumb">
                <Image src={blog.imgSrc} alt={blog.title} data-speed="0.5" />
              </div>
            </div>

            {/* Blog content */}
            <div className="w-full lg:w-[80%] lg:self-end">
              <div
                className="blog__detail-content prose max-w-none"
                dangerouslySetInnerHTML={{ __html: blog.fullContent }}
              />
              <div className="blog__detail-tags">
                <p className="sub-title-anim">
                  tags:{" "}
                  {tags.map((tag, idx) => (
                    <React.Fragment key={idx}>
                      <Link
                        href={`/blog/tag/${slugify(tag)}`}
                        className="hover:underline capitalize"
                      >
                        {tag}
                      </Link>
                      {idx < tags.length - 1 && ", "}
                    </React.Fragment>
                  ))}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <RelatedPost posts={sameCatPosts}/>
      <CTA/>
    </>
  );
}
