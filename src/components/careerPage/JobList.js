import { jobData } from "@/data/jobData";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

export default function JobList() {
  return (
    <>
      {jobData.map((data, index) => (
        <a href="job-details.html" key={index}>
          <div className="job__item">
            <p className="job__no">
               {data.id < 10 ? 0:""}{data.id}
            </p>
            <h3 className="job__title">{data.tittle}</h3>
            <h4 className="job__open">
                ({data.id < 10 ? 0:"" }{data.specificatios.map(spec=> spec.vacancy)} Open Roles)
                </h4>
            <div className="job__link">
              <span>
                <FontAwesomeIcon icon={faArrowRight} className="fa-solid fa-arrow-right"></FontAwesomeIcon>
              </span>
            </div>
          </div>
        </a>
      ))}
    </>
  );
}
