import React from 'react'
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass, faXmark, faMoon, faSun } from "@fortawesome/free-solid-svg-icons";

function HeaderNavIcons() {
  return (
    <>
        <div className="header__nav-icon-3 ">
           <div className="mode-type">
              <button className="search-icon switcherIcon active" id="light_mode_icon" data-mode="light" title='Light Mode'>
                <FontAwesomeIcon
                  style={{ color: "black", width: 20 }}
                  icon={faSun}
                  
                />
              </button>
              <button className="search-icon switcherIcon" id="dark_mode_icon" data-mode="dark" title='Dark Mode'>
                <FontAwesomeIcon
                  style={{ color: "white", width: 20 }}
                  icon={faMoon}
                />
              </button>
            </div>
            <button className="search-icon" id="search_icon">
              <FontAwesomeIcon
                style={{ width: 20 }}
                icon={faMagnifyingGlass}
              />
            </button>
            <button className="search-icon" id="search_close">
              <FontAwesomeIcon
                style={{  width: 20 }}
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