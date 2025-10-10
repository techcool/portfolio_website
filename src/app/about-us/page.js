
import AboutHero from "@/components/aboutPage/AboutHero";
import Brand from "@/components/aboutPage/Brand";
import Counter from "@/components/aboutPage/Counter";
import Story from "@/components/aboutPage/Story";
import Team from "@/components/aboutPage/Team";
import React from "react";


import Testimonial from "@/components/aboutPage/Testimonial";
import CTA from "@/ui/CTA";

export default function AboutUs() {
  return (
    <>
        <AboutHero /> 
        <Story/>
        <Counter/>
        <Team/>
        <Brand/>
        <Testimonial/>
        <CTA/>
    </>
  );
}
