import ScrollSmootherEffect from "@/components/layouts/ScrollSmootherEffect";
import { blogData } from "@/data/blogData";
import { getAllTags } from "@/libs/blogHelpers";
import slugify from "@/libs/slugify";
import BlogCard from "@/ui/BlogCard";
import React from "react";

export async function generateMetadata({ params }) {
  const { tag } = params;

  // Get posts matching the tag
  const tagPosts = blogData.filter((post) =>
    post.tags.map((t) => slugify(t)).includes(tag)
  );

  // Capitalize or prettify the tag for SEO
  const formattedTag = tag.replace(/-/g, " ");

  return {
    title: `Posts tagged with "${formattedTag}" | My Blog`,
    description:
      tagPosts.length > 0
        ? `Read ${tagPosts.length} article(s) related to "${formattedTag}". Explore insights, tutorials, and resources around ${formattedTag}.`
        : `No articles found for the tag "${formattedTag}".`,
  };
}

export default function BlogTag({ params }) {
  const { tag } = params;
  const page = 1;
  const postsPerPage = 6;

  // const tagPosts = blogData.filter((post) =>
  //   post.tags.map((t) => slugify(t)).includes(params.tag)
  // );
  //console.log(tagPosts);
  const filteredPosts = blogData.filter((post) =>
    post.tags.map((t) => slugify(t)).includes(tag)
  );
  const totalPages = Math.ceil(filteredPosts.length / postsPerPage);
  const currentPosts = filteredPosts.slice(0, postsPerPage);

  const tags = getAllTags(currentPosts);
  const uniqueTags = tags.map((tag) => ` ${tag}`).join(",");
  return (
    <>
      <ScrollSmootherEffect/>
      <section className="blog__area-6 blog__animation">
        <div className="container mx-auto px-4 relative line pt-110 pb-110">
          <span className="line-3"></span>
          <div className="flex flex-wrap items-center justify-between pb-130">
            <div className="w-full">
              <div className="sec-title-wrapper">
                <h4>
                  Tags: <span>{uniqueTags}</span>
                </h4>
              </div>
            </div>
          </div>
          <BlogCard
            posts={currentPosts}
            currentPage={page}
            totalPages={totalPages}
            basePath={`/blog/tag/${tag}`}
          />
        </div>
      </section>
    </>
  );
}
