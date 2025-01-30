import Nav from './components/Nav';
import Board from './components/Board';
import AddProject from './components/AddProject';
import ProjectDetails from './components/ProjectDetails';
import {Project} from './types';
import { useState } from 'react';


function App() {

	const [isNewProject, setIsNewProject] = useState(false);
	const [saveProject, setSaveProject] = useState<{
		title: string;
    desc: string;
    date: string
	}[]>([]);
	const [errorMessage, setErrorMessage] = useState('');
	const [selectedProject, setSelectedProject] = useState<Project | null>(null);


	function newProjectHandler(): void {
		setIsNewProject(true);
	}

	function saveProjectHandler(title: string, desc: string, date: string) {
		    setErrorMessage('');
			setSaveProject(prevData => [...prevData, { title, desc, date }]);
	}


	return (
		<main className='h-screen my-8 flex gap-8'>
			<Nav setIsNewProject={setIsNewProject} projectData={saveProject} setSelectedProject={setSelectedProject} />

			{!isNewProject && !selectedProject && (
				<Board newProjectHandler={newProjectHandler} setSelectedProject={setSelectedProject} />
			)}
			{isNewProject && (
				<AddProject
					setIsNewProject={setIsNewProject}
					projectData={saveProject}
					saveProjectHandler={saveProjectHandler}
					errorMessage={errorMessage}
					setErrorMessage={setErrorMessage}
				/>
			)}
			{selectedProject && (
				<ProjectDetails
					selectedProject={selectedProject}
					projectsData={saveProject}
					setSaveProject={setSaveProject}
					setSelectedProject={setSelectedProject}
				/>
			)}
		</main>
	);
}

export default App;
