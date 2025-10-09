import ContactForm from '@/components/contactPage/ContactForm'
import ContactHeading from '@/components/contactPage/ContactHeading'
import ContactInfo from '@/components/contactPage/ContactInfo'
import ContactInfoHeading from '@/components/contactPage/ContactInfoHeading'
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
                  <ContactHeading/>
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
                  <ContactInfoHeading/>
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
