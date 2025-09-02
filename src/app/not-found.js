import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import Link from "next/link";
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
                    <Link href="/" className="wc-btn-primary btn-hover btn-item text-left"><span></span> Back to<br/> Homepage 
                    <FontAwesomeIcon style={{ width: 20 }} icon={faArrowRight}
                        ></FontAwesomeIcon>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
    
    </>
    
}