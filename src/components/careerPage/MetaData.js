import React from "react";

export default function MetaData({ metaData }) {
  return (
    <>
      <ul className="job__detail-meta">
        {metaData.map((data, index) => (
          <React.Fragment key={index}>
            <li>
              <span>Location</span> {data.location}
            </li>
            <li>
              <span>Date</span> {data.publishedDate}
            </li>
            <li>
              <span>Job Type</span> {data.jobType}
            </li>
          </React.Fragment>
        ))}
      </ul>
    </>
  );
}
