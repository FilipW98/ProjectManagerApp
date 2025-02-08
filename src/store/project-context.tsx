import { createContext, useState, ReactNode } from 'react';
import { Project } from '../types';

type ProjectContextProps = {
	saveProject: Project[];
	setSaveProject: React.Dispatch<React.SetStateAction<Project[]>>;
	selectedProject: Project | null;
	setSelectedProject: React.Dispatch<React.SetStateAction<Project | null>>;
	setIsNewProject: React.Dispatch<React.SetStateAction<boolean>>;
	isNewProject: boolean;
	newProjectHandler:  () => void;
	saveProjectHandler: (title: string, description: string, date: string) => void;
};
type ProjectContextProviderProps = {
	children: ReactNode;
};

export const ProjectContext = createContext<ProjectContextProps | undefined>(undefined);

export default function ProjectContextProvider({ children }: ProjectContextProviderProps) {

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
    
    const ctx = {
			saveProject,
			setSaveProject,
			selectedProject,
			setSelectedProject,
			newProjectHandler,
			saveProjectHandler,
			setIsNewProject,
			isNewProject,
		};

	return (
		<ProjectContext.Provider value={ctx}>
			{children}
		</ProjectContext.Provider>
	);
}
