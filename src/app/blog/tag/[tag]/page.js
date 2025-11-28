import ScrollSmootherEffect from "@/components/layouts/ScrollSmootherEffect";
// import { blogData } from "@/data/blogData";
import { getAllCategories, getAllTags, getCategoryCounts } from "@/libs/blogHelpers";
import { getBlogData } from "@/libs/getBlogData";
import slugify from "@/libs/slugify";
import BlogCard from "@/ui/BlogCard";
import Filter from "@/ui/Filter";
import React from "react";

export async function generateMetadata({ params }) {
  const { tag } = await params;
  //console.log("Generating metadata for tag:", tag);
  const allBlogData = getBlogData();
  const blogData = allBlogData.sort(
    (a, b) => new Date(b.date) - new Date(a.date)
  );
  
  // Get posts matching the tag
  const tagPosts = blogData.filter((post) =>{
   // post.tags.map((t) => slugify(t)).includes(tag)
    if (!post.tags) return false;
        
        // Split categories by pipe and check if any match
        const cats = post.tags
          .split("|")
          .map((c) => c.trim())
          .map((c) => slugify(c));
        
        return cats.includes(tag);
  }
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

export default async function BlogTag({ params }) {
  const { tag } =await params;
  console.log("Rendering tag page for:", tag);
  const allBlogData = getBlogData();
    const blogData = allBlogData.sort(
      (a, b) => new Date(b.date) - new Date(a.date)
    );
  const categories = getAllCategories(blogData);
  const categoryCounts = getCategoryCounts(blogData);
  const page = 1;
  const postsPerPage = 12;

  // const tagPosts = blogData.filter((post) =>
  //   post.tags.map((t) => slugify(t)).includes(params.tag)
  // );
  //console.log(tagPosts);
  const filteredPosts = blogData.filter((post) =>{
   // post.tags.map((t) => slugify(t)).includes(tag)
    if (!post.tags) return false;
        
        // Split categories by pipe and check if any match
        const cats = post.tags
          .split("|")
          .map((c) => c.trim())
          .map((c) => slugify(c));
        
        return cats.includes(tag);
  }
  );
  const totalPages = Math.ceil(filteredPosts.length / postsPerPage);
  const currentPosts = filteredPosts.slice(0, postsPerPage);
  //console.log('current tag ', currentPosts);
  

  const tags = getAllTags(currentPosts);
  // const uniqueTags = tags.map((tag) => ` ${tag}`).join(",");
  const uniqueTags = tags.find((t) => slugify(t)===tag);
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
                  Tag: <span className="capitalize">{uniqueTags}</span>
                </h4>
              </div>
            </div>
          </div>
          <Filter categories={categories} counts={categoryCounts}/>
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
