import { useProjects } from "context";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { Sprint, Backlog, ActiveSprint } from ".";
const BacklogContent = () => {
	const { projectId } = useParams();
	const { projectsState, projectsDispatch } = useProjects();
	const selectedProject = projectsState.projectsData.find(
		({ id }) => id === projectId
	);
	useEffect(() => {
		projectsDispatch({
			type: "SET_SELECTED_PROJECT",
			payload: { selectedProject: selectedProject },
		});
	}, [selectedProject]);
	return (
		<main className="main flex-column flex-gap-1">
			<Sprint />
			<Backlog />
		</main>
	);
};
export { BacklogContent };
