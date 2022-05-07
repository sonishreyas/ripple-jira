import { createContext, useContext, useReducer, useEffect } from "react";
import { projectsReducer } from "reducers";
import { getProjects } from "utils";
import { useAuth } from "./auth-context";
const defaultProjectsState = {
	projectsData: [],
	newProject: {},
};

const ProjectsContext = createContext({ defaultProjectsState });

const ProjectsProvider = ({ children }) => {
	const [projectsState, projectsDispatch] = useReducer(
		projectsReducer,
		defaultProjectsState
	);
	const { authState } = useAuth();
	useEffect(() => {
		authState.token && getProjects(authState, projectsDispatch);
	}, [authState]);
	return (
		<ProjectsContext.Provider value={{ projectsState, projectsDispatch }}>
			{children}
		</ProjectsContext.Provider>
	);
};

const useProjects = () => useContext(ProjectsContext);

export { useProjects, ProjectsProvider };
