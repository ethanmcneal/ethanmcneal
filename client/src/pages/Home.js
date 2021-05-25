import kayak from '../images/kayak.jpg'
import code from '../images/code.jpg'
import linkedinpfp from '../images/linkedinpfp.jpg'
import '../stylesheets/home.css'
import Projects from './Projects'
import MobileProjects from './MobileProjects'
import AboutMe from './AboutMe'
import Footer from './Footer'
import * as Scroll from 'react-scroll'
import MobileAboutMe from './MobileAboutMe'
import { useEffect, useState }from 'react'
import FadeIn from '../styleComponents/FadeIn'

const Home = () => {
    
    var scroller = Scroll.animateScroll
    const [showForm, setShowForm] = useState(false)

    useEffect(()=> {
        scroller.scrollToTop()
    })

    var projectScrollPoint = (window.innerHeight + 100)
    var aboutMeScrollPoint = ((window.innerHeight * 2) + 125)

    const contactMeButton = () => {
        setShowForm(true)
        scroller.scrollToBottom()
    }
    return(
        <>
        <FadeIn>
    <div>
    
    <h1 style={{padding:'.5em'}}>Ethan McNeal</h1>
    {window.innerWidth <= 900 ? 
        <div className='mobile' style={{height: window.innerHeight}}>
            <img alt='ethan mcneal' src={linkedinpfp} />
            <p className='nav-links' onClick={()=>scroller.scrollTo(2225)}>About Me</p>
            <p className='nav-links' onClick={contactMeButton}>Get In Contact</p>
            <p className='nav-links' onClick={()=>scroller.scrollTo(projectScrollPoint)}>My Projects</p>
        </div> :
        
    <div className='image-container' style={{height: window.innerHeight}}>
        <div className='image-links'>
        <p onClick={()=>scroller.scrollTo(aboutMeScrollPoint)} >
        <h2 style={{top: '30%', left: '25%'}}>About Me</h2>
        <img alt='kayak.png' src={kayak} />
        </p>
        </div>
        <div className='image-links'>
            <p onClick={scroller.scrollToBottom}>
        <h2 style={{top: '30%',left: '22%'}}>Get in Contact</h2>
        <img alt='ethan mcneal' src={linkedinpfp} />
            </p>
        </div>
        
        <div className='image-links'>
        <p onClick={()=>scroller.scrollTo(projectScrollPoint)}>
        <h2 style={{top: '30%',left: '25%'}}>My Projects</h2>
        <img alt='code' src={code} />
        </p>
        </div> 
        
    </div> 
    }</div> 
    <div>
    <h1 style={{padding:'.7em'}}>Projects</h1>
    {window.innerWidth <= 900 ? <MobileProjects /> : <Projects />}
    <br />
    </div>
    <div >
    <h1 style={{padding:'.7em'}}>About Me</h1>
    {window.innerWidth <= 900 ? <MobileAboutMe /> : <AboutMe />}
    </div>
    
    <Footer showForm={showForm}/>
    </FadeIn>
    </>)
}


export default Home