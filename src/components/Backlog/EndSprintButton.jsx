import { useIssues, useModal, useProjects, useSprints } from "context";
import { toast } from "react-toastify";
import {
	addNewSprint,
	getIncompleteIssues,
	getSprintById,
	updateSprint,
} from "utils";

const EndSprintButton = () => {
	const { issuesState, setShowIssuesModal } = useIssues();
	const { modalDispatch, setShowModal } = useModal();
	const { sprintsState, sprintsDispatch } = useSprints();
	const { projectsState } = useProjects();
	const handleCompleteSprint = (e) => {
		const incompleteIssues = getIncompleteIssues(
			sprintsState.sprintsData.issues,
			issuesState.issuesData
		);
		const updatedSprint = {
			issuesCount: sprintsState.sprintsData.issues.length,
			issuesCompleted:
				sprintsState.sprintsData.issues.length - incompleteIssues.length,
			issuesIncomplet: incompleteIssues.length,
			status: "completed",
		};
		updateSprint(sprintsState.sprintsData.id, updatedSprint, sprintsDispatch);

		const newSprint = {
			name: `Sprint ${projectsState?.selectedProject?.sprintCount}`,
			issues: incompleteIssues,
			status: "created",
		};
		addNewSprint(e, newSprint, sprintsDispatch);
		toast.success("Sprint Completed");
		setShowModal(false);
	};

	const handleDismissModal = () => setShowModal(false);

	const handleConfirmModal = () => {
		modalDispatch({
			type: "SET_MODAL",
			payload: {
				message:
					"Please confirm to end the sprint? All the incomplete issues will be added into next sprint.",
				handleConfirm: handleCompleteSprint,
				handleDismiss: handleDismissModal,
			},
		});
		setShowModal(true);
	};

	return (
		<button
			className="primary-btn p-2 b-radius-1 text-bold icon-text-btn text-tertiary-color cursor-pointer"
			aria-label="Create Issue"
			onClick={handleConfirmModal}
		>
			<p className="btn-text">Complete Sprint</p>
		</button>
	);
};

export { EndSprintButton };
