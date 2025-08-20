import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass, faXmark } from '@fortawesome/free-solid-svg-icons';
function OffcanvasSearch() {
  return (
    <>
        <div className="offcanvas__search">
            <form action="#">
                <input type="text" name="search" placeholder="Search keyword"/>
                <button><FontAwesomeIcon icon={faMagnifyingGlass} style={{ color: 'white', width: 20 }} className="fa-solid fa-magnifying-glass" /></button>
            </form>
        </div>
    </>
  )
}

export default OffcanvasSearch