"use client"
import { navLinks } from '@/data/navLinks'
import Link from 'next/link'
import React, { useEffect } from 'react'
import MegaMenu from './MegaMenu'

function HeaderNav() {

  useEffect(()=>{
  //Menu Text Animation
  document.querySelectorAll('.menu-anim > li > a').forEach(button => button.innerHTML = '<div class="menu-text"><span>' + button.textContent.split('').join('</span><span>') + '</span></div>');

  setTimeout(() => {
    var menu_text = document.querySelectorAll(".menu-text span")
    menu_text.forEach((item) => {
      var font_sizes = window.getComputedStyle(item, null);
      let font_size = font_sizes.getPropertyValue("font-size");
      let size_in_number = parseInt(font_size.replace("px", ""));
      let new_size = parseInt(size_in_number / 3)
      new_size = new_size + "px"
      if (item.innerHTML == " ") {
        item.style.width = new_size
      }
    })
  }, 1000)
  },[])
  return (
    <>
      <nav className="header__nav-2">
            <ul className="main-menu-3 menu-anim">
              { navLinks.map((links,index) => {
                const isLast = index === navLinks.length - 1;
                const liClass = [
                  links.submenu ? 'has-megamenu' : '',
                  isLast ? 'last-item' : ''
                ].filter(Boolean).join(' ');
                return (  
                <li key={index} className={liClass}>
                  <Link href={links.link ? `/${links.link}` : "#"}>{links.title}</Link>
                 
                  {links.submenu && <MegaMenu submenu={links.submenu}/>}
                </li>
                );
              })
                
              }
              
            </ul>
          </nav>
    </>
  )
}

export default HeaderNav