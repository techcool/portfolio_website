import React from "react";
import CircleButton from "@/ui/CircleButton";



export default function WhyChooseCTA() {
  return (
    <>
      <div className="cta__area-3 wf_panel">
        <div className="container mx-auto px-4 py-36">
          <div className="flex flex-wrap">
            <div className="w-full text-center">
              <div className="cta__content-3 mx-auto">
                <p className="cta__sub-title-2 mb-4">
                  Have you project in mind?
                </p>
                <h2 className="cta__title-2 mb-8">
                  Let's make something great together!
                </h2>
                <CircleButton variant='light' position='left' link="contact-us" label='Contact With Us'/>
                
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
