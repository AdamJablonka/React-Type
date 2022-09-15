import React from 'react'
import { Flex, Button } from '@chakra-ui/react'
import { DiGithubBadge } from 'react-icons/di'
import { TiSocialLinkedinCircular } from 'react-icons/ti'
import { TbCode } from 'react-icons/tb'

const Footer = () => {
    return(
        <div className="footer" style={{backgroundColor: 'white', width: '100%', position: 'fixed', bottom: '0', height: '100px'}}>
            <Flex style={ {justifyContent: 'center', position: 'relative', }}>
                <a href={'https://www.linkedin.com/in/adam-jablonka-0906b2136/'}>
                    <Button className="linkedInIcon" style={{ fontSize: '1em', display: 'flex', backgroundColor: 'white' }}><TiSocialLinkedinCircular/> LinkedIn</Button>
                </a>
                <a href={'https://github.com/AdamJablonka'}>
                    <Button className="githubSymbol" style={{ fontSize: '1em', display: 'flex', backgroundColor: 'white' }}><DiGithubBadge/> Github</Button>
                </a>
                <a href={'https://github.com/AdamJablonka/React-Type'}>
                    <Button className="githubSymbol" style={{ fontSize: '1em', display: 'flex', backgroundColor: 'white' }}><TbCode/> Source</Button>
                </a>
            </Flex>
        </div>
    )
}

export default Footer