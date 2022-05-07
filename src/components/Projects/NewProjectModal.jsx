import { useProjects } from "context";
import { addNewProject } from "utils";
import { useState } from "react";
import { toast } from "react-toastify";

const NewProjectModal = () => {
	const { setShowProjectsModal, projectsState, projectsDispatch } =
		useProjects();
	const [focus, setFocus] = useState(false);
	const handleProjectModalDismiss = () => {
		setShowProjectsModal(false);
		projectsDispatch({
			type: "RESET_FORM",
		});
	};
	const handleSaveProject = (e) => {
		if (projectsState.newProject.name.length) {
			addNewProject(e, projectsState, projectsDispatch);
			setShowProjectsModal(false);
			projectsDispatch({
				type: "RESET_FORM",
			});
			toast.success("Project created successfully!");
		} else {
			toast.warning("Please enter project name");
		}
	};
	const handleValueChange = (e) =>
		projectsDispatch({
			type: "NEW_PROJECT",
			payload: {
				newProject: {
					name: e.target.value,
					key: e.target.value.slice(0, 3).toUpperCase(),
				},
			},
		});
	return (
		<div className="modal flex-row justify-content-center align-center">
			<div className="modal-background"></div>
			<div className="modal-content p-5 m-5 b-radius-2 project-form-container card-shadow">
				<h3 className="p-2 my-2 mx-0 text-cta-color text-bold">
					Create Project
				</h3>
				<form className="input-form flex-column flex-gap-1 flex-grow-1 flex-wrap">
					<div className="basic-card b-radius-2 my-5">
						<section
							className={`input-container flex-column m-5 pr-10 ${
								focus || projectsState?.newProject?.name?.length
									? "focused"
									: ""
							}`}
							key="new-project-input"
						>
							<input
								id="new-project"
								className="textbox-content p-5"
								type="text"
								name="name"
								onChange={handleValueChange}
								value={projectsState?.newProject?.name}
								onFocus={() => setFocus(true)}
								onBlur={() => setFocus(false)}
							/>
							<label htmlFor="name" className="textbox-label m-0 px-1">
								Name
							</label>
						</section>
						<section
							className={`input-container flex-column m-5 pr-10 ${
								projectsState?.newProject?.key?.length ? "focused" : ""
							}`}
							key="new-key-input"
						>
							<input
								id="new-key"
								className="textbox-content p-5"
								type="text"
								name="name"
								value={projectsState?.newProject?.key}
								readOnly={true}
							/>
							<label htmlFor="key" className="textbox-label m-0 px-1">
								Key
							</label>
						</section>
					</div>
				</form>
			</div>
		</div>
	);
};

export { NewProjectModal };
