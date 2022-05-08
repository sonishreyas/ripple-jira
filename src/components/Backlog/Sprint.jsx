import { useIssues, useProjects, useSprints } from "context";
import { IssueCard, StartSprintButton } from ".";
const Sprint = () => {
	const { sprintsState } = useSprints();
	return (
		<>
			{sprintsState?.sprintsData?.length &&
				sprintsState?.sprintsData?.map(({ id, name, issues }) => (
					<div
						className="flex-column justify-content-start align-center"
						key={id}
					>
						<div className="flex-row justify-content-space-between align-center border-bottom py-5">
							<h4>{name}</h4>
							{!Object.keys(sprintsState?.activeSprint).length && (
								<StartSprintButton />
							)}
						</div>
						<div
							className="flex-column justify-content-start align-center flex-gap-1"
							key={id}
						>
							{issues.map((item) => (
								<IssueCard issueId={item} />
							))}
						</div>
					</div>
				))}
		</>
	);
};
export { Sprint };
