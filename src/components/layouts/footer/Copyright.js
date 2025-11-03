"use client"
import React, { useEffect, useState } from 'react'

export default function Copyright() {

 const [year, setYear] = useState(new Date().getFullYear());

// useEffect(()=>{
//     setYear(year)
// },[])

  return (
    <>
      <p>
                © <span id="currentYear">{year}</span> | All rights reserved,
                  Uniterrene websoft Pvt. Ltd.
              </p>
    </>
  )
}
