import Expectations from "@/components/careerPage/Expectations";
import MetaData from "@/components/careerPage/MetaData";
import PerksBenefit from "@/components/careerPage/PerksBenefit";
import Requirements from "@/components/careerPage/Requirements";
import Specifications from "@/components/careerPage/Specifications";

import { jobData } from "@/data/jobData";
import slugify from "@/libs/slugify";

import React from "react";
import ApplicationModalWrapper from "@/components/careerPage/ApplicationModalWrapper";
import ScrollSmootherEffect from "@/components/layouts/ScrollSmootherEffect";

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const job = jobData.find((j) => slugify(j.title) === slug);

  return {
    title: job.title,
    description: job.jobDescription.slice(0, 160),
  };
}

export default async function CareerDetails({ params }) {
  const { slug } = await params;
  const job = jobData.find((j) => slugify(j.title) === slug);

  if (!job) {
    return (
      <p classNameName="text-red-500">There is no job opening currently</p>
    );
  }

  return (
    <>
      <ScrollSmootherEffect/>
      <section className="job__detail">
        <div className="container mx-auto px-4 g-0 line pt-120 pb-110">
          <span className="line-3"></span>

          <div className="flex flex-wrap items-start">
            <div className="w-full md:w-[66.66666667%] lg:w-[75%]">
              <div className="job__detail-wrapper">
                <h2 className="sec-title">{job.title}</h2>
                <MetaData metaData={job.jobMetaData} />
                <div className="job__detail-content">
                  <p>{job.jobDescription}</p>
                  <h2>What you will do</h2>
                  <Expectations expectations={job.expectations} />
                  <h2>Requirements</h2>
                  <Requirements requirement={job.requirements} />
                  <h2>Educational Qualification</h2>
                  <ul>
                    <li>{job.academicQualification}</li>
                  </ul>
                  <h2>Perks & Benefits</h2>
                  <PerksBenefit benefits={job.perksBenefits} />
                  <p>{job.lastMessage}</p>
                </div>

                <ApplicationModalWrapper job={job} />
              </div>
            </div>
            <div className="w-full md:w-[33.33333333%] lg:w-[25%]">
              <div className="job__detail-sidebar align-self-start">
                <Specifications spec={job.specificatios} />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
