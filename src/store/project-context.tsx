import { createContext } from "react";
import { Project } from "../types";

type ProjectContextProps = {
	saveProject: Project[];
	setSaveProject: React.Dispatch<React.SetStateAction<Project[]>>;
	selectedProject: Project | null;
	setSelectedProject: React.Dispatch<React.SetStateAction<Project | null>>;
};

export const ProjectContext = createContext<ProjectContextProps | undefined>(undefined);