import React from 'react'
import JobList from './JobList'
import CareerAreaHeading from './CareerAreaHeading'

export default function CareerArea() {
  return (
    <>
       <section className="job__area pt-130 pb-150" id="job_list">
          <div className="container mx-auto px-4">
            <div className="row">
              <div className="w-full">
                <div className="sec-title-wrapper">
                  <CareerAreaHeading/>
                </div>
              </div>
              <div className="col-xxl-12">
                <div className="job__list">
                   <JobList/> 
                </div>
              </div>
            </div>
          </div>
        </section> 
    </>
  )
}
