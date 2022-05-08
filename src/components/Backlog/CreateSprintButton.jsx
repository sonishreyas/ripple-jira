import { useIssues, useProjects, useSprints } from "context";
import { toast } from "react-toastify";
import { addNewSprint, updateProject } from "utils";

const CreateSprintButton = () => {
	const { sprintsDispatch } = useSprints();
	const { projectsState, projectsDispatch } = useProjects();
	const handleCreateSprint = (e) => {
		const newSprint = {
			name: `Sprint ${projectsState?.selectedProject?.sprintCount}`,
			issues: [],
			status: "created",
		};
		addNewSprint(e, newSprint, sprintsDispatch);
		updateProject(
			e,
			projectsState?.selectedProject?.id,
			{
				sprintCount: projectsState?.selectedProject?.sprintCount + 1,
			},
			projectsDispatch
		);
		toast("Sprint Created Successfully");
	};
	return (
		<button
			className="primary-btn p-2 b-radius-1 text-bold icon-text-btn text-tertiary-color cursor-pointer"
			aria-label="Create Issue"
			onClick={handleCreateSprint}
		>
			<p className="btn-text">Create Sprint</p>
		</button>
	);
};

export { CreateSprintButton };
