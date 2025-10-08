"use client"

import { brandLogo } from '@/data/brandLogoData'
import gsap from 'gsap'
import Image from 'next/image'
import Link from 'next/link'
import React, { useEffect } from 'react'

export default function BrandList() {

  useEffect(()=>{
    let device_width = window.innerWidth;
  gsap.set(".fade_bottom", { y: 30, opacity: 0 });

  if (device_width < 1023) {
    const fadeArray = gsap.utils.toArray(".fade_bottom")
    fadeArray.forEach((item, i) => {
      let fadeTl = gsap.timeline({
        scrollTrigger: {
          trigger: item,
          start: "top center+=200",
        }
      })
      fadeTl.to(item, {
        y: 0,
        opacity: 1,
        ease: "power2.out",
        duration: 1.5,
      })
    })
  }
  else {
    gsap.to(".fade_bottom", {
      scrollTrigger: {
        trigger: ".fade_bottom",
        start: "top center+=300",
        markers: false
      },
      y: 0,
      opacity: 1,
      ease: "power2.out",
      duration: 1,
      stagger: {
        each: 0.2
      }
    })
  }
  },[])

  return (
    <>
        <div className="brand__list">
            {
            brandLogo.map(data=>(
                <div className="brand__item fade_bottom" key={data.id}>
                    <Link href={data.link}><Image src={data.imgUrl} alt={data.brandName} /></Link>
                </div> 
            ))
            }
                
        </div>
    </>
  )
}
