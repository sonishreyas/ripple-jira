import { useIssues } from "context";

const EndSprintButton = () => {
	const { setShowIssuesModal } = useIssues();
	const handleShowIssuesModal = (e) => setShowIssuesModal(true);
	return (
		<button
			className="primary-btn p-2 b-radius-1 text-bold icon-text-btn text-tertiary-color cursor-pointer"
			aria-label="Create Issue"
			// onClick={handleShowIssuesModal}
		>
			<p className="btn-text">End Sprint</p>
		</button>
	);
};

export { EndSprintButton };
