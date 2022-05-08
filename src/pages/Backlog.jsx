import { BacklogContent } from "components";
import { useDocumentTitle } from "custom-hooks";
const Backlog = () => {
	useDocumentTitle("Backlog | Ripple Jira");
	return <BacklogContent />;
};

export { Backlog };
