import React from 'react'
import DiagonalArrow from './../../public/images/arrow-white.svg'
export type PopularItemProps = {
  title: string
  name: string
  price: number
  image: string
}

export default function PopularItem({ ...item }: PopularItemProps) {
  return (
    <div className="flex-1 lg:w-1/2 px-5 flex flex-col mb-5">
      <div className="flex justify-between mb-5 ">
        <span className="text-rocket-text-color font-bold text-sm lg:text-lg">
          {item.title}
        </span>
        <img
          src={DiagonalArrow}
          alt=""
          className="cursor-pointer hover:opacity-30 transition-all h-5 lg:h-7"
        />
      </div>
      <div className="w-full flex justify-between mb-5">
        <span className="text-xs lg:text-base text-rocket-subtitle-color">
          {item.name}
        </span>
        <span className="font-bold text-xs lg:text-base text-rocket-logo-color">
          {item.price} RKT
        </span>
      </div>
      <img
        className="w-full h-auto cursor-pointer transition-all hover:shadow-lg"
        alt=""
        src={item.image}
      />
    </div>
  )
}
