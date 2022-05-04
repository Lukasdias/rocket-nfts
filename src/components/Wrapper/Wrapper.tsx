import React, {
  LegacyRef,
  useState,
  useEffect,
  forwardRef,
  useImperativeHandle,
  useCallback
} from 'react'
import { useRef } from 'react'
import useIsInViewport from 'use-is-in-viewport'

type Props = {
  autoHeight?: boolean
  fScreen?: boolean
  children?: any
  bgColor?: string
  bg?: string
}

type Ref = {
  returnToTop: () => void | null
}

export const Wrapper = forwardRef<Ref, Props>(({ ...props }: Props, ref) => {
  const wrapperRef = useRef<any>(null)
  const [isInViewport, targetRef] = useIsInViewport({ threshold: 30 })
  const [wrapperClass, setClass] = useState<string>('')
  const [wasInViewportAtleastOnce, setWasInViewportAtleastOnce] =
    useState(isInViewport)

  useEffect(() => {
    if (isInViewport) {
      setClass('animate-fadeIn')
      setWasInViewportAtleastOnce(true)
    }
  }, [isInViewport])

  useImperativeHandle(ref, () => ({
    returnToTop() {
      console.log('SCROLL')
      wrapperRef.current?.scrollIntoView({
        behavior: 'smooth',
        block: 'center'
      })
    }
  }))

  return (
    <div
      ref={targetRef}
      className={`relative w-full h-auto flex flex-col items-center bg-cover bg-no-repeat ${props.bgColor}`}
      style={{ backgroundImage: `url(${props.bg})` }}
    >
      <div
        ref={wrapperRef}
        className={`relative ${props.fScreen ? 'w-full' : 'w-11/12'} ${
          props.autoHeight ? '' : 'lg:min-h-screen'
        } flex flex-col ${wrapperClass} ${
          wasInViewportAtleastOnce ? 'opacity-1' : 'opacity-0'
        }`}
      >
        {props.children}
      </div>
    </div>
  )
})
