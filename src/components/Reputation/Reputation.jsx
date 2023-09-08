import React from 'react';
import ReputationItem from './ReputationItem';
import { useInView } from 'react-intersection-observer';

import serviceIcon from './../../assets/icons/headphones.svg';
import designIcon from './../../assets/icons/design.svg';

const Reputation = () => {
	const { ref, inView, entry } = useInView({
		threshold: 0.15,
	});

	if (inView) {
		const reputationItems = document.querySelectorAll(
			'[data=reputation-item]'
		);
		const aboutUsSection = document.querySelector('.reputation');
		aboutUsSection.classList.add('_in-view');
		for (let i = 0; i < reputationItems.length; i++) {
			const item = reputationItems[i];
			setTimeout(() => {
				item.classList.add('_show');
			}, i * 200);
		}
	}

	return (
		<section ref={ref} className="reputation">
			<div className="reputation__container-small">
				<h2 className="reputation__title title">Our Reputation</h2>
				<div className="reputation__items">
					<ReputationItem
						data="reputation-item"
						img={serviceIcon}
						title="Best Teams"
						text="Cursus semper tellus volutpat aliquet lacus. "
					></ReputationItem>
					<ReputationItem
						data="reputation-item"
						img={serviceIcon}
						title="Best Services"
						text="Nullam senectus porttitor in eget. Eget rutrum leo interdum."
					></ReputationItem>
					<ReputationItem
						data="reputation-item"
						img={designIcon}
						title="Best Designs"
						text="Ultricies at ipsum nunc, tristique nam lectus."
					></ReputationItem>
				</div>
			</div>
		</section>
	);
};

export default Reputation;
