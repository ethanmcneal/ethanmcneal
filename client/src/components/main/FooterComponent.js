import FadeIn from "../../styleComponents/FadeIn";
import EmailForm from "../sub/EmailForm";
import Footer from "../sub/Footer";
import EmailFormComponent from "./EmailFormComponent";


const FooterComponent = (props) => {
	return (
		<div style={{ backgroundColor: "rgb(34,34,34)", width: "100%" }}>
			<Footer />
			<EmailFormComponent
				showContactForm={props.showContactForm}
				setShowContactForm={props.setShowContactForm}
				openContactAnimation={props.openContactAnimation}
			/>
			{props.showContactForm && (
				<FadeIn>
					<div className="form-container">
						<EmailForm />
					</div>
				</FadeIn>
			)}
		</div>
	);
};

export default FooterComponent
