import React from 'react'
import TypingTest from './components/TypingTest'
import { ChakraProvider, Container, Flex, useColorMode, Heading, Button, Kbd, useColorModeValue } from "@chakra-ui/react"

const App = () => {
  const { toggleColorMode } = useColorMode()
  const kbdBackground = useColorModeValue("gray.100", "greay.700")
  return (
    <ChakraProvider>
      <Heading as="h1" noOfLines={1} padding={4}>react-type <sub><i>alpha</i></sub></Heading>
      <Container centerContent maxW="750px" >
        <Flex marginTop={5}direction="column" padding={1} >
          <TypingTest />
        </Flex>
        <Flex margin={5}>
          <span>
            <Kbd background={kbdBackground}>tab</Kbd> + <Kbd background={kbdBackground}>enter</Kbd> - restart test when typing
          </span>
        </Flex>
        <Flex direction="column" padding={1} alignItems="center" justifyContent="center">
          <Button colorScheme="blue" onClick={toggleColorMode}>Toggle Color Mode</Button>
        </Flex>
      </Container>
    </ChakraProvider>
  )
}

export default App