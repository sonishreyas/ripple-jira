import { useAuth, useIssues, useProjects } from "context";
import { useState, useEffect } from "react";
import { addNewIssue, getIconForIssueType } from "utils";
import { toast } from "react-toastify";
const NewIssueModal = () => {
	const { setShowIssuesModal, issuesState, issuesDispatch } = useIssues();
	const { projectsState } = useProjects();
	const [focus, setFocus] = useState(false);
	const [focusDescription, setFocusDescription] = useState(false);
	const { authState } = useAuth();
	const handleIssueModalDismiss = () => {
		setShowIssuesModal(false);
		issuesDispatch({
			type: "RESET_FORM",
			payload: {
				newIssue: {},
			},
		});
	};
	const handleSaveIssue = (e) => {
		if (issuesState?.newIssue?.summary.length) {
			addNewIssue(e, issuesState, issuesDispatch);
			toast.success("Issue created successfully");
			setShowIssuesModal(false);
			issuesDispatch({
				type: "RESET_FORM",
				payload: {
					newIssue: {},
				},
			});
		} else {
			toast.warning("Please Enter the Summary");
		}
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
				break;
			case "DESCRIPTION":
				issuesDispatch({
					type: "NEW_ISSUE",
					payload: {
						newIssue: {
							description: e.target.value,
						},
					},
				});
				break;
			case "ISSUE_TYPE":
				issuesDispatch({
					type: "NEW_ISSUE",
					payload: {
						newIssue: {
							type: {
								name: e.target.value,
								icon: getIconForIssueType(e.target.value),
							},
						},
					},
				});
				break;
			case "CATEGORY_TYPE":
				issuesDispatch({
					type: "NEW_ISSUE",
					payload: {
						newIssue: {
							category: e.target.value,
						},
					},
				});
				break;
			case "ASSIGNEE":
				issuesDispatch({
					type: "NEW_ISSUE",
					payload: {
						newIssue: {
							assignee: {
								name: e.target.value.name,
								avatar: e.target.value.avatar,
							},
						},
					},
				});
				break;
		}
	};
	useEffect(
		() =>
			issuesDispatch({
				type: "NEW_ISSUE",
				payload: {
					newIssue: {
						reporter: {
							uid: authState.uid,
							name: authState.name,
							avatar: authState.avatar,
						},
						type: {
							name: "Bug",
							icon: getIconForIssueType("Bug"),
						},
						projectId: projectsState.selectedProject.id,
						linkedIssues: [],
						category: "Backlog",
						subtasks: [],
						assignee: {
							name: authState.name,
							avatar: authState.avatar,
						},
						summary: "",
						description: "",
					},
				},
			}),
		[]
	);

	console.log(issuesState);

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
								onChange={(e) => handleValueChange(e, "SUMMARY")}
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
								onChange={(e) => handleValueChange(e, "DESCRIPTION")}
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
								onChange={(e) => handleValueChange(e, "ISSUE_TYPE")}
							>
								<option value="Bug">Bug</option>
								<option value="Task">Task</option>
								<option value="Story">Story</option>
							</select>
							<label htmlFor="issue-type" className="textbox-label m-0 px-1">
								Type
							</label>
						</section>
						<section
							className={`input-container flex-column m-5 focused`}
							key="new-issue-category"
						>
							<select
								name="issue-category"
								id="issue-category"
								className="textbox-content p-5"
								onChange={(e) => handleValueChange(e, "CATEGORY_TYPE")}
							>
								{projectsState?.selectedProject?.categories.map((item) => (
									<option value={item}>{item}</option>
								))}
							</select>
							<label
								htmlFor="issue-category"
								className="textbox-label m-0 px-1"
							>
								Category
							</label>
						</section>
						<section
							className={`input-container flex-column m-5 focused`}
							key="new-issue-assignee"
						>
							<select
								name="issue-assignee"
								id="issue-assignee"
								className="textbox-content p-5"
								onChange={(e) => handleValueChange(e, "ASSIGNEE")}
							>
								{projectsState?.selectedProject?.access.map((item) => (
									<option value={item}>{item.name}</option>
								))}
							</select>
							<label
								htmlFor="issue-assignee"
								className="textbox-label m-0 px-1"
							>
								Assignee
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
