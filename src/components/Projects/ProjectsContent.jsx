import { CreateProjectButton, ProjectsTable } from ".";
import { ToastContainer } from "react-toastify";

export const ProjectsContent = () => {
	return (
		<main className="main flex-column flex-gap-1 all-grid-columns">
			<div className="flex-row justify-content-space-between align-center">
				<h2>Projects</h2>
				<CreateProjectButton />
			</div>
			<ProjectsTable />
			<ToastContainer />
		</main>
	);
};
