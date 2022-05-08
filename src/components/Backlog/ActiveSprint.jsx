import { useIssues, useProjects, useSprints } from "context";
import { EndSprintButton, IssueCard } from ".";
const ActiveSprint = () => {
	const { sprintsState } = useSprints();
	console.log(sprintsState);
	return (
		<>
			{Object.keys(sprintsState?.activeSprint).length ? (
				<>
					<div className="flex-row justify-content-space-between align-center border-bottom py-5">
						<h4>{sprintsState?.activeSprint?.name}</h4>
						<EndSprintButton />
					</div>
					<div className="flex-column justify-content-start align-center flex-gap-1">
						{sprintsState?.activeSprint?.issues?.length &&
							sprintsState?.activeSprint?.issues.map((item) => (
								<IssueCard issueId={item.id} />
							))}
					</div>
				</>
			) : (
				<></>
			)}
		</>
	);
};
export { ActiveSprint };
