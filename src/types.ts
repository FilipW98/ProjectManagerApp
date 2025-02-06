import { RefObject,ReactNode } from "react"; 


type Project = {
	title: string;
	desc: string;
	date: string;
};
export type { Project };

// type ProjectDetailsProps = {
// 	selectedProject: Project | null;
// 	// projectsData: Project[];
// 	// setSaveProject: React.Dispatch<React.SetStateAction<Project[]>>;
// 	setSelectedProject: React.Dispatch<React.SetStateAction<Project | null>>;
// };

// export type { ProjectDetailsProps };

	
type NavProps = {
	setIsNewProject: React.Dispatch<React.SetStateAction<boolean>>;
	// setSelectedProject: React.Dispatch<React.SetStateAction<Project | null>>;
	// selectedProject: Project | null;
};

export type {NavProps};

	
type AddProjectProps = {
		setIsNewProject: React.Dispatch<React.SetStateAction<boolean>>;
		saveProjectHandler: (title: string, description: string, date: string) => void;
		// projectData: { title: string; desc: string; date: string }[];
};
	
export type { AddProjectProps };


type InputProps = {
	labelName: string;
	inputRef?: RefObject<HTMLInputElement>;
	textAreaRef?: RefObject<HTMLTextAreaElement>;
	textarea?: boolean;
	errorMessage?: string;
	type?: string;
};

export type { InputProps };


type BoardProps = {
	newProjectHandler: () => void;
	// setSelectedProject: React.Dispatch<React.SetStateAction<Project | null>>;
};

export type { BoardProps };

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