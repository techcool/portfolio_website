import { navLinks } from "@/data/navLinks";
import Link from "next/link";
import React from "react";
import OffcanvasChildMenus from "./OffcanvasChildMenus";

function OffcanvasMenu() {
  return (
    <>
      <div className="offcanvas__mid">
        <div className="offcanvas__menu-wrapper">
          <nav className="offcanvas__menu">
            <ul className="menu-anim">
              {navLinks.map((links, index) => (
                <li key={index}>
                  <Link href={links.link ? `/${links.link}` : "#"}>{links.title}</Link>
                  {links.submenu && <OffcanvasChildMenus submenu={links.submenu}/>} 
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </>
  );
}

export default OffcanvasMenu;
