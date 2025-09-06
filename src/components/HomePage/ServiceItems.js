import { serviceData } from '@/data/serviceData'
import React from 'react'
import CircleButton from '../../ui/CircleButton';
import Link from 'next/link';

function ServiceItems() {
  return (
    <>
         <div className="row">
                <div className="col-xx-12">
                <div className="service__list-3">
                    {
                        serviceData.map((service, index) => (
                            <div className="service__item-3 service_animation" key={index}> 
                                <h3>
                                    <Link href="#" className="service__title-3">
                                        {service.titleFirstPart} <br />  
                                        {service.titleSecondPart}
                                    </Link>
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
                               
                                <CircleButton variant='light' position='right' link="#" label='Details' />
                                <div
                                    className="service__hover-3 original"
                                    style={{ backgroundImage: `url(${service.hoverImg})` }} 
                                    ></div>
                            </div>
                        ))    
                    }
                    
                </div>
                </div>
            </div>
    </>
  )
}

export default ServiceItems