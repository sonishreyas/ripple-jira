import { useIssues, useSprints } from "context";

const StartSprintButton = () => {
	const { setShowIssuesModal } = useIssues();
	const { sprintsState, sprintsDispatch } = useSprints();
	return (
		<button
			className="primary-btn p-2 b-radius-1 text-bold icon-text-btn text-tertiary-color cursor-pointer"
			aria-label="Create Issue"
		>
			<p className="btn-text">Start Sprint</p>
		</button>
	);
};

export { StartSprintButton };
