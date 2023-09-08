import React, { useState } from 'react';
import TabButtons from '../UI/Tabs/TabButtons';
import TabProjects from '../UI/Tabs/TabProjects';

const Projects = ({ projects, title }) => {
	const [filteredProjects, setFilteredProjects] = useState(projects);

	const filterProjects = (projects) => {
		setFilteredProjects(projects);
	};

	return (
		<div id="projects" className="projects">
			<div className="projects__container">
				<div className="projects__title title">{title}</div>
				<div className="projects__tabs">
					<TabButtons
						filter={filterProjects}
						projects={projects}
					></TabButtons>
					<TabProjects filteredProjects={filteredProjects}></TabProjects>
				</div>
			</div>
		</div>
	);
};

export default Projects;
