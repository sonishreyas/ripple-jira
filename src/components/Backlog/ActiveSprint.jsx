import { useIssues, useProjects } from "context";
import { EndSprintButton } from ".";
const ActiveSprint = () => {
	const { issuesState } = useIssues();
	const { projectsState } = useProjects();
	return (
		<div className="flex-row justify-content-space-between align-center border-bottom py-5">
			<h4>ActiveSprint </h4>
			<EndSprintButton />
		</div>
	);
};
export { ActiveSprint };
