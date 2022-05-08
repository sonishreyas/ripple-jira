import { useSprints } from "context";
import { IssueCard, EndSprintButton } from ".";
const Sprint = () => {
	const { sprintsState } = useSprints();
	return (
		<>
			{Object.keys(sprintsState?.sprintsData).length ? (
				<div className="flex-column justify-content-start">
					<div className="flex-row justify-content-space-between align-center border-bottom py-5">
						<h4>{sprintsState?.sprintsData?.name}</h4>
						<EndSprintButton />
					</div>
					<div
						className="flex-column justify-content-start flex-gap-1 w-100"
						key={sprintsState?.sprintsData?.id}
					>
						{sprintsState?.sprintsData?.issues.map((item) => (
							<IssueCard issueId={item} />
						))}
					</div>
				</div>
			) : (
				<></>
			)}
		</>
	);
};
export { Sprint };
