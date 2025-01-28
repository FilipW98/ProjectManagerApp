import Nav from './components/Nav';
import Board from './components/Board';
import AddProject from './components/AddProject';
import { useState } from 'react';


function App() {
	const [isNewProject, setIsNewProject] = useState(false);
	const [saveProject, setSaveProject] = useState<{
		title: string;
    desc: string;
    date: string
	}[]>([]);

	function newProjectHandler(): void {
		setIsNewProject(true);
	}

	function saveProjectHandler(title: string, desc: string, date: string) {
	  
		console.log('Dane projektu');
		console.log(saveProject);
		if (saveProject.some(project => project.title === title)) {
			 alert('Project with this title already exists!');
			return 
		}
			setSaveProject(prevData => [...prevData, { title, desc, date }]);

	}

	return (
		<main className='h-screen my-8 flex gap-8'>
			<Nav setIsNewProject={setIsNewProject} projectData={saveProject} />

			{!isNewProject && <Board newProjectHandler={newProjectHandler} />}
			{isNewProject && <AddProject setIsNewProject={setIsNewProject} saveProjectHandler={saveProjectHandler} />}
		</main>
	);
}

export default App;
