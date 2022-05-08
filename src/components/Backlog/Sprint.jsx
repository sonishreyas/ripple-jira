import { useIssues, useProjects } from "context";
import { StartSprintButton } from ".";
const Sprint = () => {
	const { issuesState } = useIssues();
	const { projectsState } = useProjects();
	return (
		<div className="flex-row justify-content-space-between align-center border-bottom py-5">
			<h4>Sprint </h4>
			<StartSprintButton />
		</div>
	);
};
export { Sprint };
