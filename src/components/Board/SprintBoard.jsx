import { useState } from "react";
import { getActiveSprintIssues } from "utils";

const { useProjects, useIssues } = require("context");

const SprintBoard = () => {
	const { projectsState } = useProjects();
	const { issuesState } = useIssues();
	const [filteredIssues, setFilteredIssues] = useState(
		issuesState.activeSprintIssues
			? getActiveSprintIssues(
					issuesState.activeSprintIssues,
					issuesState.issues
			  )
			: []
	);
	return (
		<div className="flex-row justify-content-space-between align-center flex-gap-1">
			{projectsState?.selectedProject?.categories?.length &&
				projectsState?.selectedProject?.categories?.map(
					(item) =>
						item !== "Backlog" && (
							<div className="basic-card p-5 b-radius-1 flex-column align-center flex-gap-1">
								<h4>{item}</h4>
								{filteredIssues.length &&
									filteredIssues.map(({ id, summary }) => (
										<div className="basic-card p-10 b-radius-1 issue-card"></div>
									))}
							</div>
						)
				)}
		</div>
	);
};
export { SprintBoard };
