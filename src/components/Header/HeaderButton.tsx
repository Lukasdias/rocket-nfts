import React from 'react'
import DogIcon from '././../../public/images/logo_MetaMask.svg'
type Props = {}

export default function HeaderButton({}: Props) {
  return (
    <button className="w-full max-h-10 p-6 bg-white flex items-center justify-center border-2 hover:border-rocket-logo-color ">
      <img src={DogIcon} alt="" />
      <span className="ml-4 font-sans font-bold text-base">
        Conectar carteira
      </span>
    </button>
  )
}
