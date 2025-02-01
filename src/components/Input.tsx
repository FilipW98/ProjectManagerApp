import { InputProps } from "../types";

export default function Input({ labelName, errorMessage, inputRef, textarea, textAreaRef,type="text" }: InputProps) {
	const classes =
		'w-full p-1 border-b-2 rounded-sm border-stone-300 bg-stone-200 text-stone-600 focus:outline-none focus:border-stone-600';

	return (
		<p className='flex flex-col gap-1 my-4'>
			<label className='text-sm font-bold uppercase text-stone-500'>{labelName}</label>
			{textarea ? (
				<textarea ref={textAreaRef}  className={`${classes} placeholder-red-500`} />
			) : (
				<input ref={inputRef} type={type} className={`${classes} placeholder-red-500`} />
			)}

			{errorMessage && <span className='text-red-600 text-sm'>{errorMessage}</span>}
		</p>
	);
}