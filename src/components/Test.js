import { faPhp, faUikit } from '@fortawesome/free-brands-svg-icons'
import { faPaintBrush } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

export default function Test() {
  return (
    <>
      <FontAwesomeIcon icon={faPhp}></FontAwesomeIcon>  
      <FontAwesomeIcon icon={faUikit}></FontAwesomeIcon>  
      <FontAwesomeIcon icon={faPaintBrush}></FontAwesomeIcon>  
    </>
  )
}
