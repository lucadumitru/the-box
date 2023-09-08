import React, { useRef } from 'react';
import { NavLink, useLocation } from 'react-router-dom';

import logo from './../../assets/logo.svg';
import BurgerBtn from '../UI/BurgerBtn.jsx';

const Header = () => {
	const location = useLocation();
	const goBack = () => {
		window.history.back();
	};

	return (
		<header className="header">
			<div className="header__container">
				<NavLink to={'/'} className="header__logo">
					<img src={logo} alt="Logo" />
				</NavLink>
				<div className="header__menu menu">
					<BurgerBtn></BurgerBtn>
					<nav className="menu__body">
						<ul className="menu__list">
							{location.pathname === '/' ? (
								<>
									<li className="menu__item">
										<a href="#hero" className="menu__link">
											Home
										</a>
									</li>
									<li className="menu__item">
										<a href="#about" className="menu__link">
											About Us
										</a>
									</li>
									<li className="menu__item">
										<a href="#projects" className="menu__link">
											Projects
										</a>
									</li>
									<li className="menu__item">
										<a href="#services" className="menu__link">
											Services
										</a>
									</li>
									<li className="menu__item">
										<a href="" className="menu__link">
											Contact Us
										</a>
									</li>
								</>
							) : (
								<>
									<li className="menu__item">
										<a
											href="#"
											onClick={goBack}
											className="menu__link"
										>
											Back
										</a>
									</li>
									<li className="menu__item">
										<a href="#contact" className="menu__link">
											Contact Us
										</a>
									</li>
								</>
							)}
						</ul>
					</nav>
				</div>
			</div>
		</header>
	);
};

export default Header;
