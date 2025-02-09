import { useState } from 'react';
import { ProjectContext } from '../store/project-context';
import { useContext } from 'react';

export default function ProjectDetails() {

	const projectDeatilsCtx = useContext(ProjectContext); 
	const [taskData, setTaskData] = useState<{ tasks: string[], input: string }>({ tasks: [], input: '' });

	function deleteProjectHandler() {
		const updatedProjects = projectDeatilsCtx?.state.saveProject.filter(
			project => project.title !== projectDeatilsCtx.state.selectedProject!.title
		);
         projectDeatilsCtx?.dispatchFn({ type: 'update-save-project', payload: updatedProjects ?? [] });
		 projectDeatilsCtx?.dispatchFn({type: "delete-project"});
	}
	
	function addTaskHandler() {
		if (projectDeatilsCtx?.state.selectedProject && taskData.input.trim()) {
			  projectDeatilsCtx.dispatchFn({ type: 'add-task', payload: taskData.input });
		}
		setTaskData(prev => ({
			tasks: [...prev.tasks, prev.input],
			input: '',
		}));
	}

	return (
		<div className='w-[35rem] mt-16 pr-4'>
			<header className='pb-4 mb-4 border-b-2 border-stone-300'>
				<div className='flex items-center justify-between'>
					<h2 className='text-2xl md:text-3xl font-bold text-stone-600 mb-2'>
						{projectDeatilsCtx?.state.selectedProject?.title}
					</h2>
					<button
						className='text-stone-600 hover:text-stone-950 transition duration-300'
						onClick={() => {
							deleteProjectHandler();
						}}
					>
						Delete
					</button>
				</div>
				<p className='mb-4 text-stone-400'>{projectDeatilsCtx?.state.selectedProject!.date}</p>
				<p className='text-stone-600 whitespace-pre-wrap'>{projectDeatilsCtx?.state.selectedProject!.desc}</p>
			</header>

			<h2 className='text-2xl font-bold text-stone-700 mb-4'>Tasks</h2>
			<div className='add-task-mobile'>
				<input
					className='w-40  sm:w-64 px-2 py-1 rounded-sm bg-stone-200'
					value={taskData.input}
					type='text'
					onChange={e => setTaskData(prev => ({ ...prev, input: e.target.value }))}
				/>
				<button
					className='text-stone-700 hover:text-stone-950 ml-2 sm:ml-5 transition duration-300'
					onClick={addTaskHandler}
				>
					Add task
				</button>
			</div>
			{projectDeatilsCtx?.state.selectedProject?.tasks.length === 0 && (
				<p className='text-stone-800 my-4 sm:text-base text-sm'>This project does not have any tasks yet.</p>
			)}
			{(projectDeatilsCtx?.state.selectedProject?.tasks ?? []).length > 0 && (
				<ul className='p-2 mt-8  '>
					{projectDeatilsCtx?.state.selectedProject?.tasks.map(task => {
						return (
							<li key={task} className='flex justify-between my-4 p-3 bg-stone-200 rounded-md'>
								<span>{task}</span>
								<button
									className='text-stone-700 hover:text-red-500 transition duration-300'
									onClick={() => projectDeatilsCtx.dispatchFn({ type: 'remove-task', payload: task })}
								>
									Clear
								</button>
							</li>
						);
					})}
				</ul>
			)}
		</div>
	);
}
