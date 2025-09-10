import { jobData } from "@/data/jobData";
import slugify from "@/libs/slugify";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import React from "react";

export default function JobList() {
  return (
    <>
      {jobData.map((data, index) => (
        <Link href={`career/${slugify(data.title)}`} key={index}>
          <div className="job__item">
            <p className="job__no">
               {data.id < 10 ? 0:""}{data.id}
            </p>
            <h3 className="job__title">{data.title}</h3>
            <h4 className="job__open">
                ({data.id < 10 ? 0:"" }{data.specificatios.map(spec=> spec.vacancy)} Open Roles)
                </h4>
            <div className="job__link">
              <span>
                <FontAwesomeIcon icon={faArrowRight} className="fa-solid fa-arrow-right"></FontAwesomeIcon>
              </span>
            </div>
          </div>
        </Link>
      ))}
    </>
  );
}
