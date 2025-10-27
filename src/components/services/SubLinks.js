import slugify from "@/libs/slugify";
import Link from "next/link";
import React from "react";

export default function SubLinks({service}) {
  return (
    <>
      <ul>
        {service.subServices &&
          service.subServices.map((subService, idn) =>
            subService?.heading ? (
              <li key={idn}>
                <Link
                  href={`/services/${slugify(service.title)}/${slugify(
                    subService?.heading
                  )}`}
                >
                  + {subService?.heading}
                </Link>
              </li>
            ) : (
              subService?.subNavs &&
              subService.subNavs.map((subNav, subIdn) => (
                <li key={subIdn}>
                  <Link
                    href={`/services/${slugify(service.title)}/${slugify(
                      subNav?.title
                    )}`}
                  >
                    + {subNav?.title}
                  </Link>
                </li>
              ))
            )
          )}
      </ul>
    </>
  );
}
