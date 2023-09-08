import React from 'react';
import { useInView } from 'react-intersection-observer';

import { statistics } from '../../dates/statistics';
import StatisticItem from './StatisticsItem';

const Statistics = () => {
	const { ref, inView, entry } = useInView({
		threshold: 0.3,
	});

	if (inView) {
		const statItems = document.querySelectorAll('.statistic-item');
		const statisticsSection = document.querySelector('.statistics');
		statisticsSection.classList.add('_in-view');
		for (let i = 0; i < statItems.length; i++) {
			const item = statItems[i];
			setTimeout(() => {
				item.classList.add('_show');
			}, i * 200);
		}
	}

	return (
		<section ref={ref} className="statistics">
			<div className="statistics__container">
				<div className="statistics__items">
					{statistics.map((statisticItem) => {
						return (
							<StatisticItem
								key={statisticItem.id}
								title={statisticItem.title}
								icon={statisticItem.icon}
								quantity={statisticItem.quantity}
								inset={statisticItem.inset}
								inView={inView}
							/>
						);
					})}
				</div>
				<article className="statistics__cta cta-statistics">
					<h3 className="cta-statistics__title">30 Years Experience</h3>
					<div className="cta-statistics__text">
						<p>
							Our company has been the leading provided construction
							services to clients throughout the USA since 1988.
						</p>
					</div>
					<a href="#!" className="cta-statistics__btn btn btn--blue">
						Contact Us
					</a>
				</article>
			</div>
		</section>
	);
};

export default Statistics;
