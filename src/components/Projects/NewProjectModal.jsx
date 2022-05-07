import { useProjects } from "context";
import { addNewProject } from "utils";
import { useState } from "react";
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
		addNewProject(e, projectsState, projectsDispatch);
		setShowProjectsModal(false);
		projectsDispatch({
			type: "RESET_FORM",
		});
	};
	return (
		<div className="modal flex-row justify-content-center align-center">
			<div className="modal-background"></div>
			<div className="modal-content p-5 m-5 b-radius-2 habit-form-container card-shadow">
				<h3 className="p-2 my-2 mx-0 text-cta-color text-bold">
					Create Project
				</h3>
			</div>
		</div>
	);
};

export { NewProjectModal };
