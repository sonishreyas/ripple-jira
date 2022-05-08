import { useIssues } from "context";
import { useEffect, useState } from "react";
import { getIssuesByCategory } from "utils";
import { CreateSprintButton, IssueCard } from ".";
const Backlog = () => {
	const { issuesState } = useIssues();
	const [issues, setIssues] = useState([]);
	useEffect(() => {
		issuesState?.issuesData?.length &&
			setIssues(getIssuesByCategory(issuesState?.issuesData, "Backlog"));
	}, [issuesState]);
	return (
		<div className="flex-column justify-content-start">
			<div className="flex-row justify-content-space-between align-center border-bottom py-5">
				<h4>Backlog</h4>
				<CreateSprintButton />
			</div>
			<div className="flex-column justify-content-start">
				{issues?.length &&
					issues.map((item) => <IssueCard issueId={item.id} />)}
			</div>
		</div>
	);
};
export { Backlog };
