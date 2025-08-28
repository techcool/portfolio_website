import { navLinks } from '@/data/navLinks'
import Link from 'next/link'
import React from 'react'

function OffcanvasMenu() {
  return (
    <>
        <div className="offcanvas__mid">
                      <div className="offcanvas__menu-wrapper">
                        <nav className="offcanvas__menu">
                          <ul className="menu-anim">
                            {
                              navLinks.map((links, index)=>(
                                <li key={index}><Link href={links.href || '#'}>{links.title}</Link>
                                {
                                  links.submenu && (
                                    <ul>
                                      {
                                        links.submenu.map((submenuLink, subIndex)=>(
                                          <li key={subIndex}><Link href={submenuLink.href || '#'}>{submenuLink.title}</Link></li>
                                        ))
                                      }
                                    </ul>
                                  )
                                }
                                </li>
                              ))
                            }
                          </ul>
                        </nav>
                      </div>
                    </div>
    </>
  )
}

export default OffcanvasMenu