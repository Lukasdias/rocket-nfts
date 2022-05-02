import React, { useState, useCallback } from 'react'
import HeaderLogo from './../../public/images/logo.svg'
import HeaderButton from './HeaderButton'
import { HiX, HiMenu } from 'react-icons/hi'
import Collapse from './Collapse'
type Props = {}

export function Header({}: Props) {
  const [isOpen, setOpen] = useState<boolean>(false)
  const handleClick = useCallback(() => {
    setOpen(!isOpen)
  }, [isOpen])

  return (
    <div className="flex w-full flex-col">
      <header className="w-full relative flex flex-row justify-around py-8">
        <div className="flex justify-center w-5/6 lg:w-1/4">
          <img src={HeaderLogo} alt="logo" className="max-w-h-11" />
        </div>
        <div className="w-full flex justify-end lg:hidden">
          {isOpen ? (
            <button className={'bg-transparent  '} onClick={handleClick}>
              <HiX className="text-white text-5xl" />
            </button>
          ) : (
            <button className={'bg-transparent  '} onClick={handleClick}>
              <HiMenu className="text-white text-5xl" />
            </button>
          )}
        </div>
        <nav className="hidden lg:flex flex-auto w-1/2">
          <span className="transition text-base flex flex-auto justify-end items-center font-sans text-white cursor-pointer hover:text-rocket-logo-color font-bold">
            Comprar NFT
          </span>
          <span className="transition text-base flex-auto flex justify-center items-center font-sans text-white cursor-pointer hover:text-rocket-logo-color font-bold">
            Sobre
          </span>
          <span className="transition text-base flex-auto flex justify-start items-center font-sans text-white cursor-pointer hover:text-rocket-logo-color font-bold">
            FAQ
          </span>
        </nav>
        <div className="hidden lg:flex lg:w-1/4 items-center">
          <HeaderButton />
        </div>
      </header>
      <Collapse active={isOpen} />
    </div>
  )
}
