import { useProjects } from "context";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { CreateIssueButton, SprintBoard } from ".";
import { ToastContainer } from "react-toastify";
const BoardContent = () => {
	const { projectId } = useParams();
	const { projectsState, projectsDispatch } = useProjects();
	const selectedProject = projectsState.projectsData.filter(
		({ id }) => id === projectId
	)[0];

	useEffect(() => {
		projectsDispatch({
			type: "SET_SELECTED_PROJECT",
			payload: { selectedProject: selectedProject },
		});
	}, [selectedProject]);
	return (
		<main className="main flex-column flex-gap-1">
			<div className="flex-row justify-content-space-between align-center">
				<h2>
					{projectsState.selectedProject &&
						projectsState?.selectedProject?.name}
				</h2>
				<CreateIssueButton />
			</div>
			<SprintBoard />
			{/* <div className="flex-row justify-content-space-between align-center">
				<UserFilter/>
				<AddCategoryButton />
			</div> */}
			<ToastContainer />
		</main>
	);
};

export { BoardContent };
