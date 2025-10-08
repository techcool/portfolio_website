import React from 'react'
import Image from 'next/image';
import whiteLogo from '@public/assets/imgs/white-logo.png'
import Link from 'next/link';
function OffcanvasLogo() {
  return (
    <>
        <div className="offcanvas__logo">
        <Link href="/"><Image src={whiteLogo} alt="Offcanvas Logo" width={200} height={51}/></Link>
        </div>
    </>
  )
}

export default OffcanvasLogo