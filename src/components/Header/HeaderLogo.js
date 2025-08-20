import React from 'react'
import Image from "next/image";

function HeaderLogo() {
  return (
    <>
      <div className="header__logo-2">
        <a href="/" className="logo-dark">
          <Image src="/logo.png" alt="Site Logo" width={220} height={54} />
        
        </a>
        <a href="/" className="logo-light"><Image src="/white-logo.png" alt="Site Logo" width={220} height={54} /></a>
      </div>
    </>
  )
}

export default HeaderLogo