// app/services/[slug]/[midSlug]/[bottomSlug]/page.js
import React from "react";
import { navLinks } from "@/data/navLinks";
import slugify from "@/libs/slugify";
import { bottomData } from "@/data/services/bottomData";
import BottomServicesTemplate from "@/components/services/BottomServicesTemplate";
import ScrollSmootherEffect from "@/components/layouts/ScrollSmootherEffect";

export default async function BottomServices({ params }) {
  const { bottomSlug } = await params;

  const bottomService = bottomData.find(
    (item) => slugify(item.slug || item.serviceName) === bottomSlug
  );

  if (!bottomService) {
    return (
      <div className="container mx-auto py-20 text-center pt-52">
        <h2>Service not found!!</h2>
      </div>
    );
  }

  return (
    <>
      {/* <ScrollSmootherEffect /> */}
      <BottomServicesTemplate bottomService={bottomService} />
    </>
  );
}
