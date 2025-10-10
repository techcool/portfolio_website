"use client"

import React, { useEffect } from 'react'

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

//  $("#open_offcanvas").click(function () {
//     $('.offcanvas__area').css('opacity', '1');
//     $('.offcanvas__area').css('visibility', 'visible');
//   });
//   $("#close_offcanvas").click(function () {
//     $('.offcanvas__area').css('opacity', '0');
//     $('.offcanvas__area').css('visibility', 'hidden');
//   });


function Offcanvas() {
  useEffect(() => {
    const openBtn = document.getElementById("open_offcanvas");
    const closeBtn = document.getElementById("close_offcanvas");
    const offcanvasArea = document.querySelector(".offcanvas__area");

    if (openBtn && closeBtn && offcanvasArea) {
      const openHandler = () => {
        offcanvasArea.style.opacity = "1";
        offcanvasArea.style.visibility = "visible";
      };

      const closeHandler = () => {
        offcanvasArea.style.opacity = "0";
        offcanvasArea.style.visibility = "hidden";
      };

      openBtn.addEventListener("click", openHandler);
      closeBtn.addEventListener("click", closeHandler);

      // Cleanup on unmount
      return () => {
        openBtn.removeEventListener("click", openHandler);
        closeBtn.removeEventListener("click", closeHandler);
      };
    }
  }, []);
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