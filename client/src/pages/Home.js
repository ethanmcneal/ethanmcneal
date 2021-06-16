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
import NavCards from "../components/NavCards";
import ProjectComponent from "../components/ProjectComponent";

const Home = () => {
	var scroller = Scroll.animateScroll;
	const [showContactForm, setShowContactForm] = useState(false);

	useEffect(() => {
		scroller.scrollToTop();
	}, [scroller]);

	const openContactAnimation = () => {
		scroller.scrollToBottom();
		setShowContactForm(true);
	};
	return (
		<>
			<FadeIn>
				<NavCards openContactAnimation={openContactAnimation}/>
				<ProjectComponent />
				
				<FooterComponent 
                showContactForm={showContactForm}
				setShowContactForm={setShowContactForm}
				openContactAnimation={openContactAnimation}/>
			</FadeIn>
		</>
	);
};

export default Home;
