import React from 'react';

// Assets

import facebook from './../../assets/icons/facebook.svg';
import twitter from './../../assets/icons/twitter.svg';
import linkedin from './../../assets/icons/linkedin.svg';

const Socials = () => {
	return (
		<div className="socials">
			<div className="socials__label">Social:</div>
			<div className="socials__links">
				<a href="#!" className="socials__link">
					<img src={facebook} alt="Facebook icon" />
				</a>
				<a href="#!" className="socials__link">
					<img src={linkedin} alt="Facebook icon" />
				</a>
				<a href="#!" className="socials__link">
					<img src={twitter} alt="Facebook icon" />
				</a>
			</div>
		</div>
	);
};

export default Socials;
