import { CreateIssueButton } from "components/Board";
import { useIssues, useSprints } from "context";
import { useEffect, useState } from "react";
import { getIssuesByCategory } from "utils";
import { CreateSprintButton, IssueCard } from ".";
const Backlog = () => {
	const { issuesState } = useIssues();
	const [issues, setIssues] = useState([]);
	const { sprintsState } = useSprints();
	useEffect(() => {
		issuesState?.issuesData?.length &&
			setIssues(getIssuesByCategory(issuesState?.issuesData, "Backlog"));
	}, [issuesState, sprintsState]);
	return (
		<div className="flex-column justify-content-start">
			<div className="flex-row justify-content-space-between align-center border-bottom py-5">
				<h4>Backlog</h4>
				{!Object.keys(sprintsState.sprintsData).length && (
					<CreateSprintButton />
				)}
			</div>
			<div className="flex-column justify-content-start w-100">
				{issues?.length ? (
					issues.map((item) => <IssueCard issueId={item.id} backlog={true} />)
				) : (
					<h4 className="text-center outline-btn p-5 my-5 b-radius-2">
						No issues in Backlog
					</h4>
				)}
				<CreateIssueButton />
			</div>
		</div>
	);
};
export { Backlog };
