import {
	IoIosArrowDropdownCircle,
	IoIosArrowDropupCircle,
} from "react-icons/io";
import { Popup } from "semantic-ui-react";


const EmailFormComponent = (props) => {
	const Icon = () => {
	if (props.showContactForm) {
		return(
		<IoIosArrowDropupCircle
				onClick={() => props.setShowContactForm(false)}
				size="2em"
				style={{ cursor: "pointer" }}
			/>)
		
	} else {
		return(
		<Popup
			content="Click me!"
			style={{ color: "white" }}
			trigger={
				<IoIosArrowDropdownCircle
					onClick={() => props.openContactAnimation()}
					size="2em"
					style={{ cursor: "pointer" }}/>
					
				}
			/>)
	}
}

	return (
		<div style={styles.container}>
			{window.innerWidth > 800 && (
				<div>
					<Icon style={{marginBottom: '1em'}}/>
				</div>
			)}
			{window.innerWidth < 800 && (
				<div style={{ textAlign: "center" }}>
					{!props.showContactForm ? (
						<IoIosArrowDropdownCircle
							onClick={props.openContactAnimation}
							size="2em"
						/>
					) : (
						<IoIosArrowDropupCircle
							onClick={() => props.setShowContactForm(false)}
							size="2em"
						/>
					)}
				</div>
			)}
		</div>
	);
};
const styles = {
	container: {
		flex: 1,
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
	},
}
export default EmailFormComponent;
