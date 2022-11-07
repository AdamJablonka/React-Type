import React from 'react'
import { useRef, useEffect, useState } from 'react'

const Words = ( { wordArray, selector, topDisplacement, changeTop, hlBackground, wordCorrect} ) => {
    let wordRef = useRef(null)
    const [originalOffset, setOriginalOffset] = useState(0)

    useEffect(() => {
        var { offsetTop } = wordRef.current ?? {}
        setOriginalOffset(offsetTop)
        console.log("original offset:", originalOffset)
    }, [])

    useEffect(() => {
        const { offsetTop } = wordRef.current ?? {}
        console.log(offsetTop)
        if(originalOffset != 0 && offsetTop > originalOffset){
            changeTop(offsetTop - originalOffset)
        }
    }, [selector])

    const renderWords = wordArray.map((word, index) => {
        if(selector !== index){
            if(selector > index){
                if(wordCorrect[index] === 'false')
                    return <span id={`wrong${index}`} key={index} className="wordIncorrect">{word + " "}</span>
                else if (wordCorrect[index] === 'true')
                    return <span id={`correct${index}`} style={{color: 'green'}} key={index} className="wordCorrect">{word + " "}</span>
            }else{
                return <span key={index} id={`${index}`}s className="word">{word + " "}</span>
            }
        }else {
            return <span ref={wordRef} id="wordSelected" key={index} style={{background: `${hlBackground}`}} className="wordSelected">{word + " "}</span>
        }   
    })

    return(
        <div style={{marginTop: `${topDisplacement}px`}}>
            {renderWords}
        </div>
    )
}

export default Words