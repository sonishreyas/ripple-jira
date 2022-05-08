import {
	createContext,
	useContext,
	useReducer,
	useEffect,
	useState,
} from "react";
import { issuesReducer } from "reducers";
import { getIssues } from "utils";
import { useProjects } from "./projects-context";
const defaultIssuesState = {
	issues: [],
	newIssue: {
		summary: "",
		description: "",
		assignee: "",
		reporter: "",
		category: "",
		type: {
			name: "",
			icon: "",
		},
		projectId: "",
		linkedIssues: [
			{
				issueInfo: {
					id: "",
					title: "",
					type: "",
				},
				type: "",
			},
		],
		subtasks: [{}],
	},
};

const IssuesContext = createContext({ defaultIssuesState });

const IssuesProvider = ({ children }) => {
	const [issuesState, issuesDispatch] = useReducer(
		issuesReducer,
		defaultIssuesState
	);
	const [showIssuesModal, setShowIssuesModal] = useState(false);
	const { projectsState } = useProjects();
	useEffect(() => {
		projectsState.selectedProject !== undefined &&
			getIssues(projectsState.selectedProject.id, issuesDispatch);
	}, [projectsState]);

	return (
		<IssuesContext.Provider
			value={{
				issuesState,
				issuesDispatch,
				showIssuesModal,
				setShowIssuesModal,
			}}
		>
			{children}
		</IssuesContext.Provider>
	);
};

const useIssues = () => useContext(IssuesContext);

export { useIssues, IssuesProvider };
