import React from 'react'

export default async function PortfolioDetails({params}) {
  const {id} =await params
  return (
    <>
        <h1>Portfolio Id: {id}</h1>
    </>
  )
}
