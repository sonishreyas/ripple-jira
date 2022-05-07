import { useProjects } from "context";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { CreateIssueButton } from ".";
const BoardContent = () => {
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
			<div className="flex-row justify-content-space-between align-center">
				<h2>Projects</h2>
				<CreateIssueButton />
			</div>
			{/* <div className="flex-row justify-content-space-between align-center">
				<UserFilter/>
				<AddCategoryButton />
			</div> */}
		</main>
	);
};

export { BoardContent };
