import React, { useState, useCallback, useEffect } from 'react'

type Props = {
  active: boolean
}

export default function Collapse({ active }: Props) {
  const [animation, setAnimation] = useState<string>('animate-fadeIn')
  return (
    <>
      {active ? (
        <>
          <section className={`w-full bg-white mb-5 ${animation}`}>
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
