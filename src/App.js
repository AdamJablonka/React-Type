import React from 'react'
import TypingTest from './components/TypingTest'
import { TypeAnimation } from 'react-type-animation';
import { ChakraProvider, Container, Flex, useColorMode, Heading, Button, useColorModeValue } from "@chakra-ui/react"

const App = () => {
  const { toggleColorMode } = useColorMode()
  const kbdBackground = useColorModeValue("gray.100", "gray.700")
  const hlBackground = useColorModeValue("#dddd", "#262b2e")

  return (
    <ChakraProvider>
      <Heading style={{ padding: '10px' }}>
        <TypeAnimation
          sequence={['eRactType', 500, 'ReatcyTpe', 250, 'React tyep', 250, 'ReactType', 250]}
          speed={50}
          repeat={0}
        />
      </Heading>
      <Flex direction="column" padding={1} alignItems="center" justifyContent="center">
          <Button colorScheme="blue" onClick={toggleColorMode}> ☀ </Button>
      </Flex>
      <Container centerContent maxW="750px" >
        <Flex marginTop={5}direction="column" padding={1} >
          <TypingTest kbdBackground={kbdBackground} hlBackground={hlBackground} />
        </Flex>
      </Container>
    </ChakraProvider>
  )
}

export default App