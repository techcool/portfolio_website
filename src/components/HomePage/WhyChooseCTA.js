import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";



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
                <div className="btn_wrapper">
                  <a
                    href="contact.html"
                    className="wc-btn-black btn-hover btn-item inline-flex items-center bg-transparent py-3 px-6 rounded-full transition"
                  >
                    <span></span> Contact <br />
                    with us
                    <FontAwesomeIcon icon={faArrowRight} className="ml-2" />
                    {/* <i className="fa-solid fa-arrow-right ml-2"></i> */}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
