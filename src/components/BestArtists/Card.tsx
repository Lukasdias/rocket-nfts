import React from 'react'

export type ArtistCardProps = {
  name: string
  image: string
  qtdOfPics: number
  champ?: boolean
}

export default function Card({ ...artist }: ArtistCardProps) {
  return (
    <div
      className={`flex flex-row w-full lg:w-5/6 2xl:w-2/3 my-1 lg:mx-auto ${
        artist.champ ? 'bg-rocket-logo-color' : 'bg-rocket-subtitle-color'
      } lg:h-36 mt-10`}
    >
      <div className="flex justify-center items-center p-5">
        <img
          src={artist.image}
          alt={`${artist.name}'s card pic`}
          className="w-full"
        />
      </div>
      <div className="flex flex-col justify-center items-center w-full">
        <p className="w-full text-white text-base lg:text-xl font-bold text-center">
          {artist.name}
        </p>
        <p
          className={`${
            artist.champ ? 'text-white' : 'text-rocket-logo-color'
          } text-base lg:text-xl w-full text-center`}
        >
          {artist.qtdOfPics} fotografias
        </p>
      </div>
    </div>
  )
}
