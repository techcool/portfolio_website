import Image from "next/image";
import React from "react";
export default function NotFound() {
    return <>
    
    <section className="error__page">
          <div className="container line">
            <span className="line-3"></span>
            <div className="row">
              <div className="col-xxl-12">
                <div className="error__content">
                  {/* <Image src="assets/imgs/thumb/404.png" alt="Page not found"/> */}
                  <h2>Sorry! page did not found</h2>
                  <p>The page you are looking for doesn't exist or has been moved</p>
                  <div className="btn_wrapper">
                    <a href="index-2.html" className="wc-btn-primary btn-hover btn-item"><span></span> Back to Homepage <i
                        className="fa-solid fa-arrow-right"></i></a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
    
    </>
    
}