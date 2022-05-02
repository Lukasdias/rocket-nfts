import React, { useState, useCallback } from 'react'
import { Wrapper } from './Wrapper/Wrapper'
import { Header } from './Header/Header'
import BG1 from './../public/images/background.png'
import { Introduction } from './Introduction/Introduction'
import { useEffect, useRef } from 'react'
import LegacyRef from 'react'
import { Stats } from './Stats/Stats'

function App() {
  return (
    <div className="max-w-screen min-h-screen flex flex-col items-center bg-black ">
      <Wrapper bg={BG1}>
        <Header />
        <Introduction />
      </Wrapper>
      <Wrapper bgColor="bg-rocket-card-color">
        <Stats />
      </Wrapper>
    </div>
  )
}

export default App
