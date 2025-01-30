import { Project,NavProps } from '../types';


export default function Nav({ setIsNewProject, projectData, setSelectedProject }: NavProps) {

	function navAddProjectHandler() {
		setIsNewProject(true);
	}
	function showProjectHandler(project: Project) {
		setSelectedProject(project);
	}

	return (
		<aside className='w-1/3 px-8 py-16 bg-stone-900 text-stone-50 md:w-72 rounded-r-xl'>
			<h2 className='mb-8 font-bold uppercase md:text-xl text-stone-200'> Your Projects</h2>
			<button
				onClick={() => { navAddProjectHandler(); setSelectedProject(null) }}
				className='px-4 py-2 text-xs md:text-base rounded-md bg-stone-700 text-stone-400 hover:bg-stone-600 hover:text-stone-100 transition duration-300'
			>
				+ Add Project
			</button>
			<div className='flex flex-col my-5 items-start'>
				{projectData.map(data => (
					<button onClick={() => {showProjectHandler(data); setIsNewProject(false)}} className='p-2 my-1' key={data.title}>
						{data.title}
					</button>
				))}
			</div>
		</aside>
	);
}