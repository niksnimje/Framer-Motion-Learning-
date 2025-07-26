import React from 'react'
import DemoAnimations from './DemoAnimations'
import PresenceDemo from './PresenceDemo'
import Cursor from './Cursor'
import CardAnimation from './CardAnimation'

function Home() {
  return (
    <>
      <CardAnimation />
        <DemoAnimations />
        <PresenceDemo />
        <Cursor/>
    </>
  )
}

export default Home