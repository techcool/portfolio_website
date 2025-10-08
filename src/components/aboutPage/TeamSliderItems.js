"use client"

import { teamData } from '@/data/teamData'
import slugify from '@/libs/slugify'
import Image from 'next/image'
import Link from 'next/link'
import React, { useEffect } from 'react'
import Swiper from 'swiper'

export default function TeamSliderItems() {


 useEffect(()=>{
    var team_slider = new Swiper(".team__slider", {
    spaceBetween: 30,
    loop: true,
    freemode: true,
    slidesPerView: 1,
    speed: 2000,
    breakpoints: {
      640: {
        slidesPerView: 2,
      },
      1000: {
        slidesPerView: 3,
      },
      1200: {
        slidesPerView: 4,
      },
    }
  });
   function mousemoveHandler(e) {
    try {
      const target = e.target;

      let tl = gsap.timeline({
        defaults: {
          x: e.clientX,
          y: e.clientY,
        }
      })
      let t2 = gsap.timeline({
        defaults: {
          x: e.clientX,
          y: e.clientY,
        }
      })

      // Home Page Client Cursor
      if (target.closest(".testimonial__img")) {
        tl.to(client_cursor, {
          opacity: 1,
          ease: "power4.out"
        }, "-=0.3");
      }
      else {
        t2.to(client_cursor, {
          opacity: 0,
          ease: "power4.out"
        }, "-=0.3");
      }

      // Team Page Team Cursor
      if (target.closest(".team__slider")) {
        tl.to(team_cursor, {
          opacity: 1,
          ease: "power4.out"
        }, "-=0.3");
      }
      else {
        t2.to(team_cursor, {
          opacity: 0,
          ease: "power4.out"
        }, "-=0.3");
      }

      // Portfolio Cursor
      if (target.closest(".portfolio__item-6")) {
        tl.to(portf_cursor_6, {
          opacity: 1,
          ease: "power4.out"
        }, "-=0.3");
      }
      else {
        t2.to(portf_cursor_6, {
          opacity: 0,
          ease: "power4.out"
        }, "-=0.3");
      }
      // Portfolio Cursor
      if (target.closest(".portfolio__item-6")) {
        tl.to(portf_cursor_6, {
          opacity: 1,
          ease: "power4.out"
        }, "-=0.3");
      }
      else {
        t2.to(portf_cursor_6, {
          opacity: 0,
          ease: "power4.out"
        }, "-=0.3");
      }

      // featured  Cursor
      // if (target.closest(".portfolio__slider-3")) {
      //   tl.to(featured_cursor, {
      //     opacity: 1,
      //     ease: "power4.out"
      //   }, "-=0.3");
      // }
      // else {
      //   t2.to(featured_cursor, {
      //     opacity: 0,
      //     ease: "power4.out"
      //   }, "-=0.3");
      // }

      // featured  Cursor
      if (target.closest(".portfolio__area-5")) {
        tl.to(portfolio4_cursor, {
          opacity: 1,
          ease: "power4.out"
        }, "-=0.3");
      }
      else {
        t2.to(portfolio4_cursor, {
          opacity: 0,
          ease: "power4.out"
        }, "-=0.3");
      }

      // Main Cursor Moving 
      tl.to(".cursor1", {
        ease: "power2.out"
      })
        .to(".cursor2", {
          ease: "power2.out"
        }, "-=0.4")

    } catch (error) {
      console.log(error)
    }

  }
  document.addEventListener("mousemove", mousemoveHandler);
 },[])   
    
  return (
    <>
       {
           teamData.map(data =>(
                <div className="swiper-slide team__slide" key={data.id}>
                    <Link href={`/about-us/${slugify(data.name)}`} className="block group">
                        <Image
                            src={data.teamImg}
                            alt="Team Member"
                            className="rounded-lg shadow-lg transition-transform duration-300 group-hover:scale-105"
                        />
                        <div className="team__info mt-4 text-center">
                            <h4 className="team__member-name text-xl font-semibold text-gray-900">
                                {data.name}
                            </h4>
                            <h5 className="team__member-role text-sm text-gray-500">
                                {data.designation}
                            </h5>
                        </div>
                    </Link>
                </div>
           ))
       }
      
        
    </>
  )
}
