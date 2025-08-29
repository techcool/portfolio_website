import React from "react";

import ServiceItems2 from "./ServiceItem2";

function Services2() {
  return (
    <>
        <section className="service__area-3 pb-150">
            <div className="container mx-auto px-4">
            <div className="row">
                <div className="col-xxl-12">
                <div className="sec-title-wrapper pt-130 text-anim">
                    <h2 className="sec-sub-title title-anim">Services</h2>
                    <h3 className="sec-title title-anim">
                    Our <br />
                    Services
                    </h3>
                    <p>
                    Consumers today rely heavily on digital means to research
                    products. We research a brand of bldend engaging with it,
                    according to the meanwhile, 51% of consumers say they use
                    Google to research products before buying.
                    </p>
                </div>
                </div>
            </div>

            <ServiceItems2 />
            </div>
        </section>
    </>
  );
}

export default Services2;
