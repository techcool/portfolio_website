import React from "react";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMagnifyingGlass,
  faXmark,
  faMoon,
  faSun,
} from "@fortawesome/free-solid-svg-icons";
import menuIcon from "@public/assets/imgs/menu-black.png";
import ModeSwitcher from "./ModeSwitcher";

function HeaderNavIcons() {
  return (
    <>
      <div className="header__nav-icon-3">
        <ModeSwitcher/>
        {/* <button className="search-icon cursor-pointer" id="search_icon">
          <FontAwesomeIcon style={{ width: 20 }} icon={faMagnifyingGlass} />
        </button>
        <button className="search-icon cursor-pointer" id="search_close">
          <FontAwesomeIcon style={{ width: 20 }} icon={faXmark} />
        </button> */}
        <button id="open_offcanvas" className="cursor-pointer">
          <Image src={menuIcon} alt="Menubar Icon" />
        </button>
      </div>
    </>
  );
}

export default HeaderNavIcons;
