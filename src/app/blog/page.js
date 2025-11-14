import BlogPageHeading from "@/components/blogPage/BlogPageHeading";
import ScrollSmootherEffect from "@/components/layouts/ScrollSmootherEffect";
import { blogData } from "@/data/blogData";
import { getAllCategories } from "@/libs/blogHelpers";
import BlogCard from "@/ui/BlogCard";
import Filter from "@/ui/Filter";
import React from "react";

export default function Blog() {
  const categories = getAllCategories(blogData);

  const postsPerPage = 6;
  const page = 1;
  const totalPages= Math.ceil(blogData.length/postsPerPage)

  const startIndex = (page-1) *postsPerPage;
  const currentPosts = blogData.slice(startIndex, startIndex + postsPerPage) 
  
  

  return (
    <>
    <ScrollSmootherEffect/>
      <section className="blog__area-6 blog__animation">
        <div className="container mx-auto px-4 relative line pt-110 pb-110">
          <span className="line-3"></span>
          <div className="flex flex-wrap items-center justify-between pb-130">
            <div className="w-full md:w-1/2 lg:w-1/2 xl:w-7/12 2xl:w-2/3">
              <div className="sec-title-wrapper">
                <BlogPageHeading/>
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
