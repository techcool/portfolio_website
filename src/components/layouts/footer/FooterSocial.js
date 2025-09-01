import { socialLinks } from "@/data/navLinks";
import Link from "next/link";
import React from "react";

export default function FooterSocial() {
  return (
    <>
      <ul>
        {
            socialLinks.map((item, index)=>(
                <li key={index}>
                    <Link href={item.href} target="_blank">{item.title}</Link>
                </li>
            ))
        }
        
      </ul>
    </>
  );
}
