"use client";

import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  const [status, setStatus] = useState("");
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const res = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });

    if (res.ok) {
      setStatus("✅ Message sent!");
      setFormData({ name: "", email: "", message: "" });
    } else {
      setStatus("❌ Failed to send message");
    }
  };

  return (
    <>
      <form action="" method="POST" onSubmit={handleSubmit}>
        <div className="flex flex-wrap items-center justify-between gap-2.5">
          <div className="w-full md:w-[48%]">
            <input
              type="text"
              name="name"
              placeholder="Name *"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          <div className="w-full md:w-[48%]">
            <input
              type="email"
              name="email"
              placeholder="Email *"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
        </div>
        <div className="flex flex-wrap items-center justify-between gap-2.5">
          <div className="w-full md:w-[48%]">
            <input
              type="tel"
              name="phone"
              placeholder="Phone *"
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
          <div className="w-full md:w-[48%]">
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
          <div className="col-12">
            <div className="btn_wrapper">
              <button
                className="wc-btn-black btn-hover btn-item cursor-pointer"
                type="submit"
              >
                <span></span> Send <br />
                Messages <FontAwesomeIcon icon={faArrowRight} ></FontAwesomeIcon>
              </button>
            </div>
          </div>
        </div>
        {status && <p>{status}</p>}
      </form>
    </>
  );
}
