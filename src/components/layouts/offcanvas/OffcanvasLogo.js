import React from 'react'
import Image from 'next/image';
import whiteLogo from '@public/assets/imgs/white-logo.png'
function OffcanvasLogo() {
  return (
    <>
        <div className="offcanvas__logo">
        <a href="index-2.html"><Image src={whiteLogo} alt="Offcanvas Logo" width={200} height={51}/></a>
        </div>
    </>
  )
}

export default OffcanvasLogo