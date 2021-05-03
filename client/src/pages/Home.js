import kayak from '../images/kayak.jpg'
import code from '../images/code.jpg'
import linkedinpfp from '../images/linkedinpfp.jpg'
import '../stylesheets/home.css'
import Projects from './Projects'
import AboutMe from './AboutMe'
import Footer from './Footer'


const Home = () => (
    <>
    <h1>Ethan McNeal</h1>
    <div className='image-container'>
        <div>
        <a href='#about-me'>
        <h2 style={{position: 'absolute', top: '30%', left: '25%', zIndex:'3', color: 'white'}}>About Me</h2>
        <img src={kayak} />
        </a>
        
        </div>
        <div>
            <a href='#footer'>
        <h2 style={{position: 'absolute', top: '30%', left: '45%', zIndex:'3', color: 'white'}}>Get in Contact</h2>
        <img src={linkedinpfp} />
            </a>
        </div>
        
        <div>
        <a href='#projects'>
        <h2 style={{position: 'absolute', top: '30%', left: '66%', zIndex:'3', color: 'white'}}>My Projects</h2>
        <img src={code} />
        </a>
        </div> 
        
    </div>
    <br />
    <h1> <a name='projects'>Projects</a></h1>  
    <Projects />
    <h1> <a name='about-me'>About Me</a></h1>
    <AboutMe />
    <a name='footer'>
    <Footer />
    </a>
    </>
)

export default Home