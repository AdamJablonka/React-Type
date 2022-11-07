import React from 'react'
import TypingTest from './components/TypingTest'
import { ChakraProvider, Container, Flex, useColorMode, Heading, Button, useColorModeValue } from "@chakra-ui/react"
import Navbar from './components/Navbar'
import Footer from './components/Footer'

const App = () => {
  const kbdBackground = useColorModeValue("gray.100", "gray.700")
  const hlBackground = useColorModeValue("#dddd", "#262b2e")

  return (
    <ChakraProvider>
      <Navbar />
      <Container style={{ alignItems: 'center', justifyContent: 'center', marginTop: '20vh' }} maxW="750px" >
        <Flex marginTop={5}direction="column" padding={1}  >
          <TypingTest kbdBackground={kbdBackground} hlBackground={hlBackground} />
        </Flex>
      </Container>
      <Footer />
    </ChakraProvider>
  )
}

export default App