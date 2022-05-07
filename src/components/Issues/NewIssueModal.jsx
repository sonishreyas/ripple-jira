import { useIssues } from "context";
const NewIssueModal = () => {
	const { setShowIssuesModal, issuesState, issuesDispatch } = useIssues();
	const [focus, setFocus] = useState(false);
	const handleIssueModalDismiss = () => {
		setShowIssuesModal(false);
		issuesDispatch({
			type: "RESET_FORM",
		});
	};
	const handleSaveIssue = (e) => {
		// addNewIssue(e, issuesState, issuesDispatch);
		setShowIssuesModal(false);
		issuesDispatch({
			type: "RESET_FORM",
		});
	};
	return (
		<div className="modal flex-row justify-content-center align-center">
			<div className="modal-background"></div>
			<div className="modal-content p-5 m-5 b-radius-2 habit-form-container card-shadow">
				<h3 className="p-2 my-2 mx-0 text-cta-color text-bold">
					Create an Issue
				</h3>
			</div>
		</div>
	);
};
