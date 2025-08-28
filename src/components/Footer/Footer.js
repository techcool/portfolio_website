import React from "react";

import footerLogo from "../../../public/assets/imgs/white-logo.png";
import Image from "next/image";
import FooterSocial from "./FooterSocial";
import FooterNav from "./FooterNav";

export default function Footer() {
  return (
    <>
      <footer className="footer__area-3">
        
        <div className="footer__top-3">
          <div className="footer__top-wrapper-3">
            <div className="footer__logo-3 pt-120">
              <Image src={footerLogo} alt="Footer Logo" className="mb-4 max-w-2xs" />
              
              <p>
                When do they work well, and when do they on us and finally, when
                do we actually need how can we avoid them.
              </p>
            </div>

            <div className="footer__social-3">
              <FooterSocial />
            </div>

            <div className="footer__contact-3">
              <a href="contact.html" className="end">
                Let’s talk
              </a>
            </div>
          </div>
        </div>

        <div className="footer__btm-3">
          <div className="container-full mx-auto px-4">
            <div className="footer__copyright-3">
              <p>
                © 2022 - 2025 | All rights reserved,
                  Uniterrene websoft Pvt. Ltd.
              </p>
            </div>

            <div className="footer__nav-2">
              <FooterNav />
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
