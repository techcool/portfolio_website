import { serviceData } from '@/data/serviceData'
import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

function ServiceItems2() {
  return (
    <>
         <div className="row">
                <div className="col-xx-12">
                <div className="service__list-3">
                    {
                        serviceData.map((service, index) => (
                            <div className="service__item-3 service_animation" key={index}> 
                                <h3>
                                    <a href={service.link} className="service__title-3">
                                        {service.titleFirstPart} <br />  
                                        {service.titleSecondPart}
                                    </a>
                                </h3>
                                <div className="service__content-3">
                                    <p>
                                        {service.description}
                                    </p>
                                    <ul className="">
                                        {service.features.map((feature, fIndex) => (
                                            <li key={fIndex}>+ {feature}</li>
                                        ))}
                                    </ul>
                                </div>
                                <div className="service__btn-3">
                                    <div className="btn_wrapper">
                                        <a
                                            href="#"
                                            className="wc-btn-black btn-hover btn-item"
                                        >
                                            <span></span> Details
                                            <FontAwesomeIcon icon={faArrowRight} />
                                        </a>
                                    </div>
                                </div>
                                {/* <div
                                    className="service__hover-3"
                                    style={{ backgroundImage: `url(${service.hoverImg})` }} 
                                    ></div> */}
                            </div>
                        ))    
                    }
                    
                </div>
                </div>
            </div>
    </>
  )
}

export default ServiceItems2