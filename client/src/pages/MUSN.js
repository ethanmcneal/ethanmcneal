
import { Button } from 'bootstrap-react'
import { Link } from 'react-router-dom'
import { useEffect } from 'react'
import * as Scroll from 'react-scroll'
import FooterComponent from '../components/main/FooterComponent'

const MUSN = () => {
    var scroller = Scroll.animateScroll

 useEffect(()=> {
    scroller.scrollToTop()
 })
    return(
        <>
        <div className='main2'>
        {/* <h1>Streaks</h1> */}
        {window.innerWidth < 900 &&
        <>
        <div style={{ backgroundColor: '#375A7F', margin: '5em 2em', padding: '3em 2em', width: window.innerWidth < 900 ? window.innerWidth : '400px'}}>
        <h1>MUSN</h1>
        </div>
        <div className='content2'>
        <a href='https://github.com/Derek229/Musn' target='_blank' rel="noreferrer"> 
       <Button variant="Warning">Original Github</Button>
       </a>
       <a href='https://github.com/tvonhake/Musn' target='_blank' rel="noreferrer">
       <Button>Forked Github</Button>
       
       </a>
       <Link to='/ethanmcneal'>
       <Button>Back to Homepage</Button>
       </Link>
       </div>
       </>
       }
        <div className='content2'>
            <div className='info-card2' style={{width: window.innerWidth < 900 && window.innerWidth}}>
                <h1>What is MUSN?</h1>
                MUSN was a project I worked on with a team of 4 for the second Hackathon in my full-time Web Development cohort at the University of utah, we were given a simple prompt: "any app you can think of with atleast one joined table and some sort of context provider" We decided to make a simple app using two joined table, one for users and songs names favorites, and one for users and bands named follows. On the app there are a few main pages, your own dashboard that shows all the bands you follow, and all the songs you favorite. you can view other users dashboards and it shows you their favorites and follows as well. then there is the normal crud for bands and songs. This project won the hackathon and my group is very proud of what we achieved in 6 hours 
            </div>
            <div>
            {window.innerWidth > 900 && 
            <>
            <div style={{width: '400px', backgroundColor: '#375A7F', margin: '5em 2em', padding: '3em 2em'}}>
                <h1>MUSN</h1>
            </div> 
            <div className='content2'>
             <a href='https://github.com/Derek229/Musn' target='_blank' rel="noreferrer"> 
            <Button variant="Warning">Original Github</Button>
            </a>
            <a href='https://github.com/tvonhake/Musn' target='_blank' rel="noreferrer">
            <Button>Forked Github</Button>
            
            </a>
            <Link to='/ethanmcneal'>
            <Button>Back to Homepage</Button>
            </Link>
            </div> 
            </>}
            {/* <Button>Github #1</Button> */}
        </div> 
            <div className='info-card2' style={{width: window.innerWidth < 900 && window.innerWidth}}>
                <h1>My work on MUSN</h1>
                MUSN is the project that really evolved my understanding of SQL, going in we had just as a class learned what a joined table was, and how to set up custom SQL routes using joined tables. With it being so fresh not many people quite had a handle on it yet. I am confident in my ability to learn quick, and to perform well in high pressure situation, so I took on the role of backend this project. I am very proud of how I performed. I was able to get all the back end working very quickly, and moved on to utilizing what I set up to quickly do the front end for the joined tables, allowing users to favorite/follow and have it render that on their pages. We were going to take a stab at the spotify API to get some bonus points, but decided there was not enough time. So I ended up using the 8 digit YouTube url codes on songs to create links to the music, and to render a thumbnail.  
            </div>
        </div>
        </div>
    
        <FooterComponent />
        </>
    )
}

export default MUSN