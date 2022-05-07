import { HomeContent } from "components";
import { useDocumentTitle } from "custom-hooks";
const Home = () => {
	useDocumentTitle("Home | Ripple Jira");
	return <HomeContent />;
};
export { Home };
