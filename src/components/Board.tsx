import icon from '../assets/no-projects.png';
import { BoardProps } from '../types';
import Button from './Button';
import { ProjectContext } from '../store/project-context';
import { useContext } from 'react';

export default function Board({ newProjectHandler }: BoardProps) {
	const boardCtx = useContext(ProjectContext);
	return (
		<div className='mt-24 text-center w-2/3 pr-2'>
			<img className='w-16 h-16 object-contain mx-auto' src={icon} alt='logo' />
			<h2 className='text-xl font-bold text-stone-500 my-5'>No Project Selected</h2>
			<p className='text-stone-600 mb-8'>Select a project or get started with a new one.</p>
			<Button
				onClick={() => {
					newProjectHandler();
					boardCtx?.setSelectedProject(null);
				}}
			>
				Create new project
			</Button>
		</div>
	);
}
