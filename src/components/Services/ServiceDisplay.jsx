import React from 'react';
import { useParams } from 'react-router-dom';

const ServiceDisplay = ({ services }) => {
	const { id } = useParams();
	const service = services[id];

	return (
		<div className="service" style={{ marginTop: '100px' }}>
			<div className="service__container">
				<h1
					style={{
						textAlign: 'center',
						fontWeight: '700',
						fontSize: '20px',
					}}
					className="service__title"
				>
					{service.label}
				</h1>
				<div style={{ marginTop: '10px' }} className="service__content">
					<div className="service__img">
						<div className="service__description">
							<p>{service.description}</p>
						</div>
						<img
							style={{
								maxWidth: '100%',
								marginTop: '15px',
							}}
							src={service.img}
							alt={service.label + ' img'}
						/>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ServiceDisplay;
