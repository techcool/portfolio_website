import { contactInfo } from "@/data/contactData";
import React from "react";

export default function ContactInfo() {
  return (
    <>
      {contactInfo.map((info,index) => (
        <ul key={index}>
          <li>
            <a href={`tel:${info.phoneLink}`}>
              {info.phoneNumber}
            </a>
          </li>
          <li>
            <a href={`mailto:${info.emailLink}`}>{info.email}</a>
          </li>
         <li><span>{info.address}</span></li>
        </ul>
      ))}
    </>
  );
}
