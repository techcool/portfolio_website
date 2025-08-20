import React from 'react'
import Image from 'next/image';
function OffcanvasLogo() {
  return (
    <>
        <div className="offcanvas__logo">
        <a href="index-2.html"><Image src="/site-logo-white-2.png" alt="Offcanvas Logo" width={100} height={33}/></a>
        </div>
    </>
  )
}

export default OffcanvasLogo