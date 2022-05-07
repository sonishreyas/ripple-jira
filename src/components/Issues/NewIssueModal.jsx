import { useAuth, useIssues } from "context";
import { useState } from "react";

const NewIssueModal = () => {
	const { setShowIssuesModal, issuesState, issuesDispatch } = useIssues();
	const [focus, setFocus] = useState(false);
	const [focusDescription, setFocusDescription] = useState(false);
	const { authState } = useAuth();
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

	const handleValueChange = (e, type) => {
		switch (type) {
			case "SUMMARY":
				issuesDispatch({
					type: "NEW_ISSUE",
					payload: {
						newIssue: {
							summary: e.target.value,
						},
					},
				});
			case "DESCRIPTION":
				issuesDispatch({
					type: "NEW_ISSUE",
					payload: {
						newIssue: {
							description: e.target.value,
						},
					},
				});
		}
	};

	return (
		<div className="modal flex-row justify-content-center align-center">
			<div className="modal-background"></div>
			<div className="modal-content p-5 m-5 b-radius-2 issue-form-container card-shadow">
				<h3 className="p-2 my-2 mx-0 text-cta-color text-bold">
					Create an Issue
				</h3>
				<form className="input-form flex-column flex-gap-1 flex-grow-1 flex-wrap ">
					<div className="basic-card b-radius-2 my-5 w-100 flex-column flex-gap-2 justify-content-center">
						<section
							className={`input-container flex-column m-5 ${
								focus || issuesState?.newIssue?.summary?.length ? "focused" : ""
							}`}
							key="new-issue-summary"
						>
							<input
								id="new-issue-summary"
								className="textbox-content p-5 w-100"
								type="text"
								name="summary"
								onChange={handleValueChange}
								value={issuesState?.newIssue?.summary}
								onFocus={() => setFocus(true)}
								onBlur={() => setFocus(false)}
							/>
							<label htmlFor="summary" className="textbox-label m-0 px-1">
								Summary
							</label>
						</section>
						<section
							className={`input-container flex-column m-5 ${
								focusDescription || issuesState?.newIssue?.description?.length
									? "focused"
									: ""
							}`}
							key="new-issue-description"
						>
							<input
								id="new-issue-description"
								className="textbox-content p-5 w-100"
								type="text"
								name="description"
								onChange={handleValueChange}
								value={issuesState?.newIssue?.description}
								onFocus={() => setFocusDescription(true)}
								onBlur={() => setFocusDescription(false)}
							/>
							<label htmlFor="description" className="textbox-label m-0 px-1">
								Description
							</label>
						</section>
						<section
							className="input-container flex-column m-5 focused"
							key="new-issue-reporter"
						>
							<section className="flex-row justify-content-start align-center flex-gap-1 textbox-content p-5 w-100">
								<p className="avatar b-radius-circle avatar-text flex-row justify-content-center align-center m cursor-pointer">
									{authState.avatar}
								</p>
								<p> {authState.name}</p>
							</section>
							<label htmlFor="reporter" className="textbox-label m-0 px-1">
								Reporter
							</label>
						</section>
						<section
							className={`input-container flex-column m-5 focused`}
							key="new-issue-type"
						>
							<select
								name="issue-type"
								id="issue-type"
								className="textbox-content p-5"
							>
								<option value="Bug">Bug</option>
								<option value="Task">Task</option>
								<option value="Story">Story</option>
							</select>
							<label htmlFor="issue-type" className="textbox-label m-0 px-1">
								Issue Type
							</label>
						</section>
						<section className="card-footer flex-row flex-grow-1 justify-content-center flex-gap-1 py-5 px-5">
							<button
								className="cursor-pointer primary-btn save-btn p-5 b-radius-2 my-0 text-bold flex-grow-1"
								type="button"
								onClick={handleSaveIssue}
							>
								Save
							</button>
							<button
								className="cursor-pointer outline-btn cancel-btn p-5 b-radius-2 my-0 text-bold flex-grow-1"
								type="button"
								onClick={handleIssueModalDismiss}
							>
								Cancel
							</button>
						</section>
					</div>
				</form>
			</div>
		</div>
	);
};

export { NewIssueModal };
