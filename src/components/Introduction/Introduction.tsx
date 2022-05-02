import { transform } from '@babel/core'
import React from 'react'

import THUMB1 from './../../public/images/artista-1.png'
import THUMB2 from './../../public/images/artista-2.png'
import THUMB3 from './../../public/images/artista-3.png'
import THUMB4 from './../../public/images/artista-4.png'
import THUMB5 from './../../public/images/artista-5.png'
import THUMB6 from './../../public/images/artista-6.png'

import BADGE from './../../public/images/badge.svg'
import { ImageGrid } from './ImageGrid'

type Props = {}

interface ImageProps {
  src: string
  x: number
  zIndex: number
}

export function Introduction({}: Props) {
  const images: Array<ImageProps> = [
    { src: THUMB1, zIndex: 6, x: 0 },
    { src: THUMB2, zIndex: 5, x: 1 },
    { src: THUMB3, zIndex: 4, x: 2 },
    { src: THUMB4, zIndex: 3, x: 3 },
    { src: THUMB5, zIndex: 2, x: 4 },
    { src: THUMB6, zIndex: 1, x: 5 }
  ]
  return (
    <div className="w-full flex flex-col lg:mt-14 xl:mt-16 2xl:mt-18">
      <section className="w-full flex flex-col lg:flex-row lg:justify-center">
        <div className="w-full lg:w-1/3 flex flex-col lg:pr-5">
          <p className="text-lg text-white mb-7">
            Mercado digital para colecionáveis em criptos e tokens não fungível
            (NFT). Compre, venda e descubra ativos digitais exclusivos para
            você.
          </p>
          <div className="w-full h-full flex justify-end relative mb-7">
            <div className="w-1/2 flex relative">
              {images.map((image: ImageProps, idx: number) => (
                <img
                  key={idx}
                  src={image.src}
                  className={`h-11 lg:h-20 absolute animate-fadeInSpin2`}
                  style={{ left: `${image.x * 10}%`, zIndex: image.zIndex }}
                />
              ))}
            </div>
            <span className="w-1/2 flex flex-col justify-center text-white my-auto">
              <strong>+10</strong>
              Artistas selecionados
            </span>
          </div>
        </div>

        <div className="w-full lg:w-2/4 flex justify-center mb-7 lg:px-5">
          <h1 className="w-auto text-5xl text-white font-bold mx-auto">
            Descubra a verdadeira arte digital e colecione diversas{' '}
            <span className="text-rocket-logo-color">NFTs</span>
          </h1>
        </div>

        <div className="w-full  lg:w-auto lg:px-8 flex justify-center mb-7">
          <img src={BADGE} alt="badge" className="max-h-48" />
        </div>
      </section>
      <ImageGrid />
    </div>
  )
}
