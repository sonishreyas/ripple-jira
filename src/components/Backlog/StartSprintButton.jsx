import { useIssues } from "context";

const StartSprintButton = () => {
	const { setShowIssuesModal } = useIssues();
	const handleShowIssuesModal = (e) => setShowIssuesModal(true);
	return (
		<button
			className="primary-btn p-2 b-radius-1 text-bold icon-text-btn text-tertiary-color cursor-pointer"
			aria-label="Create Issue"
			// onClick={handleShowIssuesModal}
		>
			<p className="btn-text">Start Sprint</p>
		</button>
	);
};

export { StartSprintButton };
