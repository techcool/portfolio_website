import ContactForm from "@/components/contactPage/ContactForm";
import ConsultatonForm from "@/components/free-consultation/ConsultatonForm";
import CommonHeading from "@/components/layouts/Heading/CommonHeading";
import { counter } from "@/data/whyChooseData";
import React from "react";

export default function FreeConsultation() {
  return (
    <>
      <section className="contact__area-6">
        <div className="container mx-auto px-4 line pt-120 pb-110">
          <span className="line-3"></span>
          <div className="flex flex-wrap items-start justify-between">
            <div className="w-full md:w-[50%]">
              <div className="sec-title-wrapper">
                <CommonHeading label="Together, we can build something remarkable." tag="h3" />
                <div className="spacer h-4"></div>
                <p>
                  Our Consultants will reply back to you within 7 hours or less
                </p>
                <div className="spacer h-7"></div>
                <h4 className="text-xl md:text-2xl">Quick Facts</h4>
                <div className="spacer h-5"></div>
                <div className="counter__wrapper-3 grid grid-cols-2 gap-8">
                  {counter.map((item) => (
                    <div className="counter__item-3" key={item.id}>
                      <h4 className="text-3xl md:text-4xl">{item.number}</h4>
                      <p className="text-gray-600">
                        {item.titlePart1}
                        {item.titlePart2}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="w-full md:w-[50%]">
               <CommonHeading label="Schedule a Free 30-minute free Consultation" tag="h2"/> 
              
              <div className="spacer h-4"></div>
              <p>
                It’s Free. You will get a call from us as per this schedule. Our
                team will discuss about your requirements and its solution.
              </p>
              <div className="contact__form mt-6">
                <ConsultatonForm />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
