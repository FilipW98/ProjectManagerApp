import {useRef } from 'react';
import { AddProjectProps } from '../types';
import Input from './Input';
import Modal from './Modal';
import Button from './Button';

export default function AddProject({
	setIsNewProject,
	saveProjectHandler,
	projectData,
}: AddProjectProps) {

	const inputTitle = useRef<HTMLInputElement>(null);
	const inputDesc = useRef<HTMLTextAreaElement>(null);
	const inputDate = useRef<HTMLInputElement>(null);
	const modal = useRef<HTMLDialogElement | null>(null);
	
	function addProjectHandler() {
		const title = inputTitle.current?.value.trim() || '';
		const desc = inputDesc.current?.value || '';
		const date = inputDate.current?.value || '';
		
		if (!title) {
			modal.current?.showModal();
			return;
		}
		if (projectData.some(project => project.title === title)) {
			return;
		}
		saveProjectHandler(title, desc, date);
		setIsNewProject(false);
	}
	
	return (
		<>
			<Modal ref={modal}>
				<h2 className=' text-xl font-bold my-4 text-stone-700 '>Invalid title input!</h2>
				<p className='text-stone-600 mb4'>You have to provide a title.</p>
				<form method='dialog' className='mt-4 text-right'>
					<Button>Close</Button>
				</form>
			</Modal>
			<div className='flex-col w-full max-w-2xl items-center justify-end gap-4 my-4 mr-6'>
				<menu className='flex items-center justify-end gap-4 my-4'>
					<button
						onClick={() => {
							setIsNewProject(false);
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
					<Input labelName={'Title'} inputRef={inputTitle}
					/>
					<Input labelName={'Description'} textAreaRef={inputDesc} textarea />
					<Input labelName={'Due Date'} inputRef={inputDate} type='date' />
				</form>
			</div>
		</>
	);
}
