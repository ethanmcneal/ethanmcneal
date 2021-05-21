import landing from '../images/landing.jpg'

const Landing = () => {
    return(
        <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
            <div style={{textAlign: 'center', position: 'absolute', marginTop: '22%'}}>
            <h1 style={{color: '#363837', fontSize:'70px'}}>
            Ethan McNeal
            </h1>
            </div>
            <img src={landing} alt='landing image' style={{width: window.innerWidth, height: window.innerHeight}}/>
            
        </div>
    )
}

export default Landing