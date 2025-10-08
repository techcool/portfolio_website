import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function OffcanvasChildMenus({ submenu }) {
  return (
    <ul>
      {submenu?.map((submenuLink, subIndex) => (
        <li key={subIndex}>
          <div className="flex flex-row items-center gap-2 mb-4 pl-6 md:pl-9 lg:pl-24">
            <Link href="">{submenuLink.title}</Link>
          </div>

          <ul className="subMenus">
            {submenuLink.subServices.map((subItem, subIdx) =>
              subItem.heading ? (
                <li key={subIdx}>
                  <Link
                    href=""
                    className="flex justify-start gap-2 items-center"
                  >
                    <FontAwesomeIcon icon={faCheck} className="text-[13px]" />
                    {subItem.heading}
                  </Link>
                  <ul className="lastChildMenus subMenus">
                    {subItem.subNavs?.map((nav, i) => (
                      <li key={i}>
                        
                        <Link href="#" className="flex items-center gap-2">
                          {typeof nav.icon === "string" ? (
                            <Image
                              src={nav.icon}
                              alt={nav.title}
                              width={20}
                              height={20}
                              className="obeject-contain"
                            />
                          ) : (
                            <FontAwesomeIcon
                              icon={nav.icon}
                              className="text-[20px] text-yellow-400"
                            />
                          )}

                          {nav.title}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </li>
              ) : (
                <li className="last-level" key={subIdx}>
                  <ul className="lastChildMenus subMenus direct">
                    {subItem.subNavs?.map((nav, i) => (
                      <li key={i}>
                        <Link href="#" className="flex items-center gap-2">
                          {typeof nav.icon === "string" ? (
                            <Image
                              src={nav.icon}
                              alt={nav.title}
                              width={20}
                              height={20}
                              className="obeject-contain"
                            />
                          ) : (
                            <FontAwesomeIcon
                              icon={nav.icon}
                              className="text-[20px] text-yellow-400"
                            />
                          )}

                          {nav.title}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </li>
              )
            )}
          </ul>
        </li>
      ))}
    </ul>
  );
}
