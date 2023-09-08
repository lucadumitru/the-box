import React from 'react';
import TabProject from './TabProject';

const TabProjects = ({ filteredProjects }) => {
	return (
		<div className="tab-projects">
			{filteredProjects.map((project, index) => (
				<TabProject
					key={project.id}
					project={project}
					index={index}
				></TabProject>
			))}
		</div>
	);
};

export default TabProjects;
