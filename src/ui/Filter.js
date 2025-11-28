
import React from "react";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import slugify from "@/libs/slugify";
import Link from "next/link";

export default function Filter({categories=[], counts = []}) {
  if (!Array.isArray(categories) || categories.length === 0) return null;
  const safeCats = categories.filter((c) => c !== null && c !== undefined);
  const countsLookup = new Map((counts || []).map((c) => [c.slug, c.count]));
  //console.log('cats ', safeCats);
  
    
  return (
    <>
      <div className="filter mt-6 mb-6 flex items-start gap-2">
        <p>Filter: </p>
        <div className="cursor-pointer text-gray-600 relative show-cat">
          By Category
          <FontAwesomeIcon icon={faAngleDown}></FontAwesomeIcon>
          <ul className="gap-4 absolute z-2">
            {safeCats.map((cat) => {
              const label = String(cat).trim();
              const slug = label.toLowerCase();
              const count = countsLookup.get(slug) || 0;
              return (
                <li key={label}>
                  <Link href={`/blog/category/${slugify(label)}`} className="text-white font-normal whitespace-nowrap pt-2 pb-2 flex items-center gap-2.5">
                    {label} <span className="text-sm text-amber-300">({count})</span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </>
  );
}
