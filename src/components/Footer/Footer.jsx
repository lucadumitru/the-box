import React from 'react';
import FooterLinkItem from './FooterLinks';
import { NavLink } from 'react-router-dom';

import logo from './../../assets/logo.svg';
import NewsletterSubscribe from '../UI/Subscribe';
import FooterLinks from './FooterLinks';
import Socials from '../UI/Socials';

const Footer = () => {
	return (
		<footer className="footer">
			<div className="footer__container">
				<div className="footer__body">
					<div className="footer__column">
						<FooterLinks></FooterLinks>
						<div className="footer__logo">
							<NavLink to={'/'}>
								<img src={logo} alt="Logo img" />
							</NavLink>
						</div>
					</div>
					<div className="footer__column">
						<NewsletterSubscribe></NewsletterSubscribe>
						<Socials></Socials>
					</div>
				</div>
			</div>
			<div className="footer__copy copy-footer">
				<div className="copy-footer__container">
					TheBox Company © 2022. <span>All Rights Reserved</span>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
