import { navLinks } from '@/data/navLinks'
import { faArrowRight, faCheck, faCircle } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import graphics from '../../../public/assets/imgs/graphics2.png'
// import designLab from '../../../public/assets/imgs/icon/design-lab.png'
// import techLab from '../../../public/assets/imgs/icon/tech-lab.png'
// import growthLab from '../../../public/assets/imgs/icon/growth-lab.png'
import Link from 'next/link'
import React from 'react'
import Image from 'next/image'

function HeaderNav() {
  return (
    <>
      <div className="header__nav-2">
            <ul className="main-menu-3 menu-anim">
              { navLinks.map((links,index) => (
                <li key={index} className={links.submenu ? 'has-megamenu' : ''}>
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
                                    <li key={subIdx}><Link href={subItem.link} className='flex items-center'><FontAwesomeIcon icon={faCheck} className='text-[13px]'  /> {subItem.title}</Link></li>
                                  ))
                                }
                                {/* <li><Link href="#" className='flex items-center'><FontAwesomeIcon icon={faCheck} className='text-[13px]'  /> Web Design</Link></li>
                                <li><Link href="#" className='flex items-center'><FontAwesomeIcon icon={faCheck} className='text-[13px]'/> App Design</Link></li>
                                <li><Link href="#" className='flex items-center'><FontAwesomeIcon icon={faCheck} className='text-[13px]'/> UI/UX Design</Link></li>
                                <li><Link href="#" className='flex items-center'><FontAwesomeIcon icon={faCheck} className='text-[13px]'/> Logo Design</Link></li>
                                <li><Link href="#" className='flex items-center'><FontAwesomeIcon icon={faCheck} className='text-[13px]'/> Brand Design</Link></li>
                                <li><Link href="#" className='flex items-center'><FontAwesomeIcon icon={faCheck} className='text-[13px]'/> Social Media Design</Link></li> */}
                              </ul>
                            </div>
                          ))

                        }
                        {/* <div className='menuItems'>
                          <div className='flex flex-row items-center gap-2 mb-4'>
                            <Image src={designLab} alt='Design Lab' className='w-8'/>
                            <Link href="#" className='mb-0'> Design Lab</Link>
                          </div>
                          <ul className="subMenus">
                            <li><Link href="#" className='flex items-center'><FontAwesomeIcon icon={faCheck} className='text-[13px]'  /> Web Design</Link></li>
                            <li><Link href="#" className='flex items-center'><FontAwesomeIcon icon={faCheck} className='text-[13px]'/> App Design</Link></li>
                            <li><Link href="#" className='flex items-center'><FontAwesomeIcon icon={faCheck} className='text-[13px]'/> UI/UX Design</Link></li>
                            <li><Link href="#" className='flex items-center'><FontAwesomeIcon icon={faCheck} className='text-[13px]'/> Logo Design</Link></li>
                            <li><Link href="#" className='flex items-center'><FontAwesomeIcon icon={faCheck} className='text-[13px]'/> Brand Design</Link></li>
                            <li><Link href="#" className='flex items-center'><FontAwesomeIcon icon={faCheck} className='text-[13px]'/> Social Media Design</Link></li>
                          </ul>
                        </div>
                        <div className='menuItems'>
                          <div className='flex flex-row items-center gap-2 mb-4'>
                            <Image src={techLab} alt='Design Lab' className='w-8'/>
                            <Link href="#" className='mb-0'> Tech Lab</Link>
                          </div>
                          <ul className="subMenus">
                            <li><Link href="#" className='flex items-center'><FontAwesomeIcon icon={faCheck} className='text-[13px]'/> Web Application Development</Link></li>
                            <li><Link href="#" className='flex items-center'><FontAwesomeIcon icon={faCheck} className='text-[13px]'/> App Development</Link></li>
                            <li><Link href="#" className='flex items-center'><FontAwesomeIcon icon={faCheck} className='text-[13px]'/> Full-Stack Development</Link></li>
                            <li><Link href="#" className='flex items-center'><FontAwesomeIcon icon={faCheck} className='text-[13px]'/> E-Commerce Solution</Link></li>
                            <li><Link href="#" className='flex items-center'><FontAwesomeIcon icon={faCheck} className='text-[13px]'/> API Development</Link></li>
                            <li><Link href="#" className='flex items-center'><FontAwesomeIcon icon={faCheck} className='text-[13px]'/> CMS Development</Link></li>
                          </ul>
                        </div>
                        <div className='menuItems'>
                          <div className='flex flex-row items-center gap-2 mb-4'>
                            <Image src={growthLab} alt='Design Lab' className='w-8'/>
                            <Link href="#" className='mb-0'> Growth Lab</Link>
                          </div>
                          <ul className="subMenus">
                            <li><Link href="#" className='flex items-center'><FontAwesomeIcon icon={faCheck} className='text-[13px]'/> Search Engine Optimization</Link></li>
                            <li><Link href="#" className='flex items-center'><FontAwesomeIcon icon={faCheck} className='text-[13px]'/> Social Media Optimization</Link></li>
                            <li><Link href="#" className='flex items-center'><FontAwesomeIcon icon={faCheck} className='text-[13px]'/> Social Media Marketing</Link></li>
                            <li><Link href="#" className='flex items-center'><FontAwesomeIcon icon={faCheck} className='text-[13px]'/> Pay Per Click (PPC) Campaigns</Link></li>
                            <li><Link href="#" className='flex items-center'><FontAwesomeIcon icon={faCheck} className='text-[13px]'/> Content Marketing</Link></li>
                            <li><Link href="#" className='flex items-center'><FontAwesomeIcon icon={faCheck} className='text-[13px]'/>Email Marketing</Link></li>
                          </ul>
                        </div> */}
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
                      {/* {links.submenu.map((subLink, subIndex) => (
                        <li key={subIndex}>
                          <Link href={`/${subLink.link}`}>{subLink.title}</Link>
                        </li>
                      ))} */}
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