
import {VscGithubInverted} from 'react-icons/vsc'
import {FaLinkedin} from 'react-icons/fa'
import {IoIosArrowDropdownCircle, IoIosArrowDropupCircle} from 'react-icons/io'
import { useCallback, useEffect, useState } from 'react'
import EmailForm from './EmailForm'
import FadeIn from '../styleComponents/FadeIn'
import * as Scroll from 'react-scroll'
import { Popup } from 'semantic-ui-react'
import EmailFormComponent from '../components/EmailFormComponent'

const Footer = (props) => {
    return(
        
        <div style={{color: 'white', margin: '0', height: '100px', display: 'flex', justifyContent: 'space-between', maxWidth: window.innerWidth}}>
            <div style={{margin: '1em'}}>
                <a href={'https://www.linkedin.com/in/ethanmcneal/'} target={'_blank'} rel="noreferrer">
            <FaLinkedin size='2em' style={{margin: '.5em .8em'}}/>
                </a>
                <a href={'https://www.github.com/ethanmcneal/'} target={'_blank'} rel="noreferrer">
                <VscGithubInverted size='2em' />
                </a>
            </div>
            <div style={{margin: '0', textAlign: 'right'}}>
                
                <p style={{margin: '.5em 1em'}}>
                    Contact Me:
                </p>
            <p style={{margin: '0 1em'}}>801-502-3712</p>
            <p style={{margin: '0 1em'}}>ethan.mcneal@gmail.com</p>
            </div>
        </div>
    )
}

export default Footer