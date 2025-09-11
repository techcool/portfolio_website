import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function OffcanvasChildMenus({ submenu }) {
  return (
    <ul>
      {submenu.map((submenuLink, subIndex) => (
        <li key={subIndex}>
          <div className="flex flex-row items-center gap-2 mb-4 pl-6 md:pl-9 lg:pl-24">
            
            <Link href={submenuLink.href || "#"}>{submenuLink.title}</Link>
          </div>
          
          <ul className="subMenus">
            {submenuLink.subServices.map((subItem, subIdx) => (
              <li key={subIdx}>
                <Link
                  href={subItem.link}
                  className="flex justify-start gap-2 items-center"
                >
                  <FontAwesomeIcon icon={faCheck} className="text-[13px]" />
                  {subItem.title}
                </Link>
              </li>
            ))}
          </ul>
        </li>
      ))}
    </ul>
  );
}
