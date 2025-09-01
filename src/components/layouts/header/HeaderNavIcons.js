import React from 'react'
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass, faXmark, faMoon, faSun } from "@fortawesome/free-solid-svg-icons";
import menuIcon from '@public/assets/imgs/menu-black.png'


function HeaderNavIcons() {
  return (
    <>
        <div className="header__nav-icon-3 ">
           <div className="mode-type">
              <button className="search-icon switcherIcon active cursor-pointer" id="light_mode_icon" data-mode="light" title='Light Mode'>
                <FontAwesomeIcon
                  style={{ color: "black", width: 20 }}
                  icon={faSun}
                  
                />
              </button>
              <button className="search-icon switcherIcon cursor-pointer" id="dark_mode_icon" data-mode="dark" title='Dark Mode'>
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
            <button id="open_offcanvas" className='cursor-pointer'>
              <Image
                src={menuIcon}
                alt="Menubar Icon"
                
              />
            </button>
          </div>
    </>
  )
}

export default HeaderNavIcons