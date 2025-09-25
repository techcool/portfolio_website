import { navLinks } from '@/data/navLinks'
import Link from 'next/link'
import React from 'react'
import MegaMenu from './MegaMenu'

function HeaderNav() {
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