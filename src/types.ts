import { RefObject, ReactNode } from "react"; 

type ProjectContextProps = {
	newProjectHandler: () => void;
	saveProjectHandler: (title: string, description: string, date: string) => void;
	state: ProjectState,
	dispatchFn: React.Dispatch<Action>
};
export type { ProjectContextProps };
	
type ProjectContextProviderProps = {
	children: ReactNode;
};
export type { ProjectContextProviderProps };

type ProjectState = {
	isNewProject: boolean;
	saveProject: Project[];
	selectedProject: Project | null;
};
export type { ProjectState };

type Action =
	| { type: 'new-project' }
	| { type: 'reset-project' }
	| { type: 'delete-project' }
	| { type: 'save-project'; payload: Project }
	| { type: 'selected-project'; payload: Project | null }
	| { type: 'update-save-project'; payload: Project[] };
export type {Action};


type Project = {
	title: string;
	desc: string;
	date: string;
};
export type { Project };
	
type InputProps = {
	labelName: string;
	inputRef?: RefObject<HTMLInputElement>;
	textAreaRef?: RefObject<HTMLTextAreaElement>;
	textarea?: boolean;
	errorMessage?: string;
	type?: string;
};
export type { InputProps };

type ButtonProps = {
	children: ReactNode;
	onClick?: () => void;
};
export type { ButtonProps };

type ModalProps = {
	children: ReactNode;
	ref: RefObject<HTMLDialogElement>;
};
export type { ModalProps };