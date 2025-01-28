import { useState,useRef } from 'react';

type AddProjectProps = {
	setIsNewProject: React.Dispatch<React.SetStateAction<boolean>>;
	saveProjectHandler: (title: string, description: string, date: string) => void;
};

export default function AddProject({ setIsNewProject, saveProjectHandler }: AddProjectProps) {
	const inputTitle = useRef<HTMLInputElement>(null);
	const inputDesc = useRef<HTMLInputElement>(null);
	const inputDate = useRef<HTMLInputElement>(null);

	const [errorMessage, setErrorMessage] = useState(false);

	function addProjectHandler() {
		const title = inputTitle.current?.value || '';
		const desc = inputDesc.current?.value || '';
		const date = inputDate.current?.value || '';

		if (title.trim() === '') {
			setErrorMessage(true);
			return;
		} else {
			setErrorMessage(false);
		}
		saveProjectHandler(title, desc, date);
		setIsNewProject(false);
	}


	return (
		<>
			<div className='flex-col w-full max-w-2xl items-center justify-end gap-4 my-4 mr-6'>
				<menu className='flex items-center justify-end gap-4 my-4'>
					<button
						onClick={() => setIsNewProject(false)}
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
							placeholder={errorMessage ? 'You have to provide a title' : ''}
						/>
						{/* {errorMessage && <span className='text-red-600 text-sm'>You have to provide a title</span>} */}
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

				{errorMessage && <p>{errorMessage}</p>}
			</div>
		</>
	);
}
