import { AuthContent } from "components";
import { useDocumentTitle } from "custom-hooks";
const Authentication = () => {
	useDocumentTitle("Auth | Ripple Jira");
	return <AuthContent />;
};

export { Authentication };
