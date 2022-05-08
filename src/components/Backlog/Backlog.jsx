import { useIssues } from "context";
import { CreateSprintButton } from ".";
const Backlog = () => {
	const { issuesState } = useIssues();
	return (
		<div className="flex-row justify-content-space-between align-center border-bottom py-5">
			<h4>Backlog</h4>
			<CreateSprintButton />
		</div>
	);
};
export { Backlog };
