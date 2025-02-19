import { Project} from '../types';
import Button from './Button';
import { ProjectContext } from '../store/project-context';
import { useContext } from 'react';

export default function Nav() {

const navCtx = useContext(ProjectContext);

	function navAddProjectHandler() {
		navCtx?.dispatchFn({type:'new-project'});
	}
	function showProjectHandler(project: Project) {
		navCtx?.dispatchFn({type:"selected-project", payload: project})
	}

	return (
		<aside className='w-1/3 px-4 py-16 md:px-8 bg-stone-900 text-stone-50 md:w-72 rounded-r-xl'>
			<h2 className='mb-8 font-bold uppercase md:text-xl text-stone-200'> Your Projects</h2>
			<Button
				onClick={() => {
					navAddProjectHandler();
					navCtx?.dispatchFn({ type: 'delete-project' });
				}}
			>
				+ Add Project
			</Button>
			<div className='mt-5'>
				<ul>
					{navCtx?.state.saveProject.map(data => {
						let cssClasses =
							'w-full text-left px-2 py-1 my-1 rounded-sm text-stone-400 hover:text-stone-200 hover:bg-stone-800 transition duration-300';
						if (data.title === navCtx.state.selectedProject?.title) {
							cssClasses += ' bg-stone-800 text-stone-200';
						} else {
							cssClasses += ' text-stone-400';
						}
						return (
							<li key={data.title}>
								<button
									onClick={() => {
										showProjectHandler(data);
										navCtx?.dispatchFn({ type: 'reset-project' });
									}}
									className={cssClasses}
								>
									{data.title}
								</button>
							</li>
						);
					})}
				</ul>
			</div>
		</aside>
	);
}
