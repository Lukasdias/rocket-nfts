import React, { useCallback } from 'react'
import { FirstSection } from './FirstSection'
import { SecondSection } from './SecondSection'
import { ThirdSection } from './ThirdSection'

type Props = {
  introRef: React.MutableRefObject<HTMLElement> | React.MutableRefObject<null>
}

export default function Footer({ ...props }: Props) {
  return (
    <footer className="w-full flex flex-col">
      <FirstSection Ref={props.introRef} />
      <SecondSection />
      <ThirdSection />
    </footer>
  )
}
