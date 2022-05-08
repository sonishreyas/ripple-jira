import { useIssues, useModal, useSprints } from "context";
import { deleteIssue, getIssuesFromId, updateIssue, updateSprint } from "utils";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import { useEffect, useState } from "react";

const IssueCard = ({ issueId, backlog }) => {
	const { issuesState, issuesDispatch } = useIssues();
	const { sprintsState, sprintsDispatch } = useSprints();
	const [issue, setIssue] = useState({});
	const { modalDispatch, setShowModal } = useModal();
	const handleDeleteIssue = (e) => {
		deleteIssue(e, issueId, issuesDispatch);
		toast.success("Issue deleted");
		setShowModal(false);
	};
	const handleDismissModal = () => setShowModal(false);

	useEffect(() => {
		issuesState?.issuesData?.length &&
			setIssue(getIssuesFromId(issuesState.issuesData, issueId)[0]);
	}, [issuesState]);
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
	const handleMoveToSprint = () => {
		updateSprint(
			sprintsState.sprintsData.id,
			{ issues: [...sprintsState.sprintsData.issues, issueId] },
			sprintsDispatch
		);
		updateIssue(issueId, { category: "To Do" }, issuesDispatch);
	};

	return (
		<div
			className="flex-row justify-content-space-between align-center m-5"
			key={issueId}
		>
			<div className="basic-card w-100 flex-row align-center justify-content-space-between p-10 flex-gap-1 b-radius-2 card-shadow">
				<Link
					to={`/issue/${issueId}`}
					className="no-link-decoration flex-row align-center flex-gap-1"
				>
					<span
						className={`flex-row align-center flex-gap-1 ${issue?.type?.color}`}
					>
						<h1 className="text-bold b-radius-2">|</h1>
						<i className={`${issue?.type?.icon}`}></i>
					</span>
					<h4 className="text-bold">{issue?.summary}</h4>
				</Link>
				<div className="flex-row align-center flex-gap-1">
					<i
						className="fa-solid fa-trash p-5 cursor-pointer social icons"
						title="Delete Issue"
						onClick={handleDeleteModal}
					></i>
					{backlog && Object.keys(sprintsState.sprintsData).length && (
						<button
							className="outline-btn b-radius-2 p-3"
							onClick={handleMoveToSprint}
						>
							Move to Sprint
						</button>
					)}
				</div>
			</div>
		</div>
	);
};

export { IssueCard };
