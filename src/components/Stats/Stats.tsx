import React from 'react'
import { NumProps, Nums } from './Nums'
import { StatArticle } from './StatArticle'
import BANNER from './../../public/images/banner.png'
type Props = {}

export function Stats({}: Props) {
  const nums: NumProps[] = [
    {
      qtd: 10,
      subtitle: 'Artes'
    },
    {
      qtd: 200,
      subtitle: 'Vendas'
    },
    {
      qtd: 20,
      subtitle: 'Artistas'
    }
  ]
  return (
    <section className="w-full lg:h-screen flex flex-col lg:flex-row">
      <div className="flex flex-row w-full lg:flex-col lg:w-1/6 /lg:h-screen justify-center items-center border-b-2 border-r-2 border-rocket-subtitle-color">
        {nums.map((n: NumProps, idx: number) => (
          <Nums key={idx} qtd={n.qtd} subtitle={n.subtitle} />
        ))}
      </div>
      <div className="flex flex-col lg:flex-col w-full justify-between">
        <div className="w-full lg:h-full flex flex-col lg:flex-row lg:mb-5 lg:px-10 lg:py-5">
          <StatArticle />
          <StatArticle />
        </div>
        <img src={BANNER} alt="banner" className="w-full h-full max-h-96" />
      </div>
    </section>
  )
}
