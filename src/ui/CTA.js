import React from "react";
import CircleButton from "./CircleButton";

export default function CTA() {
  return (
    <>
      <section className="cta__area">
        <div className="container mx-auto px-4 line pb-110 dark-p">
          <div className="line-3"></div>
          <div className="row">
            <div className="col-xxl-12">
              <div className="cta__content">
                <p className="cta__sub-title">Work with us</p>
                <h2 className="cta__title title-anim">
                  We would love to hear more about your project
                </h2>
                <CircleButton link="contact-us" position="left" variant="light" label="Let’s talk us"/>
                
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
