
import React from "react";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import slugify from "@/libs/slugify";
import Link from "next/link";

export default function Filter({categories}) {
  
    
  return (
    <>
      <div className="filter mt-6 mb-6 flex items-start gap-2">
        <p>Filter: </p>
        <div className="cursor-pointer text-gray-600 relative show-cat">
          By Category
          <FontAwesomeIcon icon={faAngleDown}></FontAwesomeIcon>
          <ul className="gap-4 absolute z-2">
            {categories.map((cat) => (
              <li key={cat}>
                <Link
                  href={`/blog/category/${slugify(cat)}`}
                  className="text-white font-normal whitespace-nowrap pt-2 pb-2 block"
                >
                  {cat}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}
