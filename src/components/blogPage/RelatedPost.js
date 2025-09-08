import BlogCard from "@/ui/BlogCard";
import React from "react";

export default function RelatedPost({ posts }) {
  return (
    <>
      <section className="blog__related blog__animation">
        <div className="container mx-auto px-4 line pt-130 pb-140">
          <span className="line-3"></span>
          <div className="row">
            <div className="w-full">
              <div className="sec-title-wrapper">
                <h2 className="sec-title title-anim">Related Aricles</h2>
              </div>
            </div>
          </div>

          <div className="grid gap-6 md:gap-7 lg:gap-14 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 ">
            {posts && posts.length > 0 ? (
              <BlogCard posts={posts} />
            ) : (
              <p className="text-red-500">No related post is found</p>
            )}
          </div>
        </div>
      </section>
    </>
  );
}
