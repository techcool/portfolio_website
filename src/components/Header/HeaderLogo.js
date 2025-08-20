import React from 'react'
import Image from "next/image";

function HeaderLogo() {
  return (
    <>
      <div className="header__logo-2">
        <a href="/" className="logo-dark">
          <Image src="/logo.png" alt="Site Logo" width={220} height={54} />
        
        </a>
        {/* <a href="index-2.html" className="logo-light"><img src="assets/imgs/logo/site-logo-white-2.png" alt="Site Logo"/></a> */}
      </div>
    </>
  )
}

export default HeaderLogo