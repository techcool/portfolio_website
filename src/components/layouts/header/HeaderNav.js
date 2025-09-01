import { navLinks } from '@/data/navLinks'
import { faArrowRight, faCheck, faCircle } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import graphics from '@public/assets/imgs/graphics2.png'

import Link from 'next/link'
import React from 'react'
import Image from 'next/image'

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
                  <Link href={`/${links.link}`}>{links.title}</Link>
                  {links.submenu && (
                    <ul className='mega-menu customize-megamenu'>
                      <li className='grid grid-cols-3 gap-3 grid-rows-1'>
                        {
                          links.submenu.map((item, idx) => (
                            <div className='menuItems' key={idx}>
                              <div className='flex flex-row items-center gap-2 mb-4'>
                                <Image src={item.icon} alt='Design Lab' className='w-8' width={32} height={32}/>
                                <Link href={item.link} className='mb-0'> {item.title}</Link>
                              </div>
                              <ul className="subMenus">
                                {
                                  item.subServices.map((subItem, subIdx) => (
                                    <li key={subIdx} ><Link href={subItem.link} className='flex items-center'><FontAwesomeIcon icon={faCheck} className='text-[13px]'  /> {subItem.title}</Link></li>
                                  ))
                                }
                               
                              </ul>
                            </div>
                          ))

                        }
                     
                      </li>
                      <li>
                         <div className='bg-[var(--black-6)] p-6 rounded-lg'>
                            <h3 className='text-white text-2xl md:text-3xl text-center font-normal mb-4'>
                              Crafting Your Path to Digital Success
                            </h3>
                            <a href="#" className="call-btn bg-white flex items-center gap-1 text-black black-text mt-6 text-center font-normal text-xl justify-center rounded-md pt-4 pb-4">
                              Book a Call
                              <span><FontAwesomeIcon icon={faArrowRight} className="ml-1"></FontAwesomeIcon></span>
                            </a>
                            <Image src={graphics} alt="graphics" className='mt-6 mx-auto' />
                         </div>
                      </li>
                     
                    </ul>
                  )}
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