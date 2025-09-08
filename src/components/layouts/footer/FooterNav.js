import { offcanvasLinks } from "@/data/navLinks";
import Link from "next/link";
import React from "react";

export default function FooterNav() {
  return (
    <>
      <ul className="footer-menu-2 menu-anim">
        {
            offcanvasLinks.map((item, index)=>(
                <li key={index}>
                    <Link href={`/${item.href}`}>{item.title}</Link>
                </li>
            ))
        }
        
      </ul>
    </>
  );
}
