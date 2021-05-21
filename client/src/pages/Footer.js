
import {VscGithubInverted} from 'react-icons/vsc'
import {FaLinkedin} from 'react-icons/fa'

const Footer = () => {
    return(
        <div style={{backgroundColor: 'rgb(34,34,34)', color: 'white', margin: '0', height: '100px', display: 'flex', justifyContent: 'space-between', maxWidth: window.innerWidth}}>
            <div style={{margin: '1em'}}>
                <a href={'https://www.linkedin.com/in/ethanmcneal/'} target={'_blank'} rel="noreferrer">
            <FaLinkedin size='2em' style={{margin: '.5em .8em'}}/>
                </a>
                <a href={'https://www.github.com/ethanmcneal/'} target={'_blank'} rel="noreferrer">
                <VscGithubInverted size='2em' />
                </a>
            </div>
            <div style={{margin: '0'}}>
                
                <p style={{margin: '0'}}>
                    Contact Me:
                </p>
            <p style={{margin: '0 1.5em'}}>801-502-3712</p>
            <p style={{margin: '0 1.5em'}}>ethan.mcneal@gmail.com</p>
            </div>
        </div>
    )
}

export default Footer