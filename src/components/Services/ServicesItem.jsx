import React from 'react';

import { NavLink } from 'react-router-dom';

const ServicesItem = ({ ...props }) => {
	return (
		<NavLink to={`/services/${props.index}`} className="services-item">
			<img
				className="services-item__icon"
				src={props.icon}
				alt={props.title + ' icon'}
			/>
			<div className="services-item__title">{props.title}</div>
		</NavLink>
	);
};

export default ServicesItem;
