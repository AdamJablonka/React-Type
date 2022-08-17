import { useState, useEffect } from 'react'
import InputBar from './components/InputBar'
import Words from './components/Words'
import Timer from './components/Timer'
import TypingTest from './components/TypingTest'

const App = () => {
  return (
    <div>
      <h1>react-type <sub><i>alpha</i></sub> </h1>
      <center>
        <TypingTest />
      </center>
    </div>
  )
}

export default App
