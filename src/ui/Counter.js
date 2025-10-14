import { counter } from '@/data/whyChooseData'
import React from 'react'

export default function Counter() {
  return (
    <>
       {counter.map((item) => (
        <div className="counter__item-3" key={item.id}>
        <h4 className="text-3xl md:text-4xl">{item.number}</h4>
        <p className="text-gray-600">
            {item.titlePart1} {item.titlePart2}
        </p>
        </div>
    ))}
    </>
  )
}
