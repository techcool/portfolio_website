import React from 'react'

import Image from 'next/image';

import OffcanvasLogo from './OffcanvasLogo';
import OffcanvasSocial from './OffcanvasSocial';
import OffcanvasLinks from './OffcanvasLinks';
import OffcanvasMenu from './OffcanvasMenu';
import OffcanvasSearch from './OffcanvasSearch';
import OffcanvasContact from './OffcanvasContact';
import OffcanvasClose from './OffcanvasClose';
import circleShape1 from "@public/assets/imgs/shape/11.png"
import circleShape2 from "@public/assets/imgs/shape/12.png"

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
            <div className="offcanvas__right flex items-center">
              {/* <OffcanvasSearch/> */}
              <OffcanvasContact/>
              <Image src={circleShape1} alt="shape" className="shape-1"/>
              <Image src={circleShape2} alt="shape" className="shape-2"/>
            </div>
            <OffcanvasClose/>   
          </div>
        </div>
    </>
  )
}

export default Offcanvas