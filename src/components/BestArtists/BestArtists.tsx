import React from 'react'
import CardGrid from './CardGrid'
import ARROW from './../../public/images/arrow-orange.svg'
export function BestArtists() {
  return (
    <div className="w-full lg:h-screen flex flex-col relative justify-between py-10">
      <header className="w-full flex justify-center lg:justify-center items-center relative mb-10">
        <h2 className="text-white text-2xl lg:text-5xl font-bold ">
          Melhores<strong className="text-rocket-logo-color"> artistas</strong>
        </h2>
      </header>

      <CardGrid />

      <span className="text-white mx-auto text-center flex justify-center cursor-pointer hover:text-rocket-logo-color transition-colors">
        Ver todos os artistas{' '}
        <img src={ARROW} alt="arrow" className="h-3 ml-4" />
      </span>
    </div>
  )
}
