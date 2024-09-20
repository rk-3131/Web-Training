import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Counter from './components/Counter'
import Counter2 from './components/Counter2'
import ObjectAsState from './components/ObjectAsState'
import ArraysAsStates from './components/ArraysAsStates'
import UseEffectUse from './components/UseEffectUse'

function App() {

  return (
    <>
    <Counter/>
    <Counter2/>
    <ObjectAsState/>
    <ArraysAsStates/>
    <UseEffectUse/>
    </>
  )
}

export default App
