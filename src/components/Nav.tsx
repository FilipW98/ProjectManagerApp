import { useState } from "react";

type NavProps = {
	setIsNewProject: React.Dispatch<React.SetStateAction<boolean>>;
	projectData:{ title: string, desc: string, date:string}[];
};
export default function Nav({ setIsNewProject, projectData }: NavProps) {

	function navAddProjectHandler() {
		setIsNewProject(true);
    }
    
       const projectsTitle = projectData.map(data => {
          return <button className='p-2 my-1' key={data.title}>{data.title}</button>;
        })


	return (
		<aside className='w-1/3 px-8 py-16 bg-stone-900 text-stone-50 md:w-72 rounded-r-xl'>
			<h2 className='mb-8 font-bold uppercase md:text-xl text-stone-200'> Your Projects</h2>
			<button
				onClick={navAddProjectHandler}
				className='px-4 py-2 text-xs md:text-base rounded-md bg-stone-700 text-stone-400 hover:bg-stone-600 hover:text-stone-100 transition duration-300'
			>
				+ Add Project
			</button>
			<div className='flex flex-col my-5 items-start'>{projectsTitle}</div>
		</aside>
	);
}