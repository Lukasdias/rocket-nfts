import React from 'react'
import Timeline from './Timeline'

type Props = {}

export function Popular({}: Props) {
  return (
    <div className="w-full lg:h-screen flex flex-col py-10 relative justify-between">
      <header className="w-full flex justify-center lg:justify-start relative">
        <h2 className="text-white text-2xl lg:text-5xl font-bold mb-10">
          <strong className="text-rocket-logo-color">Populares</strong> da
          semana
        </h2>
      </header>
      <Timeline />
    </div>
  )
}
