import React from "react";

import { middleData } from "@/data/services/middleData";
import slugify from "@/libs/slugify";

import { bottomData } from "@/data/services/bottomData";
import { topData } from "@/data/services/topData";
import MiddleServicesTemplate from "@/components/services/MiddleServicesTemplate";
import BottomServicesTemplate from "@/components/services/BottomServicesTemplate";

export default async function MiddleServices({ params }) {
  const { slug, midSlug } = await params;
  //const servicesTree = getAllServicesTree();

  //console.log(slug);
  

   const midService = middleData.find((item)=> slugify(item.slug || item.categoryName) === midSlug);

   const topService = topData.find((item)=>slugify(item.slug) === slug);

   const bottomService = bottomData.find((item)=>slugify(item.slug)===midSlug && item.parent=== topService?.topCategoryName);

  //console.log(bottomService);
     
   if(midService){
     return(
       <MiddleServicesTemplate midService={midService} midSlug={midSlug}/>
     )
   }

   if(bottomService){
    return(
      <BottomServicesTemplate bottomService={bottomService} />
    )
   }

  //   const bottomServices = subLinkTitle.subNavs.map((title) => title);

  // const subLinkSlugs = subLinks
  // .filter((slug) => slugify(slug));
 //console.log(subLinkTitle)

  // Find the specific top and mid-level service
  //const topService = servicesTree.find(s => s.slug === slug);
  //const midService = topService?.children?.find(c => c.slug === midSlug);


  //console.log(midService);
  

   if (!midService || !bottomService) {
    return (
      <div className="container mx-auto py-20 text-center pt-52">
        <h2>Service not found!!</h2>
      </div>
    );
  }

  //console.log(midService);

  
}
