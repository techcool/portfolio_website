import { blogData } from "@/data/blogData";
import { getAllTags } from "@/libs/blogHelpers";
import slugify from "@/libs/slugify";
import BlogCard from "@/ui/BlogCard";
import React from "react";

export default function BlogTag({params}) {

    const tagPosts = blogData.filter((post) =>
        post.tags.map((t) => slugify(t)).includes(params.tag)
);
const tags  = getAllTags(tagPosts);
const uniqueTags =tags.map(tag => ` ${tag}`).join(',');
  return (
    <>
      <section className="blog__area-6 blog__animation">
        <div className="container mx-auto px-4 relative line pt-110 pb-110">
          <span className="line-3"></span>
          <div className="flex flex-wrap items-center justify-between pb-130">
            <div className="w-full">
              <div className="sec-title-wrapper">
                <h4>
                  Tags: <span >{uniqueTags}</span>
                </h4>
              </div>
            </div>
          </div>

          <div className="grid gap-6 md:gap-7 lg:gap-14 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 ">
            <BlogCard posts={tagPosts} />
          </div>
        </div>
      </section>
    </>
  );
}
