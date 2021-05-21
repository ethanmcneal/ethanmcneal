
import hawaii from '../images/hawaii.JPG'
import {
    SiBootstrap, SiCss3, SiGithub, SiHtml5, SiJavascript, SiJson, SiMicrosoftexcel, SiRails, SiReact, SiRuby, SiSemanticweb, SiVisualstudiocode
} from 'react-icons/si'

const AboutMe = () => {


    return(
        <div>
            <div style={{display: 'flex', justifyContent: 'center'}}>
                <img src={hawaii} alt='zipline.png' style={{width: '500px', height: '300px', margin: '0 3em'}}/>
                    <div style={{margin: '0 3em 3em 0', fontSize: '22px', textAlign: 'left'}}>
                        {/* <h1 style={{margin: '0', textAlign: 'left'}}>Me:</h1> */}
                        <p style={{marginTop: '1.5em'}}>My name is Ethan McNeal, I studied full stack development at the University of Utah's full stack web development cohort. Going in I had intentions to become a fully backend developer, using ruby and ruby on rails, but during the course I fell in love with the React frame work and decided that a front end job using react is what I really want to do. I am curious about cloud computing and testing automation as well. but for now I am diligently studying and polishing my React/JavaScript skills. </p>
                    </div>
            </div>
            <div style={{display: 'flex', justifyContent: 'center', margin: '2em 16em', flexWrap: 'wrap'}}>
                <SiJavascript size='3em' style={{margin: 'auto'}}/>
                <SiReact size='3em' style={{margin: 'auto'}}/>
                <SiRuby size='3em' style={{margin: 'auto'}}/>
                <SiRails size='3em' style={{margin: 'auto'}}/>
                <SiJson size='3em' style={{margin: 'auto'}}/>
                <SiSemanticweb size='3em' style={{margin: 'auto'}}/>
            </div>
            <div style={{display: 'flex', justifyContent: 'center', margin: '2em 16em', flexWrap: 'wrap'}}>
                <SiBootstrap size='3em' style={{margin: 'auto'}}/>
                <SiMicrosoftexcel size='3em' style={{margin: 'auto'}}/>
                <SiVisualstudiocode size='3em' style={{margin: 'auto'}}/>
                <SiHtml5 size='3em' style={{margin: 'auto'}}/>
                <SiCss3 size='3em' style={{margin: 'auto'}}/>
                <SiGithub size='3em' style={{margin: 'auto'}}/>
            </div>

            
            <br />
            <br />
        </div>
    )
}
export default AboutMe