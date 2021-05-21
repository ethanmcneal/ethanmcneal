import kayak from '../images/kayak.jpg'
import code from '../images/code.jpg'
import linkedinpfp from '../images/linkedinpfp.jpg'
import '../stylesheets/home.css'
import Projects from './Projects'
import MobileProjects from './MobileProjects'
import AboutMe from './AboutMe'
import Footer from './Footer'
import * as Scroll from 'react-scroll'
import { Button } from 'bootstrap-react'
import MobileAboutMe from './MobileAboutMe'
import { useEffect } from 'react'


const Home = () => {
    var scroller = Scroll.animateScroll

    useEffect(()=> {
        scroller.scrollToTop()
    })

    var projectScrollPoint = (window.innerHeight + 50)
    var aboutMeScrollPoint = ((window.innerHeight * 2) + 75)
    return(
        <>
    <div style={{backgroundColor: 'rgb(25,53,81)'}}>
    
    <h1>Ethan McNeal</h1>
    {window.innerWidth <= 900 ? 
        <div className='mobile' style={{height: window.innerHeight}}>
            <img alt='ethan mcneal' src={linkedinpfp} />
            <Button onClick={()=>scroller.scrollTo(2225)}>About Me</Button>
            <Button onClick={scroller.scrollToBottom}>Get In Contact</Button>
            <Button onClick={()=>scroller.scrollTo(projectScrollPoint)}>My Projects</Button>
        </div> :
        
    <div className='image-container' style={{height: window.innerHeight}}>
        <div className='image-links'>
        <p onClick={()=>scroller.scrollTo(aboutMeScrollPoint)} >
        <h2 style={{position: 'absolute', top: '30%', left: '25%', zIndex:'3', color: 'white'}}>About Me</h2>
        <img alt='kayak.png' src={kayak} />
        </p>
        </div>
        <div className='image-links'>
            <p onClick={scroller.scrollToBottom}>
        <h2 style={{position: 'absolute', top: '30%',left: '22%', zIndex:'3', color: 'white'}}>Get in Contact</h2>
        <img alt='ethan mcneal' src={linkedinpfp} />
            </p>
        </div>
        
        <div className='image-links'>
        <p onClick={()=>scroller.scrollTo(projectScrollPoint)}>
        <h2 style={{position: 'absolute', top: '30%',left: '25%', zIndex:'3', color: 'white'}}>My Projects</h2>
        <img alt='code' src={code} />
        </p>
        </div> 
        
    </div> 
    }</div>
    <br /> 
    <h1>Projects</h1>
    {window.innerWidth <= 900 ? <MobileProjects /> : <Projects />}
    <div style={{backgroundColor: '#a33636'}}>
    <h1>About Me</h1>
    {window.innerWidth <= 900 ? <MobileAboutMe /> : <AboutMe />}
    </div>
    
    <Footer />
    
    </>)
}


export default Home