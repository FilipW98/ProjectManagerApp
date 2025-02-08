import { useContext } from 'react';
import Nav from './components/Nav';
import Board from './components/Board';
import AddProject from './components/AddProject';
import ProjectDetails from './components/ProjectDetails';
import ProjectContextProvider from './store/project-context';
import { ProjectContext } from './store/project-context';

function App() {
	const appCtx = useContext(ProjectContext);

	if (!appCtx) {
		return null;
	}

	return (
		<ProjectContextProvider>
			<main className='h-screen my-8 flex gap-4 md:gap-8'>
				<Nav setIsNewProject={appCtx.setIsNewProject} />
				{!appCtx!.isNewProject && !appCtx!.selectedProject && <Board newProjectHandler={appCtx!.newProjectHandler} />}
				{appCtx!.isNewProject && (
					<AddProject setIsNewProject={appCtx!.setIsNewProject} saveProjectHandler={appCtx!.saveProjectHandler} />
				)}
				{appCtx!.selectedProject && <ProjectDetails />}
			</main>
		</ProjectContextProvider>
	);
}

export default App;
