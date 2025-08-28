import { navLinks } from '@/data/navLinks'
import Link from 'next/link'
import React from 'react'

function HeaderNav() {
  return (
    <>
      <div className="header__nav-2">
            <ul className="main-menu-3 menu-anim">
              { navLinks.map((links,index) => (
                <li key={index}>
                  <Link href={`/${links.link}`}>{links.title}</Link>
                  {links.submenu && (
                    <ul className='main-dropdown'>
                      {links.submenu.map((subLink, subIndex) => (
                        <li key={subIndex}>
                          <Link href={`/${subLink.link}`}>{subLink.title}</Link>
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