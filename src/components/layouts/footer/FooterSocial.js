import { socialLinks } from "@/data/navLinks";
import React from "react";

export default function FooterSocial() {
  return (
    <>
      <ul>
        {
            socialLinks.map((item, index)=>(
                <li key={index}>
                    <a href={item.href} target="_blank">{item.title}</a>
                </li>
            ))
        }
        
      </ul>
    </>
  );
}
