import { BoardContent } from "components";
import { useDocumentTitle } from "custom-hooks";
const Board = () => {
	useDocumentTitle("Auth | Ripple Jira");
	return <BoardContent />;
};
export { Board };
