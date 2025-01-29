import Project from '../types';

type ProjectDetailsProps = {
	selectedProject: Project | null;
};

export default function ProjectDetails({ selectedProject }: ProjectDetailsProps) {
	console.log(selectedProject);
	return (
		<div className='flex-col'>
			<div className='flex justify-between'>
				<div>
					<h2>{selectedProject!.title}</h2>
					<p>{selectedProject!.date}</p>
					<p>{selectedProject!.desc}</p>
				</div>
				<button>Delete</button>
			</div>
			<div className='underline'></div>
		</div>
	);
}
