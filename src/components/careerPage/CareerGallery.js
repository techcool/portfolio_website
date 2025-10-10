import React from "react";


import CareerGalleryImg from "./CareerGalleryImg";


export default function CareerGallery() {
  return (
    <>
      <section className="career__gallery">
        <div className="container mx-auto px-4 g-0 line pt-140 pb-140">
          <span className="line-3"></span>
          <div className="row">
            <div className="col-xxl-12">
              <ul>
                <li>Future</li>
                <li>Community</li>
                <li>Honor</li>
              </ul>
              <p>
                What sets us apart is what brings us together – a shared passion
                for solving business challenges through strategy, design, and
                engineering. We are the sum total of our team, their unique
                perspectives, capabilities, and our ability to collaborate from
                ideation to deployment.
              </p>
            </div>
          </div>

          <CareerGalleryImg/>
        </div>
      </section>
    </>
  );
}
