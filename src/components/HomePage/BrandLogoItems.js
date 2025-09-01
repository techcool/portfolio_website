import { brandLogo } from "@/data/brandLogoData";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function BrandLogoItems() {
  return (
    <>
      <div className="brand__list-3 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center justify-items-center">
        {
            brandLogo.map(data =>(
                <div className="brand__item-2 fade_bottom" key={data.id}>
                    <Link href={data.link}><Image src={data.imgUrl} alt={data.brandName} className="object-contain" /></Link>
                </div>
            ))
        }
       
      </div>
    </>
  );
}
