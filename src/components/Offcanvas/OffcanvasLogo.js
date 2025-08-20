import React from 'react'
import Image from 'next/image';
function OffcanvasLogo() {
  return (
    <>
        <div className="offcanvas__logo">
        <a href="index-2.html"><Image src="/white-logo.png" alt="Offcanvas Logo" width={200} height={51}/></a>
        </div>
    </>
  )
}

export default OffcanvasLogo