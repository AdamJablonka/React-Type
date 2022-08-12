import React from 'react'
import { useState, useEffect, useRef } from 'react'
import wordList from './words.json'
// import Words from './Words'
// import InputBar from './InputBar'
// import Timer from './Timer'
import useTimer from './hooks/useTimer'

const generateArray = (wordDisplayLen) => {
    const arr = []
    for(let i = 0; i <= wordDisplayLen; i++){
        let randNum = Math.floor(Math.random() * wordList.commonWords.length)
        arr[i] = wordList.commonWords[randNum]
    }
    return arr
}

let wordDisplayLen = 16
let selector = 0
let wordArray = generateArray(wordDisplayLen)
let wordArrayExtra = generateArray(wordDisplayLen)
let currWord = wordArray[selector]
let WPM = 0
let timeIntervalCalculation = 4
let timeInterval = 15

const TypingTest = () => {
    const [inputVal, setInputVal] = useState('')
    const [points, setPoints] = useState(0)
    const [wordArrayState, setWordArrayState] = useState(wordArray)
    const [wordArrayExtraState, setWordArrayExtraState] = useState(wordArrayExtra)
    const [showResults, setShowResults] = useState(false)
    const { time, startTimer, resetTimer } = useTimer(timeInterval)
    const inputBar = useRef(null)

    // debug purposes...
    useEffect(() => {
        console.log(`Words typed: ${points}`)
    }, [points])
 
    if (inputVal !== '' && inputVal !== ' '){
        startTimer()
    }
    console.log(`Word Array: ${wordArray}`)
    console.log(`Word Array Extra: ${wordArray}`)

    const inputChangeHandler = (event) => {
        console.log(currWord)  // debug purpose 
        setInputVal(inputVal => event.target.value)
        if (event.target.value === ' '){
            event.target.value = ''
        }

        if (event.target.value === (currWord + ' ')){
            event.target.value = ''
            selector += 1
            setPoints(points => points + 1)
            if (selector > wordDisplayLen){
                selector = 0
                wordArray = wordArrayExtra
                wordArrayExtra = generateArray(wordDisplayLen)
            }
            currWord = wordArray[selector]
        }

        if (event.target.value.includes(' ')){
            event.target.value = ''
            selector += 1

            if(selector > wordDisplayLen){
                selector = 0
                wordArray = wordArrayExtra
                wordArrayExtra = generateArray(wordDisplayLen)
            }
            currWord = wordArray[selector]
        }
    }

    const showTypingTest = () => {
        setShowResults(showResults => showResults = false)
    }

    const reset = () => {
        setInputVal(inputVal => inputVal = '')
        setPoints(points => points = 0)
        wordArray = generateArray(wordDisplayLen))
        wordArrayExtra = generateArray(wordDisplayLen))
        setWordArrayState(wordArrayState => wordArrayState = wordArray)
        setWordArrayExtraState( wordArrayExtraState => wordArrayExtraState = wordArrayExtra)
        resetTimer()
        
        // general memory
        selector = 0
        currWord = wordArray[selector]
        inputBar.current.focus()

        // message
        console.log("Typing test reset...")
    }
    
    if(time === 0){
        WPM = points * timeIntervalCalculation
        setShowResults(showResults => showResults = true)
        reset()
    }

    if(showResults === true){
        return(
            <div>
                <p>Results: {WPM} WPM</p>
                <button onClick={() => showTypingTest()}>Try Again</button>
            </div>
        )
    }else{
        return(
            <div id="TypingTest">
                <Words wordArray={wordArray} />
                <Words wordArray={wordArrayExtra} />
                <input autoFocus ref={inputBar} type="text" value={inputVal} onChange={inputChangeHandler} />
                <div>{time}</div>
                <button onClick={() => reset()}>Reset</button>
            </div>
        )
    }
}
// <button onClick={startTimer}>start</button>
// <InputBar changeHandler={inputChangeHandler} />
export default TypingTest
