import FaqAccordion from '@/components/HomePage/FaqAccordion'
import { faqPageAccordionData } from '@/data/faqAccordionData'
import CTA from '@/ui/CTA'
import React from 'react'

export default function FaqPage() {
  return (
    <>
       <section className="faq__area-6 faq-page">
          <div className="container mx-auto px-4 relative line pt-130 pb-140">
            <div className="line-3"></div>

            <div className="row">
              <div className="w-full">
                <div className="sec-title-wrapper">
                  <h2 className="sec-title-2 animation__char_come">FAQ</h2>
                  <p className="">Frequently asked question (FAQ) <br/> pages to find answars.</p>
                </div>
              </div>
            </div>

            <div className="row">
              <div className="w-full">
                <FaqAccordion accordData={faqPageAccordionData} />
              </div>
            </div>

          </div>
        </section> 
        <CTA/>
    </>
  )
}
