import React, { LegacyRef, useState, useEffect } from 'react'
import { useRef } from 'react'
import useIsInViewport from 'use-is-in-viewport'

type Props = {
  fScreen?: boolean
  children?: any
  bgColor?: string
  bg?: string
}

export function Wrapper({ ...props }: Props) {
  const [isInViewport, targetRef] = useIsInViewport({ threshold: 50 })
  const [wrapperClass, setClass] = useState<string>('')
  const [wasInViewportAtleastOnce, setWasInViewportAtleastOnce] =
    useState(isInViewport)

  useEffect(() => {
    if (isInViewport) {
      setClass('animate-fadeIn')
      setWasInViewportAtleastOnce(true)
    }
  }, [isInViewport])

  return (
    <div
      ref={targetRef}
      className={`relative w-full h-auto flex flex-col items-center bg-cover bg-no-repeat ${props.bgColor}`}
      style={{ backgroundImage: `url(${props.bg})` }}
    >
      <div
        className={`relative ${
          props.fScreen ? 'w-full' : 'w-11/12'
        } lg:min-h-screen flex flex-col ${wrapperClass} ${
          wasInViewportAtleastOnce ? 'opacity-1' : 'opacity-0'
        }`}
      >
        {props.children}
      </div>
    </div>
  )
}
