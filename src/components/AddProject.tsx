import { useRef } from 'react';
import { AddProjectProps } from '../types';

export default function AddProject({
	setIsNewProject,
	saveProjectHandler,
	projectData,
	errorMessage,
	setErrorMessage,
}: AddProjectProps) {
	const inputTitle = useRef<HTMLInputElement>(null);
	const inputDesc = useRef<HTMLInputElement>(null);
	const inputDate = useRef<HTMLInputElement>(null);

	function addProjectHandler() {
		const title = inputTitle.current?.value.trim() || '';
		const desc = inputDesc.current?.value || '';
		const date = inputDate.current?.value || '';

		if (!title) {
			setErrorMessage('You have to provide a title');
			return;
		}

		if (projectData.some(project => project.title === title)) {
			setErrorMessage('Project with this title already exists!');
			return;
		}
		saveProjectHandler(title, desc, date);
		setIsNewProject(false);
	}

	return (
		<>
			<div className='flex-col w-full max-w-2xl items-center justify-end gap-4 my-4 mr-6'>
				<menu className='flex items-center justify-end gap-4 my-4'>
					<button
						onClick={() => {
							setIsNewProject(false);
							setErrorMessage('');
						}}
						className='text-stone-600 hover:text-stone-950 transition duration-300'
					>
						Cancel
					</button>
					<button
						onClick={addProjectHandler}
						className='px-6 py-2 rounded-md bg-stone-700 text-stone-50 hover:bg-stone-950 transition duration-300'
					>
						Save
					</button>
				</menu>

				<form className='mt-4'>
					<p className='flex flex-col gap-1 my-4'>
						<label className='text-sm font-bold uppercase text-stone-500'>Title</label>
						<input
							ref={inputTitle}
							className='w-full p-1 border-b-2 rounded-sm border-stone-300 bg-stone-200 text-stone-600 focus:outline-none focus:border-stone-600 placeholder-red-500'
						/>
						{errorMessage && <span className='text-red-600 text-sm'>{errorMessage}</span>}
					</p>
					<p className='flex flex-col gap-1 my-4'>
						<label className='text-sm font-bold uppercase text-stone-500'>Description</label>
						<input
							ref={inputDesc}
							className='w-full p-1 border-b-2 rounded-sm border-stone-300 bg-stone-200 text-stone-600 focus:outline-none focus:border-stone-600'
						/>
					</p>
					<p className='flex flex-col gap-1 my-4'>
						<label className='text-sm font-bold uppercase text-stone-500'>Due Date</label>
						<input
							ref={inputDate}
							type='date'
							className='w-full p-1 border-b-2 rounded-sm border-stone-300 bg-stone-200 text-stone-600 focus:outline-none focus:border-stone-600'
						/>
					</p>
				</form>
			</div>
		</>
	);
}
