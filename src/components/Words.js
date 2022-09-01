import React from 'react'
import { useRef, useEffect } from 'react'

const Words = ( { wordArray, selector, topDisplacement, changeTop, hlBackground } ) => {
    let wordRef = useRef(null)

    useEffect(() => {
        const { offsetTop } = wordRef.current ?? {}
        if(offsetTop > 190){
            changeTop()
        }
    }, [selector])

    const renderWords = wordArray.map((word, index) => {
        if(selector !== index)
            return <span key={index} className="word">{word + " "}</span>
        else {
            return <span ref={wordRef} key={index} style={{background: `${hlBackground}`}} className="wordSelected">{word + " "}</span>
        }   
    })

    return(
        <div style={{marginTop: `${topDisplacement}px`}}>
            {renderWords}
        </div>
    )
}

export default Words