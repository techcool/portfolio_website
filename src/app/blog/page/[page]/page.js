import { blogData } from "@/data/blogData";
import { getAllCategories } from "@/libs/blogHelpers";
import BlogCard from "@/ui/BlogCard";
import Filter from "@/ui/Filter";
import React from "react";

export default async function BlogPage({ params }) {
  const resolvedParams = await params;
  const categories = getAllCategories(blogData);

  const page = parseInt(resolvedParams.page, 10) || 1;
  const postsPerPage = 6;
  const totalPages = Math.ceil(blogData.length / postsPerPage);

  const startIndex = (page-1) *postsPerPage;
  const currentPosts = blogData.slice(startIndex, startIndex+postsPerPage) 
  //console.log('startIndex ', startIndex,'and ',  currentPosts, 'page ', page);

  return (
    <>
      <section className="blog__area-6 blog__animation">
        <div className="container mx-auto px-4 relative line pt-110 pb-110">
          <span className="line-3"></span>
          <div className="flex flex-wrap items-center justify-between pb-130">
            <div className="w-full md:w-1/2 lg:w-1/2 xl:w-7/12 2xl:w-2/3">
              <div className="sec-title-wrapper">
                <h2 className="sec-title-2 animation__char_come">
                  We always <br />
                  think
                </h2>
              </div>
            </div>

            <div className="w-full md:w-1/2 lg:w-1/2 xl:w-5/12 2xl:w-1/3">
              <div className="blog__text">
                <p>
                  Crafting new bright brands, unique visual systems and digital
                  experience focused on a wide range of original collabs.
                </p>
              </div>
            </div>
          </div>
          <Filter categories={categories}/>     
          <BlogCard posts={currentPosts} currentPage={page} totalPages={totalPages}  />
          
        </div>
      </section>
    </>
  );
}
