import React, { useState } from 'react';
import Slider from '../UI/Slider/Slider.jsx';

import hero_1 from './../../assets/imgages/hero/Hero_1.jpg';
import hero_2 from './../../assets/imgages/hero/Hero_2.jpg';
import hero_3 from './../../assets/imgages/hero/Hero_3.jpg';

const heroImgs = [
	{
		imgId: 1,
		imgPath: hero_1,
		title: 'Building things is our mission.',
		about: 'The National University of Architecture',
	},
	{
		imgId: 2,
		imgPath: hero_2,
		title: 'Creating Memories is Our Passion.',
		about: 'Eco-Friendly Urban Retreat',
	},
	{
		imgId: 3,
		imgPath: hero_3,
		title: 'Innovation Drives Our Endeavors.',
		about: 'Floating Residential Complex',
	},
];

const Hero = () => {
	return (
		<section id="hero" className="hero">
			<Slider
				spaceBetween={0}
				slidesPerView={1}
				navigation={false}
				imgs={heroImgs}
				className={'hero-slider'}
			></Slider>
		</section>
	);
};

export default Hero;
