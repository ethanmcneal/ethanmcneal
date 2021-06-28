import {
    SiBootstrap, SiCss3, SiGithub, SiHtml5, SiJavascript, SiRails, SiReact, SiRuby, SiSemanticweb, SiVisualstudiocode
} from 'react-icons/si'

const MobileAboutMe = () => {
    return(
        <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center'}}>
            
            <p style={{margin: '1em', fontSize: '18px'}}>
            Hey, I'm Ethan! I graduated from the University of Utah's Web Developer bootcamp in April 2021, and now on the hunt for employment. Please take the time to check out some of my projects and repos on Github! Currently, I am learning React Native, Redux, and mastering Javascript            </p>                
            
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