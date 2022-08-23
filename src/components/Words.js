import React from 'react'
import { Text } from '@chakra-ui/react'

const Words = ( {wordArray} ) => {
    const renderWords = wordArray.map((word) => <span class="word">{word + " "}</span>)
    return(
        <div >
            {renderWords}
        </div>
    )
}

export default Words
