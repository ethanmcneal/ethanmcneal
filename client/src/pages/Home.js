import kayak from '../images/kayak.jpg'
import code from '../images/code.jpg'
import linkedinpfp from '../images/linkedinpfp.jpg'
import '../stylesheets/home.css'
import Projects from './Projects'
import AboutMe from './AboutMe'
import Footer from './Footer'
import * as Scroll from 'react-scroll'


const Home = () => {
    var scroller = Scroll.animateScroll
    return(
    <>
    <h1>Ethan McNeal</h1>
    <div className='image-container'>
        <div className='image-links'>
        <p onClick={()=>scroller.scrollTo(1600)} >
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
        <p onClick={()=>scroller.scrollTo(750)}>
        <h2 style={{position: 'absolute', top: '30%',left: '25%', zIndex:'3', color: 'white'}}>My Projects</h2>
        <img alt='code' src={code} />
        </p>
        </div> 
        
    </div>
    <br />
    <h1> Projects</h1>  
    <Projects />
    <h1>About Me</h1>
    <AboutMe />
    
    <Footer />
    
    </>)
}


export default Home