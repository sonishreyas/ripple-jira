import { useDocumentTitle } from "custom-hooks";
import { SettingsContent } from "components";
const Settings = () => {
	useDocumentTitle("Project Settings | Ripple Jira");
	return <SettingsContent />;
};

export { Settings };
