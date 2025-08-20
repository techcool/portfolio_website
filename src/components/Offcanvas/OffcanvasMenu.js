import { navLinks } from '@/data/navLinks'
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
                                <li key={index}><a href={links.href || '#'}>{links.title}</a>
                                {
                                  links.submenu && (
                                    <ul>
                                      {
                                        links.submenu.map((submenuLink, subIndex)=>(
                                          <li key={subIndex}><a href={submenuLink.href || '#'}>{submenuLink.title}</a></li>
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