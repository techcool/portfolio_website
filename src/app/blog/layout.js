import Header from '@/components/layouts/header/Header';
import Offcanvas from '@/components/layouts/offcanvas/Offcanvas';
import React from 'react'

export const metadata = {
  title: "Explore the World of Technology &amp; Online Marketing",
  description: "Curious about web development technology and marketing? Our blog will enrich your knowledge. Follow our blogs to keep your knowledge updated.",
};

export default function BlogLayout({children}) {
  return (
    <>
        {children}
    </>
  )
}
