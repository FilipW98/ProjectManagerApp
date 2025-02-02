import { ProjectDetailsProps } from '../types';
import {useState } from 'react';


export default function ProjectDetails({ selectedProject, projectsData, setSaveProject, setSelectedProject }: ProjectDetailsProps) {

	const [taskData, setTaskData] = useState<{tasks:string[], input:string}>({ tasks:[], input:''});

	function deleteProjectHandler() {
		const updatedProjects = projectsData.filter(project => project.title !== selectedProject!.title);
        setSaveProject(updatedProjects);
        setSelectedProject(null);
	}

	function deleteTaskHandler(selectedTask:string) {
		setTaskData(prev => ({
			...prev,
			tasks: prev.tasks.filter(task => task !== selectedTask),
		}));
	}

	
	function addTaskHandler() {
		console.log(taskData.input);

		if (taskData.input.trim() !== '' && !taskData.tasks.includes(taskData.input.trim())) {
			setTaskData(prev => ({
				tasks: [...prev.tasks, prev.input],
				input: '',
			}));
		}
	}



	return (
		<div className='w-[35rem] mt-16'>
			<header className='pb-4 mb-4 border-b-2 border-stone-300'>
				<div className='flex items-center justify-between'>
					<h2 className='text-3xl font-bold text-stone-600 mb-2'>{selectedProject!.title}</h2>
				<button className='text-stone-600 hover:text-stone-950'
					onClick={() => {
						deleteProjectHandler();
					}}
					>
					Delete
				</button>
				</div>
					<p className='mb-4 text-stone-400'>{selectedProject!.date}</p>
					<p className='text-stone-600 whitespace-pre-wrap'>{selectedProject!.desc}</p>
			</header>

			<h3>Tasks</h3>
			<div>
				<input
					value={taskData.input}
					type='text'
					onChange={e => setTaskData(prev => ({ ...prev, input: e.target.value }))}
				/>
				<button onClick={addTaskHandler}>Add task</button>
			</div>
			<ul>
				{taskData.tasks.map(task => {
					return <li key={task}>
						<button onClick={() => { deleteTaskHandler(task); }}>
						{task}
						</button>
					</li>;
				})}
			</ul>
		</div>
	);
}
