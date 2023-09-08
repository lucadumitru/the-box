import React from 'react';
import { useState } from 'react';

const Subscribe = () => {
	const [email, setEmail] = useState('');
	const [emailError, setEmailError] = useState(false);
	const [errorMessage, setErrorMessage] = useState('Incorrect email');

	const emailHandler = (e) => {
		setEmail(e.target.value);
		const re = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/gi;
		if (!re.test(String(e.target.value))) {
			e.target.classList.add('_error');
			e.target.classList.remove('_correct');
			setEmailError(true);
		} else {
			e.target.classList.remove('_error');
			e.target.classList.add('_correct');
			setEmailError(false);
		}
	};

	return (
		<div className="subscribe">
			<form action="#" className="subscribe__form">
				<label className="subscribe__label">Newsletter:</label>
				{emailError && <div style={{ color: 'red' }}>{errorMessage}</div>}
				<div className="subscribe__row">
					<input
						value={email}
						onChange={(e) => emailHandler(e)}
						className="subscribe__input"
						type="email"
						placeholder="Your email here"
					></input>
					<button
						onClick={(e) => {
							e.preventDefault();
							if (!emailError && email !== '') {
								alert('succes');
								setEmail('');
							} else {
								setEmailError(true);
							}
						}}
						className="subscribe__btn"
						type="submit"
					>
						Subscribe
					</button>
				</div>
			</form>
		</div>
	);
};

export default Subscribe;
