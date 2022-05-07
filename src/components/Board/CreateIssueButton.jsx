import { useIssues } from "context";

const CreateIssueButton = () => {
	const { setShowIssuesModal } = useIssues();
	const handleShowIssuesModal = (e) => setShowIssuesModal(true);
	return (
		<button
			className="primary-btn p-3 b-radius-2 text-bold icon-text-btn text-tertiary-color cursor-pointer"
			aria-label="Create Issue"
			onClick={handleShowIssuesModal}
		>
			<p className="btn-text">Create Issue</p>
		</button>
	);
};

export { CreateIssueButton };
