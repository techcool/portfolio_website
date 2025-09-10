import CircleButton from "@/ui/CircleButton";
import Video from "@/ui/Video";
import React from "react";

export default function CareerTop() {
  return (
    <>
      <section className="career__top">
        <div className="career__top-title">
          <div className="container mx-auto px-4 pt-120">
            <div className="flex flex-wrap items-center justify-between pb-120">
              <div className="w-full md:w-[75%]">
                <div className="sec-title-wrapper">
                  <h2 className="sec-title-2 animation__char_come">
                    Join our team & let’s work together
                  </h2>
                </div>
              </div>
              <div className="w-full md:w-[25%] justify-start flex md:justify-end">
                <CircleButton
                  link="#job_list"
                  label="Explore job vacancies"
                  position="left"
                  variant="light"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="career__thumb">
          <div className="container mx-auto px-4 g-0">
            <div className="row inherit">
              <div className="w-full">
                <div className="career__top-img">
                  <Video videoSrc="assets/video/video.mp4" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
