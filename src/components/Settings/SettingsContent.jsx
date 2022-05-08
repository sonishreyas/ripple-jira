import { useProjects } from "context";
import { useEffect } from "react";
import { useParams } from "react-router-dom";

const SettingsContent = () => {
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
			<h1>Settings</h1>
			{projectsState?.selectedProject !== undefined &&
				Object.keys(projectsState?.selectedProject).length && (
					<>
						<table class="table">
							<tbody>
								<tr class="table-row">
									<td class="table-head">Name</td>
									<td class="table-data">
										{projectsState?.selectedProject.name}
									</td>
								</tr>
								<tr class="table-row">
									<td class="table-head">Key</td>
									<td class="table-data discount-text">
										{projectsState?.selectedProject.key}
									</td>
								</tr>
								<tr class="table-row">
									<td class="table-head">Total issues</td>
									<td class="table-data">
										{projectsState?.selectedProject.issueCount}
									</td>
								</tr>
								<tr class="table-row">
									<th class="table-head">Created By</th>
									<th class="table-data">
										{projectsState?.selectedProject.lead.name}
									</th>
								</tr>
							</tbody>
						</table>
						{/* <div className="flex-row justify-content-space-between align-center">
							<h2>Access</h2>
							<button
								className="primary-btn p-3 b-radius-2 text-bold icon-text-btn text-tertiary-color cursor-pointer"
								aria-label="Create Project"
								onClick={handleShowAccessModal}
							>
								<p className="btn-text">Add People</p>
							</button>
						</div> */}
					</>
				)}
		</main>
	);
};
export { SettingsContent };
