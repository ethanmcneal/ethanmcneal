import LinkedInLogo from '../images/LinkedIn.png'
import githubLogo from '../images/github.png'
import * as Scroll from 'react-scroll'

const Footer = () => {

    var scroll = Scroll.animateScroll;
    return(
        <div style={{backgroundColor: 'rgb(34,34,34)', color: 'white', margin: '0', height: '100px', display: 'flex', justifyContent: 'space-between'}}>
            <div style={{margin: '1em'}}>
                <a href={'https://www.linkedin.com/in/ethanmcneal/'} target={'_blank'}>
            <img src={LinkedInLogo} alt='linked in' style={{width: '25px', height: '25px', margin: '1em .5em'}}/>
                </a>
                <a href={'https://www.github.com/ethanmcneal/'} target={'_blank'}>
            <img src={githubLogo} style={{height: '25px', margin: '1em .5em'}}/>
                </a>
            </div>
            <div>
             <p>Ethan McNeal</p>
             <p onClick={scroll.scrollToTop}>Scroll to top</p>
             </div>
            <div style={{margin: '0'}}>
                
                <p>
                    Contact Me:
                </p>
            <p style={{margin: '0'}}>801-502-3712</p>
            <p style={{margin: '0'}}>ethan.mcneal@gmail.com</p>
            </div>
        </div>
    )
}

export default Footer