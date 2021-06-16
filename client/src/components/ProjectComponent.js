import MobileProjects from "../pages/MobileProjects"
import Projects from "../pages/Projects"

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