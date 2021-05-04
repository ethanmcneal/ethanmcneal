
import '../stylesheets/streaks.css'
import logo from '../images/1.png'
import { Button } from 'bootstrap-react'
import Footer from './Footer'
import { Link } from 'react-router-dom'

const Streaks = () => {
    return(
        <>
        <div className='main'>
        {/* <h1>Streaks</h1> */}
        <div className='content'>
            <div className='info-card'>
                <h1>What is Streaks?</h1>
                Streaks was my final project at the University of Utah's full time web development cohort. My team was assigned this project with a pretty open prompt along the lines of "Create an app where users can compete with their friends in competitions, the losers have to submit proof of punishment and the winners get some kind of reward". Going in we spent a lot of time planning what this would look like, and how it would work. This is what we came up with: A user would register and be prompted to create or join some streaks, upon creating a streak the creator choses when that streak starts, and once it starts it becomes un-joinable. The last man standing is declared the winner, and the losers have to submit media proof of punishment for all to see. Users can also leave comments and update their information  
            </div>
            <div>
            <img src={logo} />
            <div className='content'>
             <a href='https://github.com/ethanmcneal/streaks' target='_blank'>
            <Button>Github</Button>
            </a>
            <a href='https://streaks-app.herokuapp.com/' target='_blank'>
            <Button>Site</Button>
            
            </a>
            <Link to='/'>
            <Button>Back to Home</Button>
            </Link>
            </div>
            {/* <Button>Github #1</Button> */}
        </div>
            <div className='info-card'>
                <h1>My work on Streaks</h1>
                In Streaks, I worked as a full stack developer among a team of 4, the main parts of the project I worked on are the custom SQL routes in the back end for the joined table connecting users and streaks together, named "user-streaks", I also worked on the front end with this joined table, using the data from it to create the user's dashboard which display's their streaks, and the Streak show page which displays all the users participating in that streak. I also wrote all the logic using the "status" row on the user-streaks joined table, and the "timeframe" row on the streaks table this was how we determined if the streak was upcoming, ongoing, or if a user had quit/won the streak.  
            </div>
        </div>
        
        <br/> <br /> <br /> <br /> <br />
        </div>
    
        <Footer />
        </>
    )
}

export default Streaks