import React, { useState, useEffect } from 'react';

const TabButtons = ({ projects, filter }) => {
	const [uniqTypes, setUniqTypes] = useState([]);
	const [activeTab, setActiveTab] = useState('All');

	useEffect(() => {
		const uniqueTypesArray = projects.reduce((uniqueTypes, project) => {
			if (!uniqueTypes.includes(project.type)) {
				uniqueTypes.push(project.type);
			}
			return uniqueTypes;
		}, []);

		setUniqTypes(['All', ...uniqueTypesArray]);
	}, [projects]);

	const filterProjects = (e) => {
		const selectedType = e.target.innerHTML;
		setActiveTab(selectedType);

		if (selectedType === 'All') {
			filter(projects);
		} else {
			const filtered = projects.filter(
				(project) => project.type === selectedType
			);
			filter(filtered);
		}
	};

	return (
		<>
			<div className="tabs-buttons">
				{uniqTypes.map((type) => (
					<button
						onClick={filterProjects}
						key={type}
						type="button"
						className={`tabs-buttons__btn ${
							type === activeTab ? '_active' : ''
						}`}
					>
						{type}
					</button>
				))}
			</div>
		</>
	);
};

export default TabButtons;
