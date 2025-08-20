import { navLinks } from '@/data/navLinks'
import React from 'react'

function HeaderNav() {
  return (
    <>
      <div className="header__nav-2">
            <ul className="main-menu-3 menu-anim">
              { navLinks.map((links,index) => (
                <li key={index}>
                  <a href={links.href || "#"}>{links.title}</a>
                  {links.submenu && (
                    <ul className='main-dropdown'>
                      {links.submenu.map((subLink, subIndex) => (
                        <li key={subIndex}>
                          <a href={subLink.href || "#"}>{subLink.title}</a>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              ))
                
              }
            </ul>
          </div>
    </>
  )
}

export default HeaderNav