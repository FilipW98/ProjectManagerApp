import { RefObject,ReactNode } from "react"; 


type Project = {
	title: string;
	desc: string;
	date: string;
};
export type { Project };
	
type NavProps = {
	setIsNewProject: React.Dispatch<React.SetStateAction<boolean>>;
};

export type {NavProps};

	
type AddProjectProps = {
		setIsNewProject: React.Dispatch<React.SetStateAction<boolean>>;
		saveProjectHandler: (title: string, description: string, date: string) => void;
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