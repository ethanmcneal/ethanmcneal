
import {VscGithubInverted} from 'react-icons/vsc'
import {FaLinkedin} from 'react-icons/fa'
import {IoIosArrowDropdownCircle, IoIosArrowDropupCircle} from 'react-icons/io'
import { useState } from 'react'
import EmailForm from './EmailForm'
import FadeIn from '../styleComponents/FadeIn'
import * as Scroll from 'react-scroll'
import { Popup } from 'semantic-ui-react'

const Footer = (props) => {
    const {showForm} = props
    const [showContactForm, setShowContactForm] = useState(showForm ? true : false)

    var scroller = Scroll.animateScroll

    const openContactAnimation = () => {
        setShowContactForm(true)
        scroller.scrollToBottom()
    }

    return(
        <div style={{backgroundColor: 'rgb(34,34,34)'}}>
        <div style={{color: 'white', margin: '0', height: '100px', display: 'flex', justifyContent: 'space-between', maxWidth: window.innerWidth}}>
            <div style={{margin: '1em'}}>
                <a href={'https://www.linkedin.com/in/ethanmcneal/'} target={'_blank'} rel="noreferrer">
            <FaLinkedin size='2em' style={{margin: '.5em .8em'}}/>
                </a>
                <a href={'https://www.github.com/ethanmcneal/'} target={'_blank'} rel="noreferrer">
                <VscGithubInverted size='2em' />
                </a>
            </div>
            {window.innerWidth > 800 && <div style={{margin: '3em 0 0 7em'}}>
                { !showContactForm ? 
                <Popup content = 'Click me!' style={{color: 'white'}}
                trigger={<IoIosArrowDropdownCircle onClick={openContactAnimation}size='2em' style={{cursor: 'pointer'}}/>} />
        :  <IoIosArrowDropupCircle onClick={()=>setShowContactForm(false)}size='2em' style={{cursor: 'pointer'}}/>}

            </div>}
            <div style={{margin: '0', textAlign: 'right'}}>
                
                <p style={{margin: '.5em 1em'}}>
                    Contact Me:
                </p>
            <p style={{margin: '0 1em'}}>801-502-3712</p>
            <p style={{margin: '0 1em'}}>ethan.mcneal@gmail.com</p>
            </div>
        </div>
        {showContactForm && 
            <FadeIn>
                <div className='form-container'>
                    <EmailForm />
                </div>
            </FadeIn>}
        {window.innerWidth < 800 &&
        <div style={{textAlign: 'center'}}>
        {!showContactForm 
        ? <IoIosArrowDropdownCircle onClick={openContactAnimation}size='2em'/>
        : <IoIosArrowDropupCircle onClick={()=>setShowContactForm(false)}size='2em'/>}
        </div>}
    </div>
    )
}

export default Footer