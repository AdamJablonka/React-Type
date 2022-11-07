import React from 'react'
import { TypeAnimation } from 'react-type-animation';
import { Button } from '@chakra-ui/react';
import { FiSun, FiInfo } from 'react-icons/fi'
import { DiReact } from 'react-icons/di'
import { BsKeyboard } from 'react-icons/bs'

const Navbar = () => {
    return (
        <div className="header">
            <a href='https://adamjablonka.github.io/React-Type/'>
                <TypeAnimation
                        className = "animationHeader"
                        sequence={['eracttype', 500, 'reatcytpe', 250, 'reacTyep', 250, 'react-type', 250]}
                        speed={50}
                        repeat={0}
                        style={ { float: 'left', width: '175px', fontSize: '37.5px', marginLeft: '5px'} }
                    />
            </a>
            <a href="https://adamjablonka.github.io/Keyboard-Layouts-Blogpost/">
                <Button className="icon" style={{ float: 'left', marginTop: '10px', background: 'white', fontSize: '2em', cursor: 'pointer'}}> <BsKeyboard/> </Button>
            </a>
            <a href="https://reactjs.org/">
                <Button className="reactIcon" style={{ float: 'left', marginTop: '10px', background: 'white', fontSize: '2em', cursor: 'pointer'}}> <DiReact/> </Button>
            </a>           
            <a href="https://github.com/AdamJablonka/React-Type/blob/main/README.md">
                <Button className="infoButton" style={{ float: 'right', marginTop: '10px', background: 'white', fontSize: '1.5em'}}> <FiInfo/> </Button>
            </a>
        </div>
    )
}

export default Navbar