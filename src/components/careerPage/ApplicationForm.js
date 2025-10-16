"use client";
import React, { useCallback, useState } from "react";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import FileUploadDropzone from "../letsCollaboratePage/FileUploadDropzone";
import loader from "@public/assets/imgs/css-loader.gif";
import Image from "next/image";

export default function ApplicationForm({ step, setStep, job }) {
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
    attachments: null,
  });
  const [status, setStatus] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const [errors, setErrors] = useState({});
  // update fields
  const handleChange = (e) => {
    e.preventDefault();
   
    const { name, value, type, files } = e.target;
    setFormData({
      ...formData,
      [name]: type === "file" ? files[0] : value,
    });

    if (errors[name] && value.trim()) {
      setErrors((prev) => ({
        ...prev,
        [name]: false,
      }));
    }
  };

  //handle next
  const handleNext = () => {
    const newErrors = {};

    const requiredFields = [
      "question",
      "question2",
      "question6",
      "question8",
    ];
    requiredFields.forEach((field) => {
      if (!formData[field]) {
        newErrors[field] = true;
      }
    });
    setErrors(newErrors);
    if (Object.keys(newErrors).length > 0) {
      alert("Please fill all required fields!");
      return;
    }else{

        setStep(step + 1);
    }
    //  if(
    //     !formData.question ||
    //     !formData.question2 ||
    //     !formData.question3 ||
    //     !formData.question6 ||
    //     !formData.question8
    //  ){
    //  setErrors(newErrors);
    //     if(Object.keys(newErrors).length>0){
    //         alert("Please fill all required fields!");
    //         return;
    //     }

    //     }
    //  else{
    //     setStep(step+1)
    //  }
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
  // habdle submit
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      const data = new FormData();
      data.append("jobTitle", job.title);
      data.append("question", formData.question);
      data.append("question2", formData.question2);
      data.append("question3", formData.question3);
      data.append("question5", formData.question5);
      data.append("question6", formData.question6);
      data.append("question7", formData.question7);
      data.append("question8", formData.question8);
      data.append("name", formData.name);
      data.append("email", formData.email);
      data.append("phone", formData.phone);
      data.append("requirement", formData.requirement);

      if (formData.attachments) {
        data.append("attachments", formData.attachments);
      }

      const res = await fetch("/api/application", {
        method: "POST",
        body: data,
      });

      if (res.ok) {
        setStatus("✅ Your application sent successfully!");
        setFormData({
          question:"",
          question2:"",
          question3:"",
          question4:"",
          question5:"",
          question6:"",
          question7:"",
          question8:"",  
          name: "",
          email: "",
          phone: "",
          attachments: null,
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
      <form onSubmit={handleSubmit}>
        {step === 1 && (
          <>
            <div className="input-apply">
              <p>
                Why you decided to apply here and why should we select you? *
              </p>
              <textarea
                name="question"
                value={formData.question}
                onChange={handleChange}
                required
                className={errors.question ? "border-red" : ""}
              ></textarea>
            </div>
            <div className="input-apply">
              <p>
                Tell us about a project that you worked on and felt proud of it.
                *
              </p>
              <textarea
                name="question2"
                value={formData.question2}
                onChange={handleChange}
                required
                className={errors.question2 ? "border-red" : ""}
              ></textarea>
            </div>
            <div className="input-apply">
              <p>
                Share your portfolios. (GitHub, Behance, Dribbble, etc)
                <br />
                <span className="text-sm text-gray-400">
                  (Share links if applicable)
                </span>
              </p>

              <textarea
                name="question3"
                value={formData.question3}
                onChange={handleChange}
                
                className={errors.question3 ? "border-red" : ""}
              ></textarea>
            </div>

            <div className="input-apply">
              <p>
                Do you have any other designs to show us?
                <br />
                <span className="text-sm text-gray-400">
                  (Share links if applicable)
                </span>
              </p>
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
                className={errors.question6 ? "border-red" : ""}
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
                className={errors.question8 ? "border-red" : ""}
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
                placeholder="Your name"
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
                placeholder="youremail@example.com *"
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
                placeholder="0000 0000 00 *"
                value={formData.phone}
                onChange={handleChange}
                pattern="[0-9]{10}"
                inputMode="numeric"
                required
              />
            </div>
            <div className="input-apply-2">
              <p>Upload CV</p>
              <FileUploadDropzone 
              file={formData.attachments}
              onFileSelect={handleFileChange}
              onFileRemove={handleFileRemove}/>
            </div>
          </>
        )}

        {/* Navigation Buttons */}
        <div className="form-btn-2 mt-6 ">
          {step > 1 && (
            <button
              type="button"
              className="wc-btn-black btn-hover cursor-pointer back-btn"
              onClick={() => {
                setStep(step - 1)
                setStatus("")
              }}
            >
              <span></span>
              <FontAwesomeIcon icon={faArrowLeft}></FontAwesomeIcon> Back 
            </button>
          )}

          {step < 2 ? (
            <button
              type="button"
              className="wc-btn-black btn-hover cursor-pointer"
              onClick={() => handleNext()}
            >
              <span></span>
              Next <FontAwesomeIcon icon={faArrowRight}></FontAwesomeIcon>
            </button>
          ) : (
            <div className="flex gap-6 items-center">
            <button
              type="submit"
              className="wc-btn-black btn-hover cursor-pointer"
            >
              <span></span>
              Submit
              <FontAwesomeIcon icon={faArrowRight}></FontAwesomeIcon>
            </button>
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
          )}
        </div>
        {status && <p className="text-center mt-5 status">{status}</p>}
      </form>
    </>
  );
}
