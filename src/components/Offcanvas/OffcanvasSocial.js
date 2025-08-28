import { socialLinks } from '@/data/navLinks'
import Link from 'next/link'

import React from 'react'

function OffcanvasSocial() {
  return (
    <>
        <div className="offcanvas__social">
            <h3 className="social-title">Follow Us</h3>
            <ul>
              { socialLinks.map((links, index)=>(
               
                <li key={index}>
                  <Link href={links.href} target='_blank' rel="noopener noreferrer">
                    {links.title}
                  </Link>
                </li>
              ))}
                
            </ul>
        </div>
    </>
  )
}

export default OffcanvasSocial