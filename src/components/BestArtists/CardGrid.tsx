import React from 'react'
import Card, { ArtistCardProps } from './Card'

import IMG1 from './../../public/images/artista-1.png'
import IMG2 from './../../public/images/artista-2.png'
import IMG3 from './../../public/images/artista-3.png'
import IMG4 from './../../public/images/artista-4.png'
import IMG5 from './../../public/images/artista-5.png'
import IMG6 from './../../public/images/artista-6.png'

export default function CardGrid() {
  const cards: ArtistCardProps[] = [
    { image: IMG1, name: 'Mayk Brito', qtdOfPics: 80 },
    { image: IMG2, name: 'Jakeliny G.', qtdOfPics: 99, champ: true },
    { image: IMG3, name: 'João I. (Biro)', qtdOfPics: 50 },
    { image: IMG4, name: 'Tamires Santos', qtdOfPics: 43 },
    { image: IMG5, name: 'Ana Silva', qtdOfPics: 28 },
    { image: IMG6, name: 'Diego F.', qtdOfPics: 20 }
  ]
  return (
    <section className="w-full flex flex-col lg:grid lg:grid-cols-3 lg-grid-rows-2 mb-10">
      {cards.map((card: ArtistCardProps, idx: number) => {
        return (
          <Card
            key={idx}
            name={card.name}
            image={card.image}
            qtdOfPics={card.qtdOfPics}
            champ={card.champ}
          />
        )
      })}
    </section>
  )
}
