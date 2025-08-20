"use client"

import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass, faXmark } from '@fortawesome/free-solid-svg-icons';
function OffcanvasSearch() {
 const [query, setQuery] = useState("");

  const handleSubmit = (e) => { 
    e.preventDefault();
    console.log('Search from Offcanvas:', query);
  }
  return (
    <>
        <div className="offcanvas__search">
            <form  onSubmit={handleSubmit}>
              <input type="text" value={query} onChange={(e)=>setQuery(e.target.value)} name="search" placeholder="Search keyword"/>
              <button><FontAwesomeIcon icon={faMagnifyingGlass} style={{ color: 'white', width: 20 }}  /></button>
            </form>
        </div>
    </>
  )
}

export default OffcanvasSearch