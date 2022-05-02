import React, { lazy } from 'react'

import IMG1 from './../../public/images/galeria-1.png'
import IMG2 from './../../public/images/galeria-2.png'
import IMG3 from './../../public/images/galeria-3.png'
import IMG4 from './../../public/images/galeria-4.png'
import IMG5 from './../../public/images/galeria-5.png'
import IMG6 from './../../public/images/galeria-6.png'
import IMG7 from './../../public/images/galeria-7.png'
import IMG8 from './../../public/images/galeria-8.png'

type Props = {}

export function ImageGrid({}: Props) {
  const images: any[] = [IMG1, IMG2, IMG3, IMG4, IMG5, IMG6, IMG7, IMG8]
  return (
    <div className="lg:mt-10 w-full grid grid-rows-4 grid-cols-2 lg:grid-rows-2 lg:grid-cols-4 ">
      {images.map((image: any, idx: number) => (
        <img key={idx} src={image} className="w-full p-2" />
      ))}
    </div>
  )
}
