import { useProjects } from "context";

const CreateProjectButton = () => {
	const { setShowProjectsModal } = useProjects();
	const handleShowProjectModal = (e) => setShowProjectsModal(true);
	return (
		<button
			className="primary-btn p-3 b-radius-2 text-bold icon-text-btn text-tertiary-color cursor-pointer"
			aria-label="Create Project"
			onClick={handleShowProjectModal}
		>
			<p className="btn-text">Create Project</p>
		</button>
	);
};

export { CreateProjectButton };
