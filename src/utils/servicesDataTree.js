import { topData } from "@/data/services/topData";
import { middleData } from "@/data/services/middleData";
import { bottomData } from "@/data/services/bottomData";
import { serviceHierarchy } from "@/data/services/serviceHierarchy";

const findServiceBySlug = (slug) => {
  return (
    topData.find((s) => s.slug === slug) ||
    middleData.find((s) => s.slug === slug) ||
    bottomData.find((s) => s.slug === slug)
  );
};

export const buildServiceTree = (parentSlug) => {
  const childrenSlugs = serviceHierarchy[parentSlug] || [];
  const parentService = findServiceBySlug(parentSlug);

  return {
    ...parentService,
    children: childrenSlugs.map((childSlug) => buildServiceTree(childSlug)),
  };
};

export const getAllServicesTree = () => {
  return topData.map((top) => buildServiceTree(top.slug));
};
