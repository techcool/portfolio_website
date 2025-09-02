import { teamData } from '@/data/teamData'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function TeamSliderItems() {
    
  return (
    <>
       {
           teamData.map(data =>(
                <div className="swiper-slide team__slide" key={data.id}>
                    <Link href={`/about-us/${data.id}`} className="block group">
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
