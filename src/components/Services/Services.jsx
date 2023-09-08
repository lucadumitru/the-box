import React from 'react';
import ServicesItem from './ServicesItem';

import { useInView } from 'react-intersection-observer';

const Services = ({ services, title }) => {
	const { ref, inView, entry } = useInView({
		threshold: 0.15,
	});

	if (inView) {
		const servicesItems = document.querySelectorAll('.services-item');
		const servicesSection = document.querySelector('.services');
		servicesSection.classList.add('_in-view');
		for (let i = 0; i < servicesItems.length; i++) {
			const item = servicesItems[i];
			setTimeout(() => {
				item.classList.add('_show');
			}, i * 200);
		}
	}

	return (
		<section ref={ref} id="services" className="services">
			<div className="services__container-small">
				<h2 className="services__title title">{title}</h2>
				<div className="services__items">
					{services.map((service, index) => {
						return (
							<ServicesItem
								key={service.id}
								title={service.label}
								icon={service.icon}
								index={index}
							></ServicesItem>
						);
					})}
				</div>
			</div>
		</section>
	);
};

export default Services;
