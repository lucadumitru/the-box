import React from 'react';
import MyForm from '../UI/MyForm';

const Contact = () => {
	return (
		<section id="contact" className="contact">
			<div className="contact__container">
				<h2 className="contact__title title">What can us do for you?</h2>
				<div className="contact__text text">
					<p>
						We are ready to work on a project of any complexity, whether
						it’s commercial or residential.
					</p>
				</div>
				<MyForm></MyForm>
			</div>
		</section>
	);
};

export default Contact;
