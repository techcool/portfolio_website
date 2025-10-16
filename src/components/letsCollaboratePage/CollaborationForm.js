"use client";

import React, { useCallback, useState } from "react";

import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import loader from "@public/assets/imgs/css-loader.gif";
import Image from "next/image";
import FileUploadDropzone from "./FileUploadDropzone";

export default function CollaborationForm() {
  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    email: "",
    area_code: "",
    phone: "",
    company: "",
    services: "",
    attachments: null,
    requirement: "",
  });
  const [status, setStatus] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  }; 

  // Wrap it in useCallback for performance for best practice
  const handleFileChange = useCallback((e) => {
    const file = e.target.files[0];
    if (!file) return;
    const allowedFileType = [
      "application/pdf",
      "application/msword",
      "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
      "image/jpg",
      "image/jpeg",
      "image/png",
    ];

    const maxSize = 25 * 1024 * 1024;

    if (!allowedFileType.includes(file.type)) {
      alert("Only PDF, doc, docx, JPG, jpeg and PNG files are allowed!");
      e.target.value = "";
      return;
    }

    if (file.size > maxSize) {
      alert("File size should not exceed 25 MB!");
      e.target.value = "";
      return;
    }
    setFormData((prev) => ({
      ...prev,
      attachments: file,
    }));
  }, []); // Dependency array is empty since it only uses setFormData

  const handleFileRemove = useCallback(() => {
    setFormData((prev) => ({
      ...prev,
      attachments: null,
    }));
    // Optionally reset the hidden input value to allow re-uploading the same file
    const fileInput = document.getElementById("attachments-input");
    if (fileInput) fileInput.value = null;
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const data = new FormData();
      data.append("first_name", formData.first_name);
      data.append("last_name", formData.last_name);
      data.append("email", formData.email);
      data.append("area_code", formData.area_code);
      data.append("phone", formData.phone);
      data.append("company", formData.company);
      data.append("services", formData.services);
      data.append("requirement", formData.requirement);

      if (formData.attachments) {
        data.append("attachments", formData.attachments);
      }

      const res = await fetch("/api/collaborate", {
        method: "POST",
        body: data,
      });

      if (res.ok) {
        setStatus("✅ Message sent successfully!");
        setFormData({
          first_name: "",
          last_name: "",
          email: "",
          area_code: "",
          phone: "",
          company: "",
          services: "",
          attachments: "",
          requirement: "",
        });
      } else {
        setStatus("❌ Failed to send message");
      }
    } catch (error) {
      setStatus("❌ Something went wrong");
    } finally {
      setIsLoading(false);
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
              placeholder="youremail@example.com *"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="w-full md:w-[48%] flex items-center gap-2">
            <input
              type="text"
              placeholder="91 *"
              required
              name="area_code"
              value={formData.area_code}
              onChange={handleChange}
              pattern="[0-9]*"
              maxLength="3"
              className="w-8 short"
            />
            <input
              type="tel"
              name="phone"
              placeholder="Phone number *"
              required
              value={formData.phone}
              onChange={handleChange}
              pattern="[0-9]{10}"
              inputMode="numeric"
              className="w-[90%] long"
            />
          </div>
          <div className="w-full md:w-[48%]">
            <input
              type="text"
              name="company"
              placeholder="Your Company *"
              required
              value={formData.company}
              onChange={handleChange}
            />
          </div>
          <div className="w-full md:w-[48%]">
            <select
              name="services"
              value={formData.services}
              required
              onChange={handleChange}
            >
              <option value="">Select Services</option>
              <option value="dedicated_hiring">Dedicated Hiring</option>
              <option value="mobile_app_development">
                Mobile App Development
              </option>
              <option value="web_development">Web Development</option>
              <option value="maintenance_support">Maintenance & Support</option>
              <option value="job_enquiry">Job Enquiry</option>
              <option value="others">Others</option>
            </select>
          </div>
        </div>
        <div className="flex flex-wrap items-center justify-between gap-2.5"></div>
        <div className="w-full">
          {/* <input type="file"
              name="attachments"
              placeholder="Attachments"
              accept=".pdf,.doc,.docx,image/*"
              onChange={handleFileChange} className="mb-0"/> <br/>
              <span className="text-[14px] text-gray-400 block ">Upload only .pdf, .doc, .docx, .jpg, .jpeg and max file size upto 25mb</span> */}
          <FileUploadDropzone
            file={formData.attachments}
            onFileSelect={handleFileChange}
            onFileRemove={handleFileRemove}
          />
        </div>
        <div className="w-full">
          <textarea
            name="requirement"
            placeholder="Requirements"
            value={formData.requirement}
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
                <span></span> Schedule <br />a meeting{" "}
                <FontAwesomeIcon icon={faArrowRight}></FontAwesomeIcon>
              </button>
            </div>
            {isLoading && (
              <Image
                className="contactLoader"
                src={loader}
                alt="loader"
                width={25}
                height={25}
              />
            )}
          </div>
        </div>
        {status && <p>{status}</p>}
      </form>
    </>
  );
}
