import { offcanvasLinks } from '@/data/navLinks'
import React from 'react'



function OffcanvasLinks() {
  return (
    <>
        <div className="offcanvas__links">
            <ul>
              {offcanvasLinks.map((links, index)=>(
                <li key={index}><a href={links.href?  `/${links.href}`:"#"}>{links.title}</a></li>
              ))}

            </ul>
        </div>
    </>
  )
}

export default OffcanvasLinks