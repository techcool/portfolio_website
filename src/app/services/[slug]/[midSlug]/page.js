import React from "react";
import { getAllServicesTree } from "@/utils/servicesDataTree";

export default async function MiddleServices({ params }) {
  const { slug, midSlug } =await  params;
  const servicesTree = getAllServicesTree();

  // Find the specific top and mid-level service
  const topService = servicesTree.find(s => s.slug === slug);
  const midService = topService?.children?.find(c => c.slug === midSlug);

  console.log(servicesTree);
  

  return (
    <div className="container mx-auto py-16">
      {midService ? (
        <>
          <h1 className="text-4xl font-bold mb-6">{midService.categoryName}</h1>
         
        </>
      ) : (
        <h2>Service not found</h2>
      )}
    </div>
  );
}
