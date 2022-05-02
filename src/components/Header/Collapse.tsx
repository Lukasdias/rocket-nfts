import React, { useState, useCallback } from 'react'
import { HiX, HiMenu } from 'react-icons/hi'

type Props = {
  active: boolean
}

export default function Collapse({ active }: Props) {
  return (
    <>
      {active ? (
        <>
          <section className="w-full bg-white mb-5">
            <nav className="flex flex-col">
              <button className="p-5 text-lg border-b-2 border-b-gray-700 ">
                Comprar NFT
              </button>
              <button className="p-5 text-lg border-b-2 border-b-gray-700 ">
                Sobre
              </button>
              <button className="p-5 text-lg border-b-2 border-b-gray-700 ">
                FAQ
              </button>
            </nav>
          </section>
        </>
      ) : (
        <></>
      )}
    </>
  )
}
