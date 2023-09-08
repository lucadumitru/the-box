import React from 'react';
import { useSwiper } from 'swiper/react';

import arrow from './../../../assets/icons/arrow.svg';

const SliderBtn = ({ ...props }) => {
	const swiper = useSwiper();
	return (
		<button
			className={'slider-btn slider-btn--' + props.direction}
			onClick={() => {
				if (props.direction === 'next') {
					swiper.slideNext();
				} else if (props.direction === 'prev') {
					swiper.slidePrev();
				}
			}}
		>
			<img src={arrow} alt="Arrow icon" />
			<div>
				{props.direction.charAt(0).toUpperCase() + props.direction.slice(1)}
			</div>
		</button>
	);
};

export default SliderBtn;
