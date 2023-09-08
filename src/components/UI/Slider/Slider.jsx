import React, { useState } from 'react';

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import SliderBtn from './SliderBtn.jsx';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

const Slider = ({ ...props }) => {
	const [sliderImgs, setSliderImgs] = useState(props.imgs);
	const [currentSlideIndex, setCurrentSlideIndex] = useState(0); // Initialize with 0

	const handleSlideChange = (swiper) => {
		setCurrentSlideIndex(swiper.activeIndex);
	};

	return (
		<Swiper
			modules={[Navigation]}
			spaceBetween={props.spaceBetween}
			slidesPerView={props.slidesPerView}
			onSlideChange={handleSlideChange}
			navigation={props.navigation}
			className={props.className}
		>
			{sliderImgs.map((img, index) => {
				return (
					<SwiperSlide
						className={props.className + '__slide'}
						key={img.imgId}
					>
						<img
							className={props.className + '__img'}
							src={img.imgPath}
							alt=""
						/>
						<div className={props.className + '__container'}>
							<div className={props.className + '__title'}>
								{img.title}
							</div>
						</div>
					</SwiperSlide>
				);
			})}
			<div className="slider-content">
				<div className="slider-content__body">
					<h2 className="slider-content__title">Feature Projects</h2>
					<div className="slider-content__about">
						{sliderImgs[currentSlideIndex].about}
					</div>
				</div>
				<div className="slider-btns">
					<SliderBtn direction={'prev'}></SliderBtn>
					<SliderBtn direction={'next'}></SliderBtn>
				</div>
			</div>
		</Swiper>
	);
};

export default Slider;
