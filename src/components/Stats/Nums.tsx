import React from 'react'

export interface NumProps {
  qtd: number
  subtitle: string
}

export function Nums({ qtd, subtitle }: NumProps) {
  return (
    <div className="w-full flex flex-col text-center py-4">
      <h3 className="text-2xl lg:text-5xl text-white font-bold">
        {qtd}
        <sup>+</sup>
      </h3>
      <span className="text-base text-rocket-subtitle-color">{subtitle}</span>
    </div>
  )
}
