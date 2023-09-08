import React from 'react';
import AnimatedNum from '../UI/AnimatedNum';

const StatisticItem = ({ ...props }) => {
	return (
		<div className="statistic-item">
			<AnimatedNum
				className="statistic-item__quantity"
				n={props.quantity}
				startAnim={props.inView}
			></AnimatedNum>
			{/* <div className="statistic-item__quantity">{props.quantity}</div> */}
			<div className="statistic-item__text">{props.title}</div>
			<div
				style={{ inset: `${props.inset}` }}
				className="statistic-item__icon"
			>
				<img src={props.icon} alt={props.title + ' icon'} />
			</div>
		</div>
	);
};

export default StatisticItem;
