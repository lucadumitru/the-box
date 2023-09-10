import React from 'react';
import { useInView } from 'react-intersection-observer';

const Cta = () => {
	const { ref, inView, entry } = useInView({
		threshold: 0.3,
	});

	if (inView) {
		const ctaSection = document.querySelector('.cta');
		ctaSection.classList.add('_in-view');
	}

	return (
		<section ref={ref} className="cta">
			<div className="cta__container">
				<div className="cta__content">
					<div className="cta__title title">
						Free consultation with exceptional quality
					</div>
					<div className="cta__text">
						<p>Just onecall away: </p>
						<a className="link" href="tel:+8411022703">
							+84 1102 2703
						</a>
					</div>
				</div>
				<a href="#!" className="cta__btn btn btn--border">
					Get your consultation
				</a>
			</div>
		</section>
	);
};

export default Cta;
