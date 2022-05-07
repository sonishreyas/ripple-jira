import { useAuth, useProjects } from "context";
import { addNewProject } from "utils";
import { useEffect } from "react";
const CreateProjectButton = () => {
	const { projectsState, projectsDispatch } = useProjects();
	const { authState } = useAuth();
	useEffect(() => {
		projectsDispatch({
			type: "NEW_PROJECT",
			payload: {
				newProject: {
					name: "Integration",
					key: "INT",
					lead: {
						avatar: "SS",
						name: "Shreyas Soni",
					},
					issueCount: 0,
					categories: ["Backlog", "To Do", "In Progress", "Done"],
					users: [authState.uid],
					access: [
						{
							uid: authState.uid,
							avatar: authState.avatar,
							name: authState.name,
							role: "admin",
						},
					],
				},
			},
		});
	}, [authState]);
	const handleAddNewProject = (e) => {
		addNewProject(e, projectsState, projectsDispatch);
	};
	return (
		<button
			className="primary-btn p-3 b-radius-2 text-bold icon-text-btn text-tertiary-color cursor-pointer"
			aria-label="Create Project"
			onClick={handleAddNewProject}
		>
			<p className="btn-text">Create Project</p>
		</button>
	);
};

export { CreateProjectButton };
