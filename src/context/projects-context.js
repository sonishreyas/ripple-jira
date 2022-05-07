import { createContext, useContext, useReducer } from "react";
import { projectsReducer } from "reducers";
const defaultProjectsState = {
	projectsData: [
		{
			_id: "",
			name: "",
			key: "",
			lead: {
				avatar: "",
				name: "",
			},
			issueCount: 1,
			categories: ["Backlog", "To Do", "In Progress", "Done"],
			users: [
				{
					avatar: "",
					name: "",
				},
			],
		},
	],
	newProject: {
		name: "",
		key: "",
		lead: {
			avatar: "",
			name: "",
		},
		issueCount: 1,
		categories: ["Backlog", "To Do", "In Progress", "Done"],
	},
};

const ProjectsContext = createContext({ defaultProjectsState });

const ProjectsProvider = ({ children }) => {
	const [projectsState, projectsDispatch] = useReducer(
		projectsReducer,
		defaultProjectsState
	);
	return (
		<ProjectsContext.Provider value={{ projectsState, projectsDispatch }}>
			{children}
		</ProjectsContext.Provider>
	);
};

const useProjects = () => useContext(ProjectsContext);

export { useProjects, ProjectsProvider };
