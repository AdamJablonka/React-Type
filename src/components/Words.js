import React from 'react'
import { useRef, useEffect, useState } from 'react'

const Words = ( { wordArray, selector, topDisplacement, changeTop } ) => {
    let wordRef = useRef(null)
    const { offsetTop } = wordRef.current ?? {}

    useEffect(() => {
        console.log(offsetTop)
        if(offsetTop > 161){
            changeTop()
        }
    }, [selector])

    const renderWords = wordArray.map((word, index) => {
        if(selector != index)
            return <span key={index} className="word">{word + " "}</span>
        else {
            return <span ref={wordRef} key={index} className="wordSelected">{word + " "}</span>
        }   
    })

    return(
        <div style={{marginTop: `${topDisplacement}px`}}className='hello'>
            {renderWords}
        </div>
    )
}

export default Words