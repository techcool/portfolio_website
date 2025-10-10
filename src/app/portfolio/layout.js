import Header from '@/components/layouts/header/Header';
import Offcanvas from '@/components/layouts/offcanvas/Offcanvas';
import React from 'react'
export const metadata = {
  title: "Explore Our Innovative &amp; Creative Works",
  description: "Don’t go with our words. We value your decision. Have a look at our portfolio and decide on our abilities. It’s up to you only!",
};

export default function PortfolioLayout({children}) {
  return (
    <>
        {children}
    </>
  )
}
