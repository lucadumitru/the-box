import React from 'react';
import { NavLink } from 'react-router-dom';

const TabProject = ({ project, index }) => {
	return (
		<article className="tab-project">
			<NavLink to={`/projects/${index}`} className="tab-project__img-ibg">
				<img src={project.img} alt={project.title + ' img'} />
			</NavLink>
			<div className="tab-project__content">
				<NavLink
					to={`/projects/${index}`}
					className="tab-project__title link"
				>
					{project.title}
				</NavLink>
				<a
					target="_blank"
					href={`https://www.google.com/maps/search/` + project.address}
					className="tab-project__adress link"
				>
					{project.address}
				</a>
			</div>
		</article>
	);
};

export default TabProject;
