import Header2 from '@/components/Header/Header2';
import Offcanvas from '@/components/Offcanvas/Offcanvas';
import React from 'react'

export const metadata = {
  title: "Home 2",
  description: "This is Home 2 page",
};

export default function Home2Layout({ children }) {
  return (
    <>
        {/* <Header2 />  
        <Offcanvas/> */}
        {children}
    </>
  )
}
