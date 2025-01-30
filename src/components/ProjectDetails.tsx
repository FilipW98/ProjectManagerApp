import { ProjectDetailsProps } from '../types';


export default function ProjectDetails({ selectedProject, projectsData, setSaveProject, setSelectedProject }: ProjectDetailsProps) {

	function deleteProjectHandler() {
		const updatedProjects = projectsData.filter(project => project.title !== selectedProject!.title);
        setSaveProject(updatedProjects);
        setSelectedProject(null);
	}

	return (
		<div className='flex-col'>
			<div className='flex justify-between'>
				<div>
					<h2>{selectedProject!.title}</h2>
					<p>{selectedProject!.date}</p>
					<p>{selectedProject!.desc}</p>
				</div>
				<button
					onClick={() => {
						deleteProjectHandler();
					}}
				>
					Delete
				</button>
			</div>
			<div className='underline'></div>
		</div>
	);
}
