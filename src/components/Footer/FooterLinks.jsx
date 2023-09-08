import React from 'react';

const FooterLinks = ({ ...props }) => {
	return (
		<div className="footer-links">
			<div className="footer-links__link link-footer">
				<div className="link-footer__label">Address:</div>
				<a href="" className="link-footer__link">
					6391 Elgin St. Celina, Delaware 10299
				</a>
			</div>
			<div className="footer-links__link link-footer">
				<div className="link-footer__label">Phone:</div>
				<a
					style={{ whiteSpace: 'nowrap' }}
					href=""
					className="link-footer__link"
				>
					+84 1102 2703
				</a>
			</div>
			<div className="footer-links__link link-footer">
				<div className="link-footer__label">Email:</div>
				<a href="" className="link-footer__link">
					hello@thebox.com
				</a>
			</div>
		</div>
	);
};

export default FooterLinks;
