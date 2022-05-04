import React, { useCallback, useDebugValue, useState } from 'react'
import Logo from './../../public/images/logo.svg'
import ArrowButton from './../../public/images/arrow-black.svg'

type Props = {
  Ref: any
}

export function FirstSection({ ...props }: Props) {
  const [scrolling, setScrolling] = useState(false)
  const handleClick = useCallback(() => {
    props.Ref.current?.returnToTop()
  }, [])
  return (
    <section className="w-full p-16 lg:p-24 grid grid-cols-2">
      <img src={Logo} alt="footer-logo" className="my-auto" />
      <button
        onClick={handleClick}
        className="w-16 h-16 bg-rocket-logo-color ml-auto flex items-center justify-center  hover:bg-rocket-subtitle-color transition-all hover:-translate-y-2 "
      >
        <img src={ArrowButton} alt="arrow" />
      </button>
    </section>
  )
}
