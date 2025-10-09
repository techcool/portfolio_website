import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

export default function GetInTouch() {
  return (
    <>
      <div className="w-full lg:w-1/2 px-4 custom-solution">
        
        <div className="w-full ">
          <div className="solution__content">
            <h2 className="sec-subtile-6 bg-black">Approach</h2>
            <h3 className="sec-title-6 title-anim">
              Make your <br /> business visible <br /> online
            </h3>
            <ul className="solution__list title-anim list-disc pl-5 space-y-2">
              <li>Web Interaction Design</li>
              <li>Generation Technology</li>
              <li>Facility Approach</li>
              <li>Seamless Integration</li>
              <li>Audio Performance</li>
              <li>Dashboard Analytics</li>
              <li>Customization</li>
            </ul>
          </div>
        </div>

        <div className="price__btn btn_wrapper mt-8">
          <a
            href="contact.html"
            className="wc-btn-black btn-hover btn-item inline-flex items-center bg-transparent py-3 px-6 rounded-full transition"
          >
            <span></span> Get a <br />
            Quote
            <FontAwesomeIcon icon={faArrowRight} className="ml-2"/>
            
          </a>
        </div>
      </div>
    </>
  );
}
