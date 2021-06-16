import kayak from "../images/kayak.jpg";
import code from "../images/code.jpg";
import linkedinpfp from "../images/linkedinpfp.jpg";
import * as Scroll from "react-scroll";

const NavCards = (props) => {

    var scroller = Scroll.animateScroll;
    var projectScrollPoint = window.innerHeight + 100;
	var aboutMeScrollPoint = window.innerHeight * 2 + 125;

    const Content = () => {
        if(window.innerWidth <= 900){
            return (
                <div
					className="mobile"
					style={{ height: window.innerHeight }}
						>
							<img alt="ethan mcneal" src={linkedinpfp} />
							<p
								className="nav-links"
								onClick={() => scroller.scrollTo(2225)}
							>
								About Me
							</p>
							<p
								className="nav-links"
								onClick={props.openContactAnimation}
							>
								Get In Contact
							</p>
							<p
								className="nav-links"
								onClick={() =>
									scroller.scrollTo(projectScrollPoint)
								}
							>
								My Projects
							</p>
						</div>
            )
        } else {
            return <div
            className="image-container"
            style={{ height: window.innerHeight }}
        >
            <div className="image-links">
                <p
                    onClick={() =>
                        scroller.scrollTo(aboutMeScrollPoint)
                    }
                >
                    <h2 style={{ top: "30%", left: "25%" }}>
                        About Me
                    </h2>
                    <img
                        alt="kayak.png"
                        src={kayak}
                        style={{
                            borderRadius: "12px 0 0 12px",
                        }}
                    />
                </p>
            </div>
            <div className="image-links">
                <p onClick={props.openContactAnimation}>
                    <h2 style={{ top: "30%", left: "22%" }}>
                        Get in Contact
                    </h2>
                    <img alt="ethan mcneal" src={linkedinpfp} />
                </p>
            </div>

            <div className="image-links">
                <p
                    onClick={() =>
                        scroller.scrollTo(projectScrollPoint)
                    }
                >
                    <h2 style={{ top: "30%", left: "25%" }}>
                        My Projects
                    </h2>
                    <img
                        alt="code"
                        src={code}
                        style={{
                            borderRadius: "0 12px 12px 0",
                        }}
                    />
                </p>
            </div>
        </div>
        }
    }
    return (
        <div>
			<h1 style={{ padding: ".5em" }}>Ethan McNeal</h1>
			<Content />
		</div>
    )
}

export default NavCards