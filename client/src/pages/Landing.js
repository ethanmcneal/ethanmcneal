
import { Link } from 'react-router-dom'
import landing from '../images/landing.jpg'
import FadeIn from '../styleComponents/FadeIn'

const Landing = () => {
    return(
        <FadeIn>
        <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', backgroundColor: 'white'}}>
            <div style={{textAlign: 'center', position: 'absolute', marginTop: '22%'}}>
            <Link to='/ethanmcneal' style={{color: '#363837'}} className='landing-link'>
            <h1 className='landing-name'>
            Ethan McNeal
            </h1>
            </Link>
            <h2>Full Stack Developer</h2>
            <h3 >| | React | | React Native | | Ruby on Rails | | SQL | |</h3>
            
            </div>
            <img src={landing} alt='montana mountains' style={{width: window.innerWidth, height: window.innerHeight, display: 'block', objectFit: 'cover'}}/>
            
        </div>
        </FadeIn>
    )
}

export default Landing