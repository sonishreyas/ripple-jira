import { CreateProjectButton, ProjectsTable } from ".";
export const ProjectsContent = () => {
	return (
		<main className="main flex-column flex-gap-1">
			<div className="flex-row justify-content-space-between align-center">
				<h2>Projects</h2>
				<CreateProjectButton />
			</div>
			<ProjectsTable />
		</main>
	);
};
