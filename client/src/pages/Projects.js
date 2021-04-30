import streaks from '../images/1.png'

const Projects = () => {
    return(
        <div className='projects-container' >
            <div className='project-container' style={{backgroundColor: 'rgb(25 53 81)'}}>
                <img style={{margin: '0'}} src={streaks}/>
                <h2 style={{color: 'rgb(245 155 13)', margin: '-20px 1em 0'}}>Streaks is an app deigned to put a fun, competitive spin on creating healthy habits with friends and family. </h2>
            </div>
            <div className='project-container' style={{backgroundColor: 'rgb(34,34,34)'}}>
                <div style={{backgroundColor: 'rgb(55,90,127)', color: 'white', margin: '8em 4em', padding: '2em'}}>
                <h1 style={{fontSize: '2.5em'}}>MUSN</h1>
                </div>
                <h2 style={{color: 'white', margin: '0 1em'}}>MUSN is an app that won a hackathon at DevPoint Labs and was made in under 6 hours, it was created for users to be able to follow bands and share their favorite songs right on their profile. </h2>
            </div>
            {/* <div className='project-container' style={{backgroundColor: 'darkorchid'}}>
                <h2>WIP</h2>
            </div> */}
        </div>
    )
}
export default Projects