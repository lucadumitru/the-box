import React, { useState, useEffect } from 'react';

import { useSpring, animated } from 'react-spring';

const AnimatedNum = ({ n, startAnim }) => {
	const [animatedValue, setAnimatedValue] = useState(0);

	useEffect(() => {
		if (startAnim) {
			setAnimatedValue(n);
		}
	}, [startAnim, n]);

	const { number } = useSpring({
		from: { number: 0 },
		number: animatedValue,
		delay: 200,
		config: { mass: 1, tension: 20, friction: 10 },
	});

	return (
		<animated.div className="statistic-item__quantity">
			{number.to((n) => n.toFixed(0))}
		</animated.div>
	);
};

export default AnimatedNum;
