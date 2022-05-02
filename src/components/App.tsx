import React, { useState, useCallback } from 'react'
import { Wrapper } from './Wrapper/Wrapper'
import { Header } from './Header/Header'
import BG1 from './../public/images/background.png'
import { Introduction } from './Introduction/Introduction'
import { useEffect, useRef } from 'react'
import LegacyRef from 'react'
import { Stats } from './Stats/Stats'
import { Popular } from './Popular/Popular'
import { BestArtists } from './BestArtists/BestArtists'

function App() {
  return (
    <div className="max-w-screen min-h-screen flex flex-col items-center bg-black ">
      <Wrapper bg={BG1}>
        <Header />
        <Introduction />
      </Wrapper>
      <Wrapper fScreen bgColor="bg-rocket-card-color">
        <Stats />
      </Wrapper>
      <Wrapper>
        <Popular />
      </Wrapper>
      <Wrapper>
        <BestArtists />
      </Wrapper>
    </div>
  )
}

export default App
