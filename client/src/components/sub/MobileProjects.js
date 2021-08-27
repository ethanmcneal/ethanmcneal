import streaks from '../../images/1.png'
import { Button } from 'bootstrap-react'
import { Link } from 'react-router-dom'
import babyNames from '../../images/BNIcon-pink.png'
import MUSN from '../../images/musn-logo.png'
import ezshop from '../../images/ezshop.png'

const MobileProjects = () => {
    return(
    <>
        <div className='project-component-container'>
        <div className='mobile-projects-container' >
            <div className='mobile-project-container' style={{backgroundColor: '#539BF5',}}>
            <img src={babyNames} alt='musn logo' style={{margin: '2em 0', width: '250px'}}/>
                <h3 style={{color: 'white', margin: '0 .5em'}}>
                Baby Names is a mobile application made to help name your next baby! Fluid animations, optimized for speed and memory use, and customizable themes!
                </h3>
                <a href='https://github.com/ethanmcneal/baby-names' target='_blank' rel="noreferrer">
                <Button variant="Warning" style={{color: 'white',backgroundColor: '#F7B7E9', marginTop: '2em'}}>
                    Check it out!
                </Button>
                </a>
                
            </div>
            <div className='mobile-project-container' style={{backgroundColor: 'rgb(25 53 81)'}}>
                <img alt='streaks' style={{margin: '2em 0 0 0', width: '300px'}} src={streaks}/>
                <h3 style={{color: 'rgb(245 155 13)', margin: '-20px .8em 0'}}>
                    Streaks is an app deigned to put a fun, competitive spin on creating healthy habits with friends and family. 
                </h3>
                <Link to='/streaks'>
                <Button variant="Warning" style={{backgroundColor: 'rgb(245 155 13)', marginTop: '2em'}}>
                    Check it out!
                </Button>
                </Link>
            </div>
            <div className='mobile-project-container' style={{backgroundColor: 'rgb(34,34,34)'}}>
                <img src={MUSN} alt='musn logo' style={{margin: '2em 0', width: '300px'}}/>
                <h3 style={{color: 'white', margin: '0 .8em'}}>
                    MUSN is an app that won a hackathon at DevPoint Labs and was made in under 6 hours, it was created for users to be able to follow bands and share their favorite songs right on their profile. 
                </h3>
                <Link to='/musn'>
                <Button variant="Warning" style={{backgroundColor: '#B989F6', marginTop: '2em'}}>
                    Check it out!
                </Button>
                </Link>
            </div>
            <div className='mobile-project-container' style={{backgroundColor: '#161616'}}>
            <img alt='ez shop' src={ezshop} style={{margin: '2em 0', height: '35%'}}/>
                <h3 style={{color: '#94d6c3', margin: '0 1.3em'}}>
                    EZ shop is a mock e-commerce site built with React Native, it uses React Navigation and Redux to manage state.                
                </h3>
                <a href='https://github.com/ethanmcneal/EthansEzShop' target='_blank' rel="noreferrer">
                <Button variant="Warning" style={{backgroundColor: '#a5a1c9', marginTop: '2em', borderColor: '#a5a1c9'}}>
                    Check it out!
                </Button>
                </a>
                
            </div>
            
            {/* <div className='project-container' style={{backgroundColor: 'darkorchid'}}>
                <h2>WIP</h2>
            </div> */}
            
        </div>
        </div>
        <p style={{textAlign: 'center', margin:'-40px 0 0 0'}}>Swipe to view more</p>
        </>
    )
}
export default MobileProjects