import { useContext } from 'react';
import Nav from './components/Nav';
import Board from './components/Board';
import AddProject from './components/AddProject';
import ProjectDetails from './components/ProjectDetails';
import { ProjectContext } from './store/project-context';

function App() {
	const appCtx = useContext(ProjectContext);

	if (!appCtx) {
		throw new Error('ProjectContext is not accessible');
	}

	return (
		<main className='h-screen my-8 flex gap-4 md:gap-8'>
			<Nav />
			{!appCtx.state.isNewProject && !appCtx!.state.selectedProject && <Board />}
			{appCtx.state.isNewProject && <AddProject />}
			{appCtx.state.selectedProject && <ProjectDetails />}
		</main>
	);
}

export default App;
