import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

export default function GetInTouch() {
  return (
    <>
      <div className="w-full lg:w-1/2 px-4 custom-solution">
        {/* <div className="price__table space-y-8">
          <div className="price__item animation_from_bottom flex items-center justify-between border p-6 rounded-lg shadow hover:shadow-lg transition">
            <div className="flex items-center space-x-4">
              <div className="price__icon">
                <span>
                  <i className="fa-solid fa-check"></i>
                </span>
              </div>
              <div className="price__info">
                <h2 className="price__type text-lg font-bold">Yearly</h2>
                <h3 className="price__title text-gray-800">14 days free</h3>
                <p className="">
                  Subscription fee is $129.99 USD and automatically renews each
                  year.
                </p>
              </div>
            </div>
            <div className="price__amount text-right">
              <h4 className="best-value text-sm font-semibold text-blue-600">
                Best Value
              </h4>
              <p className="text-2xl font-bold">
                $129<span>.99</span>
              </p>
            </div>
          </div>

          <div className="price__item animation_from_top flex items-center justify-between border p-6 rounded-lg shadow hover:shadow-lg transition">
            <div className="flex items-center space-x-4">
              <div className="price__icon">
                <span>
                  <i className="fa-solid fa-check"></i>
                </span>
              </div>
              <div className="price__info">
                <h2 className="price__type">Monthly</h2>
                <h3 className="price__title text-gray-800">7 days free</h3>
                <p className="text-gray-600">
                  Subscription fee is $12.99 USD and automatically renews each
                  year.
                </p>
              </div>
            </div>
            <div className="price__amount text-right">
              <p className="text-2xl font-bold">
                $12<span>.99</span>
              </p>
            </div>
          </div>
        </div> */}
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
