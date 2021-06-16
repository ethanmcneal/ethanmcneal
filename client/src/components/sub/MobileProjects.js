import streaks from '../../images/1.png'
import { Button } from 'bootstrap-react'
import { Link } from 'react-router-dom'

const MobileProjects = () => {
    return(
        <>
        <div className='projects-container' >
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
                <div style={{backgroundColor: 'rgb(55,90,127)', color: 'white', margin: '3em 4em', padding: '2em'}}>
                <h1 style={{fontSize: '2.5em'}}>MUSN</h1>
                </div>
                <h3 style={{color: 'white', margin: '0 .8em'}}>
                    MUSN is an app that won a hackathon at DevPoint Labs and was made in under 6 hours, it was created for users to be able to follow bands and share their favorite songs right on their profile. 
                </h3>
                <Link to='/musn'>
                <Button variant="Warning" style={{backgroundColor: 'rgb(55,90,127)', marginTop: '2em'}}>
                    Check it out!
                </Button>
                </Link>
            </div>
            <div className='mobile-project-container' style={{backgroundColor: 'white', border: '2px solid black'}}>
                <div style={{backgroundColor: 'black', color: 'white', margin: '8em 4em', padding: '2em'}}>
                <h1 style={{fontSize: '2.5em'}}>WIP</h1>
                </div>
                <h3 style={{color: 'black', margin: '0 1em'}}>
                            This project is a work in progress and this card will be updated when I am ready to share it        
                </h3>
                
            </div>
            <div className='mobile-project-container' style={{backgroundColor: 'white', border: '2px solid black'}}>
                <div style={{backgroundColor: 'black', color: 'white', margin: '8em 4em', padding: '2em'}}>
                <h1 style={{fontSize: '2.5em'}}>WIP</h1>
                </div>
                <h3 style={{color: 'black', margin: '0 1em'}}>
                            This project is a work in progress and this card will be updated when I am ready to share it        
                </h3>
                
            </div>
            
            {/* <div className='project-container' style={{backgroundColor: 'darkorchid'}}>
                <h2>WIP</h2>
            </div> */}
            
        </div>
        <p style={{textAlign: 'center', margin:'-40px 0 0 0'}}>Swipe to view more</p>
        </>
    )
}
export default MobileProjects