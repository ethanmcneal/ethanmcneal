import kayak from '../images/kayak.jpg'
import code from '../images/code.jpg'
import linkedinpfp from '../images/linkedinpfp.jpg'
import '../stylesheets/home.css'
import Projects from './Projects'
import AboutMe from './AboutMe'


const Home = () => (
    <>
    <h1>Ethan McNeal</h1>
    <div className='image-container'>
        <div>
        <h2 style={{position: 'absolute', top: '30%', left: '25%', zIndex:'3', color: 'white'}}>About Me</h2>
        <img src={kayak} />
        </div>
        <div>
        <h2 style={{position: 'absolute', top: '30%', left: '45%', zIndex:'3', color: 'white'}}>Get in Contact</h2>
        <img src={linkedinpfp} />
        </div>
        <div>
        <h2 style={{position: 'absolute', top: '30%', left: '66%', zIndex:'3', color: 'white'}}>My Projects</h2>
        <img src={code} />
        </div> 
    </div>
    <br />
    <h1>Projects</h1>  
    <Projects />
    <h1>About Me</h1>
    <AboutMe />
    </>
)

export default Home