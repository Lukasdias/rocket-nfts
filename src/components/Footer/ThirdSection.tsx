import React from 'react'
import { Instagram, Email, Youtube, Twitter } from './icons/Icons'
type Props = {}

export function ThirdSection({ ...props }: Props) {
  return (
    <div className="w-full p-16 lg:p-24 grid grid-rows-2 lg:grid-cols-2 lg:grid-rows-1">
      <div className="flex items-center justify-center lg:justify-start">
        <a
          className="text-rocket-subtitle-color no-underline hover:no-underline transition hover:text-white"
          href="www.rocketseat.com.br"
          target="_blank"
          rel="nopener noreferrer"
        >
          www.rocketseat.com.br
        </a>
      </div>
      <div className="flex items-center justify-center lg:justify-end mt-5 lg:mt-0">
        <div className="mx-4 cursor-pointer hover:scale-125 transition">
          <Instagram />
        </div>
        <div className="mx-4 cursor-pointer hover:scale-125 transition">
          <Youtube />
        </div>
        <div className="mx-4 cursor-pointer hover:scale-125 transition">
          <Twitter />
        </div>
        <div className="mx-4 cursor-pointer hover:scale-125 transition">
          <Email />
        </div>
      </div>
    </div>
  )
}
