import React, { useState } from 'react';

import { images } from '../../constants';
import { AppWrap, MotionWrap } from '../../wrapper';
import { client } from '../../client';
import './Footer.scss';

const Footer = () => {
	const [formData, setFormData] = useState({
		name: '',
		email: '',
		message: '',
	});
	const [isFormSubmitted, setIsFormSubmitted] = useState(false);
	const [loading, setLoading] = useState(false);

	const {name, email, message } = formData;

	const handleChangeInput = (e) => {
		const { name, value } = e.target;
		setFormData({ ...formData, [name]: value });
	};

	const handleSubmit = () => {
		
	};

	 const handleSubmit2 = async (event) => {

		setLoading(true);

		const contact = {
			_type: 'contact',
			name: formData.name,
			email: formData.email,
			message: formData.message,
		};

		client
			.create(contact)
			.then(() => {
				setLoading(false);
				setIsFormSubmitted(true);
			})
			.catch((err) => console.log(err));


			event.preventDefault();

			const email = 'go.romerolae@gmail.com';
			const URL_BASE = `https://formsubmit.co/ajax/${email}`;

			try {
				const response = await fetch(URL_BASE, {
					method: 'POST',
					headers: {
						'Content-Type': 'application/json',
					},
					body: JSON.stringify(formData),
				});

				if (response.ok) {
					alert('Email sent successfully');
				} else {
					alert('Failed to send email');
				}
			} catch (error) {
				alert('An error occurred:', error);
			}
		};




	return (
		<>
			<h2 className="head-text">Take a coffee & chat with me</h2>

			<div className="app__footer-cards">
				<div className="app__footer-card ">
					<img src={images.email} alt="email" />
					<a href="mailto:go.romerolae@gmail.com" className="p-text">
						go.romerolae@gmail.com
					</a>
				</div>
				<div className="app__footer-card">
					<img src={images.mobile} alt="phone" />
					<a href="tel:+57 (319) 382-2294" className="p-text">
						+57 (319) 382-2294
					</a>
				</div>
			</div>
			{!isFormSubmitted ? (
				<div
					className="app__footer-form app__flex"
				>
					<div className="app__flex">
						<input
							className="p-text"
							type="text"
							placeholder="Your Name"
							name="name"
							value={name}
							onChange={handleChangeInput}
						/>
					</div>
					<div className="app__flex">
						<input
							className="p-text"
							type="email"
							placeholder="Your Email"
							name="email"
							value={email}
							onChange={handleChangeInput}
						/>
					</div>
					<div>
						<textarea
							className="p-text"
							placeholder="Your Message"
							value={message}
							name="message"
							onChange={handleChangeInput}
						/>
					</div>
					<button type="submit" className="p-text" onClick={handleSubmit2}>
						{!loading ? 'Send Message' : 'Sending...'}
					</button>
				</div>
			) : (
				<div>
					<h3 className="head-text">Thank you for getting in touch!</h3>
				</div>
			)}
		</>
	);
	
	
};


export default AppWrap(
	MotionWrap(Footer, 'app__footer'),
	'contact',
	'app__whitebg'
);
