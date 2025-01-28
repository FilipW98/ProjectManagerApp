import icon from '../assets/no-projects.png';


type BoardProps = {
	newProjectHandler: () => void;
};

export default function Board({ newProjectHandler } :BoardProps) {
	return (
		<div className=' flex flex-col justify-center w-full mr-5  max-w-lg items-center text-center'>
			<img className='w-16 h-16 object-contain mx-auto' src={icon} alt='logo' />
			<h2 className='text-xl font-bold text-stone-500 my-5'>No Project Selected</h2>
			<p className='text-stone-600 mb-8'>Select a project or get started with a new one.</p>
			<button
				onClick={newProjectHandler}
				className=' max-w-[60%] px-4 py-2 text-xs md:text-base rounded-md bg-stone-700 text-stone-400 hover:bg-stone-600 hover:text-stone-100'
			>
				Create new project
			</button>
		</div>
	);
}
