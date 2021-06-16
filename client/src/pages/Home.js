
import "../stylesheets/home.css";
import * as Scroll from "react-scroll";
import { useEffect, useState } from "react";
import FadeIn from "../styleComponents/FadeIn";
import FooterComponent from "../components/main/FooterComponent";
import NavCards from "../components/main/NavCards";
import ProjectComponent from "../components/main/ProjectComponent";
import AboutMeComponent from "../components/main/AboutMeComponent";

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
		<FadeIn>
			<NavCards openContactAnimation={openContactAnimation}/>
			<ProjectComponent />
			<AboutMeComponent />
			<FooterComponent 
            showContactForm={showContactForm}
			setShowContactForm={setShowContactForm}
			openContactAnimation={openContactAnimation}/>
		</FadeIn>
	);
};

export default Home;
