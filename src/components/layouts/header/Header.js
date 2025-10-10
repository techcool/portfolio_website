"use client";

import React, { useEffect } from "react";

import HeaderSearch from "./HeaderSearch";
import HeaderLogo from "./HeaderLogo";
import HeaderNav from "./HeaderNav";
import HeaderNavIcons from "./HeaderNavIcons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUp } from "@fortawesome/free-solid-svg-icons";

function Header() {
  useEffect(() => {
    const scrollTopBtn = document.getElementById("scroll_top");
    const header = document.querySelector(".header__area-3");

    const handleScroll = () => {
      const scrollY = window.scrollY || document.documentElement.scrollTop;

      if (scrollY > 20 && header) {
        header.classList.add("sticky-3");
      } else if (header) {
        header.classList.remove("sticky-3");
      }

      if (scrollTopBtn) {
        scrollTopBtn.style.display = scrollY > 50 ? "block" : "none";
      }
    };

    const handleScrollTopClick = () => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    };

    // ✅ Add listeners
    window.addEventListener("scroll", handleScroll);
    if (scrollTopBtn) {
      scrollTopBtn.addEventListener("click", handleScrollTopClick);
    }

    // Run once to set initial state
    handleScroll();

    // ✅ Cleanup on unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (scrollTopBtn) {
        scrollTopBtn.removeEventListener("click", handleScrollTopClick);
      }
    };
  }, []);

  const onSearch = (query) => {
    console.log("Search from Header:", query);
  };

  return (
    <>
      <button id="scroll_top" className="scroll-top">
        <FontAwesomeIcon icon={faArrowUp} />
        {/* <i className="fa-solid fa-arrow-up"></i> */}
      </button>
      <header className="header__area-3">
        <div className="header__inner-3">
          <HeaderLogo />
          <HeaderNav />
          <HeaderNavIcons />
        </div>
      </header>
      <HeaderSearch onSearch={onSearch} />
    </>
  );
}

export default Header;
