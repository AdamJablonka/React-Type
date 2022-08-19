import React from 'react'
import { Text } from '@chakra-ui/react'

const Words = ( {wordArray} ) => {
    return(
        <div>
            <Text noOfLines={2} fontSize='20px' margin={1} align="center">
            {wordArray[0]} {wordArray[1]} {wordArray[2]} {wordArray[3]} {wordArray[4]} {wordArray[5]} {wordArray[6]} {wordArray[7]} {wordArray[8]} {wordArray[9]} {wordArray[10]} {wordArray[11]} {wordArray[12]} {wordArray[13]} {wordArray[14]} {wordArray[15]} {wordArray[16]}
            </Text>
        </div>
    )
}

export default Words
