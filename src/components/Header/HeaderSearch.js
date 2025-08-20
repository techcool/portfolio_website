"use client"

import React, { useState } from 'react'

function HeaderSearch({onSearch}) {
 const [quary, setQuery] = useState("");
 const handleSubmit=(e)=>{
    e.preventDefault();
    if(onSearch) {
      onSearch(quary);  
    }else{
        console.log('Search:', quary);
        
    }
 }
  return (
    <>
        <div className="header__search">
        <form action="#" onSubmit={handleSubmit}>
          <input type="text" value={quary} name="s" id="s" placeholder="Search.." onChange={(e)=>setQuery(e.target.value)}/>
        </form>
       </div>
    </>
  )
}

export default HeaderSearch