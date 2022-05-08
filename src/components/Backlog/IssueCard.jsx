import { useIssues, useModal } from "context";
import { deleteIssue, getIssuesFromId } from "utils";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";

const IssueCard = ({ issueId }) => {
	const { issuesState, issuesDispatch } = useIssues();
	const issue = getIssuesFromId(issuesState.issues, issueId);
	const { modalDispatch, setShowModal } = useModal();
	const handleDeleteIssue = (e) => {
		deleteIssue(e, issueId, issuesDispatch);
		toast.success("Issue deleted");
		setShowModal(false);
	};

	const handleDismissModal = () => setShowModal(false);

	const handleDeleteModal = () => {
		modalDispatch({
			type: "SET_MODAL",
			payload: {
				message: "Are you sure you want to delete this issue ?",
				handleConfirm: handleDeleteIssue,
				handleDismiss: handleDismissModal,
			},
		});
		setShowModal(true);
	};
	return (
		<div className="flex-row justify-content-space-between align-center m-5">
			<div
				className="basic-card w-100 flex-row align-center justify-content-space-between m-5 p-10 flex-gap-1 b-radius-2 card-shadow"
				key={issueId}
			>
				<Link
					to={`/issue/${issueId}`}
					className="no-link-decoration flex-row align-center flex-gap-1"
				>
					<span
						className={`flex-row align-center flex-gap-1 ${issue.type.color}`}
					>
						<h1 className="text-bold b-radius-2">|</h1>
						<i className={`${issue.type.icon} icons`}></i>
					</span>
					<h4 className="text-bold">{issue.summary}</h4>
				</Link>
				<div className="flex-row">
					<i
						className="fa-solid fa-trash p-5 cursor-pointer social icons"
						title="Delete Issue"
						onClick={handleDeleteModal}
					></i>
				</div>
			</div>
		</div>
	);
};

export { IssueCard };
