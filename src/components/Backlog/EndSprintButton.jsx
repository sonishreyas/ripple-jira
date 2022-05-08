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
		const activeSprint = getSprintById(
			sprintsState?.activeSprint,
			sprintsState.sprintsData
		);
		const incompleteIssues = getIncompleteIssues(
			activeSprint.issues,
			issuesState.issuesData
		);
		const updatedSprint = {
			issuesCount: activeSprint.issues.length,
			issuesCompleted: activeSprint.issues.length - incompleteIssues.length,
			issuesIncomplet: incompleteIssues.length,
			status: "completed",
		};
		updateSprint(e, activeSprint.id, updatedSprint);
		const remainingSprints = sprintsState.sprintsData.filter(
			(item) => item.id !== activeSprint.id
		);
		sprintsDispatch({
			type: "SPRINT_COMPLETED",
			payload: {
				activeSprint: "",
				sprintsData: sprintsState?.sprintsData?.reduce(
					(prev, curr) =>
						curr.id === activeSprint?.id
							? [...prev, { ...curr, status: "completed" }]
							: [...prev, ...curr],
					[]
				),
			},
		});
		if (remainingSprints.length > 1) {
			updateSprint(e, remainingSprints[0].id, {
				issues: [...remainingSprints.issues, ...incompleteIssues],
			});
		} else {
			const newSprint = {
				name: `Sprint ${projectsState?.selectedProject?.sprintCount}`,
				issues: incompleteIssues,
				status: "created",
			};
			addNewSprint(e, newSprint, sprintsDispatch);
		}
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
