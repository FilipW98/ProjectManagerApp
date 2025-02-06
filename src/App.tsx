import Nav from './components/Nav';
import Board from './components/Board';
import AddProject from './components/AddProject';
import ProjectDetails from './components/ProjectDetails';
import { Project } from './types';
import { useState } from 'react';
import { ProjectContext } from './store/project-context';

function App() {
	const [isNewProject, setIsNewProject] = useState(false);
	const [saveProject, setSaveProject] = useState<
		{
			title: string;
			desc: string;
			date: string;
		}[]
	>([]);
	const [selectedProject, setSelectedProject] = useState<Project | null>(null);

	function newProjectHandler(): void {
		setIsNewProject(true);
	}

	function saveProjectHandler(title: string, desc: string, date: string) {
		setSaveProject(prevData => [...prevData, { title, desc, date }]);
	}

	return (
		<ProjectContext.Provider value={{ saveProject, setSaveProject, selectedProject, setSelectedProject }}>
			<main className='h-screen my-8 flex gap-4 md:gap-8'>
				<Nav setIsNewProject={setIsNewProject}/>
				{!isNewProject && !selectedProject && (
					<Board	newProjectHandler={newProjectHandler}/>
				)}
				{isNewProject && <AddProject setIsNewProject={setIsNewProject} saveProjectHandler={saveProjectHandler} />}
				{selectedProject && (<ProjectDetails/>)}
			</main>
		</ProjectContext.Provider>
	);
}

export default App;
