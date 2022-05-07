import { useDocumentTitle } from "custom-hooks";
import { ProjectsContent } from "components";
const Projects = () => {
	useDocumentTitle("Projects | Ripple Jira");
	return <ProjectsContent />;
};
export { Projects };
