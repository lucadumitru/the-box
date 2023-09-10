import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import MyDialog from './MyDialog';

const MyForm = () => {
	const form = useRef();
	const [isDialogOpen, setIsDialogOpen] = useState(false);
	const sendEmail = (e) => {
		e.preventDefault();
		emailjs
			.sendForm(
				'service_dyjvb89',
				'template_ykqe7rg',
				form.current,
				'DeLVchiKoirWi0asp'
			)
			.then(
				(result) => {
					setIsDialogOpen(true);
					e.target.reset();
				},
				(error) => {
					console.log(error.text);
				}
			);
	};
	return (
		<>
			<MyDialog
				isDialogOpen={isDialogOpen}
				setIsDialogOpen={setIsDialogOpen}
			></MyDialog>
			<form
				ref={form}
				onSubmit={sendEmail}
				action="#"
				className="contact__form form"
			>
				<div className="form__inputs">
					<input
						required
						type="name"
						name="name"
						placeholder="Your Name*"
						className="form__input"
					/>
					<input
						required
						name="email"
						type="email"
						placeholder="Your Email*"
						className="form__input"
					/>
					<input
						name="reason"
						required
						type="text"
						placeholder="Reason for Contacting*"
						className="form__input"
					/>
					<input
						name="phone-number"
						type="tel"
						placeholder="Phone"
						className="form__input"
					/>
				</div>
				<textarea
					type="text"
					name="message"
					placeholder="Message"
					cols="30"
					rows="10"
					className="form__message"
					style={{ resize: 'none' }}
				></textarea>
				<div className="form__advert">
					<span>*</span> indicates a required field
				</div>
				<button type="submit" className="form__button btn btn--blue">
					Submit
				</button>
			</form>
		</>
	);
};

export default MyForm;
