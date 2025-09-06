import Image from 'next/image'
import React from 'react'

import aboutImg from '../../../public/assets/imgs/about/3/1.jpg'
import CircleButton from '../../ui/CircleButton'

function HomeAbout() {
  return (
    <>
        <section className="about__area-3">
            <div className='bg-gradient-to-tr from-blue-950 to-purple-900'>
                <div className="container mx-auto px-4 pt-36 pb-28">
                <div className="flex flex-wrap items-center -mx-4">
                    <div className="w-full md:w-1/2 px-4 mb-8 md:mb-0">
                    <div className="about__img-3">
                        <Image src={aboutImg} placeholder="blur" alt="About Thumbnail" className="shadow-md" data-speed="auto" />
                    </div>
                    </div>
                    <div className="w-full md:w-1/2 px-4">
                    <div className="sec-title-wrapper mb-6">
                        <h2 className="sec-sub-title title-anim">Who We Are</h2>
                        <h3 className="sec-title title-anim text-gray-900">
                        We are leading digital marketing agency.
                        </h3>
                    </div>

                    <div className="sec-text-wrapper">
                        <div
                        className="sec-text text-anim text-gray-600 leading-relaxed"
                        >
                        <p className="mb-6">
                            We’re a team of strategic digital marketing working
                            globally with largest brands. We believe that progress
                            only happens when you refuse to play things safe. We
                            combine ideas and behaviors, and insights with design,
                            technological data to produce brand experiences that
                            customers love our services.
                        </p>

                      
                        <CircleButton variant='colored' position='left' link="/about" label="Explore Us" />
                        </div>
                    </div>
                    </div>
                </div>
                </div>
            </div>
        </section>
    </>
  )
}

export default HomeAbout
