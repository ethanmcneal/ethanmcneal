import kayak from "../images/kayak.jpg";
import code from "../images/code.jpg";
import linkedinpfp from "../images/linkedinpfp.jpg";
import "../stylesheets/home.css";
import Projects from "./Projects";
import MobileProjects from "./MobileProjects";
import AboutMe from "./AboutMe";
import Footer from "./Footer";
import * as Scroll from "react-scroll";
import MobileAboutMe from "./MobileAboutMe";
import { useEffect, useState } from "react";
import FadeIn from "../styleComponents/FadeIn";
import EmailFormComponent from "../components/EmailFormComponent";
import EmailForm from "./EmailForm";
import FooterComponent from "../components/FooterComponent";

const Home = () => {
	var scroller = Scroll.animateScroll;
	const [showContactForm, setShowContactForm] = useState(false);

	useEffect(() => {
		scroller.scrollToTop();
	}, [scroller]);

	var projectScrollPoint = window.innerHeight + 100;
	var aboutMeScrollPoint = window.innerHeight * 2 + 125;

	const openContactAnimation = () => {
		scroller.scrollToBottom();
		setShowContactForm(true);
	};

	const contactMeButton = () => {
        scroller.scrollToBottom();
		setShowContactForm(!showContactForm);
	};
	return (
		<>
			<FadeIn>
				<div>
					<h1 style={{ padding: ".5em" }}>Ethan McNeal</h1>
					{window.innerWidth <= 900 ? (
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
								onClick={openContactAnimation}
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
					) : (
						<div
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
								<p onClick={openContactAnimation}>
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
					)}
				</div>
				<div>
					<h1 style={{ padding: ".7em" }}>Projects</h1>
					{window.innerWidth <= 900 ? (
						<MobileProjects />
					) : (
						<Projects />
					)}
					<br />
				</div>
				<div>
					<h1 style={{ padding: ".7em" }}>About Me</h1>
					{window.innerWidth <= 900 ? <MobileAboutMe /> : <AboutMe />}
				</div>
				<FooterComponent 
                showContactForm={showContactForm}
				setShowContactForm={setShowContactForm}
				openContactAnimation={openContactAnimation}/>
			</FadeIn>
		</>
	);
};

export default Home;
