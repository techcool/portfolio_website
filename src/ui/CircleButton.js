"use client";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import React, { useEffect } from "react";
import gsap, { Power2 } from "gsap";
import { ScrollTrigger } from "gsap/all";

gsap.registerPlugin(ScrollTrigger);

export default function CircleButton({
  variant = "colored",
  position = "right",
  label = "details",
  link = "#",
  modal = "false",
  onClick,
}) {
  useEffect(() => {
    const btns = gsap.utils.toArray(".btn_wrapper");
    const allBtnCircles = gsap.utils.toArray(".btn-item");

    btns.forEach((btn, i) => {
      const target = allBtnCircles[i];

      const handleMouseMove = (e) => {
        const rect = btn.getBoundingClientRect();
        const relX = e.clientX - rect.left;
        const relY = e.clientY - rect.top;
        const movement = 80;

        gsap.to(target, {
          x: ((relX - rect.width / 2) / rect.width) * movement,
          y: ((relY - rect.height / 2) / rect.height) * movement,
          ease: Power2.easeOut,
          duration: 0.5,
        });
      };

      const handleMouseLeave = () => {
        gsap.to(target, {
          x: 0,
          y: 0,
          ease: Power2.easeOut,
          duration: 0.5,
        });
      };

      btn.addEventListener("mousemove", handleMouseMove);
      btn.addEventListener("mouseleave", handleMouseLeave);
    });

    btns.forEach((btn) => {
      if (!btn.classList.contains("hero__button")) {
        gsap.fromTo(
          btn,
          { opacity: 0, y: -70 },
          {
            opacity: 1,
            y: 0,
            duration: 1.2,
            ease: "bounce.out",
            scrollTrigger: {
              trigger: btn,
              start: "top 90%",
              toggleActions: "play none none reverse",
              markers: false,
            },
          }
        );
      }
    });

    return () => {
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, []);

  const variantClass =
    variant === "colored"
      ? "wc-btn-light"
      : variant === "light"
      ? "wc-btn-black"
      : "";

  const positionClass =
    position === "right"
      ? "service__btn-3"
      : position === "left"
      ? "btn_wrapper"
      : "";

  return (
    <>
      {variant === "colored" && (
        <div className="btn_wrapper">
          <Link
            href={link || "#"}
            className={`${variantClass} btn-hover btn-item`}
          >
            <span className="hover"></span>
            <div className="label">{label}</div>
            <FontAwesomeIcon icon={faArrowRight} />
          </Link>
        </div>
      )}

      {variant === "light" && position === "left" && modal === "false" && (
        <div className="btn_wrapper">
          <Link
            href={link || "#"}
            className={`${variantClass} btn-hover btn-item`}
          >
            <span className="hover"></span>
            <div className="label">{label}</div>
            <FontAwesomeIcon icon={faArrowRight} />
          </Link>
        </div>
      )}

      {variant === "light" && position === "right" && (
        <div className={positionClass}>
          <div className="btn_wrapper">
            <Link
              href={link || "#"}
              className={`${variantClass} btn-hover btn-item`}
            >
              <span className="hover"></span>
              <div className="label">{label}</div>
              <FontAwesomeIcon icon={faArrowRight} />
            </Link>
          </div>
        </div>
      )}

      {variant === "light" && position === "left" && modal === "true" && (
        <div className={positionClass}>
          <div className="btn_wrapper job__apply">
            <button
              className={`${variantClass} btn-hover btn-item`}
              onClick={onClick}
            >
              <span className="hover"></span>
              <div className="label">{label}</div>
              <FontAwesomeIcon icon={faArrowRight} />
            </button>
          </div>
        </div>
      )}
    </>
  );
}
