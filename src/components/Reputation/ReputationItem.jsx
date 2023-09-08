import React from 'react';

const ReputationItem = ({ ...props }) => {
	return (
		<div data={props.data} className="reputation-item">
			<div className="reputation-item__icon">
				<img src={props.img} alt="Item icon" />
			</div>
			<div className="reputation-item_title">
				<h6>{props.title}</h6>
			</div>
			<div className="reputation-item__text">
				<p>{props.text}</p>
			</div>
		</div>
	);
};

export default ReputationItem;
