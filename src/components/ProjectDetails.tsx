import { useState } from 'react';
import { ProjectContext } from '../store/project-context';
import { useContext } from 'react';


export default function ProjectDetails() {

	const projectDeatilsCtx = useContext(ProjectContext); 
	const [taskData, setTaskData] = useState<{tasks:string[], input:string}>({ tasks:[], input:''});

	function deleteProjectHandler() {
		const updatedProjects = projectDeatilsCtx?.saveProject.filter(
			project => project.title !== projectDeatilsCtx.selectedProject!.title
		);
        projectDeatilsCtx?.setSaveProject(updatedProjects?? []);
        projectDeatilsCtx?.setSelectedProject(null);
	}

	function deleteTaskHandler(selectedTask:string) {
		setTaskData(prev => ({
			...prev,
			tasks: prev.tasks.filter(task => task !== selectedTask),
		}));
	}
	
	function addTaskHandler() {
		if (taskData.input.trim() !== '' && !taskData.tasks.includes(taskData.input.trim())) {
			setTaskData(prev => ({
				tasks: [...prev.tasks, prev.input],
				input: '',
			}));
		}
	}

	return (
		<div className='w-[35rem] mt-16 pr-4'>
			<header className='pb-4 mb-4 border-b-2 border-stone-300'>
				<div className='flex items-center justify-between'>
					<h2 className='text-2xl md:text-3xl font-bold text-stone-600 mb-2'>
						{projectDeatilsCtx?.selectedProject!.title}
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
				<p className='mb-4 text-stone-400'>{projectDeatilsCtx?.selectedProject!.date}</p>
				<p className='text-stone-600 whitespace-pre-wrap'>{projectDeatilsCtx?.selectedProject!.desc}</p>
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
			{taskData.tasks.length === 0 && (
				<p className='text-stone-800 my-4 sm:text-base text-sm'>This project does not have any tasks yet.</p>
			)}
			{taskData.tasks.length > 0 && (
				<ul className='p-4 mt-8 rounded-md bg-stone-100'>
					{taskData.tasks.map(task => {
						return (
							<li key={task} className='flex justify-between my-4'>
								<span>{task}</span>
								<button
									className='text-stone-700 hover:text-red-500 transition duration-300'
									onClick={() => {
										deleteTaskHandler(task);
									}}
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
