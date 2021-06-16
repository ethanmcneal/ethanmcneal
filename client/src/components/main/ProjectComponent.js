import MobileProjects from "../sub/MobileProjects"
import Projects from "../sub/Projects"


const ProjectComponent = () => {
    return (
    <div>
        <h1 style={{ padding: ".7em" }}>Projects</h1>
        {window.innerWidth <= 900 ? (
            <MobileProjects />
        ) : (
            <Projects />
        )}
        <br />
    </div>)
}

export default ProjectComponent