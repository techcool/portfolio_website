"use client";

import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import ApplicationForm from "./ApplicationForm";

export default function ApplicationModal({ job, isOpen, onClose }) {
  const [step, setStep] = useState(1);
  if (!isOpen) return null;


  return (
    <div className="modal__application" id="application_form">
      <div className="modal__apply">
        {/* Close Button */}
        <button className="modal__close-2" id="apply_close" onClick={onClose}>
          <FontAwesomeIcon icon={faXmark} />
        </button>

        {/* Modal Header */}
        <div className="form-top">
          <h2 className="cta__title">{job?.title || "Apply Now"}</h2>
          <p>{job.jobMetaData.map((data) => data.jobType)}</p>
          <div className="text-gray-600 mt-2">
            Step {step} of 2: {step === 1 ? "Job Details" : "Personal Details"}
          </div>
        </div>

        <div className="form-apply">
          <ApplicationForm step={step} setStep={setStep} job={job}/>
        </div>
      </div>
    </div>
  );
}
