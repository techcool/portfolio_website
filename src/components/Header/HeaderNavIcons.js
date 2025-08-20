import React from 'react'
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass, faXmark } from "@fortawesome/free-solid-svg-icons";

function HeaderNavIcons() {
  return (
    <>
        <div className="header__nav-icon-3">
            <button className="search-icon" id="search_icon">
              <FontAwesomeIcon
                style={{ color: "black", width: 20 }}
                icon={faMagnifyingGlass}
              />
            </button>
            <button className="search-icon" id="search_close">
              <FontAwesomeIcon
                style={{ color: "black", width: 20 }}
                icon={faXmark}
              />
            </button>
            <button id="open_offcanvas">
              <Image
                src="/menu-black.png"
                alt="Menubar Icon"
                width={21}
                height={15}
              />
            </button>
          </div>
    </>
  )
}

export default HeaderNavIcons