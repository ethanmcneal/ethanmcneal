import {
    SiBootstrap, SiCss3, SiGithub, SiHtml5, SiJavascript, SiRails, SiReact, SiRuby, SiSemanticweb, SiVisualstudiocode
} from 'react-icons/si'

const MobileAboutMe = () => {
    return(
        <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center'}}>
            
            <p style={{margin: '1em', fontSize: '18px'}}>My name is Ethan McNeal, I have recently finished studying full stack development at the University of Utah's full stack web development cohort. Going in I had intentions to become a fully backend developer, using ruby and ruby on rails, but during the course I fell in love with the React frame work and decided that a front end job using react is what I really want to do. I am curious about cloud computing and testing automation as well. but for now I am diligently studying and polishing my React/JavaScript skills in hopes to find a job. </p>                
            
            <div style={{display: 'flex', justifyContent: 'center', margin: '2em 1em 0 1em', flexWrap: 'wrap'}}>
                <SiJavascript size='3em' style={{margin: '0 .6em'}}/>
                <SiReact size='3em' style={{margin: '0 .6em'}}/>
                <SiRuby size='3em' style={{margin: '0 .6em'}}/>
                <SiRails size='3em' style={{margin: '0 .6em'}}/>
                {/* <SiJson size='3em' style={{margin: 'auto'}}/> */}
                <SiSemanticweb size='3em' style={{margin: '0 .6em'}}/>
            </div>
            <div style={{display: 'flex', justifyContent: 'center', margin: '2em 0', flexWrap: 'wrap'}}>
                <SiBootstrap size='3em' style={{margin: '0 .6em'}}/>
                {/* <SiMicrosoftexcel size='3em' style={{margin: 'auto'}}/> */}
                <SiVisualstudiocode size='3em' style={{margin: '0 .6em'}}/>
                <SiHtml5 size='3em' style={{margin: '0 .6em'}}/>
                <SiCss3 size='3em' style={{margin: '0 .6em'}}/>
                <SiGithub size='3em' style={{margin: '0 .6em'}}/>
            </div>
        </div>
    )
}


export default MobileAboutMe