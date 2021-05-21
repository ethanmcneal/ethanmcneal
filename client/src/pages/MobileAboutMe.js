import hawaii from '../images/hawaii.JPG'
import code from '../images/code.jpg'

const MobileAboutMe = () => {
    return(
        <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
            
            <div className='mobile-project-container' style={{margin:'0', backgroundColor: '#3C4650', color: 'white', width: window.innerWidth}}>
            <h1 style={{margin: '0'}}>My Stack</h1>
            <img src={code} alt='code.png' style={{width: window.innerWidth, height: '175px'}}/>
            <p style={{margin: '1em'}}>My name is Ethan McNeal, I have recently finished studying full stack development at the University of Utah's full stack web development cohort. Going in I had intentions to become a fully backend developer, using ruby and ruby on rails, but during the course I fell in love with the React frame work and decided that a front end job using react is what I really want to do. I am curious about cloud computing and testing automation as well. but for now I am diligently studying and polishing my React/JavaScript skills in hopes to find a job. </p>                
            </div>

            <div className='mobile-project-container' style={{margin:'0', backgroundColor: '#EF4941', color: 'white', width: window.innerWidth}}>
            <h1 style={{margin: '0'}}>Hobbies</h1>
            <img src={hawaii} alt='zipline.png' style={{width: window.innerWidth}}/>
            <p style={{margin: '1em'}}>I was raised in the outdoors, my first memories are of me with a fishing rod in my hand, I love the rocky mountain region, Montana and Utah in particular, other than that I play guitar and in my free time I play PC games. </p>                
            </div>
        </div>
    )
}


export default MobileAboutMe