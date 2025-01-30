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
