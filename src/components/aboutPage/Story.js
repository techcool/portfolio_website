import React from "react";

import storyOne from "@public/assets/imgs/story/1.jpg"
import storyTwo from "@public/assets/imgs/story/2.jpg"
import storyThree from "@public/assets/imgs/story/3.jpg"
import storyFour from "@public/assets/imgs/story/4.jpg"
import Image from "next/image";

export default function Story() {
  return (
    <>
      <section className="story__area">
            <div className="from-text text-sm uppercase tracking-wider">
              from <span className="font-bold text-black">1990</span>
            </div>
        <div className="container mx-auto px-4 relative pt-36">
         
          {/* <span className="line-3 absolute left-0 top-0 h-full w-px bg-gray-200"></span> */}

          {/* Section Title */}
          <div className="sec-title-wrapper mb-12">

            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 mt-6">
              <div className="md:col-span-5">
                <h2 className="sec-sub-title title-anim text-lg font-medium text-gray-700">
                  Digital Studio
                </h2>
                <h3 className="sec-title title-anim text-3xl md:text-4xl font-bold mt-2">
                  Our story
                </h3>
              </div>
              <div className="md:col-span-7">
                <div className="story__text space-y-4 text-gray-600 leading-relaxed">
                  <p>
                    Your brand is the most important asset in your company. Let
                    our team of professionals help you with a good strategy. The
                    runway next featured an edgy collection of dyed denim
                    pieces. The collection included patchwork denim—a trend
                    exploding in younger generations. Playing on sustainability,
                    the pieces appeared to be upcycled to establish dimension
                    and flair. This take on grunge and streetwear pushed
                    sustainable fashion to a new level.
                  </p>
                  <p>
                    Our specialized team of researchers, strategists, designers,
                    developers, and project managers work with streamlined
                    processes to break through organizational roadblocks. We
                    translate research into solutions, crafting thoughtful and
                    unified brands.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Story Images */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
            <div className="md:col-span-3">
              <div className="story__img-wrapper">
                <Image
                  src={storyOne}
                  alt="Story Thumbnail"
                  className="w-full rounded-lg"
                />
              </div>
            </div>

            <div className="md:col-span-5">
              <div className="story__img-wrapper img-anim">
                <Image
                  src={storyTwo}
                  alt="Story Thumbnail"
                  className="w-full rounded-lg"
                  data-speed="auto"
                />
              </div>
            </div>

            <div className="md:col-span-4 flex flex-col gap-4">
              <div className="story__img-wrapper">
                <Image
                  src={storyThree}
                  alt="Story Thumbnail"
                  className="w-full rounded-lg"
                />
                <Image
                  src={storyFour}
                  alt="Story Thumbnail"
                  className="w-full rounded-lg"
                />
              </div>
              
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
