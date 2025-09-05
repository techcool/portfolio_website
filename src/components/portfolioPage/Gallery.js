import Image from "next/image";
import React from "react";

export default function Gallery({portfolioData}) {
    //console.log('data', portfolioData.gallery[0]);
    
  return (
    <>
      <div className="block-gallery">
        {
            portfolioData.gallery.map((data,indx)=>(
                <Image src={data.imgUrl} alt={data.alt} key={indx}/>
            ))
        }
      </div>
    </>
  );
}
