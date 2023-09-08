// Icons
import constructionIcon from './../assets/icons/construction.svg';
import renovationIcon from './../assets/icons/renovation.svg';
import consultationIcon from './../assets/icons/consultation.svg';

// Images
import constructionImg from './../assets/imgages/services/contruction-img.jpg';
import renovationImg from './../assets/imgages/services/renovation-img.jpg';
import consultationImg from './../assets/imgages/services/consultation-img.jpg';

export const services = [
	{
		id: 1,
		icon: constructionIcon,
		label: 'Construction',
		img: constructionImg,
		description:
			'Our skilled team brings your vision to life, delivering high-quality construction projects with precision and professionalism.',
	},
	{
		id: 2,
		icon: renovationIcon,
		label: 'Renovation',
		img: renovationImg,
		description:
			'Transform your space with our renovation expertise, enhancing both aesthetics and functionality to meet your evolving needs.',
	},
	{
		id: 3,
		icon: consultationIcon,
		label: 'Consultation',
		img: consultationImg,
		description:
			"Our experienced consultants provide valuable insights, helping you make informed decisions throughout your project's lifecycle.",
	},
];
