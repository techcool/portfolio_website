import React from 'react'

function OffcanvasMenu() {
  return (
    <>
        <div className="offcanvas__mid">
                      <div className="offcanvas__menu-wrapper">
                        <nav className="offcanvas__menu">
                          <ul className="menu-anim">
                            <li><a>home</a></li>
                            <li>
                              <a>Services</a>
                              <ul className="main-dropdown">
                                <li><a href="#">Web Design</a></li>
                                <li><a href="#">Web Development</a></li>
                                <li><a href="#">App Development</a></li>
                                <li><a href="#">Full-Stack Development</a></li>
                                <li><a href="#">Digital Maketing</a></li>
                                <li><a href="#">Search Engine Optimization</a></li>
                                <li><a href="#">Social Media Optimization</a></li>
                                <li><a href="#">Social Media Marketing</a></li>
                                <li><a href="#">Pay Per Click</a></li>
                                <li><a href="#">E-Commerce</a></li>
                              </ul>
                            </li>
                            <li><a href='#'>Portfolio</a></li>
                            <li><a href='#'>blog</a></li>
                            <li><a href="contact.html">contact Us</a></li>
                          </ul>
                        </nav>
                      </div>
                    </div>
    </>
  )
}

export default OffcanvasMenu