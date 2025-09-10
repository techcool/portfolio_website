import React from "react";

export default function Specifications({spec}) {
  return (
    <>
      <ul>
        {spec.map((data, index) => (
          <React.Fragment key={index}>
            <li>
              <span>Experience</span> {data.experience}
            </li>
            <li>
              <span>Working Hours</span> {data.workingHours}
            </li>
            <li>
              <span>Working Days</span> {data.workingDays}
            </li>
            <li>
              <span>Salary</span> {data.salary}
            </li>
            <li>
              <span>Vacancy</span> No of Vacancies: {data.vacancy}
            </li>
            <li>
              <span>Deadline</span> {data.deadLine}
            </li>
          </React.Fragment>
        ))}
        
      </ul>
    </>
  );
}
