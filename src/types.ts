 type Project = {
	title: string;
	desc: string;
	date: string;
};
export type { Project };

type ProjectDetailsProps = {
	selectedProject: Project | null;
	projectsData: Project[];
	setSaveProject: React.Dispatch<React.SetStateAction<Project[]>>;
	setSelectedProject: React.Dispatch<React.SetStateAction<Project | null>>;
};

export type { ProjectDetailsProps };

	
type NavProps = {
	setIsNewProject: React.Dispatch<React.SetStateAction<boolean>>;
	projectData: Project[];
	setSelectedProject: React.Dispatch<React.SetStateAction<Project | null>>;
};

export type {NavProps};

	
type AddProjectProps = {
		setIsNewProject: React.Dispatch<React.SetStateAction<boolean>>;
		saveProjectHandler: (title: string, description: string, date: string) => void;
		errorMessage: string;
		setErrorMessage: React.Dispatch<React.SetStateAction<string>>;
		projectData: { title: string; desc: string; date: string }[];
};
	
export type {AddProjectProps}
