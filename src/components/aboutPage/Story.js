
import React from "react";
import StoryImage from "./StoryImage";


export default function Story() {
 

  return (
    <section className="story__area">
      <div className="from-text text-sm uppercase tracking-wider">
        from <span className="font-bold text-black">1990</span>
      </div>
      <div className="container mx-auto px-4 relative pt-36">
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
                  runway next featured an edgy collection of dyed denim pieces.
                </p>
                <p>
                  Our specialized team of researchers, strategists, designers,
                  developers, and project managers work with streamlined
                  processes to break through organizational roadblocks.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Story Images */}
        <StoryImage/>
      </div>
    </section>
  );
}
