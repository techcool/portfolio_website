"use client";

import React from "react";



import HeaderSearch from "./HeaderSearch";
import HeaderLogo from "./HeaderLogo";
import HeaderNav from "./HeaderNav";
import HeaderNavIcons from "./HeaderNavIcons";

function Header() {

  const onSearch =(query)=>{
    console.log('Search from Header:', query);
  }
  return (
    <>
      <header className="header__area-3">
        <div className="header__inner-3">
          <HeaderLogo/>
          <HeaderNav/>
          <HeaderNavIcons/>
        </div>
      </header>
      <HeaderSearch onSearch={onSearch} />
    </>
  );
}

export default Header;
