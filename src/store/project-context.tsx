import { createContext, useReducer, ReactNode,Reducer } from 'react';
import { Project, ProjectContextProps, ProjectContextProviderProps, ProjectState, Action } from '../types';

export const ProjectContext = createContext<ProjectContextProps | undefined>(undefined);

const projectReducer = (prevState: ProjectState, action: Action): ProjectState => {
	if (action.type === 'new-project') {
		return {
			...prevState,
			isNewProject: true,
		};
	}
	if (action.type === 'reset-project') {
		return {
			...prevState,
			isNewProject: false,
		};
	}
	if (action.type === 'delete-project') {
		return {
			...prevState,
			selectedProject: null
		};
	}
	if (action.type === 'save-project') {
		return {
			...prevState,
			saveProject: [...prevState.saveProject, action.payload],
		};
	}
	if (action.type === 'selected-project') {
		return {
			...prevState,
			selectedProject: action.payload,
		};
	}
	if (action.type === "update-save-project") {
		return {
			...prevState,
			saveProject: action.payload
		}
	}
	return prevState;
};

export default function ProjectContextProvider({ children }: ProjectContextProviderProps) {

	const [state, dispatchFn] = useReducer<Reducer<ProjectState, Action>>(projectReducer, {
		isNewProject: false,
		saveProject: [] as Project[],
		selectedProject: null as Project | null,
	});

	function newProjectHandler(){
		dispatchFn({ type: "new-project" });
	}
	function saveProjectHandler(title: string, desc: string, date: string) {
		dispatchFn({ type: 'save-project', payload: { title, desc, date }});
	}

	const ctx = {
		newProjectHandler,
		saveProjectHandler,
		state,
		dispatchFn,
	};

	return <ProjectContext.Provider value={ctx}>{children}</ProjectContext.Provider>;
}
