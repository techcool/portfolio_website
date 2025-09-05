import ContactForm from '@/components/contactPage/ContactForm'
import ContactInfo from '@/components/contactPage/ContactInfo'
import React from 'react'

export default function ContactUs() {
  return (
    <>
        <section className="contact__area-6">
          <div className="container mx-auto px-4 line pt-120 pb-110">
            <span className="line-3"></span>
            <div className="flex flex-wrap items-center justify-between">
              <div className="w-full md:w-[50%]">
                <div className="sec-title-wrapper">
                  <h2 className="sec-title-2 animation__char_come">Let’s get in touch</h2>
                </div>
              </div>
              <div className="w-full md:w-[50%]">
                <div className="contact__text">
                  <p>Great! We're excited to hear from you and let's start
                    something special togerter. call us for any inquery.</p>
                </div>
              </div>
            </div>
            <div className="flex flex-wrap gap-0 md:gap-24 items-start justify-between contact__btm">
              <div className="w-full md:w-[36%]">
                <div className="contact__info">
                  <h3 className="sub-title-anim-top animation__word_come">Don't be afraid man ! say hello</h3>
                  <ContactInfo/>
                </div>
              </div>
              <div className="w-full md:w-[50%]">
                <div className="contact__form">
                 <ContactForm/>
                </div>
              </div>
            </div>
          </div>
        </section>
    </>
  )
}
