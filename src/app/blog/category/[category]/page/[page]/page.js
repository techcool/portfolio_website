import { blogData } from "@/data/blogData";
import slugify from "@/libs/slugify";
import BlogCard from "@/ui/BlogCard";
import React from "react";

export default function CategoryPagePagination({ params }) {
  const { category, page } = params;
  const currentPage = parseInt(page, 10) || 1;
  const postsPerPage = 6;

  const filteredPosts = blogData.filter(
    (post) => slugify(post.category) === category
  );
  const totalPages = Math.ceil(filteredPosts.length / postsPerPage);
  const startIndex = (currentPage - 1) * postsPerPage;
  const currentPosts = filteredPosts.slice(
    startIndex,
    startIndex + postsPerPage
  );

  return(
  <>
    <section className="blog__area-6 blog__animation">
      <div className="container mx-auto px-4 relative line pt-110 pb-110">
        <span className="line-3"></span>
        <div className="flex flex-wrap items-center justify-between pb-130">
          <div className="w-full">
            <div className="sec-title-wrapper">
              <h2 className="sec-title-2 animation__char_come capitalize">
                {posts.length > 0 ? posts[0].category : "No Category Found"}
              </h2>
            </div>
          </div>
        </div>
        {filteredPosts.length > 0 ? (
                  <BlogCard
                    posts={currentPosts}
                    currentPage={page}
                    totalPages={totalPages}
                    basePath={`/blog/category/${category}`}
                  />
                ) : (
                  <p className="text-red-500">No posts found in this category.</p>
                )}
      </div>
    </section>
  </>
  )
}
