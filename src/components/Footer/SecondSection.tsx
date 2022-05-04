import React from 'react'

type Props = {}

export function SecondSection({}: Props) {
  const col1 = ['Empresa', 'Sobre', 'Serviços', 'Time', 'Carreira']
  const col2 = ['Mapa', 'Galeria', 'Populares', 'Vendas', 'Termos']
  const col3 = ['Links', 'FAQs', 'Termos', 'Política', 'Ajuda']
  return (
    <section className="w-full flex flex-col lg:flex-row lg:border-y-2 lg:border-y-rocket-subtitle-color">
      <div className="w-full lg:w-1/3  flex border-b-2 border-b-rocket-subtitle-color lg:border-b-0 lg:border-r-2 lg:border-r-rocket-subtitle-color">
        <div className="w-full flex flex-col px-10 py-10 xl:px-14 xl:py-14 items-center justify-center">
          <h3 className="text-white font-bold text-3xl text-center">
            Fique por dentro de{' '}
            <strong className="text-rocket-logo-color">
              todas as novidades
            </strong>
          </h3>
          <div className="w-3/4 mt-5 flex justify-center">
            <input
              placeholder="nft@rocketseat.com.br"
              type="text"
              className="bg-black text-white p-2 placeholder-rocket-subtitle-color"
            />
            <button className="flex h-full py-3 px-5 justify-center items-center font-bold bg-white text-base hover:bg-rocket-logo-color transition-colors">
              Enviar
            </button>
          </div>
        </div>
      </div>
      <div className="w-full p-8 grid grid-cols-3">
        <div
          className="flex flex-col justify-center items-center p-2 m-4"
          style={{ flex: '1' }}
        >
          {col1.map((item: string, idx: number) => (
            <span
              key={idx}
              className="cursor-pointer text-rocket-subtitle-color text-base hover:text-white hover:font-bold transition  mb-2"
            >
              {item}
            </span>
          ))}
        </div>
        <div
          className="flex flex-col justify-center items-center p-2 m-2"
          style={{ flex: '1' }}
        >
          {col2.map((item: string, idx: number) => (
            <span
              key={idx}
              className="cursor-pointer text-rocket-subtitle-color text-base hover:text-white hover:font-bold transition mb-2"
            >
              {item}
            </span>
          ))}
        </div>
        <div
          className="flex flex-col justify-center items-center p-2 m-2"
          style={{ flex: '1' }}
        >
          {col3.map((item: string, idx: number) => (
            <span
              key={idx}
              className="cursor-pointer text-rocket-subtitle-color text-base hover:text-white hover:font-bold transition mb-2"
            >
              {item}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
