import { brandLogo } from '@/data/brandLogoData'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function BrandList() {
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
