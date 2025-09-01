import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass, faXmark } from '@fortawesome/free-solid-svg-icons';
function OffcanvasClose() {
  return (
    <>
        <div className="offcanvas__close">
            <button type="button" id="close_offcanvas" className='cursor-pointer'><FontAwesomeIcon style={{ color: 'white', width: 20 }} icon={faXmark} /></button>
        </div>
    </>
  )
}

export default OffcanvasClose