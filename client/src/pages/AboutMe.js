import { useState } from "react"

const AboutMe = () => {

    const [showSkills, setShowSkills] = useState(false)
    const [showHobbies, setShowHobbies] = useState(false)
    const [showDevelopment, setShowDevelopment] = useState(false)


    return(
        <div style={{display: 'flex', justifyContent: 'center'}}>
            <div>
                <h1>Skills</h1>
            </div>
            <div>
                <h1>Hobbies</h1>
            </div>
            <div>
                <h1>Development</h1>
            </div>

        </div>
    )
}
export default AboutMe