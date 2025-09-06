import BlogCard from "@/ui/BlogCard";
import React from "react";

export default function Blog() {
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

          <div className="grid gap-6 md:gap-7 lg:gap-14 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 ">
            <BlogCard/>
          </div>
        </div>
      </section>
    </>
  );
}
