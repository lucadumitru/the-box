import React from 'react';
import { useParams } from 'react-router-dom';

const ProjectDisplay = ({ projects }) => {
	const { id } = useParams();
	const project = projects[id];
	return (
		<div className="project">
			<div className="project__container">
				<div className="project__img-block">
					<div className="project__img-ibg">
						<img src={project.img} alt="Project img" />
					</div>
				</div>
				<div className="project__content content-project">
					<h1 className="content-project__title">{project.title}</h1>
					<div className="content-project__adress">
						Adress: {project.address}
					</div>
					<div className="content-project__type">Type: {project.type}</div>
					<div className="content-project__description">
						{project.description}
					</div>
				</div>
			</div>
		</div>
	);
};

export default ProjectDisplay;
