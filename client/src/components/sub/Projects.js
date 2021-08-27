import React, { Component, createRef } from 'react'
import streaks from '../../images/1.png'
import babyNames from '../../images/BNIcon-blue.png'
import ezshop from '../../images/ezshop.png'
import { Button } from 'bootstrap-react'
import { TiChevronRightOutline, TiChevronLeftOutline } from 'react-icons/ti'

class Projects extends Component {

    constructor(props) {
        super(props)

        this.navRef = createRef()
    }
    

    handleNav = (direction) => {
        if (direction === 'left' && this.navRef){
            (this.navRef.current.scrollLeft -= 500)
        } else if(direction === 'right' && this.navRef) {
            (this.navRef.current.scrollLeft += 500)
        } else {
            return null
        }
    }
    render() {
    return(
        <div className='project-component-container'>
        <div className='nav-button' id='left' onClick={() => this.handleNav('left')}>
        <TiChevronLeftOutline size={40} />
        </div>

        <div className='projects-container' ref={this.navRef}>
            <div className='project-container' style={{backgroundColor: 'rgb(25 53 81)'}}>
                <img alt='streaks' style={{margin: '0'}} src={streaks}/>
                <h3 style={{color: 'rgb(245 155 13)', margin: '-20px 1em 0'}}>
                    Streaks is an app deigned to put a fun, competitive spin on creating healthy habits with friends and family. 
                </h3>
                <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-evenly'}}>
                <a href='https://github.com/ethanmcneal/streaks' target='_blank' rel="noreferrer">
                <Button variant="Warning" style={{backgroundColor: 'rgb(245 155 13)', marginTop: '2em'}}>
                    Check it out!
                </Button>
                </a>
                <a href='https://streaks-app.herokuapp.com/' target='_blank' rel="noreferrer">
                <Button variant="Warning" style={{backgroundColor: 'rgb(245 155 13)', marginTop: '2em'}}>
                    Live site!
                </Button>
                </a>
                </div>
            </div>
            <div className='project-container' style={{backgroundColor: 'rgb(34,34,34)'}}>
                <div style={{backgroundColor: 'rgb(55,90,127)', color: 'white', margin: '8em 4em', padding: '2em'}}>
                <h1 style={{fontSize: '2.5em'}}>MUSN</h1>
                </div>
                <h3 style={{color: 'white', margin: '0 1em'}}>
                    MUSN is an app that won a hackathon at DevPoint Labs and was made in under 6 hours, it was created for users to be able to follow bands and share their favorite songs right on their profile. 
                </h3>
                <a href='https://github.com/tvonhake/Musn' target='_blank' rel="noreferrer">
                <Button variant="Warning" style={{backgroundColor: 'rgb(55,90,127)', marginTop: '2em'}}>
                    Check it out!
                </Button>
                </a>
            </div>
            <div className='project-container' style={{backgroundColor: '#151515', border: '2px solid black'}}>
                <img alt='ez shop' src={ezshop} style={{margin: '2em 0', height: '55%'}}/>
                <h3 style={{color: '#94d6c3', margin: '0 1.3em'}}>
                    EZ shop is a mock e-commerce site built with React Native, it uses React Navigation and Redux to manage state.                
                </h3>
                <a href='https://github.com/ethanmcneal/EthansEzShop' target='_blank' rel="noreferrer">
                <Button variant="Warning" style={{backgroundColor: '#a5a1c9', marginTop: '2em', borderColor: '#a5a1c9'}}>
                    Check it out!
                </Button>
                </a>
                
            </div>
            <div className='project-container' style={{backgroundColor: 'white', border: '2px solid black'}}>
                <img alt='baby-names logo' style={{margin: '0'}} src={babyNames}/>
                <h3 style={{color: 'black', margin: '0 1em'}}>
                            This project is a work in progress and this card will be updated when I am ready to share it        
                </h3>
                
            </div>
            {/* <div className='project-container' style={{backgroundColor: 'darkorchid'}}>
                <h3>WIP</h3>
            </div> */}
        </div>
        <div className='nav-button' id='right' onClick={() => this.handleNav('right')}>
        <TiChevronRightOutline size={40}/>
        </div>

        </div>
    )}
}
export default Projects