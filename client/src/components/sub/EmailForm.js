import React, { useState } from "react";
import emailjs from "emailjs-com";
import { Button } from "bootstrap-react";

export default function EmailForm() {
	const [sent, setSent] = useState(false);

	function sendEmail(e) {
		e.preventDefault();

		emailjs
			.sendForm(
				"service_7l3rxrk",
				"template_chm8q67",
				e.target,
				"user_2vr8riZaHDkUEkHBgVXTU",
			)
			.then(
				(result) => {
					console.log(result.text);
					setSent(true);
				},
				(error) => {
					console.log(error.text);
				},
			);
	}

	let inputStyle;
	if (window.innerWidth > 900) {
		inputStyle = {
			div: {
				display: "flex",
				flex: "1",
				justifyContent: "space-between",
			},
			input: {
				width: "48%",
			},
		};
	} else {
		inputStyle = {
			div: { display: "flex", flexDirection: "column", width: "100%" },
			input: {
				width: "100%",
			},
		};
	}

	return (
		<>
			{sent ? (
				<form className="contact-form" onSubmit={sendEmail}>
					<h2>Thanks! </h2>
					<p>I'll get back to you soon</p>
					<Button disabled value="Sent" color="success" />
				</form>
			) : (
				<form className="contact-form" onSubmit={sendEmail}>
					<h2>Email Me:</h2>
					<input type="hidden" name="contact_number" />
					<div style={inputStyle.div}>
						<input
							type="text"
							name="user_name"
							placeholder="Your Name"
							style={inputStyle.input}
						/>
						<input
							type="email"
							name="user_email"
							placeholder="Your Email"
							style={inputStyle.input}
						/>
					</div>
					<input type="text" name="subject" placeholder="Subject" />
					<textarea
						name="message"
						placeholder="Message"
						style={{ height: "200px" }}
					/>
					<Button type="submit" value="Send" color="secondary" />
				</form>
			)}
		</>
	);
}
