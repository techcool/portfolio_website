import { faArrowRight, faCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import graphics from "@public/assets/imgs/graphics2.png";

export default function MegaMenu({ submenu }) {
  //console.log('submenu ', submenu.map(title=>title.subServices));

  return (
    <>
      {/* <div className="mega-menu customize-megamenu">
        <div className="grid lg:grid-cols-5 md:grid-cols-3 gap-3 grid-rows-2">
          {submenu.map((item, idx) => (
            <div className="menuItems" key={idx}>
              <div className="flex flex-row items-center gap-2 mb-4">
                <Link href="#" className="mb-0 text-white text-xl">
                  {" "}
                  {item.title}
                </Link>
              </div>
              <ul
                className={`subMenus ${
                  item.subServices.length > 1
                    ? "grid grid-cols-2 col-span-3"
                    : ""
                }`}
              >
                {item.subServices.map((subItem, subIdx) => (
                  <li key={subIdx}>
                    {subItem.heading && (
                      <h5 className="text-xl">
                        <Link href="#">{subItem.heading}</Link>
                      </h5>
                    )}

                    <ul className="lastChildMenus">
                      {subItem.subNavs?.map((nav, i) => (
                        <li key={i}>
                          <Link href="#" className="flex items-center">
                            <FontAwesomeIcon
                              icon={nav.icon}
                              className="text-[20px] text-yellow-400"
                            />
                            {nav.title}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div> */}
      <div className="mega-menu customize-megamenu">
        <div className="grid main lg:grid-cols-5 md:grid-cols-3 gap-6">
          {submenu.map((item, idx) => (
            <div
              key={idx}
              className={`menuItems ${
                item.subServices.length > 1 ? "lg:col-span-3 md:col-span-2" : ""
              }`}
            >
              {/* Title */}
              <div className="flex flex-row items-center gap-2 mb-4">
                <Link href="#" className="mb-0 text-white text-xl">
                  {item.title}
                </Link>
              </div>

              {/* Submenus */}
              <ul
                className={`subMenus ${
                  item.subServices.length > 1 ? "grid grid-cols-3 gap-6 multi-col" : ""
                }`}
              >
                {item.subServices.map((subItem, subIdx) => (
                  <li key={subIdx} className="min-w-0">
                    {subItem.heading && (
                      <h5 className="text-xl mb-2">
                        <Link className="heading" href="#">{subItem.heading}</Link>
                      </h5>
                    )}

                    <ul className="lastChildMenus space-y-2">
                      {subItem.subNavs?.map((nav, i) => (
                        <li key={i}>
                          <Link href="#" className="flex items-center gap-2">
                            <FontAwesomeIcon
                              icon={nav.icon}
                              className="text-[20px] text-yellow-400"
                            />
                            {nav.title}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
