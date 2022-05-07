import {
	createContext,
	useContext,
	useReducer,
	useEffect,
	useState,
} from "react";
import { projectsReducer } from "reducers";
import { getProjects } from "utils";
import { useAuth } from "./auth-context";
const defaultProjectsState = {
	projectsData: [],
	newProject: {},
	selectedProject: {},
};

const ProjectsContext = createContext({ defaultProjectsState });

const ProjectsProvider = ({ children }) => {
	const [projectsState, projectsDispatch] = useReducer(
		projectsReducer,
		defaultProjectsState
	);
	const [showProjectsModal, setShowProjectsModal] = useState(false);
	const { authState } = useAuth();
	useEffect(() => {
		authState.token && getProjects(authState, projectsDispatch);
	}, [authState]);
	return (
		<ProjectsContext.Provider
			value={{
				projectsState,
				projectsDispatch,
				showProjectsModal,
				setShowProjectsModal,
			}}
		>
			{children}
		</ProjectsContext.Provider>
	);
};

const useProjects = () => useContext(ProjectsContext);

export { useProjects, ProjectsProvider };
