import React from 'react'
import Image from "next/image";
// import logo from '@public/assets/imgs/logo.png'
import logo from "../../../public/assets/imgs/black-logo.png"
import whiteLogo from '../../../public/assets/imgs/white-logo.png'
// import whiteLogo from '@public/assets/imgs/white-logo.png'
import Link from 'next/link';


function HeaderLogo() {
  return (
    <>
      <div className="header__logo-2">
        <Link href="/" className="logo-dark">
          <Image src={logo} alt="Site Logo"  />
        
        </Link>  
        <Link href="/" className="logo-light">
          <Image src={whiteLogo} alt="Light Logo"  />
        </Link>
      </div>
    </>
  )
}

export default HeaderLogo