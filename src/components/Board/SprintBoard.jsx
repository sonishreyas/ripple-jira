const { useProjects } = require("context");

const SprintBoard = () => {
	const { projectsState } = useProjects();
	return <h1>Sprints</h1>;
};
export { SprintBoard };
