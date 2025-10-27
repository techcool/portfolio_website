import { faArrowRight, faCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import graphics from "@public/assets/imgs/graphics2.png";
import slugify from "@/libs/slugify";

export default function MegaMenu({ submenu }) {
  //console.log('submenu ', submenu.map(title=>title.subServices));

  return (
    <>
      
      <div className="mega-menu customize-megamenu">
        <div className="grid main lg:grid-cols-5 md:grid-cols-3 gap-6">
          {submenu.map((item, idx) => (
            <div
              key={idx}
              className={`menuItems top-level ${
                item.subServices.length > 1 ? "has-clild-menus lg:col-span-3 md:col-span-2" : ""
              }`}
            >
              {/* Top-Level Title */}
              {/* Title */}
              <div className="flex heading flex-row items-center gap-2 mb-4">
                <Link href={`/services/${slugify(item?.title)}`} className="mb-0 text-white text-xl">
                  {item.title}
                </Link>
              </div>

              {/* Mid-level Submenus */}
              <ul
                className={`subMenus ${
                  item.subServices.length > 1 ? "grid grid-cols-2 mid-level gap-6 multi-col" : ""
                }`}
              >
                {item.subServices.map((subItem, subIdx) => (
                  <li key={subIdx} className="min-w-0">
                    {subItem.heading && (
                      <h5 className="text-xl mb-2">
                        <Link className="heading" href={`/services/${slugify(item.title)}/${slugify(subItem.heading)}`}>{subItem.heading}</Link>
                      </h5>
                    )}
                    {/* Bottom-level items */}
                    <ul className="lastChildMenus space-y-2">
                      {subItem.subNavs?.map((nav, i) => {
                        const hasMidlevel = subItem.heading && subItem.heading.trim !=="";

                        const href = hasMidlevel
                        ? `/services/${slugify(item?.title)}/${slugify(subItem?.heading)}/${slugify(nav.title)}`
                        : `/services/${slugify(item?.title)}/${slugify(nav.title)}`
                         return (
                        <li key={i}>
                          <Link href={href} className="flex items-center gap-2">
                            {typeof nav.icon === "string" ? (
                             <Image src={nav.icon} alt={nav.title} width={20} height={20} className="obeject-contain"/>
                            ):
                             ( <FontAwesomeIcon
                              icon={nav.icon}
                              className="text-[20px] text-yellow-400"
                            />
                            )}
                            
                            {nav.title}
                          </Link>
                        </li>
                      )
                      
                        
                      })}
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
