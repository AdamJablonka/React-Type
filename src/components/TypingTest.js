import React from 'react'
import { useState, useEffect, useRef } from 'react'
import wordList from './words.json'
import Words from './Words'
import useTimer from './hooks/useTimer'
import { Flex, Input, Button, Box, Text, Container, IconButton, Kbd } from '@chakra-ui/react'
import { RepeatIcon } from '@chakra-ui/icons'

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
let timeInterval = 15
let timeIntervalCalculation = (60 / timeInterval)

const TypingTest = ( {kbdBackground} ) => {
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
        wordArray = generateArray(wordDisplayLen)
        wordArrayExtra = generateArray(wordDisplayLen)
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
            <Container centerContent>
                <Text fontSize="50px" margin={5}>Results: {WPM} WPM</Text>
                <Button background={kbdBackground} onClick={() => showTypingTest()}>Try Again</Button>
            </Container>
        )
    }else{
        return(
            <Container maxW="750px" centerContent id="TypingTest">
                <Box mb={2} borderWidth="2px" rounded="md" overflow="hidden" padding={10}>
                        <Flex direction="column" justifyContent="left">
                        <Words wordArray={wordArray} />
                        <Words wordArray={wordArrayExtra} />
                    </Flex>
                </Box>
                <Flex direction="column">
                    <Flex>
                        <Input borderWidth="2px" autoFocus ref={inputBar} type="text" value={inputVal} onChange={inputChangeHandler}></Input>
                        <Text fontSize='25px' margin={2}>{time}</Text>
                    </Flex>
                </Flex>
                <Flex margin={2} direction="column">
                    <IconButton colorScheme="blue" aria-label='Restart Test' onClick={reset} icon={<RepeatIcon />} />
                </Flex>
                <Flex margin={5}>
                    <span>
                        <Kbd background={kbdBackground}>tab</Kbd> + <Kbd background={kbdBackground}>enter</Kbd> - restart test when typing
                    </span>
                </Flex>
            </Container>
        )
    }
}

export default TypingTest