import React from "react";
import ResearchArea from "./ResearchArea";
import WhyChooseCounter from "./WhyChooseCounter";
import WhyChooseCTA from "./WhyChooseCTA";

export default function WhyChooseUs() {
  return (
    <>
      <section className="workflow__area-3">
        <div className="workflow__wrapper-3">
          <div className="choose-wrapper wf_panel">
            <div className="container mx-auto px-4">
              <div className="flex flex-wrap">
                <div className="w-full">
                  <div className="choose-title-wrapper text-center">
                    <h2 className="choose-title title-anim">
                      why <br />
                      choose us
                    </h2>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <ResearchArea />  
          <WhyChooseCounter/>  
          <WhyChooseCTA/>
        </div>
      </section>
    </>
  );
}
