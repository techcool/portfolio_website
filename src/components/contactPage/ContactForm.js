"use client";

import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import loader from "@public/assets/imgs/css-loader.gif"
import Image from "next/image";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  const [status, setStatus] = useState("");
  const [isLoading, setIsLoading] = useState(false)
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true)

    try{
      const res = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });

    if (res.ok) {
      setStatus("✅ Message sent successfully!");
      setFormData({ first_name: "", last_name: "", email: "", phone: "", subject: "", message: "" });
    } else {
      setStatus("❌ Failed to send message");
    }
    }catch(error){
      setStatus("❌ Something went wrong");
    }finally{
      setIsLoading(false)
    }

    
  };

  return (
    <>
      <form action="" method="POST" onSubmit={handleSubmit}>
        <div className="flex flex-wrap items-center justify-between gap-2.5">
          <div className="w-full md:w-[48%]">
            <input
              type="text"
              name="first_name"
              placeholder="First Name *"
              value={formData.first_name}
              onChange={handleChange}
              required
            />
          </div>
          <div className="w-full md:w-[48%]">
            <input
              type="text"
              name="last_name"
              placeholder="Last Name *"
              value={formData.last_name}
              onChange={handleChange}
              required
            />
          </div>
          <div className="w-full md:w-[48%]">
            <input
              type="email"
              name="email"
              placeholder="youremail@gmail.com *"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="w-full md:w-[48%]">
            <input
              type="tel"
              name="phone"
              placeholder="+91 *"
              required
              value={formData.phone}
              onChange={handleChange}
              pattern="[0-9]{10}"
              inputMode="numeric"
            />
            {/* <input
              type="tel"
              name="phone"
              placeholder="+91-9876543210"
              pattern="^\+?[0-9]{1,4}[- ]?[0-9]{6,14}$"
              title="Enter a valid phone number (e.g., +91-9876543210)"
              required
              className="border p-2 w-full"
            /> */}
          </div>
        </div>
        <div className="flex flex-wrap items-center justify-between gap-2.5">
          
          <div className="w-full">
            <input
              type="text"
              name="subject"
              placeholder="Subject"
              value={formData.subject}
              onChange={handleChange}
            />
          </div>
        </div>
          <div className="w-full">
            <textarea
              name="message"
              placeholder="Messages"
              value={formData.message}
              onChange={handleChange}
            ></textarea>
          </div>
        
        <div className="row g-3">
          <div className="col-12 flex gap-2 items-center">
            <div className="btn_wrapper">
              <button
                className="wc-btn-black btn-hover btn-item cursor-pointer"
                type="submit"
              >
                <span></span> Send <br />
                Messages <FontAwesomeIcon icon={faArrowRight} ></FontAwesomeIcon>
              </button>
            </div>
            {
              isLoading && <Image className="contactLoader" src={loader} alt="loader" width={25} height={25} />
            }
            
          </div>
        </div>
        {status && <p>{status}</p>}
      </form>
    </>
  );
}
