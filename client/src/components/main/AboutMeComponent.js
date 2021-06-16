import AboutMe from "../sub/AboutMe"
import MobileAboutMe from "../sub/MobileAboutMe"

const AboutMeComponent = () => {
    return (
        <div>
		<h1 style={{ padding: ".7em" }}>About Me</h1>
		{window.innerWidth <= 900 ? <MobileAboutMe /> : <AboutMe />}
		</div>
    )
}

export default AboutMeComponent