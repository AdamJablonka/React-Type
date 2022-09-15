import React from 'react'
import { useState, useRef } from 'react'
import wordList from './words.json'
import Words from './Words'
import useTimer from './hooks/useTimer'
import { Flex, Input, Button, Box, Text, Container, IconButton, Kbd } from '@chakra-ui/react'
//import  { MdNightlightRound, MdOutlineReplay } from 'react-icons/md'
import { CgUndo } from 'react-icons/cg'

const generateArray = () => {
    const arr = [""]
    for(let i = 0; i <= 400; i++){
        let randNum = Math.floor(Math.random() * wordList.commonWords.length)

        // makes sure that the word chosen is not too long. balances the diffuclty of each word
        while(wordList.commonWords[randNum].length > 6){
            if(wordList.commonWords[randNum] === arr[i - 1]){
                continue
            }
            randNum = Math.floor(Math.random() * wordList.commonWords.length)
        }
        arr[i] = wordList.commonWords[randNum]
    }
    return arr
}

let selector = 0
let wordArray = generateArray()
let currWord = wordArray[selector]
let WPM = 0
let timeInterval = 15
let timeIntervalCalculation = (timeInterval / 60)

const TypingTest = ( { kbdBackground, hlBackground } ) => {
    const [topDisplacement, setTopDisplacement] = useState(0)
    const [inputVal, setInputVal] = useState('')
    const [points, setPoints] = useState(0)
    const [wordArrayState, setWordArrayState] = useState(wordArray)
    const [showResults, setShowResults] = useState(false)
    const { time, startTimer, resetTimer } = useTimer(timeInterval)
    const inputBar = useRef(null)
    const [wordsCorrect, setWordsCorrect] = useState([])

    const changeTop = () => {
        setTopDisplacement(topDisplacement => topDisplacement - 38)
    }

    if (inputVal !== '' && inputVal !== ' '){
        startTimer()
    }

    const inputChangeHandler = (event: any) => { 
        setInputVal(inputVal => inputVal = event.target.value)
        if (event.target.value === ' '){
            event.target.value = ''
        }

        if (event.target.value === (currWord + ' ')){
            event.target.value = ''
            selector += 1
            setPoints(points => points + currWord.length)
            setWordsCorrect(arr => [...arr, "true"])
            currWord = wordArray[selector]
        }

        if (event.target.value.includes(' ')){
            event.target.value = ''
            setWordsCorrect(arr => [...arr, "false"])
            selector += 1
            currWord = wordArray[selector]
        }
    }

    const showTypingTest = () => {
        setShowResults(showResults => showResults = false)
    }

    const reset = () => {
        setTopDisplacement(topDisplacement => topDisplacement = 0)
        setInputVal(inputVal => inputVal = '')
        setPoints(points => points = 0)
        setWordsCorrect(arr => [])
        wordArray = generateArray()
        setWordArrayState(wordArrayState => wordArrayState = wordArray)
        resetTimer()
        
        // general memory
        selector = 0
        currWord = wordArray[selector]
        inputBar.current.focus()

        // message
        console.log("Typing test reset...")
    }
    
    if(time === 0){
        WPM = Math.floor(((points / 5) / timeIntervalCalculation))
        setShowResults(showResults => showResults = true)
        reset()
    }

    if(showResults === true){
        return(
            <Container centerContent>
                <Text fontSize="50px" margin={2}>Results: </Text>
                <Text fontSize="50px" margin={2}>{WPM} WPM</Text>
                <Button colorScheme="blue" onClick={() => showTypingTest()}>Try Again</Button>
            </Container>
        )
    }else{
        return(
            <Container minW="330px" maxW="750px" centerContent className="noselect">
                <Box mb={2} className="wordBox" borderWidth="2px" rounded="md" overflow="hidden" padding={1}>
                    <Flex className="wordsContainer" direction="column" justifyContent="left">
                        <Words wordArray={wordArray} selector={selector} topDisplacement={topDisplacement} changeTop={changeTop} hlBackground={hlBackground} wordCorrect={wordsCorrect}/>
                    </Flex>
                </Box>
                <Flex direction="column">
                    <Flex className="inputAndTimer">
                        <Input borderWidth="2px" autoFocus ref={inputBar} type="text" value={inputVal} padding="2px" onChange={inputChangeHandler}></Input>
                        <Text fontSize='25px' width="50px" margin={2}>{time}</Text>
                    </Flex>
                </Flex>
                <Flex margin={2} direction="column">
                    <IconButton className="resetButton" aria-label='Restart Test' onClick={reset} style={{fontSize: '1.5em', backgroundColor: 'white'}} icon={<CgUndo/>} />
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