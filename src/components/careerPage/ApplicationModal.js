"use client";

import { faArrowRight, faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";

export default function ApplicationModal({ job, isOpen, onClose }) {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    // step 1
    question: "",
    question2: "",
    question3: "",
    question4: "",
    question5: "",
    question6: "",
    question7: "",
    question8: "",
    // step 2
    name: "",
    email: "",
    phone: "",
    cv: null,
  });

  if (!isOpen) return null;

  // update fields
  const handleChange = (e) => {
    const { name, value, type, files } = e.target;
    setFormData({
      ...formData,
      [name]: type === "file" ? files[0] : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    onClose();
  };

  return (
    <div className="modal__application" id="application_form">
      <div className="modal__apply">
        {/* Close Button */}
        <button className="modal__close-2" id="apply_close" onClick={onClose}>
          <FontAwesomeIcon icon={faXmark} />
        </button>

        {/* Modal Header */}
        <div className="form-top">
          <h2 className="sec-title">{job?.title || "Apply Now"}</h2>
          <p>{job.jobMetaData.map(data=>data.jobType)}</p>
          <div className="text-gray-600 mt-2">
            Step {step} of 2:{" "}
            {step === 1 ? "Job Details" : "Personal Details"}
          </div>
        </div>

        
        <div className="form-apply">
          <form onSubmit={handleSubmit}>
            {step === 1 && (
              <>
                <div className="input-apply">
                  <p>Why you decided to apply here and why should we select you? *</p>
                  <textarea
                    name="question"
                    value={formData.question}
                    onChange={handleChange}
                    required
                  ></textarea>
                </div>
                <div className="input-apply">
                  <p>Tell us about a project that you worked on and felt proud of it.</p>
                  <textarea
                    name="question2"
                    value={formData.question2}
                    onChange={handleChange}
                    required
                  ></textarea>
                </div>
                <div className="input-apply">
                  <p>Share your portfolios. (Behance, Dribbble, etc) *</p>
                  <textarea
                    name="question3"
                    value={formData.question3}
                    onChange={handleChange}
                    required
                  ></textarea>
                </div>
                <div className="input-apply">
                  <p>Who's your favorite designer? *</p>
                  <textarea
                    name="question4"
                    value={formData.question4}
                    onChange={handleChange}
                    required
                  ></textarea>
                </div>
                <div className="input-apply">
                  <p>Do you have any other designs to show us?</p>
                  <textarea
                    name="question5"
                    value={formData.question5}
                    onChange={handleChange}
                  ></textarea>
                </div>
                <div className="input-apply">
                  <p>What are you looking for in your next job/journey? *</p>
                  <textarea
                    name="question6"
                    value={formData.question6}
                    onChange={handleChange}
                    required
                  ></textarea>
                </div>
                <div className="input-apply">
                  <p>What makes you angry? and what makes you smile?</p>
                  <textarea
                    name="question7"
                    value={formData.question7}
                    onChange={handleChange}
                  ></textarea>
                </div>
                <div className="input-apply">
                  <p>Your current salary & what are your salary expectations? *</p>
                  <textarea
                    name="question8"
                    value={formData.question8}
                    onChange={handleChange}
                    required
                  ></textarea>
                </div>
              </>
            )}

            {step === 2 && (
              <>
                <div className="input-apply-2">
                  <p>Name *</p>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="input-apply-2">
                  <p>Email *</p>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="input-apply-2">
                  <p>Phone *</p>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="input-apply-2">
                  <p>Upload CV *</p>
                  <input
                    type="file"
                    name="cv"
                    onChange={handleChange}
                    required
                  />
                </div>
              </>
            )}

            {/* Navigation Buttons */}
            <div className="form-btn-2 mt-6 ">
              {step > 1 && (
                <button
                  type="button"
                  className="wc-btn-black btn-hover cursor-pointer"
                  onClick={() => setStep(step - 1)}
                >
                  <span></span>
                   Back <FontAwesomeIcon icon={faArrowRight}></FontAwesomeIcon>
                </button>
              )}

              {step < 2 ? (
                <button
                  type="button"
                  className="wc-btn-black btn-hover cursor-pointer"
                  onClick={() => setStep(step + 1)}
                >
                  <span></span>
                  Next <FontAwesomeIcon icon={faArrowRight}></FontAwesomeIcon>
                </button>
              ) : (
                <button type="submit" className="wc-btn-black btn-hover cursor-pointer">
                  <span></span>
                  Submit
                  <FontAwesomeIcon icon={faArrowRight}></FontAwesomeIcon>
                </button>
              )}
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
