import React from "react";

import galleryPic1 from "@public/assets/imgs/career/2.jpg"
import galleryPic2 from "@public/assets/imgs/career/3.jpg"
import galleryPic3 from "@public/assets/imgs/career/4.jpg"
import galleryPic4 from "@public/assets/imgs/career/5.jpg"
import Image from "next/image";


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

          <div className="flex flex-wrap gap-4 justify-between">
            <div className="w-full md:w-[23%] ">
              <div className="career__gallery-img">
                <Image src={galleryPic1} alt="Career image 1" />
              </div>
            </div>
            <div className="w-full md:w-[40%]">
              <div className="career__gallery-img img-anim">
                <Image
                  src={galleryPic2}
                  alt="Career image 2"
                  data-speed="auto"
                />
              </div>
            </div>
            <div className="w-full md:w-[33%]">
              <div className="career__gallery-img">
                <Image src={galleryPic3} alt="Career image 3" />
                <Image src={galleryPic4} alt="Career image 4" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
