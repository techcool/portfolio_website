import React from 'react'

import Image from 'next/image';

import OffcanvasLogo from './OffcanvasLogo';
import OffcanvasSocial from './OffcanvasSocial';
import OffcanvasLinks from './OffcanvasLinks';
import OffcanvasMenu from './OffcanvasMenu';
import OffcanvasSearch from './OffcanvasSearch';
import OffcanvasContact from './OffcanvasContact';
import OffcanvasClose from './OffcanvasClose';

function Offcanvas() {
  return (
    <>
         <div className="offcanvas__area">
          <div className="offcanvas__body">
            <div className="offcanvas__left">
              <OffcanvasLogo/>
              <OffcanvasSocial/>
              <OffcanvasLinks/>
            </div>
            <OffcanvasMenu/>
            <div className="offcanvas__right">
              <OffcanvasSearch/>
              <OffcanvasContact/>
              <Image src="/11.png" alt="shape" className="shape-1" width={189} height={94}/>
              <img src="/12.png" alt="shape" className="shape-2" width={81} height={80}/>
            </div>
            <OffcanvasClose/>   
          </div>
        </div>
    </>
  )
}

export default Offcanvas