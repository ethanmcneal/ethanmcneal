
import hawaii from '../../images/hawaii.JPG'
import {
    SiBootstrap, SiCss3, SiGithub, SiHtml5, SiJavascript, SiPostgresql, SiRails, SiReact, SiRedux, SiSemanticweb, SiTypescript, SiVisualstudiocode
} from 'react-icons/si'
import {Popup} from 'semantic-ui-react'

const AboutMe = () => {


    return(
        <div>
            <div style={{display: 'flex', justifyContent: 'center'}}>
                <img src={hawaii} alt='zipline.png' style={{width: '500px', height: '300px', margin: '0 3em'}}/>
                    <div style={{margin: '0 3em 3em 0', fontSize: '22px', textAlign: 'left'}}>
                        {/* <h1 style={{margin: '0', textAlign: 'left'}}>Me:</h1> */}
                        <p style={{marginTop: '1.5em'}}>
                        Hey, I'm Ethan! I graduated from the University of Utah's Web Developer bootcamp in April 2021, and now on the hunt for employment. Please take the time to check out some of my projects and repos on Github! Currently, I am learning React Native, Redux, and mastering Javascript            
                        </p>                
                        
                    </div>
            </div>
            <div style={{display: 'flex', justifyContent: 'center', margin: '2em 16em', flexWrap: 'wrap'}}>
                <Popup className='icon-popup'
                content='JavaScript' 
                trigger={<SiJavascript size='3em' style={{margin: 'auto'}} 
                basic/>} />
                <Popup className='icon-popup'
                content='TypeScript' 
                trigger={<SiTypescript size='3em' style={{margin: 'auto'}} 
                basic/>}/>
                <Popup className='icon-popup'
                content='React' 
                trigger={<SiReact size='3em' style={{margin: 'auto'}} 
                basic/>}/>
                <Popup className='icon-popup'
                content='Redux' 
                trigger={<SiRedux size='3em' style={{margin: 'auto'}} 
                basic/>}/>
                <Popup className='icon-popup'
                content='Ruby on Rails' 
                trigger={<SiRails size='3em' style={{margin: 'auto'}} 
                basic/>}/>
                <Popup className='icon-popup'
                content='Semantic UI' 
                trigger={<SiSemanticweb size='3em' style={{margin: 'auto'}} 
                basic/>}/>
            </div>
            <div style={{display: 'flex', justifyContent: 'center', margin: '2em 16em', flexWrap: 'wrap'}}>
                <Popup className='icon-popup'
                content='BootStrap' 
                trigger={<SiBootstrap size='3em' style={{margin: 'auto'}} 
                basic/>}/>
                <Popup className='icon-popup'
                content='PostgreSQL' 
                trigger={<SiPostgresql size='3em' style={{margin: 'auto'}} 
                basic/>}/>
                <Popup className='icon-popup'
                content='Visual Studio Code' 
                trigger={<SiVisualstudiocode size='3em' style={{margin: 'auto'}} 
                basic/>}/>
                <Popup className='icon-popup'
                content='HTML5' 
                trigger={<SiHtml5 size='3em' style={{margin: 'auto'}} 
                basic/>}/>
                <Popup className='icon-popup'
                content='CSS3' 
                trigger={<SiCss3 size='3em' style={{margin: 'auto'}} 
                basic/>}/>
                <Popup className='icon-popup'
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