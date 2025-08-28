import React from "react";
import BlogListItem from "./BlogListItem";

export default function Blogs() {
  return (
    <>
      <section className="blog__area-3 pb-36 blog__animation">
        <div className="container mx-auto px-4">
          <div className="sec-title-wrapper text-anim pt-32 mb-12">
            <h2 className="sec-sub-title">Recent Blog</h2>
            <h3 className="sec-title title-anim leading-snug">
              Read Updated <br />
              Journal
            </h3>
            <p className="">
              Read our blog and try to see everything from every perspective.
              Our passion lies in making everything accessible and aesthetic for
              everyone.
            </p>
          </div>

          <BlogListItem />
        </div>
      </section>
    </>
  );
}
