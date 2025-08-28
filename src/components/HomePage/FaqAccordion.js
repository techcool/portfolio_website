"use client";
import { useState } from "react";
import { faqAccordionData } from "@/data/faqAccordionData";

export default function FaqAccordion() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <div className="faq__list-3 space-y-4 custom-faq-accordion">
      <div className="accordion" id="faqAccordion">

      
      {faqAccordionData.map((item, index) => (
        <div
          key={index}
          className={`accordion-item ${openIndex === index ? "open" : "close"}`}
        >
          <h2 className="accordion-header">
            <button
              type="button"
              className="cursor-pointer px-4 py-3 font-medium accordion-button"
              onClick={() => setOpenIndex(openIndex === index ? -1 : index)}
            >
              {item.title}
            </button>
          </h2>
          <div
            className={`py-3 accordion-collapse collapse ${
              openIndex === index ? "show" : ""
            }`}
          >
            <div className="accordion-body">
              <p>{item.content}</p>
            </div>
          </div>
        </div>
      ))}
      </div>
    </div>
  );
}