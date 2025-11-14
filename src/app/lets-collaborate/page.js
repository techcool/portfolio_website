import CommonHeading from "@/components/layouts/Heading/CommonHeading";
import ScrollSmootherEffect from "@/components/layouts/ScrollSmootherEffect";
import CollaborationForm from "@/components/letsCollaboratePage/CollaborationForm";
import Counter from "@/ui/Counter";
import React from "react";

export default function LetsCollaborate() {
  return (
    <>
      <ScrollSmootherEffect/>
      <section className="contact__area-6">
        <div className="container mx-auto px-4 line pt-120 pb-110">
          <span className="line-3"></span>
          <div className="flex flex-wrap items-start justify-between">
            <div className="w-full md:w-[50%]">
              <div className="sec-title-wrapper">
                <CommonHeading
                  label="Do You Have A Project In Mind?"
                  tag="h3"
                />
                <div className="spacer h-4"></div>
                <p>
                  Let's collaborate for the project that have in your mind
                </p>
                <div className="spacer h-7"></div>
                <h4 className="text-xl md:text-2xl">Quick Facts</h4>
                <div className="spacer h-5"></div>
                <div className="counter__wrapper-3 counter_animation grid grid-cols-2 gap-8">
                  <Counter/>
                </div>
              </div>
            </div>
            <div className="w-full md:w-[50%]">
              <CommonHeading
                label="Let's Collaborate"
                tag="h2"
              />

              <div className="spacer h-4"></div>
              <p>
                Let’s get acquainted with you.
              </p>
              <div className="contact__form mt-6">
                <CollaborationForm/>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
