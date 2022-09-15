import { render } from '@testing-library/react'
import React from 'react'
import { useRef, useEffect } from 'react'

const Words = ( { wordArray, selector, topDisplacement, changeTop, hlBackground, wordCorrect, ...rest } ) => {
    let wordRef = useRef(null)

    useEffect(() => {
        const { offsetTop } = wordRef.current ?? {}
        // console.log(offsetTop)
        if(offsetTop > 120){
            changeTop()
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
            return <span id="wordSelected" key={index} style={{background: `${hlBackground}`}} className="wordSelected">{word + " "}</span>
        }   
    })

    /*
        const renderWords = wordArray.map((word, index) => {
        if(selector !== index){
            if(selector > index && wordCorrect == false){
                return <span id={`wrong${index}`} style={{color: 'red'}} key={index} className="word">{word + " "}</span>
            }
            else if (selector > index && wordCorrect == true){
                return <span id={`correct${index}`} style={{color: 'green'}} key={index} className="word">{word + " "}</span>
            }
            else{
                return <span key={index} id={`${index}`}s className="word">{word + " "}</span>
            }
            
        }else {
            return <span id="wordSelected" key={index} style={{background: `${hlBackground}`}} className="wordSelected">{word + " "}</span>
        }   
    })
    */

    return(
        <div style={{marginTop: `${topDisplacement}px`}}>
            {renderWords}
        </div>
    )
}

export default Words