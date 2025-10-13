"use client"

import React, { useState } from "react";

import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import loader from "@public/assets/imgs/css-loader.gif"
import Image from "next/image";

export default function ConsultatonForm() {
    const [formData, setFormData] = useState({
        first_name: "",
        last_name: "",
        email: "",
        phone: "",
        date:"",
        time:"",
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
          const res = await fetch("/api/consultation", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formData),
        });
    
        if (res.ok) {
          setStatus("✅ Message sent successfully!");
          setFormData({ first_name: "", last_name: "",phone: "", email: "", date: "", time:"", message: "" });
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
                  
                </div>
                <div className="w-full md:w-[48%]">
                  <input
                    type="date"
                    name="date"
                    placeholder="Pick a date *"
                    required
                    value={formData.date}
                    onChange={handleChange}
                  />
                  
                </div>
                <div className="w-full md:w-[48%]">
                  <input
                    type="time"
                    name="time"
                    placeholder="Pick a time *"
                    required
                    value={formData.time}
                    onChange={handleChange}
                  />
                  
                </div>
              </div>
              <div className="flex flex-wrap items-center justify-between gap-2.5">
                
              </div>
              <div className="w-full">
                <div className="w-full">
                  <textarea
                    name="message"
                    placeholder="Messages"
                    value={formData.message}
                    onChange={handleChange}
                  ></textarea>
                </div>
              </div>
              <div className="row g-3">
                <div className="col-12 flex gap-2 items-center">
                  <div className="btn_wrapper">
                    <button
                      className="wc-btn-black btn-hover btn-item cursor-pointer"
                      type="submit"
                    >
                      <span></span> Schedule <br />
                     a meeting <FontAwesomeIcon icon={faArrowRight} ></FontAwesomeIcon>
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
  )
}
