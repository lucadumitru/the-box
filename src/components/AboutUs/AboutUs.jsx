import React from 'react';
import { useInView } from 'react-intersection-observer';

import aboutUsIcon from './../../assets/imgages/about-us/about-us.jpg';

const AboutUs = () => {
	const { ref, inView, entry } = useInView({
		threshold: 0.15,
	});

	if (inView) {
		const aboutUsSection = document.querySelector('.about-us');
		aboutUsSection.classList.add('_in-view');
	}

	return (
		<section id="about" className="about-us">
			<div className="about-us__container">
				<div className="about-us__img-ibg">
					<img src={aboutUsIcon} alt="About-us img" />
				</div>
				<div ref={ref} className="about-us__content">
					<h2 className="about-us__title title title--white">About us</h2>
					<div className="about-us__text">
						<p>
							For more than 30 years we have been delivering world-class
							construction and we’ve built many lasting relationships
							along the way.
						</p>
						<p>
							We’ve matured into an industry leader and trusted resource
							for those seeking quality, innovation and reliability when
							building in the U.S.
						</p>
					</div>
					<a href="!#" className="about-us__btn btn btn--rounded">
						More on Our History
					</a>
				</div>
			</div>
		</section>
	);
};

export default AboutUs;
