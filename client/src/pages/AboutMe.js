
import hawaii from '../images/hawaii.JPG'
import {
    SiBootstrap, SiCss3, SiGithub, SiHtml5, SiJavascript, SiJson, SiPostgresql, SiRails, SiReact, SiRuby, SiSemanticweb, SiVisualstudiocode
} from 'react-icons/si'
import {Popup} from 'semantic-ui-react'

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
                <Popup 
                content='JavaScript' 
                trigger={<SiJavascript size='3em' style={{margin: 'auto'}} 
                basic/>} />
                <Popup 
                content='React' 
                trigger={<SiReact size='3em' style={{margin: 'auto'}} 
                basic/>}/>
                <Popup 
                content='Ruby' 
                trigger={<SiRuby size='3em' style={{margin: 'auto'}} 
                basic/>}/>
                <Popup 
                content='Ruby on Rails' 
                trigger={<SiRails size='3em' style={{margin: 'auto'}} 
                basic/>}/>
                <Popup 
                content='JSON' 
                trigger={<SiJson size='3em' style={{margin: 'auto'}} 
                basic/>}/>
                <Popup 
                content='Semantic UI' 
                trigger={<SiSemanticweb size='3em' style={{margin: 'auto'}} 
                basic/>}/>
            </div>
            <div style={{display: 'flex', justifyContent: 'center', margin: '2em 16em', flexWrap: 'wrap'}}>
                <Popup 
                content='BootStrap' 
                trigger={<SiBootstrap size='3em' style={{margin: 'auto'}} 
                basic/>}/>
                <Popup 
                content='PostgreSQL' 
                trigger={<SiPostgresql size='3em' style={{margin: 'auto'}} 
                basic/>}/>
                <Popup 
                content='Visual Studio Code' 
                trigger={<SiVisualstudiocode size='3em' style={{margin: 'auto'}} 
                basic/>}/>
                <Popup 
                content='HTML5' 
                trigger={<SiHtml5 size='3em' style={{margin: 'auto'}} 
                basic/>}/>
                <Popup 
                content='CSS3' 
                trigger={<SiCss3 size='3em' style={{margin: 'auto'}} 
                basic/>}/>
                <Popup 
                content='GitHub' 
                trigger={<SiGithub size='3em' style={{margin: 'auto'}} 
                basic/>}/>
            </div>

            
            <br />
            <br />
        </div>
    )
}
export default AboutMe