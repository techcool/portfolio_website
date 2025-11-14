"use client"

import { teamData } from '@/data/teamData'
import slugify from '@/libs/slugify'
import gsap from 'gsap'
import Image from 'next/image'
import Link from 'next/link'
import React, { useEffect } from 'react'
import Swiper from 'swiper'

export default function TeamSliderItems({teamCursorRef}) {


 useEffect(() => {
    const team_slider = new Swiper(".team__slider", {
      spaceBetween: 30,
      loop: true,
      freemode: true,
      slidesPerView: 1,
      speed: 2000,
      breakpoints: {
        640: { slidesPerView: 2 },
        1000: { slidesPerView: 3 },
        1200: { slidesPerView: 4 },
      },
    });

    function mousemoveHandler(e) {
      const tc = teamCursorRef?.current;
      if (!tc) return;

      const target = e.target;
      const tl = gsap.timeline({
        defaults: { x: e.clientX - tc.offsetWidth / 2,
  y: e.clientY - tc.offsetHeight / 2 }
      });
      const t2 = gsap.timeline({
        defaults: { x: e.clientX - tc.offsetWidth / 2,
  y: e.clientY - tc.offsetHeight / 2}
      });

      if (target.closest(".team__slider")) {
        tl.to(tc, { opacity: 1, ease: "power4.out" }, "-=0.3");
      } else {
        t2.to(tc, { opacity: 0, ease: "power4.out" }, "-=0.3");
      }
    }

    document.addEventListener("mousemove", mousemoveHandler);
    return () => {
      document.removeEventListener("mousemove", mousemoveHandler);
      // destroy swiper if you want:
      try { team_slider.destroy(); } catch (e) {}
    };
  }, [teamCursorRef]);  
    
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
