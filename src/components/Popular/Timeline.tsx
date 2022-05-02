import React from 'react'
import PopularItem, { PopularItemProps } from './PopularItem'

import ITEM1 from './../../public/images/astronauta-1.png'
import ITEM2 from './../../public/images/astronauta-2.png'
import ITEM3 from './../../public/images/astronauta-3.png'
import ITEM4 from './../../public/images/astronauta-4.png'

export default function Timeline({}: any) {
  const leftItems: PopularItemProps[] = [
    { title: 'Astronauta 1', name: 'Mayk Brito', price: 1.5, image: ITEM1 },
    {
      title: 'Astronauta 3',
      name: 'João Inácio (Biro)',
      price: 3.75,
      image: ITEM3
    }
  ]
  const rightItems: PopularItemProps[] = [
    {
      title: 'Astronauta 2',
      name: 'Jakeliny Gracielly',
      price: 2.0,
      image: ITEM2
    },
    {
      title: 'Astronauta 4',
      name: 'Tamires Santos',
      price: 4.3,
      image: ITEM4
    }
  ]
  return (
    <div className="flex w-full">
      <div className="flex flex-col w-full justify-center items-center border-r-2 border-r-rocket-card-color">
        {leftItems.map((item: PopularItemProps, idx: number) => (
          <PopularItem
            key={idx}
            title={item.title}
            name={item.name}
            image={item.image}
            price={item.price}
          />
        ))}
      </div>
      <div className="flex flex-col w-full justify-center items-center border-l-2 border-l-rocket-card-color">
        {rightItems.map((item: PopularItemProps, idx: number) => (
          <PopularItem
            key={idx}
            title={item.title}
            name={item.name}
            image={item.image}
            price={item.price}
          />
        ))}
      </div>
    </div>
  )
}
