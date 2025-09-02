import React from 'react'
import Image from "next/image";
// import logo from '../../../public/assets/imgs/logo.png'
import logo from "@public/assets/imgs/black-logo.png"
import whiteLogo from '@public/assets/imgs/white-logo.png'


function HeaderLogo2() {
  return (
    <>
      <div className="header__logo-2">
        <a href="/" className="logo-dark">
          <Image src={logo} alt="Site Logo"  />
        
        </a>  
        <a href="/" className="logo-light">
          <Image src={whiteLogo} alt="Light Logo"  />
        </a>
      </div>
    </>
  )
}

export default HeaderLogo2