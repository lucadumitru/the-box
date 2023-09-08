import React, { useState, useEffect } from 'react';
import { Squash as Hamburger } from 'hamburger-react';

const BurgerBtn = () => {
	const [menuOpen, setMenuOpen] = useState(false);

	function toggleClassMenuOpen(menuOpen) {
		const html = document.querySelector('html');
		menuOpen
			? html.classList.add('menu-open', 'lock')
			: html.classList.remove('menu-open', 'lock');
	}

	toggleClassMenuOpen(menuOpen);

	useEffect(() => {
		const handleClick = (event) => {
			if (event.target.className === 'menu__link') {
				setMenuOpen(false);
			}
		};

		document.addEventListener('click', handleClick);

		return () => {
			document.removeEventListener('click', handleClick);
		};
	}, []);

	return <Hamburger toggled={menuOpen} toggle={setMenuOpen}></Hamburger>;
};

export default BurgerBtn;
