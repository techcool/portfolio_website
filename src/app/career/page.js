import CareerArea from '@/components/careerPage/CareerArea'
import CareerBenefit from '@/components/careerPage/CareerBenefit'
import CareerGallery from '@/components/careerPage/CareerGallery'
import CareerTop from '@/components/careerPage/CareerTop'
import React from 'react'



export default function CareerPage() {
  return (
    <>
       <CareerTop/>
       <CareerGallery/>
       <CareerArea/>
       <CareerBenefit/>
    </>
  )
}
