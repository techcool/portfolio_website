import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import Link from 'next/link'
import React from 'react'

export default function CircleButton({ variant = "colored", position = "right", label="details", link }) {
  const variantClass =
    variant === 'colored' ? 'wc-btn-light' : variant === 'light' ? 'wc-btn-black' : '';

  const positionClass =
    position === 'right' ? 'service__btn-3' : position === 'left' ? 'btn_wrapper' : '';

  return (
    <>
      {variant === 'colored' && (
        <div className="btn_wrapper">
          <Link href={link || "#"} className={`${variantClass} btn-hover btn-item`}>
            <span className='hover'></span> <div className='label'>{label}</div>
            <FontAwesomeIcon icon={faArrowRight} />
          </Link>
        </div>
      )}


      {variant === 'light' && position==='left' && (
          <div className="btn_wrapper">
            <Link href={link || "#"} className={`${variantClass} btn-hover btn-item`}>
              <span className='hover'></span> <div className='label'>{label}</div>
              <FontAwesomeIcon icon={faArrowRight} />
            </Link>
          </div>
      )}
      {variant === 'light' && position==='right' &&(
        <div className={positionClass}>
          <div className="btn_wrapper">
            <Link href={link || "#"} className={`${variantClass} btn-hover btn-item`}>
              <span className='hover'></span> <div className='label'>{label}</div>
              <FontAwesomeIcon icon={faArrowRight} />
            </Link>
          </div>
        </div>
      )}
    </>
  )
}
